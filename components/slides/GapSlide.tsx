import React from "react";

const rows = [
  { today: "SSA dashboards", icon: "🔍", pain: "Passive, data-heavy, no decision engine" },
  { today: "Human mission control", icon: "🧑‍🚀", pain: "Minutes-to-hours latency in a sub-minute fight" },
  { today: "Missiles / propellant", icon: "🚀", pain: "Heavy, single-use, high $" },
];

const GapSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">The Gap</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm md:text-base text-gray-300 border-collapse">
        <thead>
          <tr className="bg-white/5">
            <th className="px-4 py-2 text-left font-semibold text-white">Today</th>
            <th className="px-4 py-2 text-left font-semibold text-white">Pain</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.today} className="border-t border-gray-700">
              <td className="px-4 py-2 whitespace-nowrap text-white font-medium">
                {r.today} {r.icon}
              </td>
              <td className="px-4 py-2 max-w-xl">{r.pain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-lg md:text-xl text-center text-gray-300 max-w-2xl mx-auto">
      <span className="text-white font-semibold">Result:</span> Space operators have awareness but <span className="text-white font-semibold">no automated response</span>.
    </p>

    <p className="text-gray-400 text-base md:text-lg text-center max-w-2xl mx-auto">
      Manual decision loops often exceed <span className="font-semibold text-white">30&nbsp;minutes</span>—AstroShield completes the <em>detect&nbsp;→&nbsp;decide&nbsp;→&nbsp;act</em> cycle in <span className="font-semibold text-white">under&nbsp;15&nbsp;seconds</span>.
    </p>
  </div>
);

export default GapSlide; 