import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import FooterBg from "./assets/ManInGarage.jpg"; // put your footer background image
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Footer() {
  return (
    <footer
      className="relative  text-white py-12"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 "></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Book Service Button */}
        <div className="text-center mb-10">
          <a
            href="#bookService"
            className="bg-yellow-700 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
          >
            Book A Service
          </a>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Nav Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-yellow-600 transition font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-600 transition font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-600 transition font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-600 transition font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Garage Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Our Garage</h3>
            <p className="text-gray-300">
              Shivshakti Auto Garage – Expert care for your two-wheelers with
              trusted service, quality parts, and skilled mechanics.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center text-left justify-start md:justify-start space-x-2 ">
                <FaMapMarkerAlt className="text-yellow-600 text-2xl md:text-xl flex-shrink-0" />
                <a href="https://goo.gl/maps/XcG3ebtqAt6fL1u66" className="hover:text-yellow-600">
                  Near Ganesh Mandir, Aanand Park, Vadgaon Sheri, Pune - 411014
                </a>
              </p>
              <p className="flex items-center justify-start text-left md:justify-start space-x-3">
                <FaEnvelope className="text-yellow-600 text-2xl md:text-xl flex-shrink-0" />
                <a
                  href="mailto:nelgeshashank@gmail.com"
                  className="hover:text-yellow-600"
                >
                  nelgeshashank@gmail.com
                </a>
              </p>
              <p className="flex justify-start md:justify-start space-x-3">
                <FaPhoneAlt className="text-yellow-600 text-2xl md:text-xl flex-shrink-0" />
                <a href="tel:+917066887260" className="hover:text-yellow-600">
                  +91 70668 87260
                </a>
              </p>
              <p className="flex items-center justify-start md:justify-start space-x-3">
                <FaInstagram className="text-yellow-600 text-2xl md:text-xl flex-shrink-0" />
                <a
                  href="https://instagram.com/shivshakti_auto_garej_0024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600"
                >
                  @shivshakti_auto_garej_0024
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Shivshakti Auto Garage. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
