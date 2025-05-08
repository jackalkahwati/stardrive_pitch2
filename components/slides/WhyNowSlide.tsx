import React from "react";

const items = [
  "Voice agents → useful",
  "Text agents → ubiquitous",
  "Physics-grounded agents → next",
  "StarDrive is building the world model for space—first for DoD, now for everyone."
];

const WhyNowSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Why Now?</h2>

    <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
);

export default WhyNowSlide; 