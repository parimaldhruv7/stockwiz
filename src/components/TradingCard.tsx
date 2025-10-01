import React from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';

interface TradingCardProps {
  company: string;
  instrument: string;
  currentPrice: string;
  change: string;
  entryPrice: string;
  stopLoss: string;
  strategy: string;
  status: string;
  date: string;
  time: string;
  tags: Array<{ label: string; bgColor: string; textColor: string }>;
  size?: 'small' | 'large';
}

export const TradingCard: React.FC<TradingCardProps> = ({
  company,
  instrument,
  currentPrice,
  change,
  entryPrice,
  stopLoss,
  date,
  time,
  tags,
  size = 'large',
}) => {
  const isSmall = size === 'small';

  return (
    <div className={`relative ${isSmall ? 'w-[299px] h-[309px]' : 'w-[371px] h-[376px]'}`}>
      <div 
        className={`inline-flex items-center justify-center ${isSmall ? 'h-[19px] gap-[4.94px] px-[9.88px] py-[4.94px] rounded-[7.41px_7.41px_0px_0px]' : 'h-[23px] gap-[6.1px] px-[12.21px] py-[6.1px] rounded-[9.15px_9.15px_0px_0px]'} absolute top-px left-[18px] overflow-hidden shadow-[0px_4.58px_44.43px_#ffffff99] bg-gradient-to-r from-[#128000] to-[#b79109] border-t border-r border-l border-[#26bc0d]`}
      >
        <Sparkles className={`${isSmall ? 'w-[11px] h-[11px]' : 'w-[13.68px] h-[13.73px]'} text-white`} />
        <div className={`font-medium text-white ${isSmall ? 'text-[12px]' : 'text-[15.3px]'} tracking-[0] leading-[27.5px] whitespace-nowrap`}>
          AI Generated
        </div>
      </div>

      <div
        className={`absolute ${
          isSmall
            ? "top-[18px] w-[299px] h-[290px]"
            : "top-[23px] w-[370px] h-[353px]"
        } left-px bg-[#101010] ${
          isSmall ? "rounded-[11px_11px_0px_0px]" : "rounded-[13.36px_13.36px_0px_0px]"
        } overflow-hidden`}
        style={{
          borderTop: '1px solid transparent',
          borderLeft: '1px solid transparent',
          borderRight: '1px solid transparent',
          borderImage: 'linear-gradient(137deg, #21b300 1%, #fbcb15 100%) 1',
          borderImageSlice: '1 1 0 1',
          background: 'linear-gradient(#101010, #101010) padding-box, linear-gradient(137deg, #21b300 1%, #fbcb15 100%) border-box',
        }}
      >
        <div className={`flex flex-col items-center ${isSmall ? 'w-[270px] gap-[12px] top-3 left-3' : 'w-[334px] gap-[15px] top-[15px] left-[18px]'} absolute`}>
          <div className="flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-[6.68px]">
              <div className={`${isSmall ? 'w-[35px] h-[35px]' : 'w-[42px] h-[42px]'} bg-[#007aff] rounded-full flex items-center justify-center text-white font-bold ${isSmall ? 'text-[16px]' : 'text-[20px]'}`}>
                {company === 'NIFTY' ? '50' : company[0]}
              </div>
              <div className="inline-flex flex-col items-start gap-[2px]">
                <div className="inline-flex items-center gap-[6px]">
                  <div className={`font-bold text-white ${isSmall ? 'text-[13px]' : 'text-[16px]'} tracking-[0] leading-[1.2] whitespace-nowrap`}>
                    {company}
                  </div>
                  <div className={`inline-flex ${isSmall ? 'h-[12px]' : 'h-[14px]'} items-center justify-center gap-[2px] px-[5px] py-[2px] rounded-[12px] border border-[#ffffff26]`}>
                    <TrendingUp className={`${isSmall ? 'w-[7px] h-[7px]' : 'w-[8px] h-[8px]'} text-white`} />
                    <div className={`text-white ${isSmall ? 'text-[8px]' : 'text-[9px]'} font-medium`}>NSE</div>
                  </div>
                </div>
                <p className={`font-normal text-white/60 ${isSmall ? 'text-[9px]' : 'text-[10px]'} tracking-[0] leading-[1.3]`}>
                  {instrument}
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-end gap-[2px]">
              <div className={`font-bold text-white ${isSmall ? 'text-[14px]' : 'text-[17px]'} text-right leading-[1.2] whitespace-nowrap tracking-[0]`}>
                {currentPrice}
              </div>
              <div className={`font-medium text-[#26bc0d] ${isSmall ? 'text-[9px]' : 'text-[10px]'} text-right leading-[1.2]`}>
                {change}
              </div>
            </div>
          </div>

          <div className={`relative w-full ${isSmall ? 'h-[65px]' : 'h-[80px]'}`}>
            <div className="absolute top-0 left-0 w-full">
              <div className={`flex items-center w-full relative ${isSmall ? 'mt-[22px]' : 'mt-[28px]'}`}>
                <div className="absolute w-full h-[2px] bg-white/20 top-0 left-0" />
                <div className="absolute w-[40%] h-[3px] bg-gradient-to-r from-[#26bc0d] to-[#fbcb15] -top-[1px] left-0" />
                <div className={`absolute ${isSmall ? 'w-[8px] h-[8px]' : 'w-[10px] h-[10px]'} rounded-full bg-white border-2 border-white ${isSmall ? '-top-[3px]' : '-top-[4px]'} left-[40%] -translate-x-1/2 z-10`} />
                
                <div className={`absolute ${isSmall ? '-top-[20px]' : '-top-[25px]'} left-0 font-bold text-white ${isSmall ? 'text-[10px]' : 'text-[11px]'}`}>SL</div>
                <div className={`absolute ${isSmall ? '-top-[20px]' : '-top-[25px]'} left-[20%] font-bold text-white ${isSmall ? 'text-[10px]' : 'text-[11px]'}`}>Entry</div>
                <div className={`absolute ${isSmall ? '-top-[32px]' : '-top-[38px]'} left-[40%] -translate-x-1/2`}>
                  <div className={`bg-[#ff3b30] px-[8px] py-[3px] rounded-[4px] text-white ${isSmall ? 'text-[10px]' : 'text-[11px]'} font-semibold`}>Live</div>
                </div>
                <div className={`absolute ${isSmall ? '-top-[20px]' : '-top-[25px]'} right-0 font-bold text-white ${isSmall ? 'text-[10px]' : 'text-[11px]'}`}>Target</div>
              </div>
              <div className={`flex gap-[8px] absolute ${isSmall ? 'top-[28px]' : 'top-[35px]'} left-0`}>
                <div className={`font-normal text-white/60 ${isSmall ? 'text-[9px]' : 'text-[10px]'}`}>SL</div>
                <div className={`font-medium text-white ${isSmall ? 'text-[9px]' : 'text-[10px]'}`}>{date}</div>
                <div className={`font-normal text-white/60 ${isSmall ? 'text-[9px]' : 'text-[10px]'}`}>{time}</div>
              </div>
            </div>
          </div>

          <div className={`flex items-center justify-between gap-[11.13px] ${isSmall ? 'px-[12px] py-[8px]' : 'px-[14px] py-[10px]'} w-full rounded-[8px] bg-[#1a1a1a] border border-[#2a2a2a]`}>
            <div className="flex flex-col items-start gap-[2px]">
              <div className={`font-normal text-white/50 ${isSmall ? 'text-[9px]' : 'text-[10px]'}`}>Entry</div>
              <div className={`font-semibold text-white ${isSmall ? 'text-[12px]' : 'text-[14px]'}`}>{entryPrice}</div>
            </div>
            <div className="flex flex-col items-end gap-[2px]">
              <div className={`font-normal text-white/50 ${isSmall ? 'text-[9px]' : 'text-[10px]'}`}>Stop Loss</div>
              <div className={`font-semibold text-white ${isSmall ? 'text-[12px]' : 'text-[14px]'}`}>{stopLoss}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`inline-flex items-center gap-[4px] absolute ${isSmall ? 'top-[-1px] right-[18px]' : 'top-[-1px] right-[22px]'}`}>
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center ${isSmall ? 'px-[8px] py-[4px]' : 'px-[10px] py-[5px]'} rounded-[6px_6px_0px_0px] overflow-hidden`}
            style={{ backgroundColor: tag.bgColor }}
          >
            <div
              className={`font-semibold ${isSmall ? 'text-[9px]' : 'text-[10px]'} tracking-[0] leading-[1] whitespace-nowrap`}
              style={{ color: tag.textColor }}
            >
              {tag.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};