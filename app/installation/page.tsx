import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Phone, 
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-info';

const INSTALLATION_SERVICES = [
  {
    title: 'Tableaux Électriques & Coffrets de Protection',
    description: 'Pose, modernisation et remplacement complet de tableaux avec disjoncteurs différentiels 30mA, parafoudres et répartiteurs modulaires certifiés NF.',
    features: ['Marques partenaires : Schneider, Legrand, Hager', 'Protection différentielle haute sensibilité', 'Repérage clair de tous les circuits'],
  },
  {
    title: 'Distribution Neuf & Colonnes Montantes',
    description: 'Conception intégrale de l\'infrastructure électrique pour logements neufs, locaux professionnels, boutiques et immeubles collectifs.',
    features: ['Calculs de sections de câbles optimisés', 'Conformité stricte Consuel & NFC 15-100', 'Passage de gaines encastrées sécurisées'],
  },
  {
    title: 'Bornes de Recharge Véhicules Électriques (IRVE)',
    description: 'Installation certifiée IRVE de bornes murales (Wallbox 7kW à 22kW) pour particuliers en maison, copropriétés et flottes d\'entreprises.',
    features: ['Éligible aux aides de l\'État (Crédit d\'impôt & Advenir)', 'Délestage dynamique intelligent', 'Protection parafoudre dédiée'],
  },
  {
    title: 'Domotique & Gestion d\'Énergie Connectée',
    description: 'Pilotage centralisé du chauffage, des éclairages et des ouvrants par smartphone ou interrupteurs connectés pour maximiser votre confort.',
    features: ['Protocoles fiables (KNX, Zigbee, Legrand Netatmo)', 'Optimisation de la consommation énergétique', 'Scénarios automatisés personnalisés'],
  },
];

export default function InstallationPage() {
  return (
    <div className="w-full bg-white selection:bg-amber-400 selection:text-neutral-950 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-neutral-950 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-neutral-950 font-medium">Installation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Installations Électriques Neuves & Mise aux Normes
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            De la pose d'un tableau électrique sécurisé à l'équipement complet d'immeubles tertiaires et résidentiels, {COMPANY_INFO.name} garantit un dimensionnement irréprochable et durable sur Annemasse, la Haute-Savoie, la Savoie et l'Isère.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-800">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Garantie Décennale AXA
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <Award className="w-4 h-4 text-amber-600" />
              Agrément Qualifelec
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <Zap className="w-4 h-4 text-amber-600" />
              Attestation Consuel
            </span>
          </div>
        </div>

        {/* Feature Hero Image : Smart Network */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md">
          <Image
            src="/images/smart-network.jpg"
            alt="Ingénierie des installations électriques et colonnes connectées"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-xl">
              <div className="text-amber-400 text-xs uppercase tracking-wider mb-1 font-bold">Architecture Basse Tension</div>
              <h2 className="text-xl sm:text-2xl font-bold">Infrastructures électriques fiables pour les décennies à venir</h2>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Prestations d'Installation
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              Nos domaines d'expertise technique
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSTALLATION_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-950 hover:shadow-lg transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-neutral-950">{srv.title}</h4>
                  <span className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {srv.description}
                </p>
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase text-amber-400 font-bold">Méthodologie de Travail</span>
            <h3 className="text-2xl font-bold text-white">Comment se déroule votre chantier d'installation ?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2 p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-amber-400 font-bold text-lg">01. Étude & Devis</span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Visite technique ou analyse de plans pour quantifier les besoins de puissance, le nombre de départs et la conformité.
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-amber-400 font-bold text-lg">02. Pose & Raccordement</span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Pose rigoureuse des gaines, appareillages et protections avec du matériel certifié de constructeurs leaders.
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-amber-400 font-bold text-lg">03. Tests & Réception</span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Mesure de boucle de terre, test des différentiels au déclencheur calibré et remise du dossier de conformité.
              </p>
            </div>
          </div>
        </div>

        {/* Action Call Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
          <div>
            <h4 className="text-lg font-bold text-neutral-950">Vous avez un projet d'installation ?</h4>
            <p className="text-xs text-neutral-600 mt-1">Obtenez un chiffrage précis et gratuit sous 24h ouvrées.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/devis-rendez-vous"
              className="w-full sm:w-auto px-5 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl text-center"
            >
              Demander un devis
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
              className="w-full sm:w-auto px-5 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold rounded-xl text-center border border-amber-300/40"
            >
              Appel direct : {COMPANY_INFO.phoneOffice}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
