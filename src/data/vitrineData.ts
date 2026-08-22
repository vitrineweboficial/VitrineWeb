import {
  SiteConfig,
  ProjetoItem,
  ServicoItem,
  BeneficioItem,
  EtapaItem,
  DiferencialItem,
  FAQItem,
  SegmentoItem,
  DepoimentoItem,
} from '../types';

// ==========================================
// ===== CONFIGURAÇÕES DA VITRINEWEB =====
// ==========================================
// Altere estas informações centrais facilmente.
// Se os campos whatsapp, instagram, email ou logo ficarem vazios (""),
// o site continuará funcionando sem links quebrados.

export const CONFIG: SiteConfig = {
  nome: "VitrineWeb",
  slogan: "Seu negócio merece uma vitrine na internet.",
  whatsapp: "", // ⬅️ TROQUE AQUI SEU WHATSAPP (Ex: "5511999999999" com DDI 55 + DDD + Número)
  instagram: "https://instagram.com/vitrineweb.oficial",
  email: "vitrineweb.comercial@gmail.com",
  logo: "/logonova.png", // Caminho do arquivo de imagem da logo (ex: "/logo.png" ou vazio para usar o logo vetorial oficial)
  ano: "2026",
};

/**
 * Função utilitária para gerar links do WhatsApp de forma segura.
 * Se o número estiver vazio, abre um modal de confirmação amigável ou o fallback do WhatsApp Web.
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Olá! Conheci a VitrineWeb e gostaria de saber mais sobre a criação de um site para meu negócio.";
  const text = encodeURIComponent(message || defaultMsg);
  
  if (CONFIG.whatsapp && CONFIG.whatsapp.trim() !== "") {
    const cleanNumber = CONFIG.whatsapp.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${text}`;
  }
  
  // Link universal seguro do WhatsApp caso o número ainda não tenha sido configurado
  return `https://api.whatsapp.com/send?text=${text}`;
}

// ==========================================
// ===== PROJETOS DE DEMONSTRAÇÃO =====
// ==========================================
// Adicione ou edite novos projetos facilmente aqui.
// Todos são categorizados e marcados como "Projeto Demo".

export const PROJETOS: ProjetoItem[] = [
  {
    id: "camila-lima-beauty",
    nome: "Camila Lima Beauty Hair",
    categoria: "Beleza",
    descricao: "Projeto demonstrativo de site para salão de beleza, estética capilar e agendamento online.",
    imagem: "",
    link: "",
    demo: true,
    etiqueta: "Projeto Demo",
    features: ["Agendamento Online", "Catálogo de Procedimentos", "Galeria de Cortes & Mechas", "Botão WhatsApp Direto"],
    destaque: true,
    mockupTheme: {
      primaryColor: "#C5A059",
      accentColor: "#FDE2E4",
      bgStyle: "from-[#2A2421] to-[#1A1614]",
      tagline: "Beleza & Autoestima",
      heroHeadline: "Cabelos, Estética & Cuidados Exclusivos",
      statValue: "100%",
      statLabel: "Design Responsivo",
    }
  },
  {
    id: "studio-bella",
    nome: "Studio Bella",
    categoria: "Beleza",
    descricao: "Projeto demonstrativo para clínica de estética, sobrancelhas e cuidados femininos de alto padrão.",
    imagem: "",
    link: "",
    demo: true,
    etiqueta: "Projeto Demo",
    features: ["Apresentação de Tratamentos", "Design Clean & Sofisticado", "Tabela de Cuidados", "Integração Mobile"],
    mockupTheme: {
      primaryColor: "#EC4899",
      accentColor: "#FCE7F3",
      bgStyle: "from-[#1F1322] to-[#120B15]",
      tagline: "Estética & Bem-Estar",
      heroHeadline: "Realce sua beleza natural com cuidados especializados",
      statValue: "24/7",
      statLabel: "Vitrine Ativa",
    }
  },
  {
    id: "prime-construcoes",
    nome: "Prime Construções",
    categoria: "Empresas",
    descricao: "Projeto demonstrativo institucional para construtora, engenharia civil e reformas comerciais.",
    imagem: "",
    link: "",
    demo: true,
    etiqueta: "Projeto Demo",
    features: ["Portfólio de Obras", "Formulário de Orçamento", "Especificações Técnicas", "Credibilidade Corporativa"],
    mockupTheme: {
      primaryColor: "#EAB308",
      accentColor: "#38BDF8",
      bgStyle: "from-[#0F172A] to-[#020617]",
      tagline: "Engenharia & Obras",
      heroHeadline: "Construindo o futuro com solidez e pontualidade",
      statValue: "Alta",
      statLabel: "Conversão",
    }
  },
  {
    id: "sabor-e-arte",
    nome: "Sabor & Arte Restaurante",
    categoria: "Restaurantes",
    descricao: "Projeto demonstrativo para restaurante contemporâneo com cardápio digital interativo e reservas.",
    imagem: "",
    link: "",
    demo: true,
    etiqueta: "Projeto Demo",
    features: ["Cardápio Digital Rápido", "Sistema de Reservas", "Galeria de Pratos", "Localização & Horários"],
    mockupTheme: {
      primaryColor: "#F97316",
      accentColor: "#FEF08A",
      bgStyle: "from-[#27150C] to-[#120A05]",
      tagline: "Gastronomia & Experiência",
      heroHeadline: "Sabores inesquecíveis em um ambiente acolhedor",
      statValue: "Mobile",
      statLabel: "Cardápio Rápido",
    }
  },
  {
    id: "autoprime-servicos",
    nome: "AutoPrime Serviços",
    categoria: "Serviços",
    descricao: "Projeto demonstrativo para centro automotivo, estética automotiva e manutenção preventiva.",
    imagem: "",
    link: "",
    demo: true,
    etiqueta: "Projeto Demo",
    features: ["Lista de Revisões", "Orçamento em 1 Clique", "Checklist de Serviços", "Google Maps Integrado"],
    mockupTheme: {
      primaryColor: "#3B82F6",
      accentColor: "#60A5FA",
      bgStyle: "from-[#0A192F] to-[#040C1A]",
      tagline: "Mecânica & Cuidados",
      heroHeadline: "Cuidado e tecnologia de ponta para o seu veículo",
      statValue: "1 Clique",
      statLabel: "WhatsApp Orçamento",
    }
  },
  {
    id: "dra-juliana-medeiros",
    nome: "Dra. Juliana Medeiros",
    categoria: "Profissionais",
    descricao: "Projeto demonstrativo de site profissional para consultas médicas, clínicas e atendimentos especializados.",
    imagem: "",
    link: "",
    demo: true,
    etiqueta: "Projeto Demo",
    features: ["Apresentação do Currículo", "Áreas de Atuação", "Agendamento Ágil", "Dúvidas Frequentes"],
    mockupTheme: {
      primaryColor: "#14B8A6",
      accentColor: "#CCFBF1",
      bgStyle: "from-[#082F49] to-[#031A2B]",
      tagline: "Saúde & Atendimento Humanizado",
      heroHeadline: "Atenção completa à sua saúde e bem-estar",
      statValue: "100%",
      statLabel: "Confiança & Ética",
    }
  }
];

// ==========================================
// ===== SERVIÇOS =====
// ==========================================

export const SERVICOS: ServicoItem[] = [
  {
    id: "sites-institucionais",
    titulo: "Sites Institucionais",
    descricao: "Sites profissionais para empresas apresentarem sua história, serviços, informações e diferenciais.",
    icone: "Building2",
    beneficios: ["Apresentação completa da empresa", "Seções de serviços e equipe", "SEO otimizado para o Google", "Painel de contato estruturado"],
    etiqueta: "Empresas & Negócios"
  },
  {
    id: "landing-pages",
    titulo: "Landing Pages",
    descricao: "Páginas focadas em campanhas, anúncios e geração de contatos.",
    icone: "Zap",
    beneficios: ["Foco total em conversão", "Carregamento ultrarrápido", "Formulários e CTAs estratégicos", "Ideal para anúncios do Google e Meta"],
    etiqueta: "Alta Conversão"
  },
  {
    id: "sites-profissionais",
    titulo: "Sites para profissionais",
    descricao: "Sites para autônomos e profissionais que querem uma presença digital profissional.",
    icone: "UserCheck",
    beneficios: ["Destaque para sua autoridade", "Apresentação clara de especialidades", "Agendamento ou contato ágil", "Layout moderno e confiável"],
    etiqueta: "Autoridade"
  },
  {
    id: "pequenos-negocios",
    titulo: "Sites para pequenos negócios",
    descricao: "Soluções acessíveis para empresas que querem começar ou melhorar sua presença online.",
    icone: "Store",
    beneficios: ["Excelente custo-benefício", "Visibilidade local na sua região", "Facilidade de atualização", "Pronto para atrair clientes"],
    etiqueta: "Acessível & Prático"
  },
  {
    id: "portfolio-profissional",
    titulo: "Portfólio profissional",
    descricao: "Páginas para apresentar trabalhos, projetos, produtos ou serviços.",
    icone: "LayoutGrid",
    beneficios: ["Galeria visual elegante", "Filtros por categoria", "Demonstração de resultados", "Design focado na experiência do cliente"],
    etiqueta: "Visual de Impacto"
  },
  {
    id: "integracao-whatsapp",
    titulo: "Integração com WhatsApp",
    descricao: "Botões estratégicos para facilitar o contato com clientes.",
    icone: "MessageSquare",
    beneficios: ["Mensagens pré-formatadas", "Botões flutuantes e fixos", "Redução do atrito de contato", "Conversão direta no aplicativo"],
    etiqueta: "Contato Instantâneo"
  }
];

// ==========================================
// ===== BENEFÍCIOS =====
// ==========================================

export const BENEFICIOS: BeneficioItem[] = [
  {
    id: "profissionalismo",
    titulo: "Mais profissionalismo",
    descricao: "Apresente sua empresa de forma organizada e profissional.",
    icone: "Briefcase"
  },
  {
    id: "confianca",
    titulo: "Mais confiança",
    descricao: "Passe uma imagem mais séria para seus clientes.",
    icone: "ShieldCheck"
  },
  {
    id: "visibilidade",
    titulo: "Mais visibilidade",
    descricao: "Tenha uma presença profissional na internet.",
    icone: "Globe"
  },
  {
    id: "mostre-trabalho",
    titulo: "Mostre seu trabalho",
    descricao: "Apresente serviços, produtos, fotos e informações.",
    icone: "Sparkles"
  },
  {
    id: "facilite-contato",
    titulo: "Facilite o contato",
    descricao: "Permita que o cliente entre em contato rapidamente.",
    icone: "PhoneCall"
  },
  {
    id: "disponivel-24h",
    titulo: "Disponível 24 horas",
    descricao: "Seu negócio pode ser apresentado a qualquer momento.",
    icone: "Clock"
  }
];

// ==========================================
// ===== COMO FUNCIONA (ETAPAS) =====
// ==========================================

export const ETAPAS: EtapaItem[] = [
  {
    numero: "01",
    titulo: "Você fala com a gente",
    descricao: "Conte sobre sua empresa e o que você precisa.",
    icone: "MessageCircle"
  },
  {
    numero: "02",
    titulo: "Planejamos",
    descricao: "Definimos estrutura, conteúdo e estilo.",
    icone: "Compass"
  },
  {
    numero: "03",
    titulo: "Criamos",
    descricao: "Desenvolvemos seu site.",
    icone: "Code2"
  },
  {
    numero: "04",
    titulo: "Publicamos",
    descricao: "Depois da aprovação, seu site fica pronto para seus clientes.",
    icone: "Rocket"
  }
];

// ==========================================
// ===== PARA QUEM É (SEGMENTOS) =====
// ==========================================

export const SEGMENTOS: SegmentoItem[] = [
  { nome: "Salões de beleza", icone: "Scissors", descricao: "Divulgação de cortes, mechas, estética e agendamento prático." },
  { nome: "Barbearias", icone: "Sparkles", descricao: "Estilo, serviços masculinos e link direto para WhatsApp." },
  { nome: "Clínicas", icone: "Activity", descricao: "Credibilidade médica, especialidades e localização clara." },
  { nome: "Estéticas", icone: "HeartHandshake", descricao: "Apresentação de procedimentos corporais e faciais." },
  { nome: "Restaurantes", icone: "Utensils", descricao: "Cardápios digitais, fotos de pratos e reservas facilitadas." },
  { nome: "Lojas", icone: "ShoppingBag", descricao: "Catálogo de produtos e direcionamento de vendas online." },
  { nome: "Profissionais autônomos", icone: "User", descricao: "Construção de autoridade e contato direto com contratantes." },
  { nome: "Prestadores de serviços", icone: "Wrench", descricao: "Orçamentos rápidos e exibição dos trabalhos realizados." },
  { nome: "Pequenas empresas", icone: "Building", descricao: "Presença digital sólida para competir com grandes marcas." },
  { nome: "Negócios locais", icone: "MapPin", descricao: "Visibilidade na sua cidade e bairro para novos clientes." }
];

// ==========================================
// ===== DIFERENCIAIS =====
// ==========================================

export const DIFERENCIAIS: DiferencialItem[] = [
  {
    id: "atendimento-proximo",
    titulo: "Atendimento próximo",
    descricao: "Você fala diretamente com quem cuida do projeto.",
    icone: "Users"
  },
  {
    id: "design-profissional",
    titulo: "Design profissional",
    descricao: "Sites modernos e visualmente bem construídos.",
    icone: "Palette"
  },
  {
    id: "projeto-personalizado",
    titulo: "Projeto personalizado",
    descricao: "Cada site é adaptado ao negócio.",
    icone: "Sliders"
  },
  {
    id: "responsividade",
    titulo: "Responsividade",
    descricao: "Seu site funciona em celular, tablet e computador.",
    icone: "Smartphone"
  },
  {
    id: "foco-conversao",
    titulo: "Foco em conversão",
    descricao: "O objetivo não é apenas ter um site bonito, mas facilitar o contato com clientes.",
    icone: "TrendingUp"
  },
  {
    id: "solucoes-acessiveis",
    titulo: "Soluções acessíveis",
    descricao: "Presença digital profissional sem complicação.",
    icone: "CheckCircle2"
  }
];

// ==========================================
// ===== FAQ (PERGUNTAS FREQUENTES) =====
// ==========================================

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    pergunta: "Preciso entender de tecnologia para ter um site?",
    resposta: "Não. A VitrineWeb cuida da parte técnica e orienta você durante o processo."
  },
  {
    id: "faq-2",
    pergunta: "O site funciona no celular?",
    resposta: "Sim. Os sites são desenvolvidos para funcionar em celulares, tablets e computadores."
  },
  {
    id: "faq-3",
    pergunta: "Posso colocar meu WhatsApp?",
    resposta: "Sim. O site pode possuir botões direcionando o visitante para seu WhatsApp."
  },
  {
    id: "faq-4",
    pergunta: "Posso colocar minhas próprias fotos?",
    resposta: "Sim. O site pode ser personalizado com fotos, textos, serviços e informações da empresa."
  },
  {
    id: "faq-5",
    pergunta: "Quanto custa um site?",
    resposta: "O valor depende da estrutura e das necessidades do projeto. Entre em contato para receber uma proposta."
  },
  {
    id: "faq-6",
    pergunta: "Quanto tempo demora?",
    resposta: "O prazo depende da complexidade do projeto e do envio das informações necessárias."
  }
];

// ==========================================
// ===== DEPOIMENTOS (ESTRUTURA PREPARADA) =====
// ==========================================
// Deixe vazio enquanto não houver depoimentos reais.
// Quando tiver depoimentos, basta adicioná-los à lista abaixo.

export const DEPOIMENTOS: DepoimentoItem[] = [];
