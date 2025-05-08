import React from "react";

const rows = [
  { useCase: "Agentic SDA Planning", desc: "AI agents simulate, escalate, & optimize orbital response", customer: "Defense / Intelligence" },
  { useCase: "Editable Sim Worlds", desc: "Orbital sandbox for devs & tactical educators", customer: "Creators / Government" },
  { useCase: "Autonomous Launch Logic", desc: "Train agents to manage logistics & response", customer: "AI Research / Gov" },
  { useCase: "Developer SDK (Q1 '26)", desc: "APIs for building on orbital physics & agent escalation", customer: "Indie Devs / Dual-Use Apps" },
];

const UseCasesSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Use Cases</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm md:text-base text-gray-300 border-collapse">
        <thead>
          <tr className="bg-white/5">
            <th className="px-4 py-2 text-left font-semibold text-white">Use Case</th>
            <th className="px-4 py-2 text-left font-semibold text-white">Description</th>
            <th className="px-4 py-2 text-left font-semibold text-white">Customer Type</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.useCase} className="border-t border-gray-700">
              <td className="px-4 py-2 whitespace-nowrap text-white font-medium">{r.useCase}</td>
              <td className="px-4 py-2">{r.desc}</td>
              <td className="px-4 py-2 whitespace-nowrap">{r.customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UseCasesSlide; 