  import React from "react";
  import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

  function BookService() {
    return (
      <section
        id="bookService"
        className="bg-gray-50 px-6 py-10"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-yellow-600">/</span> BOOK A SERVICE{" "}
            <span className="text-yellow-600">/</span>
          </h2>
        </div>
        {/* Background overlay */}
        
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl text-black mb-12">
            Choose your preferred way to get in touch. Our team is ready to help
            you instantly!
          </p>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Call Card */}
            <a
              href="tel:+917066887260"
              className="flex flex-col items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-white p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
            >
              <FaPhoneAlt className="text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
              <p className="text-white font-semibold">+91 70668 87260</p>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/7066887260"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 text-white p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">WhatsApp Chat</h3>
              <p className="text-white font-semibold">Chat with our service team instantly</p>
            </a>
          </div>
        </div>
      </section>
    );
  }

  export default BookService;
