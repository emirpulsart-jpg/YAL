import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-info';

const RENOVATION_PILLARS = [
  {
    title: 'Rénovation Électrique Totale Invisible',
    description: 'Remplacement intégral des conducteurs vétustes, saignées minutieuses sans dégrader les moulures ou boiseries d\'époque, et intégration discrète sous plinthes ou faux plafonds.',
  },
  {
    title: 'Appareillages Haut de Gamme & Finitions Luxe',
    description: 'Pose d\'interrupteurs et prises haut de gamme en laiton massif, acier brossé ou noir mat (Meljac, Fontini, Jung, Legrand Céliane) parfaitement alignés au laser.',
  },
  {
    title: 'Éclairage Architectural & Ambiances Lumineuses',
    description: 'Intégration de gorges lumineuses LED indirectes, spots encastrés basse luminance anti-éblouissement, variateurs de température Kelvin et scénarios d\'éclairage personnalisés.',
  },
  {
    title: 'Remise en Conformité Stricte NFC 15-100',
    description: 'Suppression définitive des risques d\'électrisation, mise à la terre calibrée, circuits dédiés pour l\'électroménager moderne et attestation de conformité remise au propriétaire.',
  },
];

export default function RenovationPage() {
  return (
    <div className="w-full bg-white selection:bg-blue-600 selection:text-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Titles */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-neutral-950 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-neutral-950 font-medium">Rénovation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Rénovation Électrique Haut de Gamme & Patrimoine
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Pour les appartements de caractère, villas d'architecte et rénovations d'envergure : nous allions discrétion visuelle absolue, sécurité maximale et appareillages de prestige sur Annemasse et l'ensemble de la région.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-800">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Garantie Décennale 10 Ans
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Finitions Soignées & Alignement Laser
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <span>Norme NFC 15-100</span>
            </span>
          </div>
        </div>

        {/* Hero Renovation Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md">
            <Image
              src="/images/renovation-luxe.jpg"
              alt="Intérieur raffiné avec interrupteurs design et éclairage architectural YAL"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Le Savoir-Faire Artisanal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 leading-tight">
              Une électricité qui sublime l'architecture de votre bien.
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Une rénovation réussie ne laisse rien transparaître : aucun câble apparent, des saignées invisibles rebouchées dans les règles de l'art, et une intégration millimétrée au design de vos pièces de réception et espaces privés.
            </p>

            <ul className="space-y-3 pt-2 text-xs text-neutral-800">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Protection des parquets anciens, moulures et menuiseries lors du chantier.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Plans d'implantation précis et repérage systématique sur plan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Nettoyage soigné du chantier chaque soir.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/devis-rendez-vous"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md"
              >
                <span>Planifier une visite technique d'évaluation</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Exigences & Engagements
            </h3>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              Les piliers de nos chantiers de rénovation
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RENOVATION_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-950 hover:shadow-lg transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-bold text-neutral-950">{pillar.title}</h5>
                  <span className="text-blue-500 text-sm font-bold">0{idx + 1}</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Typologies */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase text-blue-400 font-bold">Typologies de Biens</span>
            <h3 className="text-2xl font-bold text-white">Nous intervenons sur tous types de projets</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <h5 className="text-sm font-bold text-white">Appartements de Caractère</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Remplacement des installations vétustes, reprise de terre et tableaux dissimulés.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <h5 className="text-sm font-bold text-white">Maisons Individuelles & Chalets</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Création de lignes extérieures, gestion de terrasses éclairées et distribution multi-niveaux.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <h5 className="text-sm font-bold text-white">Boutiques & Espaces Professionnels</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Éclairage soigné, conformité ERP pour le public et sécurité renforcée.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
          <div>
            <h4 className="text-lg font-bold text-neutral-950">Discutons de votre projet de rénovation</h4>
            <p className="text-xs text-neutral-600 mt-1">Devis détaillé et visite de faisabilité sans engagement.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/devis-rendez-vous"
              className="w-full sm:w-auto px-5 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl text-center"
            >
              Demander un chiffrage
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
              className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl text-center border border-blue-400/30 shadow-md"
            >
              Appel direct : {COMPANY_INFO.phoneOffice}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
