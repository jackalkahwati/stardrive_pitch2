import React from "react";

const shortTerm = [
  "SDA AI feeds: $250K–$1.25M",
  "Threat detection, analytics, tasking",
  "API subscriptions for orbital planning",
];

const longTerm = [
  "Dev tools / SDK access",
  "In-orbit sim environments",
  "Launch-as-a-service",
];

const RevenueModelsSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Revenue Models</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Short-term */}
      <div className="bg-white/5 rounded-lg border border-gray-800 p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">Short-term: Defense + commercial software</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
          {shortTerm.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Long-term */}
      <div className="bg-white/5 rounded-lg border border-gray-800 p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">Long-term</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
          {longTerm.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default RevenueModelsSlide; 