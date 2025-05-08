import React from "react";

const points = [
  "$1.3 T DoD SDA & missile-defense spend (2025-2035)",
  "100 k+ satellites projected by 2030 → congestion & hostile proximity",
  "2025 = 'Year of AI agents' (Speedrun thesis) → we supply real-world agent stack",
];

const MarketTimingSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Market Timing</h2>

    <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </div>
);

export default MarketTimingSlide; 