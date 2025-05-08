import React from "react";
import Image from "next/image";

const DemoSlide: React.FC = () => (
  <div className="flex flex-col items-center space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Live Demo Snapshot</h2>

    <div className="w-full max-w-4xl border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <Image src="/demo2.png" alt="AstroShield — Live Trajectory Analysis" width={1600} height={900} className="object-cover" />
    </div>

    <p className="text-gray-300 text-base md:text-lg text-center max-w-2xl">
      <span className="font-semibold text-white">AstroShield — Live Trajectory Analysis</span><br />
      Real-time re-entry and impact forecasting that fuses ground truth, physics propagation, and ML prediction―delivering sub-second assessments and 95&nbsp;%-confidence impact zones for immediate mission response.
    </p>
  </div>
);

export default DemoSlide; 