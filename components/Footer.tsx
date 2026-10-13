'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { YalLogo } from './YalLogo';
import { COMPANY_INFO } from '@/lib/company-info';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-neutral-100 text-neutral-900 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-100">
          {/* Col 1 & 2: Brand identity & statement */}
          <div className="lg:col-span-2 space-y-4">
            <YalLogo size="md" />
            <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
              Entreprise artisanale spécialisée dans l'électricité générale, la rénovation soignée et le dépannage 24/24 et 7j/7 basée à Annemasse.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                Garantie Décennale AXA
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded text-xs font-medium">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                Norme NFC 15-100
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded text-xs font-medium">
                Qualifelec
              </span>
            </div>
          </div>

          {/* Col 3: Navigation pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/devis-rendez-vous" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  Devis & Rendez-vous
                </Link>
              </li>
              <li>
                <Link href="/installation" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/renovation" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  Rénovation
                </Link>
              </li>
              <li>
                <Link href="/depannage-urgence" className="text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-1 text-amber-700 font-medium">
                  Dépannage & Urgence 24/7
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Zones d'intervention réelles */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Zones Desservies
            </h3>
            <ul className="space-y-1.5 text-sm text-neutral-600">
              <li>Annemasse (74)</li>
              <li>Annecy (74)</li>
              <li>Chambéry (73)</li>
              <li>Grenoble (38)</li>
              <li>Thonon-les-Bains (74)</li>
              <li>Évian-les-Bains (74)</li>
              <li className="pt-2 text-xs font-semibold text-neutral-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Et toutes les villes & communes autour et entre ces secteurs</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Coordonnées directes & Ligne Thonon / Évian */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Lignes Directes
            </h3>
            <div className="space-y-2.5 text-xs text-neutral-600">
              <a
                href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                className="flex items-center gap-2 text-neutral-950 font-bold hover:text-amber-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Appel : {COMPANY_INFO.phoneOffice}</span>
              </a>

              {/* Ligne directe Thonon & Évian */}
              <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-1">
                <div className="text-[11px] font-bold text-neutral-900 flex items-center gap-1">
                  <span>Secteur Thonon & Évian :</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 fill-amber-700" />
                  <span>{COMPANY_INFO.phoneOffice}</span>
                </a>
              </div>

              <a
                href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=Bonjour%20YAL%20%C3%89lectricit%C3%A9...`}
                className="flex items-center gap-2 hover:text-neutral-950 transition-colors"
              >
                <span className="text-amber-500 font-bold">SMS :</span>
                <span className="font-semibold text-neutral-900">{COMPANY_INFO.phoneMobile}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-neutral-950 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-neutral-600">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Novaris Studio credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>{COMPANY_INFO.address.full}</span>
            <a
              href="https://novaris-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-950 font-medium transition-colors flex items-center gap-1"
            >
              <span>Site développé par novaris-studio.com</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <Link href="/contact" className="hover:text-neutral-700 transition-colors">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
