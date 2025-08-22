import React from 'react';
import { FaCalendarDay, FaStar, FaSmile, FaTools, FaHistory } from 'react-icons/fa';

const StatsCard = () => {
  const statsData = [
    {
      id: 1,
      label: 'Year of Establishment',
      value: '2023',
      icon: FaCalendarDay,
    },
    {
      id: 2,
      label: 'Years of Experience',
      value: '5+',
      icon: FaHistory,
    },
    {
      id: 3,
      label: '1.2k Reviews',
      value: '4.5/5 Rated',
      icon: FaStar,
    },
    {
      id: 4,
      label: 'Happy Customers',
      value: '1200+',
      icon: FaSmile,
    },
    {
      id: 5,
      label: 'Vehicles Repaired',
      value: '3000+',
      icon: FaTools,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:border-2 border-gray-200  justify-center items-center bg-white rounded-lg shadow-xl my-8 mx-4 md:mx-auto max-w-7xl">
      {statsData.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center py-8 gap-3 w-full border-b-2 md:border-b-0 md:border-r border-gray-200 last:border-r-0 last:border-b-0"
          >
            {/* Icon */}
            <div className="text-4xl text-yellow-700 ">
              <IconComponent />
            </div>

            {/* Value */}
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
            <div className="text-gray-600 uppercase tracking-wide">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
