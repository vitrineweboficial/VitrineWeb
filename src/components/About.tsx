import React from 'react';
import { Target, Heart, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { CONFIG } from '../data/vitrineData';

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#0F172A] relative">
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Manifesto e Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Nossa Missão</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A VitrineWeb nasceu para ajudar negócios a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                serem vistos.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-white/95">
                Acreditamos que todo negócio merece uma presença digital profissional.
              </p>
              <p className="text-slate-400">
                Nosso objetivo é transformar empresas, serviços e ideias em experiências digitais bonitas, funcionais e pensadas para aproximar negócios de seus clientes.
              </p>
            </div>

            {/* Compromissos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#131C31] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Foco na Conversão</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Sites planejados para facilitar o contato e vendas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#131C31] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Atenção aos Detalhes</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Design moderno com tipografia e cores harmônicas.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
              >
                <span>Falar sobre meu projeto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Card de Identidade da Marca */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131C31] to-[#0A101D] border border-blue-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-center py-6 px-4 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800/80 shadow-inner">
                  <Logo size="xl" showText={true} showSlogan={true} />
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Propósito
                  </p>
                  <p className="text-sm font-semibold text-slate-200 mt-1">
                    Democratizar a presença digital de qualidade para empresas e empreendedores.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Transparência em todas as etapas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Projetos 100% responsivos e modernos</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Integração fluida com WhatsApp</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>VitrineWeb Brasil</span>
                  <span className="font-mono text-cyan-400">© {CONFIG.ano}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
