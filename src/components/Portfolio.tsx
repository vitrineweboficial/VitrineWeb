import React, { useState, useMemo } from 'react';
import { Eye, ExternalLink, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PROJETOS } from '../data/vitrineData';
import { ProjectCategory, ProjetoItem } from '../types';
import { ProjectModal } from './ProjectModal';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjetoItem | null>(null);

  const categories: ProjectCategory[] = [
    'Todos',
    'Beleza',
    'Serviços',
    'Restaurantes',
    'Empresas',
    'Profissionais',
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return PROJETOS;
    return PROJETOS.filter((p) => p.categoria === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projetos" className="py-20 sm:py-28 bg-[#0B1120] relative">
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfólio & Demonstrações</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Projetos que colocam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              negócios em destaque.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Conheça alguns projetos desenvolvidos pela VitrineWeb.
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
              }`}
              id={`filter-btn-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Cards do Portfólio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((projeto) => {
            const theme = projeto.mockupTheme || {
              primaryColor: '#2563EB',
              accentColor: '#38BDF8',
              bgStyle: 'from-[#0F172A] to-[#020617]',
              tagline: 'Negócio & Serviços',
              heroHeadline: 'Presença digital profissional',
              statValue: '100%',
              statLabel: 'Responsivo',
            };

            return (
              <div
                key={projeto.id}
                className="group rounded-2xl bg-[#131C31] hover:bg-[#18233D] border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                id={`projeto-card-${projeto.id}`}
              >
                {/* Visual Mockup Superior */}
                <div className="p-4 sm:p-5 bg-[#0A101D] border-b border-slate-800/80">
                  <div className="bg-[#111A2E] rounded-xl border border-slate-700/60 overflow-hidden shadow-inner relative group-hover:scale-[1.02] transition-transform duration-300">
                    
                    {/* Top Bar */}
                    <div className="bg-[#1E293B] px-3 py-1.5 border-b border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 truncate max-w-[140px]">
                        {projeto.id}.vitrineweb.com
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium">
                        Demo
                      </span>
                    </div>

                    {/* Preview Interno do Projeto */}
                    <div className={`p-4 bg-gradient-to-b ${theme.bgStyle} min-h-[140px] flex flex-col justify-between text-white`}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold truncate">{projeto.nome}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-slate-200">
                          {theme.tagline}
                        </span>
                      </div>

                      <div className="my-2">
                        <p className="text-xs font-bold line-clamp-1" style={{ color: theme.primaryColor }}>
                          {theme.heroHeadline}
                        </p>
                        <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                          {projeto.descricao}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-white/5">
                        <span className="text-[9px] text-slate-400">Design Exclusivo</span>
                        <span className="text-[9px] font-bold text-emerald-400">● Online</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header com Nome e Tag de Projeto Demo */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                        {projeto.categoria}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {projeto.etiqueta}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {projeto.nome}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {projeto.descricao}
                    </p>

                    {/* Recursos em Destaque */}
                    {projeto.features && (
                      <div className="space-y-1.5 mb-6">
                        {projeto.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Botão de Ver Projeto */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(projeto)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800/90 hover:bg-blue-600 border border-slate-700/80 hover:border-transparent transition-all duration-200 shadow-sm"
                      id={`ver-projeto-btn-${projeto.id}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver projeto</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Modal de Detalhes do Projeto Selecionado */}
        {selectedProject && (
          <ProjectModal
            projeto={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
