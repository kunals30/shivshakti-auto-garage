import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Service images
import servicing from "./assets/Servicing.jpeg";
import greasing from "./assets/Gracing.jpeg";
import clutchPlateFitting from "./assets/clutchPlateFitting.jpeg";
import bodyFitting from "./assets/TotalBodyFitting.jpeg";
import washing from "./assets/Washing.jpeg";
import newParts from "./assets/newPartsReplacement.png";

function Services() {
  const services = [
    {
      title: "Motorcycle Servicing",
      desc: "Regular servicing keeps your motorcycle running smoothly and safely. Our experts check the engine oil, filters, spark plugs, brakes, suspension, and other critical components to ensure peak performance and reliability on the road.",
      img: servicing,
    },
    {
      title: "Greasing and Lubrication",
      desc: "Proper lubrication is essential to prevent wear and tear of moving parts. Our greasing service covers the chain, bearings, cables, and joints, reducing friction and extending the lifespan of your motorcycle.",
      img: greasing,
    },
    {
      title: "Clutch Plate Fitting",
      desc: "Clutch plates wear out over time, leading to poor performance and difficulty in gear shifting. We provide professional clutch plate fitting and adjustments to restore smooth power transmission and ensure a comfortable ride.",
      img: clutchPlateFitting,
    },
    {
      title: "Total Body Fitting",
      desc: "From repairing panels to aligning parts, our body fitting service ensures your motorcycle looks and feels brand new. We handle dent removal, body panel alignment, and complete fitting work with precision and care.",
      img: bodyFitting,
    },
    {
      title: "Washing and Cleaning",
      desc: "A thorough wash not only makes your bike shine but also protects it from dirt, grease, and rust. We use high-quality cleaning products and techniques to give your motorcycle a spotless finish, while also caring for the paint and chrome.",
      img: washing,
    },
    {
      title: "New Quality Parts Replacement ",
      desc: "Using genuine and high-quality spare parts, we replace worn-out or damaged components to keep your motorcycle in top condition. We ensure every replacement enhances safety and performance.",
      img: newParts,
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-yellow-700">/</span> SERVICES WE OFFER{" "}
          <span className="text-yellow-700">/</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="swiperColor">
              <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-[20px] font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-black text-[16px] mb-4">{service.desc}</p>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Services;
