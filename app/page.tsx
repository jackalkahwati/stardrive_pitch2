"use client"

import { useState, useEffect, useRef } from "react";
import SlideShell from "@/components/SlideShell";
import TitleSlide from "@/components/slides/TitleSlide";
import SolutionSlide from "@/components/slides/SolutionSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import TractionSlide from "@/components/slides/TractionSlide";
import BusinessModelSlide from "@/components/slides/BusinessModelSlide";
import MarketTimingSlide from "@/components/slides/MarketTimingSlide";
import TeamSlide from "@/components/slides/TeamSlide";
import AskSlide from "@/components/slides/AskSlide";
import GapSlide from "@/components/slides/GapSlide";
import WhyWinSlide from "@/components/slides/WhyWinSlide";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

export default function Page() {
  const slides = [
    <TitleSlide />,
    <GapSlide />,
    <SolutionSlide />,
    <DemoSlide />,
    <WhyWinSlide />,
    <TractionSlide />,
    <BusinessModelSlide />,
    <MarketTimingSlide />,
    <TeamSlide />,
    <AskSlide />,
  ];
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Arrow-key navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        setIdx((i) => Math.min(i + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        setIdx((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [slides.length]);

  // Touch swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) setIdx((i) => Math.min(i + 1, slides.length - 1)); // swipe left
      else setIdx((i) => Math.max(i - 1, 0));
    }
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-[#0a1929] flex flex-col">
      {/* Export PDF button */}
      <div className="print:hidden fixed top-4 right-4 z-20">
        <Button
          size="sm"
          onClick={() => {
            const prev = document.title;
            document.title = "astroshield";
            window.print();
            document.title = prev;
          }}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" /> Export PDF
        </Button>
      </div>
      {/* Screen-only interactive viewer */}
      <div className="print:hidden flex-1 flex items-center justify-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Fade-in animation on slide change */}
        <SlideShell key={idx} index={idx} total={slides.length}>
          <div className="animate-fadeIn w-full h-full">{slides[idx]}</div>
        </SlideShell>
      </div>

      {/* Print-only full deck */}
      <div className="hidden print:block">
        {slides.map((s, i) => (
          (i === 1 || i === 4) ? null : (
            <SlideShell key={`print-${i}`} index={i} total={slides.length} noBreak={i === slides.length - 1}>
              {s}
            </SlideShell>
          )
        ))}
      </div>

      <div className="print:hidden flex items-center justify-center gap-4 py-4 bg-[#0a1929] border-t border-[#1e3a5f] flex-wrap">
        <Button onClick={() => setIdx((i) => Math.max(i - 1, 0))} disabled={idx === 0} size="icon" variant="outline">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {slides.map((_, i) => (
          <Button
            key={i}
            size="sm"
            className="hidden sm:inline-flex"
            variant={i === idx ? "default" : "outline"}
            onClick={() => setIdx(i)}
          >
            {i + 1}
          </Button>
        ))}
        <Button onClick={() => setIdx((i) => Math.min(i + 1, slides.length - 1))} disabled={idx === slides.length - 1} size="icon" variant="outline">
          <ChevronRight className="h-4 w-4" />
        </Button>
        {/* Progress dots for mobile */}
        <div className="flex gap-1 sm:hidden">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-primary" : "bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

