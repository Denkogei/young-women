<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Read the IPN request from Pesapal
$input = json_decode(file_get_contents("php://input"), true);

// Log the received data for debugging
file_put_contents("ipn_log.txt", json_encode($input) . "\n", FILE_APPEND);

// Send a success response back to Pesapal
echo json_encode(["status" => "success"]);
?>
