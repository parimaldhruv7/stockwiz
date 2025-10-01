import React from "react";

export const NextWebinarSection = (): JSX.Element => {
  const companies = [
    { name: "AngelOne", logo: "/angelone-logo.svg" },
    { name: "Groww", logo: "/groww-logo.svg" },
    { name: "Dhan", logo: "/dhan-logo.svg" },
    { name: "Morgan Stanley", logo: "/morgan-stanley-logo.svg" },
    { name: "J.P.Morgan", logo: "/jpmorgan-logo.svg" },
    { name: "Goldman Sachs", logo: "/goldman-sachs-logo.svg" },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 py-16 bg-black">
      <div className="text-center">
        <p className="text-white/80 text-lg">
          Trusted by <span className="font-bold text-white">Professionals</span> Working At Top Companies Like
        </p>
      </div>

      <div className="flex items-center justify-center gap-12 flex-wrap max-w-6xl">
        <div className="text-gray-400 text-2xl font-light">AngelOne</div>
        <div className="text-gray-400 text-2xl font-light flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          Groww
        </div>
        <div className="text-gray-400 text-2xl font-light flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          dhan
        </div>
        <div className="text-gray-400 text-2xl font-light">Morgan Stanley</div>
        <div className="text-gray-400 text-2xl font-light">J.P.Morgan</div>
        <div className="text-gray-400 text-2xl font-light">Goldman Sachs</div>
      </div>
    </section>
  );
};