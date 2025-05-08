import React from "react";

const steps = [
  "Ingest TLE / radar / optical streams (sub-sec)",
  "Predict intent with LLM-based Threat Engine",
  "Generate CCDM plans (Camouflage · Concealment · Deception · Maneuver) via agents",
  "Execute / Push delta-V commands or operator briefs via secure uplink",
];

const SolutionSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Our Solution</h2>

    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
      <span className="text-white font-semibold">AstroShield</span> = real-time <em>threat → plan → action</em> loop
    </p>

    <ol className="list-decimal list-inside space-y-3 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
      {steps.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ol>
  </div>
);

export default SolutionSlide; 