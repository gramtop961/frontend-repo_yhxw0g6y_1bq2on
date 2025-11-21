import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-rose-50 via-rose-100 to-white">
      {/* soft glow backdrop */}
      <div className="pointer-events-none absolute -inset-40 opacity-60" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120rem] h-[120rem] rounded-full bg-gradient-to-br from-amber-200/50 via-rose-200/40 to-white blur-3xl"/>
      </div>

      {/* subtle sparkles */}
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_20%_20%,gold,transparent_35%),radial-gradient(circle_at_80%_30%,#f472b6,transparent_35%),radial-gradient(circle_at_50%_80%,#fde68a,transparent_35%)]" aria-hidden/>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-rose-900 drop-shadow-sm">
          <span className="inline-block translate-y-2 opacity-0 animate-[fadeSlide_1s_ease-out_forwards]">
            Marcele, 10 anos ao seu lado — e o meu amor só cresce
          </span>
        </h1>
        <p className="mt-6 text-rose-700/90 text-lg sm:text-xl leading-relaxed">
          Hoje celebramos uma década de vida, desafios vencidos, sonhos realizados e um amor que não conhece limites.
        </p>
      </div>

      <style>{`
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  );
}

export default Hero;