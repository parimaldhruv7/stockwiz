import React from "react";

import man1 from "../assets/logos/man1.png";
import man2 from "../assets/logos/man2.png";
import man3 from "../assets/logos/man3.png";

export const AttendeesBadge = () => {
  return (
    <div className="flex items-center gap-4 px-3 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-8 w-fit">
      {/* Avatars */}
      <div className="flex -space-x-3">
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src={man1}
          alt="User 1"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src={man2}
          alt="User 2"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src={man3}
          alt="User 3"
        />
      </div>

      {/* Text */}
      <span className="text-white font-semibold text-[22px] leading-none">
        1,00,000+ <span className="font-normal">Attendees</span>
      </span>
    </div>
  );
};
