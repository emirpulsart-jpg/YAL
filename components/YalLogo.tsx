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
  asLink = true,
}: YalLogoProps) {
  // Proportions exactes 1:1 du fichier logo envoyé (1024x1024)
  const sizeMap = {
    sm: { width: 50, height: 50 },
    md: { width: 75, height: 75 },
    lg: { width: 95, height: 95 },
    xl: { width: 120, height: 120 },
  };

  const { width, height } = sizeMap[size];

  const content = (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      {/* Affichage exact du fichier logo.png officiel */}
      <Image
        src="/logo.png"
        alt="YAL"
        width={width}
        height={height}
        priority
        unoptimized
        className="w-auto h-auto max-h-[75px] object-contain rounded-lg"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-flex items-center shrink-0" aria-label="Accueil YAL">
        {content}
      </Link>
    );
  }

  return content;
}
