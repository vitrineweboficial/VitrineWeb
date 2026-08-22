import React from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  Globe, 
  Sparkles, 
  PhoneCall, 
  Clock 
} from 'lucide-react';
import { BENEFICIOS } from '../data/vitrineData';

export function Benefits() {
  // Mapeamento de ícones do Lucide
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-6 h-6 text-blue-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    Globe: <Globe className="w-6 h-6 text-emerald-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    PhoneCall: <PhoneCall className="w-6 h-6 text-indigo-400" />,
    Clock: <Clock className="w-6 h-6 text-sky-400" />,
  };

  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-[#0B1120] relative">
      {/* Luz sutil de fundo */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <span>Vantagens Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Mais do que um site.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Uma vitrine para o seu negócio.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Criamos a estrutura ideal para você valorizar sua marca, atrair clientes qualificados e se destacar no mercado.
          </p>
        </div>

        {/* Grade de 6 Cards de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFICIOS.map((item, index) => (
            <div
              key={item.id}
              className="group p-7 sm:p-8 rounded-2xl bg-[#131C31] hover:bg-[#18233D] border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              id={`beneficio-card-${item.id}`}
            >
              <div>
                {/* Ícone com fundo com gradiente */}
                <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300 shadow-md">
                  {iconMap[item.icone] || <Sparkles className="w-6 h-6 text-blue-400" />}
                </div>

                {/* Título do Card */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.titulo}
                </h3>

                {/* Descrição */}
                <p className="text-slate-400 text-base leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              {/* Indicador sutil de valor */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                <span>Diferencial VitrineWeb #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
