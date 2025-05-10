import React from "react";

const points = [
  "3 proposals down-selected by the Pentagon's Joint Rapid Acquisition Committee (JRAC) – vetted by an SES surface-warfare lead",
  "SDA TAP Lab participant – Cohorts 5, 6 & 7 (live-ops sandbox)",
  "SpaceWERX Direct-to-Phase II path – $1.25M non-dilutive pipeline",
  "NSF SBIR Phase I in review (coilgun + inference)",
  "TLE Orbit Explainer on Hugging Face – beats SGP-4 decay-risk accuracy",
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