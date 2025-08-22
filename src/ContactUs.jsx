import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"; // Instagram icon

function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-yellow-700">/</span> CONTACT US{" "}
          <span className="text-yellow-700">/</span>
        </h2>
      </div>

      {/* Hotline Banner */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex-1 px-6 py-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-black mb-2">
              Are you in need of assistance?
            </h3>
            <p className="text-black">Make contact with us</p>
          </div>
          <div className="bg-yellow-700 text-white px-8 py-6 flex items-center space-x-3 w-full md:w-auto justify-center md:justify-start">
            <FaPhoneAlt className="text-3xl" />
            <div>
              <p className="text-sm">Mobile Number</p>
              <a href="tel:+917066887260" className="text-xl font-bold">
                +91 70668 87260
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center md:text-left">
        {/* Address */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <FaMapMarkerAlt className="text-yellow-700 text-3xl mb-3 mx-auto md:mx-0" />
          <h4 className="text-lg font-semibold mb-2">Our Address</h4>
          <p className="text-black">
            Near Ganesh Mandir, Aanand Park, Vadgaon Sheri, Pune - 411014
          </p>
          <a
            href="https://goo.gl/maps/XcG3ebtqAt6fL1u66"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 font-semibold mt-2 inline-block"
          >
            View on Google Maps →
          </a>
        </div>

        {/* Phone Numbers */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <FaPhoneAlt className="text-yellow-700 text-3xl mb-3 mx-auto md:mx-0" />
          <h4 className="text-lg font-semibold mb-2">Call Us</h4>
          <p>
            <a href="tel:+917066887260" className="text-black block ">
              Shashank: <span className="text-yellow-700 font-semibold">+91 70668 87260</span>
            </a>
            <a href="tel:+918788774378" className="text-black block">
              Krushna: <span className="text-yellow-700 font-semibold">+91 87887 74378</span>
            </a>
          </p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <FaEnvelope className="text-yellow-700 text-3xl mb-3 mx-auto md:mx-0" />
          <h4 className="text-lg font-semibold mb-2">Email Us</h4>
          <a
            href="mailto:nelgeshashank@gmail.com"
            className="text-yellow-700 font-semibold"
          >
            nelgeshashank@gmail.com
          </a>
        </div>

        {/* Instagram */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <FaInstagram className="text-yellow-700 text-3xl mb-3 mx-auto md:mx-0" />
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <a
            href="https://www.instagram.com/shivshakti_auto_garej_0024?utm_source=ig_web_button_share_sheet&igsh=MWF1cGEwZWl1c25ncQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 font-semibold"
          >
            @shivshakti_auto_garej_0024
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
