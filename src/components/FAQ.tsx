import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, getWhatsAppUrl } from '../data/vitrineData';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0B1120] relative">
      {/* Luz ambiente */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Frequentes
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Respostas claras para as principais dúvidas sobre a criação do seu site.
          </p>
        </div>

        {/* Lista de Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#131C31] border-blue-500/40 shadow-lg shadow-blue-500/5'
                    : 'bg-[#101728] border-white/5 hover:border-slate-700'
                }`}
                id={`faq-item-${item.id}`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.pergunta}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 text-slate-300 text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150"
                  >
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dúvida Adicional */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300 text-center sm:text-left">
            Ainda tem alguma dúvida que não está aqui?
          </p>
          <a
            href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre a criação de site na VitrineWeb:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
