import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBars, FaTimes, FaRegArrowAltCircleRight } from "react-icons/fa"; // icons for menu & close

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="font-sans">
      {/* Top Bar (Hidden on mobile) */}
      <div className="hidden md:block bg-yellow-700 text-white text-sm py-2 px-4">
        <div className="flex justify-evenly items-center">
          {/* Left Side */}
          <div className="flex space-x-6 items-center">
            <a
              href="https://maps.app.goo.gl/tKfmgeJAdMFhxqny8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaMapMarkerAlt /> Near Ganesh Mandir, Aanand Park, Vadgaon Sheri, Pune - 411014
            </a>
            <a className="flex items-center gap-2" href="mailto:shivshaktiauto@email.com">
              <MdEmail /> nelgeshashank@email.com
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-2" href="tel:+917066887260">
              <FaPhoneAlt /> +91 7066887260
            </a>
            <a className="flex items-center gap-2" href="tel:+918788774378">
              <FaPhoneAlt /> +91 8788774378
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-yellow-700">
            शिवशक्ती ऑटो गॅरेज
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <a
              href="#home"
              className="hover:text-black font-semibold text-lg text-yellow-700"
            >
              HOME
            </a>
            <a
              href="#services"
              className="hover:text-black font-semibold text-lg text-yellow-700"
            >
              SERVICE
            </a>
            <a
              href="#about"
              className="hover:text-black font-semibold text-lg text-yellow-700"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="hover:text-black font-semibold text-lg text-yellow-700"
            >
              CONTACT
            </a>
          </nav>

          {/* Book Button (Desktop only) */}
          <button className="hidden md:flex items-center gap-2 border border-yellow-700 text-white font-semibold bg-yellow-700 px-6 py-3 rounded-lg hover:bg-white hover:text-yellow-700 transition">
            <a href="#bookService">BOOK A SERVICE</a>
            <FaRegArrowAltCircleRight className="text-lg" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-700 text-2xl focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-2xl text-yellow-700"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-6 px-6 text-lg font-semibold text-yellow-700">
          <a href="#home" onClick={() => setIsSidebarOpen(false)}>
            Home
          </a>
          <a href="#services" onClick={() => setIsSidebarOpen(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setIsSidebarOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setIsSidebarOpen(false)}>
            Contact
          </a>
        </nav>

        {/* Book Button */}
        <div className="mt-8 px-6">
          <button className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800">
            <a href="#bookService">Book A Service</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
