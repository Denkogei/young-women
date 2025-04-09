import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Complaints = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: "",
  });
  const [status, setStatus] = useState(null);
  const navigate = useNavigate(); // Hook for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_htkut97";
    const templateID = "template_lap7ntg";
    const publicKey = "oZiDCJmRGD_X9J8Lg";

    // Construct email template dynamically (exclude empty values)
    const emailContent = {
      complaint: formData.complaint,
      logo: `${window.location.origin}/iphrdafrica.jpeg`,
    };

    if (formData.name) emailContent.name = formData.name;
    if (formData.email) emailContent.email = formData.email;

    emailjs
      .send(serviceID, templateID, emailContent, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setStatus("success");

        // Redirect to home after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Email sending failed", error);
        setStatus("error");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100">
      {/* Logo - Added margin to prevent navbar overlap */}
      <img src="/iphrdafrica.jpeg" alt="Company Logo" className="w-32 mt-16 md:mt-8 mb-4" />

      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Submit a Complaint</h2>

        {status === "success" && (
          <p className="text-green-600 text-center mb-2">Complaint sent successfully! Redirecting...</p>
        )}
        {status === "error" && <p className="text-red-600 text-center mb-2">Failed to send Complaint.</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name (Optional)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email (Optional)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Complaint</label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#88C641] text-white py-3 rounded-md hover:bg-[#2B256E] transition"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Complaints;
