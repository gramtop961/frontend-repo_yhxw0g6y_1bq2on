import React from "react";

function CoverImage() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-rose-200/50">
          {/* AI-style generated scene via layered gradients and shapes to evoke the brief */}
          <div
            className="absolute inset-0"
            aria-label="Um casal de mãos dadas caminhando em direção ao pôr do sol, luz quente, atmosfera serena, flores leves ao redor, sensação de jornada compartilhada."
          >
            {/* sky gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-rose-100 to-white" />
            {/* sun */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-300 rounded-full blur-3xl opacity-70" />
            {/* horizon */}
            <div className="absolute bottom-24 inset-x-0 h-40 bg-gradient-to-t from-rose-200/60 to-transparent" />
            {/* couple silhouettes (abstract) */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-end gap-6">
              <div className="w-8 h-24 bg-rose-400/80 rounded-full shadow-lg" />
              <div className="w-8 h-28 bg-rose-500/80 rounded-full shadow-lg" />
              {/* hands */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-rose-300/80 blur-sm" />
            </div>
            {/* flowers */}
            <div className="absolute bottom-0 inset-x-0 h-28">
              <div className="absolute bottom-2 left-10 w-24 h-24 bg-rose-300/50 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-24 w-16 h-16 bg-rose-400/40 rounded-full blur-lg" />
              <div className="absolute bottom-6 right-16 w-28 h-28 bg-amber-300/50 rounded-full blur-xl" />
            </div>
            {/* soft film grain */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_60%)] mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoverImage;