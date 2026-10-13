'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import { YalLogo } from './YalLogo';
import { COMPANY_INFO } from '@/lib/company-info';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Devis & Rendez-vous', href: '/devis-rendez-vous' },
    { label: 'Installation', href: '/installation' },
    { label: 'Rénovation', href: '/renovation' },
    { label: 'Dépannage & Urgence', href: '/depannage-urgence', isEmergency: true },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-colors">
      {/* Top micro reassurance banner */}
      <div className="bg-neutral-950 text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300">Électricien disponible 24h/24 · Intervention sous 45 min</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Garantie Décennale AXA
            </span>
            <span className="text-neutral-600">·</span>
            <span>Annemasse, Annecy, Chambéry, Grenoble & Régions</span>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Uniquement le logo Yal d'origine */}
        <div className="flex items-center">
          <YalLogo size="md" />
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors whitespace-nowrap ${
                  active
                    ? 'text-neutral-950 font-bold'
                    : 'text-neutral-600 hover:text-neutral-950'
                } ${link.isEmergency ? 'text-amber-600 hover:text-amber-700' : ''}`}
              >
                <span className="flex items-center gap-1.5">
                  {link.isEmergency && <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
                  {link.label}
                </span>
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-950 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Direct Phone Call Action on Desktop (clean luxury styling, no glow) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
            className="group flex items-center gap-2.5 px-4 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 border border-neutral-800"
            aria-label={`Appeler le ${COMPANY_INFO.phoneOffice}`}
          >
            <div className="w-7 h-7 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-bold">
              <Phone className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] text-amber-300 font-medium">Appel Direct</span>
              <span className="font-bold text-white tracking-normal text-xs">{COMPANY_INFO.phoneOffice}</span>
            </div>
          </a>
        </div>

        {/* Mobile & Tablet Right Actions: Only Phone Icon next to Burger Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
            className="p-2.5 bg-neutral-950 text-amber-400 rounded-xl flex items-center justify-center active:scale-95 border border-neutral-800"
            aria-label="Appeler maintenant"
          >
            <Phone className="w-4 h-4 fill-amber-400 text-amber-400" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg focus:outline-none"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-neutral-100 text-neutral-950 font-bold'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isEmergency && <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />}
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-950 text-white rounded-xl text-sm font-bold active:scale-98"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
              Appeler le {COMPANY_INFO.phoneOffice}
            </a>
            <a
              href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=Bonjour%20YAL%20%C3%89lectricit%C3%A9%2C%20je%20souhaite%20des%20renseignements%20pour...`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-xl text-sm font-semibold active:scale-98"
            >
              Envoyer un SMS rapide ({COMPANY_INFO.phoneMobile})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
