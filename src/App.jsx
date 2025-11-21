import React from "react";
import Hero from "./components/Hero";
import RealPhoto from "./components/RealPhoto";
import Reasons from "./components/Reasons";
import FinalMessage from "./components/FinalMessage";
import AmbientAudio from "./components/AmbientAudio";

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900">
      {/* soft top shimmer */}
      <div className="fixed inset-x-0 -top-40 h-80 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-5xl h-full opacity-60 bg-gradient-to-b from-amber-200/40 via-rose-100/30 to-transparent blur-2xl" />
      </div>

      <Hero />
      <RealPhoto />
      <Reasons />
      <FinalMessage />

      {/* footer shimmer */}
      <div className="mt-10 pb-16" aria-hidden>
        <div className="mx-auto max-w-5xl h-16 opacity-50 bg-gradient-to-t from-amber-200/40 via-rose-100/20 to-transparent blur-xl" />
      </div>

      {/* Ambient soundtrack controller */}
      <AmbientAudio />
    </div>
  );
}

export default App;
