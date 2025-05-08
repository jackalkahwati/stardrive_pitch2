import React from "react";

const govWins = [
  "SDA TAP Cohort 3 (AstroShield in live test)",
  "Space Force TPOC + 3 LOIs",
  "NSF SBIR Phase I (under review)",
  "Hugging Face release: TLE Orbit Explainer",
  "Reusable, fuel-free coilgun prototype in dev",
  "2025 TRL 6 demo planned with AFRL",
];

const ValidationSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Validation</h2>

    <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
      {govWins.map((w) => (
        <li key={w}>{w}</li>
      ))}
    </ul>
  </div>
);

export default ValidationSlide; 