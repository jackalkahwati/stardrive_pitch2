import React from "react";

const milestones = [
  { year: "2025", milestone: "Interceptor demo, open orbital SDK release (v0)" },
  { year: "2026", milestone: "Developer onboarding, API monetization, education markets" },
  { year: "2027", milestone: "Orbital launch variant R&D" },
  { year: "2028", milestone: "In-orbit prototype" },
  { year: "2029", milestone: "“Launch-as-a-Service” creator offering" },
];

const RoadmapSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Roadmap</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm md:text-base text-gray-300 border-collapse">
        <thead>
          <tr className="bg-white/5">
            <th className="px-4 py-2 text-left font-semibold text-white">Year</th>
            <th className="px-4 py-2 text-left font-semibold text-white">Milestone</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((m) => (
            <tr key={m.year} className="border-t border-gray-700">
              <td className="px-4 py-2 whitespace-nowrap text-white font-medium">{m.year}</td>
              <td className="px-4 py-2">{m.milestone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RoadmapSlide; 