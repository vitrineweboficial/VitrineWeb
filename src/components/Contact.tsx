import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Instagram, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Phone,
  Building,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { CONFIG, getWhatsAppUrl } from '../data/vitrineData';

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    segmento: '',
    whatsapp: '',
    necessidade: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nome = formData.nome.trim() || 'Cliente';
    const empresa = formData.empresa.trim() || 'Minha Empresa';
    const segmento = formData.segmento.trim() || 'Geral';
    const necessidade = formData.necessidade.trim() 
      ? `Necessidade: ${formData.necessidade.trim()}`
      : 'Gostaria de conhecer as opções e valores.';

    // Monta a mensagem exata solicitada
    const mensagemFinal = `Olá! Meu nome é ${nome}. Tenho a empresa ${empresa}, do segmento ${segmento}. Gostaria de saber mais sobre a criação de um site. ${necessidade}`;

    const url = getWhatsAppUrl(mensagemFinal);

    // Abre o WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  const segmentosSugeridos = [
    'Salão de Beleza / Estética',
    'Barbearia',
    'Restaurante / Gastronomia',
    'Clínica / Saúde',
    'Comércio / Loja',
    'Prestador de Serviços',
    'Construção / Reformas',
    'Profissional Autônomo',
    'Outro Segmento',
  ];

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#0B1120] relative">
      {/* Luz ambiente */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Fale com a Gente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Vamos criar a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              vitrine do seu negócio?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Preencha o formulário abaixo para iniciar uma conversa direta e sem compromisso pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Coluna do Formulário (7 Colunas) */}
          <div className="lg:col-span-7 bg-[#131C31] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/40">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Solicitar Contato
            </h3>
            <p className="text-sm text-slate-400 mb-8">
              Ao enviar, abriremos sua conversa com os dados preenchidos no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
              
              {/* Campo: Nome */}
              <div>
                <label htmlFor="nome" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Seu Nome *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="nome"
                    required
                    placeholder="Ex: João da Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B1120] border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Grid: Empresa + Segmento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Campo: Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    required
                    placeholder="Ex: Studio Bella"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B1120] border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                  />
                </div>

                {/* Campo: Segmento */}
                <div>
                  <label htmlFor="segmento" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Segmento de Atuação *
                  </label>
                  <select
                    id="segmento"
                    required
                    value={formData.segmento}
                    onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B1120] border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                  >
                    <option value="" disabled>Selecione seu segmento...</option>
                    {segmentosSugeridos.map((seg, i) => (
                      <option key={i} value={seg} className="bg-[#0B1120] text-white">
                        {seg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Campo: WhatsApp de Contato */}
              <div>
                <label htmlFor="whatsapp-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Seu WhatsApp (opcional para retorno)
                </label>
                <input
                  type="tel"
                  id="whatsapp-input"
                  placeholder="Ex: (11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0B1120] border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>

              {/* Campo: O que você precisa? */}
              <div>
                <label htmlFor="necessidade" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  O que você precisa? *
                </label>
                <textarea
                  id="necessidade"
                  rows={3}
                  required
                  placeholder="Ex: Gostaria de uma Landing Page com agendamento direto pelo WhatsApp para meu salão..."
                  value={formData.necessidade}
                  onChange={(e) => setFormData({ ...formData, necessidade: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none"
                />
              </div>

              {/* Botão de Enviar pelo WhatsApp */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5 text-base cursor-pointer"
                id="submit-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar pelo WhatsApp</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                🔒 Sem formulários burocráticos. Você conversa diretamente conosco pelo WhatsApp.
              </p>

            </form>
          </div>

          {/* Coluna de Informações e Contatos Diretos (5 Colunas) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card de Atendimento WhatsApp */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#131C31] border border-white/5 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">WhatsApp Direto</h4>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Tire dúvidas, solicite orçamentos rápidos e conheça modelos sob medida.
              </p>
              
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Chamar no WhatsApp</span>
                <Send className="w-4 h-4" />
              </a>
            </div>

            {/* Card de Redes & Canais */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#131C31] border border-white/5 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-white mb-1">Canais da VitrineWeb</h4>
              
              {/* Instagram */}
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Instagram</p>
                    <p className="text-[11px] text-slate-400">@vitrineweb.oficial</p>
                  </div>
                </div>
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-pink-400 hover:underline"
                >
                  Acessar
                </a>
              </div>

              {/* E-mail */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">E-mail</p>
                    <p className="text-[11px] text-slate-400 truncate max-w-[180px] sm:max-w-[220px]">
                      {CONFIG.email}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="text-xs font-semibold text-blue-400 hover:underline"
                >
                  Enviar
                </a>
              </div>
            </div>

            {/* Garantias */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Atendimento humanizado e sem robôs chatos</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Proposta clara e sem custos ocultos</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
