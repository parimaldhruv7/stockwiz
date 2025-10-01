import React from "react";
import img1 from "../assets/logos/angle.png";
import img2 from "../assets/logos/growwimage.png";
import img3 from "../assets/logos/dhan.png";
import img5 from "../assets/logos/margen.png";
import img4 from "../assets/logos/morgan.jpg";
import img6 from "../assets/logos/Goldman Sachs.png";

const companies = [
  { name: "AngelOne", logo: img1 },
  { name: "Groww", logo: img2 },
  { name: "Dhan", logo: img3 },
  { name: "Morgan Stanley", logo: img4 },
  { name: "J.P. Morgan", logo: img5 },
  { name: "Goldman Sachs", logo: img6 },
];

const TrustedBy = () => {
  return (
    <section className="bg-black text-white py-10 mt-24 w-full">
      {/* Title */}
      <div className="w-full text-center mb-8 px-4">
        <h2 className="text-base md:text-lg font-light">
          Trusted by <span className="font-semibold">Professionals</span> Working At Top Companies Like
        </h2>
      </div>

      {/* Logos Row/Grid Responsive */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center p-4"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-12 md:max-h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
