<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Pesapal API Credentials
$consumerKey = "Hb8QJUuoF8S6ejG0PPN51hy3PImwGeA/";
$consumerSecret = "7NHrbSaUHzMaR67Brb9gAtRvACI=";
$callbackUrl = "http://localhost:3000/payment-success"; // Change this to your actual callback URL
$apiBase = "https://pay.pesapal.com/v3/api";
$notificationId = "YOUR_NOTIFICATION_ID"; // Replace with actual notification ID

// Function to get Pesapal Access Token
function getPesapalToken($consumerKey, $consumerSecret, $apiBase) {
    $ch = curl_init("$apiBase/Auth/RequestToken");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        "consumer_key" => $consumerKey,
        "consumer_secret" => $consumerSecret
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        file_put_contents("error_log.txt", "Token Request Error: " . curl_error($ch) . "\n", FILE_APPEND);
        curl_close($ch);
        return null;
    }
    curl_close($ch);

    $data = json_decode($response, true);
    if (!$data) {
        file_put_contents("error_log.txt", "Token Response Error: Invalid JSON\n", FILE_APPEND);
        return null;
    }

    file_put_contents("log.txt", "Token Response: " . $response . "\n", FILE_APPEND);
    return $data["token"] ?? null;
}

// Function to create payment request
function createPesapalPayment($token, $amount, $email, $phone, $callbackUrl, $notificationId, $apiBase) {
    $ch = curl_init("$apiBase/Transactions/SubmitOrderRequest");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        "amount" => $amount,
        "currency" => "KES",
        "description" => "Donation Payment",
        "callback_url" => $callbackUrl,
        "notification_id" => $notificationId,
        "billing_address" => [
            "email_address" => $email,
            "phone_number" => $phone,
            "country_code" => "KE",
            "first_name" => "Donor",
            "middle_name" => "",
            "last_name" => "User"
        ]
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $token",
        "Content-Type: application/json"
    ]);

    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        file_put_contents("error_log.txt", "Payment Request Error: " . curl_error($ch) . "\n", FILE_APPEND);
        curl_close($ch);
        return null;
    }
    curl_close($ch);
    
    $data = json_decode($response, true);
    if (!$data) {
        file_put_contents("error_log.txt", "Payment Response Error: Invalid JSON\n", FILE_APPEND);
        return null;
    }

    file_put_contents("log.txt", "Payment Response: " . $response . "\n", FILE_APPEND);
    return $data;
}

// Read JSON request from frontend
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(["error" => "Invalid JSON input"]);
    exit;
}

$amount = $data["amount"] ?? null;
$email = $data["email"] ?? null;
$phone = $data["phone"] ?? null;

if (!$amount || !$email || !$phone) {
    echo json_encode(["error" => "Invalid input data"]);
    exit;
}

// Get access token
$token = getPesapalToken($consumerKey, $consumerSecret, $apiBase);
if (!$token) {
    echo json_encode(["error" => "Failed to authenticate with Pesapal"]);
    exit;
}

// Request payment URL
$paymentData = createPesapalPayment($token, $amount, $email, $phone, $callbackUrl, $notificationId, $apiBase);

if ($paymentData && isset($paymentData["redirect_url"])) {
    echo json_encode(["redirect_url" => $paymentData["redirect_url"]]);
} else {
    echo json_encode(["error" => "Payment request failed", "details" => $paymentData]);
}
?>
