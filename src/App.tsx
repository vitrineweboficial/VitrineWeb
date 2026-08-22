import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Portfolio } from './components/Portfolio';
import { TargetAudience } from './components/TargetAudience';
import { Differentials } from './components/Differentials';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  return (
    <div id="vitrineweb-app" className="min-h-screen flex flex-col bg-[#0B1120] text-[#F8FAFC]">
      {/* 1. Header Fixo com Menu e Botão Quero Meu Site */}
      <Header />

      {/* Conteúdo Principal com Navegação Suave */}
      <main className="flex-1">
        {/* 2. Hero Section com Mockups CSS Interativos */}
        <Hero />

        {/* 3. Benefícios (6 cards) */}
        <Benefits />

        {/* 4. Serviços (6 soluções) */}
        <Services />

        {/* 5. Como Funciona (Timeline de 4 etapas) */}
        <HowItWorks />

        {/* 6. Portfólio com Filtros e Projetos Demo com Modal */}
        <Portfolio />

        {/* 7. Para Quem É (Segmentos atendidos) */}
        <TargetAudience />

        {/* 8. Diferenciais da VitrineWeb */}
        <Differentials />

        {/* 9. Sobre a VitrineWeb */}
        <About />

        {/* 10. FAQ (Perguntas Frequentes em Accordion) */}
        <FAQ />

        {/* 11. CTA Final de Conversão */}
        <CTASection />

        {/* 12. Contato com Formulário Integrado ao WhatsApp */}
        <Contact />
      </main>

      {/* 13. Rodapé Completo */}
      <Footer />

      {/* 14. Botão Flutuante do WhatsApp */}
      <WhatsAppFloating />
    </div>
  );
}
