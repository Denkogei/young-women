import React, { useState } from "react";
import axios from "axios";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handleDonate = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setLoading(true);
    setPaymentUrl(null);

    try {
      const response = await axios.post(
        "http://localhost:8000/pesapal.php",
        {
          amount,
          email,
          phone: phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.redirect_url) {
        setPaymentUrl(response.data.redirect_url);
      } else {
        alert("Payment request failed.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#2B256E] text-center mb-4">
          Donate to IPHRD Africa
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Your support helps us continue our mission. Enter an amount and donate securely via Pesapal.
        </p>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter Amount (KES)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
            min="1"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
          />
          <button
            onClick={handleDonate}
            className="w-full bg-[#88C641] text-white py-3 rounded-md hover:bg-[#2B256E] transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Donate Now"}
          </button>
        </div>
      </div>

      {/* Payment Popup */}
      {paymentUrl && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
            <h3 className="text-xl font-bold">Complete Your Payment</h3>
            <iframe
              src={paymentUrl}
              className="w-full h-[400px] border rounded-md"
              title="Payment Gateway"
            ></iframe>
            <button
              onClick={() => setPaymentUrl(null)}
              className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
