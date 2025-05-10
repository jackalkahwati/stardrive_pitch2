import React from "react";
import Image from "next/image";

const members = [
  { name: "Jack Al-Kahwati", role: "CEO", blurb: "ex-Boeing, Sikorsky, BAE · MS Aero UF · Exited robotics company (Lattis)", img: "/face_jack.png" },
  { name: "Gerardo Barroeta", role: "CTO", blurb: "MIT EE · HW lead at Juul, BrewBird, SwiftNav", img: "/face_gerardo.png" },
  { name: "Steve Hong", role: "Lead Mech", blurb: "NASA + Boeing structures", img: "/face_steve.png" },
  { name: "Mian Hussain", role: "Systems / Ops", blurb: "Boeing perf, Yale MBA", img: "/face_mian.png" },
];

const advisors = [
  { name: "Nino Marcantonio", role: "Advisor", blurb: "ex-DoD innovation" },
  { name: "Space Force TPOC", role: "Advisor", blurb: "Program advisor" },
];

const TeamSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
      Core Team
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {members.map((m) => (
        <div key={m.name} className="bg-white/5 rounded-lg border border-gray-800 p-4 flex flex-col items-center text-center space-y-2">
          <div className="w-24 h-24 relative rounded-full overflow-hidden border border-primary/40">
            <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
          </div>
          <p className="text-white font-semibold mt-2">{m.name}</p>
          <p className="text-gray-400 text-sm">{m.role}</p>
          <p className="text-gray-300 text-xs italic">{m.blurb}</p>
        </div>
      ))}
    </div>

    {/* Advisors */}
    <div className="mt-8 space-y-2 text-center">
      <h3 className="text-xl font-semibold text-white">Advisors</h3>
      <p className="text-gray-300 text-base md:text-lg">
        {advisors.map((a, idx) => (
          <span key={a.name}>
            {a.name} ({a.blurb}){idx < advisors.length - 1 && " · "}
          </span>
        ))}
      </p>
    </div>
  </div>
);

export default TeamSlide; 