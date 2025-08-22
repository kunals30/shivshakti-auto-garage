import React from "react";
import AboutUsImage from "./assets/AboutUs.jpg";
import { FaScrewdriverWrench } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
} from "react-icons/fa";
import StatsCard from "./StatsCard";
import WorkInAction from "./WorkInAction";
function AboutUs() {
  return (
    <section id="about" className=" bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-yellow-600">/</span> ABOUT US{" "}
          <span className="text-yellow-600">/</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-10">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-yellow-600 text-white text-xs font-semibold px-4 py-1 rounded-full w-24 text-center mb-4">
              ABOUT US
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Shivshakti Auto Garage
            </h1>
            <p className="text-black leading-relaxed mb-6">
              At <span className="font-semibold">Shivashakti Auto Garage</span>,
              we pride ourselves on delivering the best facilities for all your
              two-wheeler needs. From routine servicing and washing to advanced
              repairs and parts replacement, every job is carried out with
              precision, care and the latest tools. Conveniently located in the
              heart of the city, our garage is easily accessible from major
              routes and neighborhoods. Customers appreciate the hassle-free
              location with nearby parking and quick service turnaround.
            </p>
            <div className="grid grid-cols-1 text-[15px] sm:grid-cols-1 gap-6 mt-6 md:text-lg">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-600 text-2xl flex-shrink-0" />
                <p className="text-black">
                  <span className="font-semibold">Address:</span> Near Ganesh
                  Mandir, Aanand Park, Vadgaon Sheri, Pune - 411014
                </p>
              </div>

              {/* Owners */}
              <div className="flex items-start space-x-3">
                <FaUser className="text-yellow-600 text-2xl flex-shrink-0" />
                <p className="text-black">
                  <span className="font-semibold">Owners:</span> Shashank Nelge
                  (+91 7066887260), Krushna Nelge (+91 8788774378)
                </p>
              </div>

              {/* Working Time */}
              <div className="flex items-start space-x-3 mb-8 ">
                <FaClock className="text-yellow-600 text-2xl flex-shrink-0" />
                <p className="text-black">
                  <span className="font-semibold">Working Time:</span> 9 AM – 9
                  PM
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 
                transform transition duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-yellow-700 p-3 rounded-full">
                    <span className="text-gray-100 text-2xl">
                      <FaHandshake />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">Trusted Service</h3>
                </div>
                <p className="text-black">
                  We believe in building long-term trust with our customers by
                  providing honest guidance, fair pricing, and reliable
                  workmanship every time.Our highly trained mechanics treat
                  every vehicle with precision and expertise, ensuring smooth
                  performance and longer life.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 
                transform transition duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-yellow-700 p-3 rounded-full">
                    <span className="text-gray-100 text-2xl">
                      <FaScrewdriverWrench />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">Instant Repair</h3>
                </div>
                <p className="text-black">
                  Our Instant Repair service ensures that your vehicle gets
                  quick and efficient fixes without compromising on quality.
                  Whether it’s a sudden breakdown, minor issue, or urgent
                  replacement, our skilled technicians diagnose and resolve
                  problems on the spot.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* Image section */}
            <div className="relative w-full h-80 md:h-96 lg:h-auto">
              {/* Image itself */}
              <img
                src={AboutUsImage}
                alt="Patel Auto Service Station"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              {/* Overlay with contact info */}
              <div className="absolute bottom-4 right-4 bg-gray-900 bg-opacity-70 p-4 text-white md:p-5 rounded-lg flex items-center space-x-2 transform transition duration-300 hover:scale-110 cursor-pointer">
                <div className="bg-yellow-600 p-2 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-sm md:text-lg">Let's Talk</div>
                  <div className="text-sm md:font-bold"><a href="tel:+917066887260">+91 7066887260</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StatsCard></StatsCard>
        <WorkInAction></WorkInAction>
      </div>
    </section>
  );
}

export default AboutUs;
