import React from "react";
import Image from "next/image";

const DemoSlide: React.FC = () => (
  <div className="flex flex-col items-center space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Live Demo Snapshot</h2>

    {/* Placeholder image; replace with real mock/screenshot */}
    <div className="w-full max-w-4xl border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <Image src="/placeholder.jpg" alt="Demo Snapshot" width={1600} height={900} className="object-cover" />
    </div>

    <p className="text-gray-300 text-base md:text-lg text-center max-w-xl">
      <em>&lt;3&nbsp;s</em> median alert → <em>&lt;15&nbsp;s</em> plan generation
    </p>
  </div>
);

export default DemoSlide; 