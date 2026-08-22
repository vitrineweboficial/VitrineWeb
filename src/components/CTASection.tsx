import React from 'react';
import { ArrowRight, Eye, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/vitrineData';

export function CTASection() {
  return (
    <section id="cta-final" className="py-20 sm:py-28 bg-[#0F172A] relative overflow-hidden">
      {/* Luzes de fundo atmosféricas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#131C31] via-[#10182B] to-[#0A101D] border border-blue-500/30 shadow-2xl shadow-blue-500/10 text-center relative overflow-hidden">
          
          {/* Tag de Destaque */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Dê o Próximo Passo</span>
          </div>

          {/* Título Forte */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto mb-6">
            Pronto para colocar seu negócio na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              internet?
            </span>
          </h2>

          {/* Texto */}
          <p className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            Vamos transformar sua empresa em uma presença digital profissional.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com a VitrineWeb sobre a criação de um site para o meu negócio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              id="cta-falar-vitrineweb-btn"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com a VitrineWeb</span>
            </a>

            <a
              href="#projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700 hover:border-slate-600 transition-all duration-200"
              id="cta-ver-projetos-btn"
            >
              <Eye className="w-4 h-4 text-slate-400" />
              <span>Ver projetos</span>
            </a>
          </div>

          {/* Rodapé Interno do Card */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span>✓ Atendimento direto e ágil</span>
            <span>✓ Propostas sem compromisso</span>
            <span>✓ 100% Personalizado</span>
          </div>

        </div>
      </div>
    </section>
  );
}
