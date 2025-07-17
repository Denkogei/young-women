import React, { useState } from "react";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);
  const mpesaNumber = "0759862938"; // Your MPesa number (without spaces)

  const handleShowInstructions = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setShowInstructions(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mpesaNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#2B256E] text-center mb-4">
          Donate to Young Women Mediation Network
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Your support helps empower young women in mediation. Enter an amount and send via MPesa.
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
          
          <button
            onClick={handleShowInstructions}
            className="w-full bg-[#88C641] text-white py-3 rounded-md hover:bg-[#2B256E] transition"
          >
            Show Payment Instructions
          </button>
        </div>

        {showInstructions && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Direct MPesa Payment</h3>
            
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-700">Send to:</p>
                  <p className="text-xl font-bold mt-1">
                    {mpesaNumber} {/* Displayed without spaces */}
                  </p>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mt-3">
                Amount: <span className="font-medium">KES {amount}</span>
              </p>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
              <h4 className="font-medium mb-1">How to send:</h4>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Go to MPesa menu</li>
                <li>Select <strong>"Send Money"</strong></li>
                <li>Enter phone number: <strong>{mpesaNumber}</strong></li>
                <li>Enter amount: <strong>KES {amount}</strong></li>
                <li>Enter your MPesa PIN</li>
                <li>Confirm and send</li>
              </ol>
            </div>
            
            <p className="text-xs text-gray-500 mt-3">
              Please include your name in the reference if possible.
            </p>

            <button
              onClick={() => setShowInstructions(false)}
              className="mt-4 w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
            >
              Close Instructions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;