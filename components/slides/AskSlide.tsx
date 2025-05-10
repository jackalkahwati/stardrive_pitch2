import React from "react";

const deliverables = [
  "Ship operator UI + Developer API v1 (Q1 '25)",
  "Secure 2 paid pilot contracts",
  "Complete AFRL live-fire test & flight-qualify models",
];

const AskSlide: React.FC = () => (
  <div className="space-y-8 bg-[#0a1929] print:bg-[#0a1929]">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Why $1M Pre-Seed Accelerates Us ×10</h2>

    <p className="text-lg md:text-xl text-gray-300 text-center">
      <span className="text-white font-semibold">$1M pre-seed (Speedrun)</span>
    </p>

    <p className="text-gray-300 text-base md:text-lg text-center">To deliver:</p>

    <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg max-w-md mx-auto">
      {deliverables.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>

    <p className="text-gray-300 text-base md:text-lg text-center max-w-xl mx-auto">
      Looking for Speedrun mentors in AI infra, defense GTM, and creative-tool virality.
    </p>

    {/* No CTA button in VC deck */}
  </div>
);

export default AskSlide; 