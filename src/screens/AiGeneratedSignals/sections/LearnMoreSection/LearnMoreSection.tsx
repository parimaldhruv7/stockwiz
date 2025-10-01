import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LearnMoreSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Countdown Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-light mb-8">Next Live Q&A in</h2>
          
          <div className="flex justify-center gap-6 mb-12">
            {["06", "06", "06", "06"].map((value, index) => (
              <Card key={index} className="w-32 h-24 bg-black/50 border border-white/20 rounded-2xl">
                <CardContent className="flex flex-col items-center justify-center h-full p-0">
                  <div className="text-white text-3xl font-bold">{value}</div>
                  <div className="text-white/60 text-sm">
                    {["Days", "Hours", "Minutes", "Seconds"][index]}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📅</span>
                </div>
                <div className="text-white text-2xl font-medium">
                  Sunday, 21 March 2025 | 8:00 PM
                </div>
              </div>

              <Button className="w-full h-16 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 flex items-center justify-between px-8">
                <span>Join Now English (Free <span className="line-through text-sm">₹299</span>)</span>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">→</span>
                </div>
              </Button>
              
              <p className="text-center text-white/60 text-sm mt-2">(Limited Seats Only)</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📅</span>
                </div>
                <div className="text-white text-2xl font-medium">
                  Sunday, 21 March 2025 | 8:00 PM
                </div>
              </div>

              <Button className="w-full h-16 bg-black/50 text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-black/70 flex items-center justify-between px-8">
                <span>Join Now Hindi (Free <span className="line-through text-sm">₹299</span>)</span>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">→</span>
                </div>
              </Button>
              
              <p className="text-center text-white/60 text-sm mt-2">(Limited Seats Only)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};