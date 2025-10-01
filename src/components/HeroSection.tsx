import React from "react";
import { TopBar } from "./TopBar";
import { IntroductionSection } from "./IntroductionSection";
import { CardsSection } from "./CardsSection";
import TrustedBy from "./TrustedBy";

export const HeroSection = ({
  isOpen,
  setIsOpen,
  handleSubmit,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <div className="relative w-full min-h-[900px] bg-[#0e0e0e] rounded-[12px_12px_48px_48px] overflow-hidden border border-solid border-black px-6 md:px-12">
      {/* Background Gradient Blobs */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] flex opacity-60">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#21b300] rounded-full blur-[220px] opacity-80" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fbcb15] rounded-full blur-[150px] opacity-80" />
        </div>
      </div>

      {/* Top Bar centered */}
      <div className="relative z-10 pt-6 flex justify-center">
    <TopBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSubmit={handleSubmit}
      />
      </div>

      {/* Introduction Section */}
      <div className="relative z-10 mt-24 flex justify-center">
        <IntroductionSection />
      </div>

      {/* Cards Section */}
      <div className="relative z-10 mt-1 flex justify-center">
        <CardsSection />
      </div>
    </div>
  );
};
