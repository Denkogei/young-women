import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_z4glr8a";
    const templateID = "template_4ivbjdz";
    const publicKey = "oZiDCJmRGD_X9J8Lg";

    const emailContent = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      logo: `${window.location.origin}/iphrdafrica.jpeg`,
    };

    emailjs
      .send(serviceID, templateID, emailContent, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setStatus("success");
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        console.error("Email sending failed", error);
        setStatus("error");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100">
      <img src="/iphrdafrica.jpeg" alt="Company Logo" className="w-32 mt-20 md:mt-8 mb-4" />

      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Us</h2>
        {status === "success" && (
          <p className="text-green-600 text-center mb-2">Message sent successfully! Redirecting...</p>
        )}
        {status === "error" && <p className="text-red-600 text-center mb-2">Failed to send message.</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88C641]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#88C641] text-white py-3 rounded-md hover:bg-[#2B256E] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
