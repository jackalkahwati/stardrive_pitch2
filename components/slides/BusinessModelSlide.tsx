import React from "react";

const rows = [
  { phase: "2025", gtm: "Gov pilots (TAP, AFRL)", revenue: "SBIR + pilot SAAS ($250–750 k)" },
  { phase: "2026", gtm: "SaaS licenses to fleet operators", revenue: "$30 k / sat / yr" },
  { phase: "2027+", gtm: "Open API for devs & creators (usage-based)", revenue: "$ /1 k API calls" },
];

const BusinessModelSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Business Model</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm md:text-base text-gray-300 border-collapse">
        <thead>
          <tr className="bg-white/5">
            <th className="px-4 py-2 text-left font-semibold text-white">Phase</th>
            <th className="px-4 py-2 text-left font-semibold text-white">GTM</th>
            <th className="px-4 py-2 text-left font-semibold text-white">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.phase} className="border-t border-gray-700">
              <td className="px-4 py-2 whitespace-nowrap text-white font-medium">{r.phase}</td>
              <td className="px-4 py-2">{r.gtm}</td>
              <td className="px-4 py-2 whitespace-nowrap">{r.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-gray-300 text-base md:text-lg text-center max-w-2xl mx-auto">
      <em>Long-tail upside:</em> simulation studios, university cubesats, indie devs needing "real physics" world models.
    </p>
  </div>
);

export default BusinessModelSlide; 