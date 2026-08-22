import React from 'react';
import { 
  Building2, 
  Zap, 
  UserCheck, 
  Store, 
  LayoutGrid, 
  MessageSquare, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { SERVICOS, getWhatsAppUrl } from '../data/vitrineData';

export function Services() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-7 h-7 text-blue-400" />,
    Zap: <Zap className="w-7 h-7 text-amber-400" />,
    UserCheck: <UserCheck className="w-7 h-7 text-cyan-400" />,
    Store: <Store className="w-7 h-7 text-emerald-400" />,
    LayoutGrid: <LayoutGrid className="w-7 h-7 text-indigo-400" />,
    MessageSquare: <MessageSquare className="w-7 h-7 text-emerald-400" />,
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#0F172A] relative">
      {/* Luz ambiente */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold mb-4">
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Soluções para diferentes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              tipos de negócio.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Cada projeto é planejado e construído sob medida para atender os objetivos da sua empresa.
          </p>
        </div>

        {/* Grade de 6 Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICOS.map((servico) => (
            <div
              key={servico.id}
              className="group rounded-2xl bg-[#131C31] hover:bg-[#18233D] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/5 relative overflow-hidden"
              id={`servico-card-${servico.id}`}
            >
              {/* Tag do Serviço */}
              {servico.etiqueta && (
                <div className="absolute top-6 right-6">
                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/90 border border-slate-700/60 px-2.5 py-1 rounded-full">
                    {servico.etiqueta}
                  </span>
                </div>
              )}

              <div>
                {/* Ícone */}
                <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {iconMap[servico.icone] || <Zap className="w-7 h-7 text-blue-400" />}
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {servico.titulo}
                </h3>

                {/* Descrição */}
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  {servico.descricao}
                </p>

                {/* Lista de Recursos/Benefícios inclusos */}
                <div className="space-y-2.5 mb-8">
                  {servico.beneficios.map((beneficio, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Solicitação do Serviço */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href="#contato"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/60 hover:bg-blue-600 hover:text-white border border-slate-700/60 hover:border-transparent transition-all duration-200"
                >
                  <span>Solicitar este modelo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Banner de Ajuda e Consultoria Rápida */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-800/60 to-cyan-900/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Não sabe qual é o modelo ideal para seu negócio?</h4>
            <p className="text-sm text-slate-400 mt-1">Nós analisamos suas necessidades e indicamos a melhor estrutura.</p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de uma recomendação sobre qual tipo de site é ideal para meu negócio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tirar dúvidas pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
