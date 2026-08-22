import React from 'react';
import { ArrowRight, Eye, ShieldCheck, Smartphone, Zap, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/vitrineData';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex items-center"
    >
      {/* Luzes de fundo atmosféricas e gradientes sutis */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid Pattern sutil de fundo */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto e Chamadas */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag de Posicionamento */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Criação de Sites Profissionais & Presença Digital</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Seu negócio merece uma{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                vitrine na internet.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl font-semibold text-slate-200 mb-4 leading-snug">
              Sites profissionais, modernos e pensados para transformar visitantes em clientes.
            </p>

            {/* Texto de Apoio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Mostre seu trabalho, passe mais confiança e facilite o contato com seus clientes através de uma presença digital profissional.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                id="hero-create-site-btn"
              >
                <span>Quero criar meu site</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700 hover:border-slate-600 transition-all duration-200"
                id="hero-view-projects-btn"
              >
                <Eye className="w-4 h-4 text-slate-400" />
                <span>Ver projetos</span>
              </a>
            </div>

            {/* Benefícios Rápidos em Destaque */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Responsivo</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Integração WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Foco em Conversão</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Mockup Visual Moderno (Computador + Celular) em HTML/CSS Puro */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Elemento de Brilho de Fundo do Mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-400/15 to-transparent blur-2xl rounded-3xl -z-10" />

            {/* Mockup do Computador (Browser Frame) */}
            <div className="w-full max-w-lg bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 relative">
              
              {/* Barra do Navegador */}
              <div className="bg-[#1E293B] px-4 py-3 border-b border-slate-700 flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                {/* Barra de Endereço */}
                <div className="flex-1 ml-2 bg-[#0B1120] px-3 py-1 rounded-lg text-[11px] text-slate-400 flex items-center justify-between border border-slate-800">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-emerald-400 text-[10px]">🔒</span>
                    <span className="text-slate-300 font-mono">seunegocio.com.br</span>
                  </div>
                  <span className="text-[10px] text-blue-400 font-medium">Online</span>
                </div>
              </div>

              {/* Conteúdo Simulado do Site no Mockup */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-[#131D33] to-[#0D1527] space-y-4">
                
                {/* Mini Header Interno */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                      V
                    </div>
                    <span className="text-xs font-bold text-white tracking-tight">Sua Empresa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-2 bg-slate-700 rounded-full hidden sm:block" />
                    <span className="w-8 h-2 bg-slate-700 rounded-full hidden sm:block" />
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-medium">
                      Contato
                    </span>
                  </div>
                </div>

                {/* Banner de Apresentação Interno */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border border-blue-500/20 relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="inline-block text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                      Destaque o seu trabalho
                    </span>
                    <p className="text-sm font-bold text-white leading-snug">
                      Excelência e confiança para seus clientes
                    </p>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                      Serviços especializados com agilidade e atendimento de qualidade.
                    </p>
                  </div>
                </div>

                {/* 2 Mini Cards de Serviços */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mb-1.5">
                      ⭐
                    </div>
                    <p className="text-[11px] font-semibold text-slate-200">Serviços Premium</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Apresentação clara</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs mb-1.5">
                      💬
                    </div>
                    <p className="text-[11px] font-semibold text-slate-200">WhatsApp Direto</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">1 clique para falar</p>
                  </div>
                </div>

                {/* Barra de Ação de Conversão */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-slate-300">Presença 24h</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold shadow-md">
                    <MessageCircle className="w-3 h-3" />
                    <span>Fale Conosco</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup do Celular Sobreposto (Smartphone Frame) */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 w-36 sm:w-44 bg-[#0F172A] border-2 border-slate-700/90 rounded-3xl p-1.5 shadow-2xl shadow-black transform rotate-2 hover:rotate-0 transition-transform duration-300 hidden xs:block">
              {/* Notch */}
              <div className="w-12 h-2.5 bg-slate-900 mx-auto rounded-b-md mb-1.5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>
              
              {/* Tela do Celular */}
              <div className="bg-[#0B1120] rounded-2xl p-2.5 space-y-2 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-white">Sua Marca</span>
                  <span className="text-[8px] bg-blue-500 text-white px-1 rounded">Menu</span>
                </div>

                <div className="h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center p-1 text-center">
                  <span className="text-[8px] font-bold text-white leading-tight">
                    Presença no Celular
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="h-2 w-full bg-slate-800 rounded" />
                  <div className="h-2 w-3/4 bg-slate-800 rounded" />
                </div>

                <div className="w-full py-1 rounded bg-emerald-600 text-white text-[8px] font-bold text-center flex items-center justify-center gap-1">
                  <MessageCircle className="w-2.5 h-2.5" />
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
