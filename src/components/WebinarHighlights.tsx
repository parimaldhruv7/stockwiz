import React from 'react';
import { RefreshCw, FileText, Trophy } from 'lucide-react';
import webimg from "../assets/logos/webnarimg1.svg";
import verifyimge from "../assets/logos/verifiedimgaes.png";
import algoimg from "../assets/logos/strkimg.png";
import tableimg from "../assets/logos/tableimg.png";
import vector1 from "../assets/logos/Vector1.png";

export const WebinarHighlights = () => {
  const highlights = [
    {
      id: 1,
      icon: <img src={vector1} alt="Vector 1" className="w-10 h-10 md:w-12 md:h-12" />,
      backgroundColor: "bg-[#000e2e]",
      title: {
        regular: "Everything You Need To Learn",
        bold: "About AI & Algo Trading",
      },
      description:
        "The world of trading is moving fast – extremely fast, and in this era of algo trading and artificial intelligence, we will give you a sneak peek into how this new form of trading can significantly increase the odds of being profitable in the market...",
    },
    {
      id: 2,
      icon: <RefreshCw className="w-10 h-10 md:w-12 md:h-12" />,
      backgroundColor: "bg-[#002222]",
      title: {
        regular: "Learn To Create, Back Test and Deploy Trading Bots Using",
        bold: "Our Secret Strategies",
      },
      description:
        "Unleash the power of algorithmic trading tools which lets you create, test, deploy your strategies spanning across price action...",
    },
    {
      id: 3,
      icon: <FileText className="w-10 h-10 md:w-12 md:h-12" />,
      backgroundColor: "bg-[#002418]",
      title: {
        bold: "Detailed Verified Profit / Loss Statement",
        regular: "& Algo Trade History",
      },
      description:
        "Get access to detailed case studies of verified real trades executed on autopilot from our proprietary custom algo trading robots...",
    },
    {
      id: 4,
      icon: <Trophy className="w-10 h-10 md:w-12 md:h-12" />,
      backgroundColor: "bg-[#001b26]",
      title: {
        regular: "How Tools Like Chat GPT, Trading View & StrykeX Can Get You To The",
        bold: "Top 1% Elite Traders",
      },
      description:
        "Gone are the days where traders were glued to their screen from 9:15 am till 3:30pm – scanning, executing, managing their trades manually...",
    },
  ];

  return (
    <main className="w-full max-w-[1277px] mx-auto flex flex-col gap-9 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="flex w-full flex-col items-start gap-3 text-center md:text-left">
        <h1 className="font-normal text-3xl sm:text-4xl lg:text-[64px] leading-tight">
          <span className="text-white">Webinar Highlights </span>
          <span className="text-[#ffffff99]">– What Will Be Covered?</span>
        </h1>

        <p className="font-normal text-[#ffffffbf] text-base sm:text-lg lg:text-2xl leading-relaxed">
          Learn the secrets sauce of how professional institutional traders leverage the power
          of artificial intelligence and algo trading for breakthrough results.
        </p>
      </header>

      {/* Highlights */}
      {highlights.map((highlight, index) => (
        <section
          key={highlight.id}
          className={`w-full flex flex-col md:flex-row items-start gap-6 md:gap-10 p-6 md:p-10 ${highlight.backgroundColor} rounded-3xl overflow-hidden ${index === 0 ? 'mt-9' : 'mt-7'}`}
        >
          {/* Left Side - Text */}
          <div className="flex flex-col flex-1 items-start gap-6">
            <div className="w-12 h-12 text-white flex items-center justify-center">
              {highlight.icon}
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="font-normal text-lg sm:text-xl lg:text-[32px] text-[#ffffff99]">
                {highlight.title.regular}
              </h2>
              <h1 className="font-semibold text-xl sm:text-2xl lg:text-[32px] leading-snug text-white">
                {highlight.title.bold}
              </h1>
              <p className="font-medium text-[#ffffffbf] text-sm sm:text-base lg:text-lg leading-relaxed">
                {highlight.description}
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`w-full md:w-[570px] h-auto md:h-[425px] rounded-3xl shadow-lg flex items-center justify-center overflow-hidden border border-[#1E293B]/40`}
            style={{ backgroundColor: ["#0f1c3a", "#0F1c3a", "#0f3127", "#0f2833"][index] }}
          >
            {index === 2 ? (
              <div className="w-full h-auto md:h-[425px] rounded-3xl border border-[#1E293B]/40 shadow-lg flex flex-col bg-[#0f1c3a] p-4 gap-4">
                <img src={verifyimge} alt="Verified Badge" className="w-20 sm:w-28 h-auto" />
                <img src={algoimg} alt="Profit Booked Text" className="w-full h-auto" />
                <img src={tableimg} alt="Profit Table" className="w-full h-auto rounded-lg" />
              </div>
            ) : (
              <img src={webimg} alt="Chart" className="w-full h-full object-cover rounded-3xl" />
            )}
          </div>
        </section>
      ))}
    </main>
  );
};
