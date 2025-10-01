import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const webinarSections = [
  {
    id: 1,
    icon: "📱",
    title: "Learn To Create, Back Test and Deploy Trading Bots Using",
    titleHighlight: "Our Secret Strategies",
    description:
      "Unleash the power of algorithmic trading tools which lets you create, test, deploy your strategies spanning across price action, smart money concepts, institutional price action, indicators, volume, open interest and much more in a few clicks without the need of any coding or programming skills. Additionally, you will get access to few of our secret algo strategies – which are ready to deploy in the live markets.",
    bgColor: "bg-gradient-to-br from-teal-900/30 to-teal-800/20",
    borderColor: "border-teal-500/30",
  },
  {
    id: 2,
    icon: "📊",
    title: "Detailed Verified Profit / Loss Statement",
    titleHighlight: "& Algo Trade History",
    description:
      "- Get access to detailed case studies of verified real trades executed on autopilot from our proprietary custom algo trading robots which seamlessly scan, analyse, deploy and manage trades in equity, futures and options segment for intraday as well as swing trading styles. Discover a wide variety of directional and non-directional trading strategies, which will make you top dollar even when you sleep.",
    bgColor: "bg-gradient-to-br from-green-900/30 to-green-800/20",
    borderColor: "border-green-500/30",
    showProfitTable: true,
  },
  {
    id: 3,
    icon: "🏆",
    title: "How Tools Like Chat GPT, Trading View & StrykeX Can Get You To The",
    titleHighlight: "Top 1% Elite Traders",
    description:
      "Gone are the days where traders were glued to their screen from 9:15 am till 3:30pm – scanning, executing, managing their trades manually. This is ineffective and a perfect recipe for increasing losses. BUT, with A.I trading tools and platforms such as Trading View & StrykeX combined with Chat GPT, you can do all this on complete automation with 5X better results, without even clicking a button or writing a single line of code. That's the power of artificial intelligence – that's the future of retail trading.",
    bgColor: "bg-gradient-to-br from-blue-900/30 to-blue-800/20",
    borderColor: "border-blue-500/30",
  },
];

const tradingStrategies = [
  { name: "SHORT FUTURES COMBO F", profit: "+₹64,157/Lot", icon: "🔴" },
  { name: "FIN NIFTY BLITZ BEARISH FUTURES", profit: "+₹36,179/Lot", icon: "🔴" },
  { name: "NIFTY BLITZ BEARISH FUTURES", profit: "+₹25,627/Lot", icon: "🔴" },
  { name: "FIN NIFTY BLITZ BULLISH FUTURES", profit: "+₹15,074/Lot", icon: "🟢" },
  { name: "BEARISH OPTION BUYING COMBO C", profit: "+₹13,108/Lot", icon: "🔴" },
  { name: "BANK NIFTY CALL CREDIT SPREAD", profit: "+₹11,973/Lot", icon: "🔵" },
];

const ProfitTable = () => (
  <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/30 rounded-2xl p-6 border border-blue-500/30">
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-white rounded-lg p-3 flex items-center gap-2">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✓</span>
        </div>
        <span className="text-black font-semibold">Verified P&L</span>
      </div>
    </div>

    <div className="text-center mb-6">
      <div className="text-4xl font-bold text-green-400 mb-2">
        +₹2,09,000/Lot
      </div>
      <div className="text-white text-xl">
        Profit Booked With StrykeX Algos
      </div>
    </div>

    <div className="bg-black/30 rounded-lg overflow-hidden">
      <div className="bg-blue-500/20 p-3 flex justify-between text-white font-semibold">
        <span>Symbol Name</span>
        <span>Profit/Lot</span>
      </div>
      
      <div className="space-y-1">
        {tradingStrategies.map((strategy, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-white/5">
            <div className="flex items-center gap-3">
              <span className="text-lg">{strategy.icon}</span>
              <span className="text-white text-sm">{strategy.name}</span>
            </div>
            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded font-semibold text-sm">
              {strategy.profit}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TradingInterface = () => (
  <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">Deploy Strategy In Live Markets</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white/60 text-xs block mb-1">Strategy Name</label>
            <div className="bg-gray-700 rounded p-2 text-white text-sm">
              NIFTY INDEX MOMENTUM STRATEGY
            </div>
          </div>
          <div>
            <label className="text-white/60 text-xs block mb-1">Order Type</label>
            <div className="bg-gray-700 rounded p-2 flex">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded text-sm">
                Auto Trading
              </div>
              <div className="text-gray-400 px-3 py-1 text-sm">
                Paper Trading
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium">
          Deploy Strategy in Live
        </button>
      </div>
    </div>
  </div>
);

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-12">
          {webinarSections.map((section, index) => (
            <Card
              key={section.id}
              className={`${section.bgColor} ${section.borderColor} border-2 rounded-3xl overflow-hidden`}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="text-4xl">{section.icon}</div>
                    
                    <div>
                      <h2 className="text-white text-2xl font-light mb-2">
                        <span className="text-white/70">{section.title}</span>
                        <br />
                        <span className="font-semibold text-white">{section.titleHighlight}</span>
                      </h2>
                      
                      <p className="text-white/70 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    {section.showProfitTable ? <ProfitTable /> : <TradingInterface />}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA Buttons */}
        <div className="flex justify-center gap-8 mt-16">
          <Button className="w-80 h-16 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 flex items-center justify-between px-8">
            <span>Join Now (Hindi) - Free <span className="line-through text-sm">₹499</span></span>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">→</span>
            </div>
          </Button>

          <Button className="w-80 h-16 bg-black/50 text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-black/70 flex items-center justify-between px-8">
            <span>Join Now (English) - Free <span className="line-through text-sm">₹499</span></span>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">→</span>
            </div>
          </Button>
        </div>
        
        <p className="text-center text-white/60 mt-4">(Limited Seats Only)</p>
      </div>
    </section>
  );
};