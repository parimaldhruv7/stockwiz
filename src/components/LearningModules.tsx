import React from 'react';
import { BookOpen, TrendingUp, Target, BarChart3 } from 'lucide-react';

export const LearningModules = () => {
  const learningModules = [
    {
      id: 1,
      title: "Introduction To Institutional Trading Strategies",
      description:
        "Understand why, how and when stocks make big moves\nBuild your foundation with concepts such as liquidity and market structure",
      icon: <BookOpen className="w-5 h-5" />,
      featured: true,
      gradient:
        "bg-gradient-to-br from-transparent via-[#2ab80c]/20 to-[#fccb15]/20",
    },
    {
      id: 2,
      title: "Relative Strength Analysis",
      description: null,
      icon: <TrendingUp className="w-6 h-6" />,
      featured: false,
      gradient: "bg-[#ffffff1f]",
    },
    {
      id: 3,
      title: "Building A Game Plan",
      description: null,
      icon: <Target className="w-5 h-5" />,
      featured: false,
      gradient: "bg-[#ffffff1f]",
    },
    {
      id: 4,
      title: "Case Studies & Examples",
      description: null,
      icon: <BarChart3 className="w-6 h-6" />,
      featured: false,
      gradient: "bg-[#ffffff1f]",
    },
  ];

  return (
    <main className="flex flex-col w-full max-w-[1272px] items-start gap-8 px-4 md:px-6 lg:px-0">
      {/* Header */}
      <header className="flex flex-col w-full max-w-[654px] items-start gap-3 text-center md:text-left">
        <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-snug lg:leading-[80px]">
          <span className="text-[#ffffff99]">What will you </span>
          <span className="text-white">Learn?</span>
        </h1>
      </header>

      {/* Content */}
      <section className="flex flex-col lg:flex-row items-start gap-6 w-full">
        {/* Modules List */}
        <div className="flex flex-col w-full lg:w-[430px] items-start gap-[21px]">
          {learningModules.map((module) => (
            <article
              key={module.id}
              className={`flex flex-col items-start justify-center gap-2.5 p-4 w-full rounded-xl ${module.gradient}`}
            >
              <div className="p-2.5 rounded-lg overflow-hidden border border-white text-white">
                {module.icon}
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <h2 className="font-semibold text-white text-lg sm:text-xl md:text-2xl leading-snug">
                  {module.title}
                </h2>

                {module.description && (
                  <p className="font-normal text-[#ffffffbf] text-sm md:text-base leading-relaxed">
                    {module.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < module.description.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Aside Box */}
        <aside className="w-full lg:w-[820px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[626px] bg-[#ffffff1c] rounded-2xl flex items-center justify-center">
          <div className="text-white/30 text-6xl md:text-7xl lg:text-8xl">📊</div>
        </aside>
      </section>
    </main>
  );
};
