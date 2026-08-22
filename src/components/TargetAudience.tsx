import React from 'react';
import { 
  Scissors, 
  Sparkles, 
  Activity, 
  HeartHandshake, 
  Utensils, 
  ShoppingBag, 
  User, 
  Wrench, 
  Building, 
  MapPin, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SEGMENTOS } from '../data/vitrineData';

export function TargetAudience() {
  const iconMap: Record<string, React.ReactNode> = {
    Scissors: <Scissors className="w-5 h-5 text-pink-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Activity: <Activity className="w-5 h-5 text-cyan-400" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-400" />,
    Utensils: <Utensils className="w-5 h-5 text-orange-400" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
    User: <User className="w-5 h-5 text-blue-400" />,
    Wrench: <Wrench className="w-5 h-5 text-sky-400" />,
    Building: <Building className="w-5 h-5 text-indigo-400" />,
    MapPin: <MapPin className="w-5 h-5 text-red-400" />,
  };

  return (
    <section id="para-quem" className="py-20 sm:py-28 bg-[#0F172A] relative">
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <span>Público & Segmentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Criamos sites para negócios que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              querem crescer.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium">
            Se você tem um negócio e quer apresentar sua empresa de forma profissional na internet, a VitrineWeb pode criar uma solução para você.
          </p>
        </div>

        {/* Grade de Segmentos Atendidos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {SEGMENTOS.map((seg, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-[#131C31] hover:bg-[#18233D] border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                {iconMap[seg.icone] || <CheckCircle2 className="w-5 h-5 text-blue-400" />}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {seg.nome}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed hidden sm:block">
                {seg.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Chamada de Ação Rápida */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#131C31] border border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Seu segmento não está na lista?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Desenvolvemos projetos personalizados para qualquer tipo de negócio.</p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex-shrink-0"
          >
            <span>Consultar meu caso</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
