import React, { useState } from 'react';
import { X, ExternalLink, Monitor, Smartphone, MessageCircle, Check, Sparkles, ArrowRight } from 'lucide-react';
import { ProjetoItem } from '../types';
import { getWhatsAppUrl } from '../data/vitrineData';

interface ProjectModalProps {
  projeto: ProjetoItem | null;
  onClose: () => void;
}

export function ProjectModal({ projeto, onClose }: ProjectModalProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!projeto) return null;

  const theme = projeto.mockupTheme || {
    primaryColor: '#2563EB',
    accentColor: '#38BDF8',
    bgStyle: 'from-[#0F172A] to-[#020617]',
    tagline: 'Negócio & Serviços',
    heroHeadline: 'Presença digital profissional e elegante',
    statValue: '100%',
    statLabel: 'Responsivo',
  };

  const whatsappMessage = `Olá! Vi o projeto demonstrativo "${projeto.nome}" na VitrineWeb e gostaria de um site semelhante para o meu negócio.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      id="projeto-modal-backdrop"
    >
      <div
        className="bg-[#0F172A] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl shadow-black overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
        id={`modal-${projeto.id}`}
      >
        {/* Header do Modal */}
        <div className="p-4 sm:p-6 bg-[#131C31] border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {projeto.etiqueta}
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {projeto.nome}
              </h3>
              <p className="text-xs text-slate-400">Categoria: {projeto.categoria}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Seletor de Modo de Visualização */}
            <div className="hidden sm:flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setViewMode('desktop')}
                className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Visualização no Computador"
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Visualização no Celular"
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Corpo do Modal com Scroll */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Descrição e Features */}
          <div className="space-y-3">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {projeto.descricao}
            </p>

            {projeto.features && projeto.features.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {projeto.features.map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300"
                  >
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Área Interativa de Simulação do Site Demo */}
          <div className="flex flex-col items-center justify-center p-4 sm:p-8 rounded-2xl bg-[#090D16] border border-slate-800/80 min-h-[320px]">
            
            {/* Visualização DESKTOP */}
            {viewMode === 'desktop' && (
              <div className="w-full max-w-2xl bg-[#131C31] rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden animate-in fade-in duration-200">
                {/* Browser Top Bar */}
                <div className="bg-[#1E293B] px-3.5 py-2.5 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="bg-[#0B1120] px-3 py-0.5 rounded text-[11px] text-slate-300 font-mono flex items-center gap-1.5">
                    <span>🔒</span>
                    <span>demo.{projeto.id}.vitrineweb.com.br</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-medium">100% Responsivo</span>
                </div>

                {/* Simulated Content */}
                <div className={`p-6 bg-gradient-to-b ${theme.bgStyle} text-white space-y-4`}>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-bold text-sm tracking-tight">{projeto.nome}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-200">
                      {theme.tagline}
                    </span>
                  </div>

                  <div className="py-4 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.primaryColor }}>
                      Destaque & Exclusividade
                    </span>
                    <h4 className="text-xl font-extrabold leading-snug">
                      {theme.heroHeadline}
                    </h4>
                    <p className="text-xs text-slate-300 max-w-md">
                      Solução sob medida para {projeto.categoria.toLowerCase()} com design moderno, alta velocidade e facilidade de agendamento/contato.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <p className="text-xs text-slate-400">Recurso Principal</p>
                      <p className="text-sm font-bold text-white mt-0.5">Atendimento Direto</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <p className="text-xs text-slate-400">Eficiência</p>
                      <p className="text-sm font-bold" style={{ color: theme.primaryColor }}>
                        {theme.statValue} {theme.statLabel}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Pronto para seu negócio</span>
                    <a
                      href={getWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Agendar / Contato</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Visualização MOBILE */}
            {viewMode === 'mobile' && (
              <div className="w-64 bg-[#0F172A] border-2 border-slate-700 rounded-3xl p-2 shadow-2xl animate-in zoom-in-95 duration-200">
                {/* Notch */}
                <div className="w-16 h-3 bg-slate-900 mx-auto rounded-b-md mb-2" />
                
                <div className={`p-4 rounded-2xl bg-gradient-to-b ${theme.bgStyle} text-white space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs">{projeto.nome}</span>
                    <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">Menu</span>
                  </div>

                  <div className="py-2 text-center">
                    <span className="text-[9px] uppercase font-bold" style={{ color: theme.primaryColor }}>
                      {theme.tagline}
                    </span>
                    <p className="text-xs font-bold mt-1 leading-tight">
                      {theme.heroHeadline}
                    </p>
                  </div>

                  <div className="p-2 rounded bg-black/40 border border-white/5 text-center">
                    <p className="text-[9px] text-slate-400">Taxa de Conversão</p>
                    <p className="text-xs font-bold text-emerald-400">Otimizado para Mobile</p>
                  </div>

                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-emerald-600 text-white text-[10px] font-bold shadow"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Footer do Modal com CTAs */}
        <div className="p-4 sm:p-6 bg-[#131C31] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 text-center sm:text-left">
            * Projeto demonstrativo para visualização de layout e recursos.
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Fechar
            </button>
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/30 transition-all"
            >
              <span>Quero um site como este</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
