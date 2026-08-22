import React from 'react';
import { 
  Users, 
  Palette, 
  Sliders, 
  Smartphone, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { DIFERENCIAIS } from '../data/vitrineData';

export function Differentials() {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-6 h-6 text-blue-400" />,
    Palette: <Palette className="w-6 h-6 text-pink-400" />,
    Sliders: <Sliders className="w-6 h-6 text-cyan-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-indigo-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#0B1120] relative">
      {/* Luz ambiente */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nossos Pilares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Por que escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              VitrineWeb?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Combinamos estética moderna, foco em resultados e atendimento humanizado para entregar a melhor experiência.
          </p>
        </div>

        {/* Grade de 6 Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFERENCIAIS.map((item) => (
            <div
              key={item.id}
              className="group p-7 sm:p-8 rounded-2xl bg-[#131C31] hover:bg-[#18233D] border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {iconMap[item.icone] || <Sparkles className="w-6 h-6 text-blue-400" />}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.titulo}
                </h3>

                <p className="text-slate-400 text-base leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Padrão de Qualidade VitrineWeb</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
