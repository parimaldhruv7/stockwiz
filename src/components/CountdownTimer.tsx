import React, { useState, useEffect } from 'react';
import { Calendar,  ArrowRight } from 'lucide-react';

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
      price: "299",
      bgGradient: "bg-gradient-to-b from-transparent to-[#14a800]",
    },
    {
      id: 2,
      date: "Sunday, 21 March 2025",
      time: "8:00 PM",
      language: "Hindi",
      price: "299",
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
  {sessionData.map((session, index) => {
    const isEnglish = session.language === 'English';
    const buttonBg = isEnglish ? 'bg-white' : 'bg-black';
    const textColor = isEnglish ? 'text-black' : 'text-white';
    const subTextColor = isEnglish ? 'text-black/75' : 'text-white/60';
    const glowFrom = isEnglish ? 'from-green-500' : 'from-yellow-400';
    const glowTo = isEnglish ? 'to-yellow-400' : 'to-green-500';

    return (
      <article
        key={session.id}
        className="w-full sm:w-[90%] md:w-[620px] h-auto md:h-[204px] rounded-3xl bg-[#121212] p-6 md:p-[34px] relative overflow-hidden"
      >
        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">

          {/* Header: Calendar + Date + Time */}
          <header className="flex items-center gap-4 w-full">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" />

            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <time className="text-white font-semibold text-base sm:text-lg md:text-2xl whitespace-nowrap">
                {session.date}
              </time>
              <span className="text-white/60 text-xl">|</span>
              <time className="text-white font-semibold text-base sm:text-lg md:text-2xl whitespace-nowrap">
                {session.time}
              </time>
            </div>
          </header>

          {/* Join Now Button + Glow */}
          <div className="relative w-full mt-2">
            {/* Glow behind the button */}
            <div className={`absolute inset-0 blur-[16px] rounded-full bg-gradient-to-r ${glowFrom} ${glowTo} opacity-70`} />

            {/* Actual Button */}
            <button className={`relative z-10 w-full h-[50px] md:h-[59px] rounded-full px-4 md:px-6 flex items-center justify-between ${buttonBg} hover:opacity-90 transition-opacity`}>
              <p className={`font-semibold ${textColor} text-sm sm:text-base md:text-lg`}>
                Join Now {session.language} (Free <span className="text-xs md:text-sm line-through">₹{session.price}</span>)
              </p>
              <div className="flex items-center gap-2">
                <span className={`font-medium ${subTextColor} text-xs sm:text-sm md:text-base`}>
                  (Limited Seats Only)
                </span>
                <div className="w-9 h-9 md:w-[48.34px] md:h-[49.72px] bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" style={{ transform: "rotate(-45deg)" }}  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </article>
    );
  })}
</section>
    </main>
  );
};
