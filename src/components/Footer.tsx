import React from 'react';
import { Logo } from './Logo';
import { CONFIG, getWhatsAppUrl } from '../data/vitrineData';
import { MessageCircle, Instagram, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grade de 4 Colunas do Rodapé */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Coluna 1: Marca & Slogan (4 Colunas) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
              {CONFIG.slogan}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Especialistas em criação de sites profissionais, landing pages e presença digital estratégica para pequenas empresas e profissionais autônomos.
            </p>
          </div>

          {/* Coluna 2: Navegação (2 Colunas) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-slate-400 hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-slate-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços (3 Colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">
                  Sites Institucionais
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">
                  Landing Pages de Alta Conversão
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">
                  Sites para profissionais
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">
                  Sites para pequenos negócios
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">
                  Portfólio Profissional
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">
                  Integração com WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Canais (3 Colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@vitrineweb.oficial</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="truncate">{CONFIG.email}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-slate-500">
                Atendimento digital em todo o Brasil
              </span>
            </div>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {CONFIG.ano} {CONFIG.nome}. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
