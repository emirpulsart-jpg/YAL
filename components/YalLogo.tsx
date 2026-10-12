'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface YalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  asLink?: boolean;
}

export function YalLogo({
  className = '',
  size = 'md',
  showSubtitle = false,
  asLink = true,
}: YalLogoProps) {
  // Proportions exactes 1:1 carrées sans aucune déformation (object-contain)
  const sizeMap = {
    sm: { width: 48, height: 48, text: 'text-[9px] tracking-[0.25em]' },
    md: { width: 68, height: 68, text: 'text-[11px] tracking-[0.28em]' },
    lg: { width: 92, height: 92, text: 'text-[13px] tracking-[0.3em]' },
    xl: { width: 128, height: 128, text: 'text-[15px] tracking-[0.35em]' },
  };

  const { width, height, text } = sizeMap[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      {/* Affichage direct et pur du fichier logo d'origine sans distorsion */}
      <div 
        className="relative shrink-0 flex items-center justify-center aspect-square"
        style={{ width, height }}
      >
        <Image
          src="/logo.png"
          alt="Logo YAL"
          width={width}
          height={height}
          priority
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
          referrerPolicy="no-referrer"
        />
      </div>

      {showSubtitle && (
        <div className="flex flex-col justify-center">
          <span className="font-extrabold text-neutral-950 tracking-tight text-lg leading-none">
            YAL
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`font-semibold uppercase text-neutral-800 ${text} leading-none`}>
              ÉLECTRICITÉ
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm" />
          </div>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-block" aria-label="Retour à l'accueil YAL Électricité">
        {content}
      </Link>
    );
  }

  return content;
}
