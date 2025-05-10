import React from "react";

const rows = [
  { capability: "Agentic CCDM", astro: "✅", legacy: "✖", sdk: "✖" },
  { capability: "API-first", astro: "✅", legacy: "⚠ JSON feeds", sdk: "✅" },
  { capability: "Real telemetry trained", astro: "✅ Space-tracking data", legacy: "⚠ Limited", sdk: "✖" },
  { capability: "Dual-use ready", astro: "DoD & commercial", legacy: "DoD only", sdk: "Gaming-only" },
];

const WhyWinSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Why We Win</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm md:text-base text-gray-300 border-collapse">
        <thead>
          <tr className="bg-white/5">
            <th className="px-4 py-2 text-left font-semibold text-white">Capability</th>
            <th className="px-4 py-2 text-left font-semibold text-white">AstroShield</th>
            <th className="px-4 py-2 text-left font-semibold text-white">Legacy SSA</th>
            <th className="px-4 py-2 text-left font-semibold text-white">Game-Engine Sims</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.capability} className="border-t border-gray-700">
              <td className="px-4 py-2 whitespace-nowrap text-white font-medium">{r.capability}</td>
              <td className="px-4 py-2">{r.astro}</td>
              <td className="px-4 py-2">{r.legacy}</td>
              <td className="px-4 py-2">{r.sdk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-gray-300 text-base md:text-lg text-center max-w-2xl mx-auto">
      <em>First mover in <span className="text-white font-semibold">autonomous orbital deception</span>, not just collision avoidance.</em>
    </p>
  </div>
);

export default WhyWinSlide; 