// ==========================================
// VITRINEWEB - TIPOS TYPESCRIPT
// ==========================================

export interface SiteConfig {
  nome: string;
  slogan: string;
  whatsapp: string; // Ex: "5511999999999" (deixar "" para preencher depois)
  instagram: string; // Ex: "https://instagram.com/vitrineweb"
  email: string; // Ex: "contato@vitrineweb.com.br"
  logo: string; // Caminho de imagem da logo se houver (ex: "/logo.png" ou "")
  ano: string;
}

export type ProjectCategory = 
  | 'Todos'
  | 'Beleza'
  | 'Serviços'
  | 'Restaurantes'
  | 'Empresas'
  | 'Profissionais';

export interface ProjetoItem {
  id: string;
  nome: string;
  categoria: ProjectCategory;
  descricao: string;
  imagem: string; // Imagem ou mockup gerado
  link: string; // Link para a demo ou "" se não configurado
  demo: boolean;
  etiqueta: string;
  features?: string[];
  destaque?: boolean;
  mockupTheme?: {
    primaryColor: string;
    accentColor: string;
    bgStyle: string;
    tagline: string;
    heroHeadline: string;
    statValue: string;
    statLabel: string;
  };
}

export interface ServicoItem {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  beneficios: string[];
  etiqueta?: string;
}

export interface BeneficioItem {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface EtapaItem {
  numero: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface DiferencialItem {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface FAQItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export interface SegmentoItem {
  nome: string;
  icone: string;
  descricao: string;
}

export interface DepoimentoItem {
  id: string;
  nome: string;
  empresa: string;
  segmento: string;
  texto: string;
  foto?: string;
  avaliacao: number;
}
