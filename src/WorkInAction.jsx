import React, { useState } from "react";
import videoUrl from "./assets/WorkInAction.mp4";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  FaMedal,
  FaUserNurse,
  FaScrewdriverWrench,
  FaRegCirclePlay,
} from "react-icons/fa6";
import workInActionImge from "./assets/workInAction.jpg";

const WorkInAction = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder video URL

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const services = [
    {
      title: "Affordable Price",
      description:
        "Quality service that fits your budget without compromising on care.",
      icon: FaIndianRupeeSign,
    },
    {
      title: "Fast Efficient Work",
      description:
        "Quick turnaround with no compromise on performance or safety.",
      icon: FaMedal,
    },
    {
      title: "Expert Handling",
      description:
        "Handled by skilled technicians who treat every vehicle like their own.",
      icon: FaUserNurse,
    },
    {
      title: "Precise and Effective Tools",
      description:
        "Advanced tools ensure accuracy, reliability, and long-lasting results.",
      icon: FaScrewdriverWrench,
    },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center py-8 md:pb-8   bg-white space-y-8 lg:space-y-0 lg:space-x-12 px-4">
      {/* Video section on the left */}
      <div className="relative md:ml-40 mt-10 w-full max-w-[250px] sm:max-w-xs lg:w-1/4 rounded-lg overflow-hidden shadow-lg lg:order-2">
        <div className="relative w-full h-0 pb-[177.77%] bg-gray-200">
          {" "}
          {/* 9:16 aspect ratio for portrait video */}
          {!isPlaying ? (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
            >
              <img
                src="https://placehold.co/1080x1920/464860/white?text=Our+Work+in+Action"
                alt="Work in Action"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-opacity-40 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${workInActionImge})`,
                  backgroundSize: "cover",
                }}
              >
                <span className="text-6xl text-yellow-900 rounded-full transition-transform transform hover:scale-110">
                  <FaRegCirclePlay />
                </span>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`${videoUrl}?autoplay=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      {/* Heading and cards section on the right */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start lg:order-1">
        <h2 className="text-xl md:text-4xl font-bold tracking-wide text-black mb-4 text-center lg:text-left">
          SEE OUR WORK IN ACTION
        </h2>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0 mb-4 text-yellow-700 md:text-3xl">
                  <IconComponent></IconComponent>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-800">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkInAction;
