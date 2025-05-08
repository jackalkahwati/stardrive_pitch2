import React from "react";
import Image from "next/image";

const TitleSlide: React.FC = () => (
  <div className="flex-1 min-h-[65vh] pb-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
    {/* Background */}
    <Image src="/hero.png" alt="Background" fill className="object-cover pointer-events-none select-none" />

    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white max-w-4xl leading-tight text-shadow">
        StarDrive
      </h1>
      <p className="text-lg text-gray-300 mb-4 max-w-3xl">
        The Agentic Operating System for Space: From Coilgun Interceptors to Editable Orbital Simulations
      </p>
      <a
        href="https://calendly.com/jackalkahwati/meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-sm font-medium"
      >
        Schedule Demo
      </a>
    </div>
  </div>
);

export default TitleSlide; 