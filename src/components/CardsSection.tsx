// import React from 'react';
// import { TradingCard } from './TradingCard';

// export const CardsSection = () => {
//   const cardData = [
//     {
//       company: "RELIANCE",
//       instrument: "RELIANCE 31 JUL 1410 CALL",
//       currentPrice: "₹6.95",
//       change: "+₹3.25 (+27.24%)",
//       entryPrice: "₹20.95",
//       stopLoss: "₹2.85",
//       strategy: "Trend Rider",
//       status: "In Buying Range",
//       date: "27 July",
//       time: "12:02 PM",
//       tags: [
//         { label: "Swing", bgColor: "#ffcb14", textColor: "#0a0b0a" },
//         { label: "Stock Options", bgColor: "#007aff", textColor: "white" },
//       ],
//     },
//     {
//       company: "NIFTY",
//       instrument: "NIFTY 24850 PE 31 Jul 2025",
//       currentPrice: "₹118.50",
//       change: "+₹74.30 (+168.24%)",
//       entryPrice: "₹70.95",
//       stopLoss: "₹35.85",
//       strategy: "Momentum Surge",
//       status: "In Profit",
//       date: "26 July",
//       time: "12:02 PM",
//       tags: [
//         { label: "Swing", bgColor: "#ffcb14", textColor: "#0a0b0a" },
//         { label: "Index Options", bgColor: "#007aff", textColor: "white" },
//       ],
//     },
//     {
//       company: "BANKNIFTY",
//       instrument: "BANKNIFTY 31 JUL 52000 CE",
//       currentPrice: "₹245.80",
//       change: "+₹125.30 (+104.12%)",
//       entryPrice: "₹120.50",
//       stopLoss: "₹60.25",
//       strategy: "Breakout Master",
//       status: "In Profit",
//       date: "28 July",
//       time: "10:30 AM",
//       tags: [
//         { label: "Intraday", bgColor: "#ff6b6b", textColor: "white" },
//         { label: "Index Options", bgColor: "#007aff", textColor: "white" },
//       ],
//     },
//   ];

//   return (
//    <>
//     <div className=" bg-[#0a0a0a] flex items-center justify-center p-8">
//       <section className="relative w-[949px] h-[381px]">
//         <div className="absolute top-[39px] left-0 w-[299px] h-[309px] opacity-70">
//           <TradingCard {...cardData[0]} size="small" />
//         </div>

//         <div className="absolute top-0.5 left-[289px] w-[371px] h-[376px] shadow-[0px_4px_36.4px_#ffffff40] opacity-100">
//           <TradingCard {...cardData[1]} size="large" />
//         </div>

//         <div className="absolute top-[42px] left-[650px] w-[299px] h-[309px] opacity-70">
//           <TradingCard {...cardData[2]} size="small" />
//         </div>
//       </section>
//     </div>
//    </>
//   );
// };


import React from 'react';
import { TradingCard } from './TradingCard';

export const CardsSection = () => {
  const cardData = [
    {
      company: "RELIANCE",
      instrument: "RELIANCE 31 JUL 1410 CALL",
      currentPrice: "₹6.95",
      change: "+₹3.25 (+27.24%)",
      entryPrice: "₹20.95",
      stopLoss: "₹2.85",
      strategy: "Trend Rider",
      status: "In Buying Range",
      date: "27 July",
      time: "12:02 PM",
      tags: [
        { label: "Swing", bgColor: "#ffcb14", textColor: "#0a0b0a" },
        { label: "Stock Options", bgColor: "#007aff", textColor: "white" },
      ],
    },
    {
      company: "NIFTY",
      instrument: "NIFTY 24850 PE 31 Jul 2025",
      currentPrice: "₹118.50",
      change: "+₹74.30 (+168.24%)",
      entryPrice: "₹70.95",
      stopLoss: "₹35.85",
      strategy: "Momentum Surge",
      status: "In Profit",
      date: "26 July",
      time: "12:02 PM",
      tags: [
        { label: "Swing", bgColor: "#ffcb14", textColor: "#0a0b0a" },
        { label: "Index Options", bgColor: "#007aff", textColor: "white" },
      ],
    },
    {
      company: "RELIANCE",
      instrument: "RELIANCE 31 JUL 1410 CALL",
      currentPrice: "₹6.95",
      change: "+₹3.25 (+27.24%)",
      entryPrice: "₹20.95",
      stopLoss: "₹2.85",
      strategy: "Trend Rider",
      status: "In Buying Range",
      date: "27 July",
      time: "12:02 PM",
      tags: [
        { label: "Swing", bgColor: "#ffcb14", textColor: "#0a0b0a" },
        { label: "Stock Options", bgColor: "#007aff", textColor: "white" },
      ],
    },
  ];

  return (
    <>
    <div className="bg-[#0a0a0a] flex items-center justify-center p-8 overflow-x-auto">
  <section className="relative w-[980px] h-[400px] flex items-center justify-center shrink-0">
    <div className="absolute top-[50px] left-0 w-[300px] h-[300px] opacity-70">
      <TradingCard {...cardData[0]} size="small" />
    </div>

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[370px] h-[380px] shadow-[0px_4px_36.4px_rgba(255,255,255,0.25)] z-10">
      <TradingCard {...cardData[1]} size="large" />
    </div>

    <div className="absolute top-[50px] right-0 w-[300px] h-[300px] opacity-70">
      <TradingCard {...cardData[2]} size="small" />
    </div>
  </section>
</div>

    </>
  );
};
