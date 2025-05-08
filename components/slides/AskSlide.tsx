import React from "react";

const deliverables = [
  "Ship operator UI + Dev API v1",
  "Complete AFRL live fire test",
  "Launch open docs & SDK",
];

const AskSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Our Ask</h2>

    <p className="text-lg md:text-xl text-gray-300 text-center">
      <span className="text-white font-semibold">$2.5M pre-seed (Speedrun)</span>
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

    <div className="text-center">
      <a
        href="https://calendly.com/jackalkahwati/meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-sm font-medium"
      >
        📅 Schedule Demo
      </a>
    </div>
  </div>
);

export default AskSlide; 