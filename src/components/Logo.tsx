import React from 'react';
import { CONFIG } from '../data/vitrineData';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSlogan?: boolean;
  className?: string;
  id?: string;
}

export function Logo({
  size = 'md',
  showText = true,
  showSlogan = false,
  className = '',
  id = 'vitrineweb-logo',
}: LogoProps) {
  // Tamanhos dimensionais do círculo da logo oficial
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const logoSrc = CONFIG.logo && CONFIG.logo.trim() !== '' ? CONFIG.logo : '/logo.svg';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none bg-transparent ${className}`} id={id}>
      {/* Círculo Oficial da Logo - Sem borda branca ou moldura retangular */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 rounded-full overflow-hidden bg-transparent border-0 outline-none transition-transform duration-200 hover:scale-105 shadow-md shadow-black/50`}>
        <img
          src={logoSrc}
          alt={`${CONFIG.nome} - Logo Oficial`}
          className="w-full h-full object-contain rounded-full bg-transparent border-0 block"
          loading="eager"
        />
      </div>

      {/* Tipografia da Marca ao Lado (Opcional) */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-bold tracking-tight text-white flex items-center ${textSizes[size]}`}>
            <span className="font-extrabold text-white">Vitrine</span>
            <span className="text-[#2563EB] font-extrabold ml-0.5 group-hover:text-blue-400 transition-colors">
              Web
            </span>
          </div>
          {showSlogan && (
            <span className="text-[11px] sm:text-xs text-slate-400 tracking-normal mt-1 line-clamp-1 font-medium">
              {CONFIG.slogan}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
