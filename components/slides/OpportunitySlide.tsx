import React from "react";

const OpportunitySlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">The Opportunity</h2>

    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center">
      The most valuable virtual worlds won't be <span className="text-white font-semibold">fictional</span>.<br className="hidden md:block" />
      They'll be real-world environments made programmable—starting with orbit.
    </p>

    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
      AI agents are being trained in sandbox games.<br className="hidden md:block" />
      We're building the <span className="text-white font-semibold">real sandbox</span>:
    </p>

    <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
      <li>Editable orbital simulations</li>
      <li>Agentic defense logic</li>
      <li>Coilgun launch physics</li>
      <li>All validated by U.S. Space Force &amp; NSF</li>
    </ul>
  </div>
);

export default OpportunitySlide; 