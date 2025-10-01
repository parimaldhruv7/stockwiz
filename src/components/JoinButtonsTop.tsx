import React from "react";
import { ArrowRight } from "lucide-react";

// 🎯 Options for buttons


// 🎯 Button Component
export const JoinButtonsTop = ({ option }) => {
  return (
    <div className="relative w-[360px] sm:w-[400px]">
      {/* Gradient Glow */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-green-400 via-yellow-300/70 to-green-500/30 blur-lg opacity-80"></div>

      {/* Actual Button */}
      <button
        className={`relative flex items-center justify-between px-4 sm:px-6 py-3 ${option.bgColor} rounded-full w-full font-semibold text-base sm:text-lg`}
      >
        {/* Text */}
        <p className={`flex-1 ${option.textColor} truncate min-w-0`}>
          {option.title} (Free{" "}
          <span
            className={`relative inline-block ${option.priceTextColor} text-sm sm:text-base`}
          >
            {option.originalPrice}
            {/* Strike-through Line */}
            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-current transform -rotate-12" />
          </span>
          )
        </p>

        {/* Arrow Circle */}
        <div
          className={`ml-2 w-10 h-10 sm:w-12 sm:h-12 ${option.buttonBg} rounded-full flex items-center justify-center flex-shrink-0`}
        >
          <ArrowRight
            className={`w-4 h-4 sm:w-5 sm:h-5 ${option.iconColor}`}
            style={{ transform: "rotate(-45deg)" }}
          />
        </div>
      </button>

      {/* Caption */}
      <p className="mt-2 text-center text-[18px] text-gray-300 mt-1">
        (Limited Seats Only)
      </p>
    </div>
  );
};


