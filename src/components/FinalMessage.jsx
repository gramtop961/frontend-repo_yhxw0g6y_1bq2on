import React from "react";

function FinalMessage() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-rose-900 mb-4">
          Meu Recado Para Você, Marcele
        </h3>
        <p className="text-rose-800/90 leading-relaxed">
          Marcele, obrigado por cada dia ao seu lado. Obrigado por ser minha parceira, minha amiga, minha força e meu amor. Eu te amo hoje, amanhã e para sempre.
        </p>

        {/* Pulsing minimal heart */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-8 h-8 rotate-45 bg-rose-400 rounded-md animate-pingSlow" />
            <div className="absolute inset-0 w-8 h-8 rotate-45 bg-rose-500/80 rounded-md" />
          </div>

          <button
            type="button"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-300 to-rose-300 text-rose-900 font-medium shadow hover:shadow-md transition-shadow"
          >
            Para mais 10 anos e muito mais
          </button>
        </div>
      </div>

      <style>{`
        .animate-pingSlow { animation: pingSlow 2s ease-in-out infinite; }
        @keyframes pingSlow { 0%{ transform: rotate(45deg) scale(1); opacity: 1 } 70%{ transform: rotate(45deg) scale(1.35); opacity: .6 } 100%{ transform: rotate(45deg) scale(1); opacity: 1 } }
      `}</style>
    </section>
  );
}

export default FinalMessage;