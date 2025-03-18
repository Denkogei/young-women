import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0E3048] text-white py-10 pb-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <img src="/src/assets/iphrd.png" alt="IPHRD Africa" className="w-36 mb-4" />
            <p className="text-sm leading-6">
              IPHRD-Africa is a non-profit, non-partisan NGO registered in Kenya with local, 
              national, and international status. Our mission is to promote a human rights 
              approach to governance and peace-building for sustainable development in Africa.
            </p>
          </div>

          {/* Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Scope and Programmes</a></li>
              <li><a href="#" className="hover:underline">Donate</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
            <p className="text-sm">
              <span className="font-semibold">Physical Address:</span> Kindaruma Road, Kindaruma apartments, Hs. No 13A
            </p>
            <p className="text-sm">📬 P.O BOX 18829 – 00100 Nairobi</p>
            <p className="text-sm">📧 info@iphrdafrica.org</p>
            <p className="text-sm">📞 +254 759-862-938</p>

            {/* Social Media */}
            <h3 className="text-lg font-semibold mt-4">Engage with us on social media</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/IPHRDAFRICA" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/iphrdafrica" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/international-centre-for-peace-human-rights-and-development-iphrd-africa/" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@iphrd-africa5293" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-300">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-10 border-t border-gray-500 pt-4">
          Copyright © 2025 IPHRD AFRICA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
