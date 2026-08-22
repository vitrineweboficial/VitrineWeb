import React from 'react';
import { MessageCircle, Compass, Code2, Rocket, ArrowRight } from 'lucide-react';
import { ETAPAS } from '../data/vitrineData';

export function HowItWorks() {
  const iconMap: Record<string, React.ReactNode> = {
    MessageCircle: <MessageCircle className="w-6 h-6 text-blue-400" />,
    Compass: <Compass className="w-6 h-6 text-cyan-400" />,
    Code2: <Code2 className="w-6 h-6 text-indigo-400" />,
    Rocket: <Rocket className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-[#0B1120] relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Do primeiro contato ao seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              site no ar.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Processo ágil, transparente e sem complicações técnicas para você focar no que realmente importa: seu negócio.
          </p>
        </div>

        {/* Linha do Tempo / Grid de 4 Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {ETAPAS.map((etapa, index) => (
            <div
              key={etapa.numero}
              className="group p-7 sm:p-8 rounded-2xl bg-[#131C31] hover:bg-[#18233D] border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between relative shadow-lg"
              id={`etapa-card-${etapa.numero}`}
            >
              {/* Indicador Numérico Grande e Translúcido */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {iconMap[etapa.icone] || <Rocket className="w-6 h-6 text-blue-400" />}
                </div>
                <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-blue-500/40 transition-colors">
                  {etapa.numero}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                  {etapa.numero} — {etapa.titulo}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {etapa.descricao}
                </p>
              </div>

              {/* Conector visual discreto no desktop */}
              {index < ETAPAS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-slate-600" />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* CTA Rápido */}
        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-200"
          >
            <span>Iniciar meu projeto agora</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
