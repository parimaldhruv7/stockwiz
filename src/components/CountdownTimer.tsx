import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 6,
    minutes: 6,
    seconds: 6,
  });

  const countdownData = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  const sessionData = [
    {
      id: 1,
      date: "Sunday, 21 March 2025",
      time: "8:00 PM",
      language: "English",
      price: "₹299",
      bgGradient: "bg-gradient-to-b from-transparent to-[#14a800]",
    },
    {
      id: 2,
      date: "Sunday, 21 March 2025",
      time: "8:00 PM",
      language: "Hindi",
      price: "₹299",
      bgGradient: "bg-gradient-to-b from-transparent to-[#a89400]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col w-full max-w-[1272px] items-center gap-5 px-4 sm:px-6 lg:px-0">
      {/* Countdown Section */}
      <section className="flex flex-col w-full max-w-[916px] items-center gap-4">
        <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-[32px] text-center leading-snug">
          Next Live Q&amp;A in
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 w-full">
          {countdownData.map((item, index) => (
            <div
              key={index}
              className="w-[140px] sm:w-[180px] md:w-[214px] h-[100px] sm:h-[115px] md:h-[125px] rounded-2xl md:rounded-3xl overflow-hidden border border-[#ffffff80] backdrop-blur-[5px] flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                <time className="font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center">
                  {String(item.value).padStart(2, '0')}
                </time>
                <span className="font-normal text-white text-base sm:text-lg md:text-2xl text-center">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sessions Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full">
        {sessionData.map((session) => (
          <article
            key={session.id}
            className={`w-full sm:w-[90%] md:w-[620px] h-auto md:h-[204px] rounded-2xl md:rounded-3xl overflow-hidden ${session.bgGradient} p-6 md:p-[34px]`}
          >
            <div className="flex flex-col items-start gap-6 md:gap-8">
              {/* Header */}
              <header className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">
                <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <time className="font-medium text-white text-lg sm:text-xl md:text-[32px] leading-snug whitespace-nowrap">
                    {session.date}
                  </time>
                  <div className="hidden sm:block w-0.5 h-6 sm:h-10 bg-white/30" />
                  <time className="font-medium text-white text-lg sm:text-xl md:text-[32px] leading-snug whitespace-nowrap">
                    {session.time}
                  </time>
                </div>
              </header>

              {/* Button */}
              <div className="relative w-full h-[50px] md:h-[59px]">
                <div className="absolute top-[-3px] left-1.5 w-full md:w-[511px] h-[35px] md:h-[41px] rounded-md blur-[10px] bg-gradient-to-r from-[#13a800]/[0.68] to-[#ffd22f]/[0.68]" />
                <div className="absolute top-[18px] md:top-[23px] left-[30px] md:left-[50px] w-[80%] md:w-[506px] h-[35px] md:h-10 rounded-md rotate-180 blur-[10px] bg-gradient-to-r from-[#13a800]/[0.68] to-[#ffd22f]/[0.68]" />

                <button className="absolute top-0 left-0 w-full md:w-[553px] h-[50px] md:h-[59px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 md:px-6 bg-white rounded-full hover:opacity-90 transition-opacity">
                  <p className="font-semibold text-black text-base sm:text-lg md:text-2xl text-center">
                    Join Now {session.language} (Free{" "}
                    <span className="text-xs md:text-sm line-through">{session.price}</span>)
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-medium text-black/75 text-xs sm:text-sm md:text-base text-center">
                      (Limited Seats Only)
                    </span>
                    <div className="w-9 h-9 md:w-[48.34px] md:h-[49.72px] bg-black rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};
