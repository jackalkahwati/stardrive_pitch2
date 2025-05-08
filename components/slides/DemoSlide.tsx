import React from "react";
import Image from "next/image";

const DemoSlide: React.FC = () => (
  <div className="flex flex-col items-center space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Live Demo Snapshot</h2>

    <div className="w-full max-w-4xl border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <Image src="/demo.png" alt="AstroShield demo inside ops center" width={1600} height={900} className="object-cover" />
    </div>

    <p className="text-gray-300 text-base md:text-lg text-center max-w-2xl">
      AstroShield at work inside a Space Force ops center — live telemetry feeds, AI-generated CCDM plans, and &lt; 15&nbsp;s data-to-action loop.
    </p>
  </div>
);

export default DemoSlide; 