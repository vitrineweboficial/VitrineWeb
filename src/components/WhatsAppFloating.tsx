import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/vitrineData';

export function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = "Olá! Conheci a VitrineWeb e gostaria de saber mais sobre a criação de um site para meu negócio.";
  const href = getWhatsAppUrl(defaultMsg);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
      id="whatsapp-floating-container"
    >
      {/* Tooltip Balão de Conversa */}
      {showTooltip && (
        <div className="bg-[#131C31] text-white text-xs py-2 px-3.5 rounded-2xl border border-slate-700/80 shadow-xl shadow-black/50 flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex-1">
            <p className="font-semibold text-emerald-400">Atendimento Online</p>
            <p className="text-[11px] text-slate-300 leading-tight">
              Fale com a VitrineWeb pelo WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded focus:outline-none"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botão Flutuante Principal do WhatsApp */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/40 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Conversar no WhatsApp com a VitrineWeb"
        id="whatsapp-floating-btn"
      >
        {/* Efeito de Pulso Sutil */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Indicador de Status Online */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#0B1120]" />
      </a>
    </div>
  );
}
