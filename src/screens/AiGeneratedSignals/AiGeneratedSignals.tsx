import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { IntroductionSection } from "./sections/IntroductionSection/IntroductionSection";
import { LearnMoreSection } from "./sections/LearnMoreSection/LearnMoreSection";
import { NextWebinarSection } from "./sections/NextWebinarSection/NextWebinarSection";
import { WebinarHighlightsSection } from "./sections/WebinarHighlightsSection/WebinarHighlightsSection";

export const AiGeneratedSignals = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <IntroductionSection />
      <NextWebinarSection />
      <WebinarHighlightsSection />
      <CallToActionSection />
      <LearnMoreSection />
    </div>
  );
};