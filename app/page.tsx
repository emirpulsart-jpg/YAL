import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Clock, 
  Star, 
  CheckCircle, 
  Layers, 
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-info';
import { GoogleZoneMap } from '@/components/GoogleZoneMap';

export default function HomePage() {
  return (
    <div className="w-full bg-white selection:bg-blue-600 selection:text-white">
      {/* HERO SECTION : Ultra-aérée, style luxe épuré */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle architectural luxury aura */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-neutral-100/60 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column : Editorial High-Luxury Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Kicker : 4.9 étoiles (conservé en jaune pour avis Google) */}
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 font-medium">
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  4,9 Étoiles
                </span>
                <span className="text-neutral-300">·</span>
                <span>Artisan Électricien Recommandé</span>
                <span className="text-neutral-300">·</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Disponible 24h/24 & 7j/7
                </span>
              </div>

              {/* Main Headline avec dégradé bleu stylé */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.08] text-balance">
                L’électricité de précision. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Haute exigence & Urgence 24/7.
                </span>
              </h1>

              {/* Airy Subtitle */}
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed font-normal">
                {COMPANY_INFO.name} réinvente le service d’artisan électricien : des interventions soignées, des devis transparents et une présence rapide à Annemasse, Annecy, Chambéry, Grenoble, Thonon, Évian ainsi que toutes les communes autour et entre.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/devis-rendez-vous"
                  className="px-6 py-4 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-2.5 group"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Devis & Rendez-vous en ligne</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                  className="px-6 py-4 bg-blue-50 hover:bg-blue-100 text-blue-950 border border-blue-200/90 rounded-xl text-sm font-bold tracking-wide transition-all active:scale-98 flex items-center justify-center gap-2.5"
                  aria-label={`Appeler le ${COMPANY_INFO.phoneOffice}`}
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Phone className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                  <span>Appel Immédiat : {COMPANY_INFO.phoneOffice}</span>
                </a>
              </div>

              {/* Clean Reassurance Checklist */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neutral-950 shrink-0" />
                  <span>Arrivée en moins de 45 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neutral-950 shrink-0" />
                  <span>Garantie Décennale AXA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neutral-950 shrink-0" />
                  <span>Devis Gratuit & Sans Surprise</span>
                </div>
              </div>
            </div>

            {/* Right Column : Authentic Mascot & Visual Anchor */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Luxury Frame Container */}
              <div className="relative w-full max-w-md bg-gradient-to-b from-neutral-50 to-neutral-100/70 p-4 sm:p-6 rounded-3xl border border-neutral-200/80 shadow-sm">
                {/* Mascot image */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white shadow-inner flex items-center justify-center">
                  <Image
                    src="/images/mascot-hero.jpg"
                    alt="Mascotte officielle YAL Électricité avec casque bleu et ceinture d'outils"
                    fill
                    priority
                    className="object-contain p-2"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Architectural Badge 1 */}
                <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-neutral-950 text-white px-4 py-3 rounded-2xl shadow-xl border border-neutral-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Dépannage Express</div>
                    <div className="text-xs font-bold text-white">24h/24 & 7j/7 sur appel</div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -top-3 -right-2 sm:-right-4 bg-white text-neutral-900 px-3.5 py-2.5 rounded-xl shadow-lg border border-neutral-200/80 flex items-center gap-2 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Norme NFC 15-100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 PAGES PORTALS : Distinct Dedicated Pages Navigation */}
      <section className="py-20 bg-neutral-50/50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-600">
              Domaines d'Intervention Spécialisés
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight text-balance">
              Une page dédiée pour chaque besoin électrique
            </p>
            <p className="text-sm text-neutral-600">
              Accédez directement à la page détaillée, aux informations techniques et aux demandes de rendez-vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Devis & Rendez-vous */}
            <Link
              href="/devis-rendez-vous"
              className="group bg-white p-6 rounded-2xl border border-neutral-200/80 hover:border-neutral-950 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-blue-400 text-neutral-900 flex items-center justify-center transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                    Devis & Rendez-vous
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                    Bloquez votre créneau d'intervention ou demandez un chiffrage rapide pour vos travaux.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">
                <span>Accéder à la page</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </div>
            </Link>

            {/* 2. Installation */}
            <Link
              href="/installation"
              className="group bg-white p-6 rounded-2xl border border-neutral-200/80 hover:border-neutral-950 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-blue-400 text-neutral-900 flex items-center justify-center transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                    Installation Neuve
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                    Tableaux électriques, distribution tertiaire, bornes de recharge pour véhicules électriques et domotique.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">
                <span>Découvrir nos installations</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </div>
            </Link>

            {/* 3. Rénovation */}
            <Link
              href="/renovation"
              className="group bg-white p-6 rounded-2xl border border-neutral-200/80 hover:border-neutral-950 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-blue-400 text-neutral-900 flex items-center justify-center transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                    Rénovation de Prestige
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                    Remise aux normes NFC 15-100, appareillage encastré invisible et éclairage architectural sur mesure.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">
                <span>Voir les rénovations</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </div>
            </Link>

            {/* 4. Dépannage & Urgence */}
            <Link
              href="/depannage-urgence"
              className="group bg-neutral-950 text-white p-6 rounded-2xl border border-neutral-900 hover:border-blue-500 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">24h/24 & 7j/7</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Dépannage & Urgence
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                    Court-circuit, disjoncteur qui saute ou coupure générale. Électricien chez vous en moins de 45 minutes.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-blue-400 relative z-10">
                <span>Urgence immédiate</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION LUXE & INGÉNIERIE */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual smart building network image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <Image
                  src="/images/smart-network.jpg"
                  alt="Schéma d'ingénierie électrique connecté intelligent YAL"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                <span>Réseaux basse tension & colonnes d'immeubles</span>
                <span className="text-blue-400 font-semibold">100% Certifié Qualifelec</span>
              </div>
            </div>

            {/* Editorial copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Savoir-Faire Artisanal & Résidentiel
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Une sécurité sans compromis pour votre habitat et vos locaux.
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Appartement, maison individuelle ou locaux professionnels : chaque installation posée par {COMPANY_INFO.name} respecte scrupuleusement la réglementation NFC 15-100 avec des composants fiables et certifiés NF.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-2xl font-bold text-white">45 min</div>
                  <div className="text-xs text-neutral-400 mt-1">Délai moyen d’arrivée en urgence</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-2xl font-bold text-blue-400">10 Ans</div>
                  <div className="text-xs text-neutral-400 mt-1">Garantie Décennale AXA</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/installation"
                  className="px-5 py-3 bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-bold rounded-lg transition-colors text-center"
                >
                  Nos prestations d'installation
                </Link>
                <Link
                  href="/renovation"
                  className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs font-semibold rounded-lg transition-colors text-center"
                >
                  Projets de rénovation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION GOOGLE MAP & ZONES D'INTERVENTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Zones Couvertes & Communes Proches
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight">
              Où intervient YAL Électricité ?
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Artisan électricien itinérant, nous intervenons directement chez vous à <strong>Annemasse, Annecy, Chambéry, Grenoble, Thonon, Évian</strong> ainsi que toutes les communes intermédiaires et agglomérations situées entre ces villes.
            </p>
          </div>

          <GoogleZoneMap />
        </div>
      </section>

      {/* FINAL AIRY LUXURY CTA STRIP */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                Contact Direct Sans Attente
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Un projet d'installation ou une urgence électrique ?
              </h3>
              <p className="text-sm text-neutral-400">
                Notre électricien vous répond directement, analyse votre situation et vous transmet une estimation transparente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                className="w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg text-center flex items-center justify-center gap-2 border border-blue-400/40"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Appel : {COMPANY_INFO.phoneOffice}</span>
              </a>
              <Link
                href="/devis-rendez-vous"
                className="w-full sm:w-auto px-6 py-4 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-semibold text-xs rounded-xl transition-colors text-center"
              >
                Prendre rendez-vous en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
