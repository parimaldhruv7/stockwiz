import React from 'react';
import { ArrowRight } from 'lucide-react';

export const JoinButtons = () => {
  const courseOptions = [
    {
      id: 1,
      title: "Join Now (Hindi)",
      price: "Free",
      originalPrice: "₹499",
      bgColor: "bg-white",
      textColor: "text-black",
      priceTextColor: "text-[#000000bf]",
      buttonBg: "bg-black",
      iconColor: "text-white",
    },
    {
      id: 2,
      title: "Join Now (English)",
      price: "Free",
      originalPrice: "₹499",
      bgColor: "bg-black",
      textColor: "text-white",
      priceTextColor: "text-[#ffffffbf]",
      buttonBg: "bg-white",
      iconColor: "text-black",
      hasBorder: true,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row w-full max-w-[750px] items-center justify-center gap-8">
      {courseOptions.map((option) => (
        <div
          key={option.id}
          className="flex flex-col w-full sm:w-[330px] items-center gap-2"
        >
          {/* Glow Background */}
          <div className="relative w-full h-[60px]">
            <div className="absolute -top-1 left-2 right-2 h-[42px] rounded-xl blur-[11px] bg-gradient-to-r from-[#4c73ff]/70 to-[#00a2b7]/70" />
            <div className="absolute top-5 left-2 right-2 h-[42px] rounded-xl rotate-180 blur-[11px] bg-gradient-to-r from-[#4c73ff]/70 to-[#00a2b7]/70" />

            {/* Button */}
           <button
  className={`absolute inset-0 flex items-center justify-between px-3 sm:px-6 ${option.bgColor} rounded-full ${option.hasBorder ? 'border border-white' : ''} hover:opacity-90 transition`}
>
  <p
    className={`flex-1 font-semibold ${option.textColor} text-base sm:text-lg truncate min-w-0`}
  >
    {option.title} -{" "}
    <span className="text-lg sm:text-xl">{option.price}</span>{" "}
    <span
      className={`relative inline-block font-medium ${option.priceTextColor} text-sm sm:text-base`}
    >
      {option.originalPrice}
      <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-current rotate-[-15deg]" />
    </span>
  </p>

  <div
    className={`w-10 h-10 sm:w-12 sm:h-12 ${option.buttonBg} rounded-full flex items-center justify-center flex-shrink-0`}
  >
    <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${option.iconColor}`} style={{ transform: "rotate(-45deg)" }} />
  </div>
</button>


          </div>

          {/* Caption */}
          <div className="font-medium text-white text-sm text-center">
            (Limited Seats Only)
          </div>
        </div>
      ))}
    </div>
  );
};
