import React from "react";

const reasons = [
  "Porque enfrentamos cada desafio lado a lado, sempre de mãos dadas.",
  "Porque realizamos sonhos — como a chegada da nossa Malu, fruto de fé e esperança.",
  "Porque nos momentos mais difíceis, você foi minha força e meu porto seguro.",
  "Porque a sua sensibilidade e sua força me inspiram todos os dias.",
  "Porque até as mudanças mais difíceis nos uniram ainda mais.",
  "Porque nosso lar é feito de amor, parceria e respeito.",
  "Porque eu admiro profundamente quem você é — como mulher, mãe e pessoa.",
  "Porque crescemos juntos, rimos juntos e vencemos juntos.",
  "Porque o nosso amor é verdadeiro, resiliente e cheio de propósito.",
  "Porque, depois de 10 anos, eu ainda sonho com todos os próximos anos ao seu lado.",
];

function Reasons() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 right-10 w-72 h-72 bg-amber-200/40 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-rose-200/40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-rose-900 text-center mb-8">
          10 motivos que mostram por que continuamos juntos
        </h2>
        <ul className="grid gap-4 sm:gap-5">
          {reasons.map((r, i) => (
            <li
              key={i}
              className="group p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur ring-1 ring-rose-200/60 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-rose-300 text-rose-900/90 text-sm font-medium shadow-sm">
                  {i + 1}
                </span>
                <p className="text-rose-800 leading-relaxed">{r}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reasons;