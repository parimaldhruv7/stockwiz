import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WebinarHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header with purple border */}
        <div className="border-2 border-purple-500 rounded-2xl p-8 mb-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-5xl font-light">
              <span className="text-white">Webinar Highlights</span>
              <span className="text-white/60"> – What Will Be Covered?</span>
            </h2>
            
            <p className="text-white/70 text-xl leading-relaxed max-w-4xl">
              Learn the secrets sauce of how professional institutional traders leverage the power of artificial intelligence and algo trading for breakthrough results.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Learning Modules */}
          <div className="space-y-6">
            {/* Featured Module */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-400 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-semibold mb-3">
                      Everything You Need To Learn
                    </h3>
                    <h4 className="text-white text-lg font-bold mb-4">
                      About AI & Algo Trading
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      The world of trading is moving fast – extremely fast, and in this era of algo trading and artificial intelligence, we will give you a sneak peek into how this new form of trading can significantly increase the odds of being profitable in the market. You'll learn how big professional trading desks are hunting retail stop losses, exploiting big market movements – all on autopilot.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Modules */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-white/5 border border-white/10 rounded-xl p-4">
                <CardContent className="p-0 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600/30 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  </div>
                  <h3 className="text-white font-medium">
                    Learn To Create, Back Test and Deploy Trading Bots Using Our Secret Strategies
                  </h3>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10 rounded-xl p-4">
                <CardContent className="p-0 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600/30 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  </div>
                  <h3 className="text-white font-medium">
                    Detailed Verified Profit / Loss Statement & Algo Trade History
                  </h3>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10 rounded-xl p-4">
                <CardContent className="p-0 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600/30 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  </div>
                  <h3 className="text-white font-medium">
                    How Tools Like Chat GPT, Trading View & StrykeX Can Get You To The Top 1% Elite Traders
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Trading Interface */}
          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
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

                <div>
                  <h4 className="text-white font-medium mb-3">Order Execution Details</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-white/60 text-xs block mb-1">Product Type</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-white text-sm">
                          <input type="radio" name="product" defaultChecked className="text-blue-500" />
                          Intraday
                        </label>
                        <label className="flex items-center gap-2 text-white text-sm">
                          <input type="radio" name="product" />
                          Delivery
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 text-xs block mb-1">Entry Orders</label>
                        <select className="w-full bg-gray-700 rounded p-2 text-white text-sm">
                          <option>Market</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-white/60 text-xs block mb-1">Exit Orders</label>
                        <select className="w-full bg-gray-700 rounded p-2 text-white text-sm">
                          <option>Market</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 text-xs block mb-1">SL-Limit Price Difference</label>
                        <input type="text" className="w-full bg-gray-700 rounded p-2 text-white text-sm" placeholder="0" />
                      </div>
                      <div>
                        <label className="text-white/60 text-xs block mb-1">Margin Benefit</label>
                        <select className="w-full bg-gray-700 rounded p-2 text-white text-sm">
                          <option>Place Orders Sequenced For Margin Benefit</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 text-xs block mb-2">SL and TP Order Based On Price</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-white text-sm">
                            <input type="radio" name="price" defaultChecked />
                            Traded Price
                          </label>
                          <label className="flex items-center gap-2 text-white text-sm">
                            <input type="radio" name="price" />
                            Signal Price
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="text-white/60 text-xs block mb-2">Square Off Transaction if any entry is failed</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-white text-sm">
                            <input type="radio" name="square" defaultChecked />
                            Yes
                          </label>
                          <label className="flex items-center gap-2 text-white text-sm">
                            <input type="radio" name="square" />
                            No
                          </label>
                        </div>
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
        </div>
      </div>
    </section>
  );
};