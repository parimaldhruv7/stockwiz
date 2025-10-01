import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "../atoms/ui/badge";
import { AttendeesBadge } from "./AttendeesBadge";
import { JoinButtonsTop } from "./JoinButtonsTop";

export const IntroductionSection = () => {
  const options = [
  {
    id: 1,
    title: "Join Now English",
    originalPrice: "₹299",
    bgColor: "bg-white",
    textColor: "text-black",
    priceTextColor: "text-black",
    buttonBg: "bg-black",
    iconColor: "text-white",
  },
  {
    id: 2,
    title: "Join Now Hindi",
    originalPrice: "₹299",
    bgColor: "bg-black",
    textColor: "text-white",
    priceTextColor: "text-white",
    buttonBg: "bg-white",
    iconColor: "text-black",
  },
];
  return (
    <section className="flex flex-col items-center text-center gap-8 max-w-[868px] w-full">
      {/* Attendees Badge */}
      {/* <Badge className="flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/ellipse-1-1.png" alt="User 1" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/image.png" alt="User 2" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/ellipse-1-1.png" alt="User 3" />
        </div>
        <span className="text-white font-semibold text-lg">1,00,000+ Attendees</span>
      </Badge> */}
      <AttendeesBadge />

      {/* Title */}
      <h1 className="text-white font-normal text-[clamp(2rem,5vw,5.5rem)] leading-tight">
        Introducing
      </h1>
      <h2 className="flex flex-wrap items-center justify-center gap-4 font-medium text-[clamp(2rem,5vw,5.5rem)] leading-tight">
        <Sparkles className="text-green-500 w-12 h-12 md:w-16 md:h-16" />
        <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
          AI Powered
        </span>
        <span className="text-white">Signals</span>
      </h2>

      {/* Subtitle */}
      <p className="text-white/90 text-lg md:text-xl max-w-[750px]">
        Trade smarter with AI-Generated Signals — built with institutional precision, made for everyday traders.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mt-6 items-center justify-center">
      {options.map((option) => (
        <JoinButtonsTop key={option.id} option={option} />
      ))}
    </div>

      <p className="text-white/80 text-sm mt-2">(Limited Seats Only)</p>
    </section>
  );
};
