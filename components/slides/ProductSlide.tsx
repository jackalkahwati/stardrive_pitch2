import React from "react";

const ProductSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Product</h2>

    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center">
      A full-stack simulation + agent platform grounded in real orbital physics
    </p>

    <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
      <li>
        <span className="text-white font-semibold">AstroShield</span> — agentic AI for orbital decision-making (SDA integration)
      </li>
      <li>
        <span className="text-white font-semibold">TLE Transformer</span> — Hugging Face-deployed model for trajectory prediction
      </li>
      <li>
        <span className="text-white font-semibold">Coilgun Stack</span> — electromagnetic kinetic layer for real-world simulation &amp; launch
      </li>
      <li>
        <span className="text-white font-semibold">Orbital API Layer (2025)</span> — exposing editable orbital sim logic to developers
      </li>
    </ul>
  </div>
);

export default ProductSlide; 