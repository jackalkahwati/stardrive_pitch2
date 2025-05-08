import React from "react";

const points = [
  "SDA TAP Lab – Cohort 3 (live ops sandbox)",
  "3 LOIs (U.S. Space Force, JRAC / Land Armaments, Allied defense)",
  "NSF SBIR Phase I proposal in review (coilgun + inference)",
  "SpaceWERX Direct-to-Phase II path ($1.25 M non-dilutive)",
  "TLE Orbit Explainer on Hugging Face – beats SGP-4 in decay risk accuracy",
];

const TractionSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Traction</h2>

    <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </div>
);

export default TractionSlide; 