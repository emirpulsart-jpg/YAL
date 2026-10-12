'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Clock, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-info';

interface HubZone {
  id: string;
  name: string;
  department: string;
  delay: string;
  description: string;
  communes: string[];
  popularInterventions: string[];
}

const REGIONAL_HUBS: HubZone[] = [
  {
    id: 'annemasse',
    name: 'Annemasse & Grand Genève',
    department: '74',
    delay: '20 à 30 min',
    description: 'Bassin d\'intervention prioritaire depuis notre siège réel au 4 Allée des Champs Jacquis.',
    communes: ['Annemasse', 'Ville-la-Grand', 'Gaillard', 'Ambilly', 'Vétraz-Monthoux', 'Cranves-Sales', 'Bonne', 'Saint-Julien-en-Genevois'],
    popularInterventions: ['Dépannage tableau 24/7', 'Rénovation appartement', 'Mise en conformité NFC 15-100'],
  },
  {
    id: 'annecy',
    name: 'Annecy & Bassin Annécien',
    department: '74',
    delay: '30 à 40 min',
    description: 'Déplacements quotidiens sur tout le pourtour du lac et le bassin annécien.',
    communes: ['Annecy', 'Annecy-le-Vieux', 'Seynod', 'Meythet', 'Cran-Gevrier', 'Pringy', 'Epagny-Metz-Tessy', 'Sevrier'],
    popularInterventions: ['Rénovation haut de gamme', 'Bornes de recharge IRVE', 'Éclairage architectural LED'],
  },
  {
    id: 'chambery',
    name: 'Chambéry & Savoie',
    department: '73',
    delay: '35 à 45 min',
    description: 'Couverture intégrale de l\'agglomération chambérienne et de l\'axe Aix-les-Bains.',
    communes: ['Chambéry', 'Aix-les-Bains', 'La Motte-Servolex', 'Bassens', 'Challes-les-Eaux', 'Cognin', 'Le Bourget-du-Lac'],
    popularInterventions: ['Dépannage urgent', 'Tableau électrique neuf', 'Chauffage électrique & domotique'],
  },
  {
    id: 'grenoble',
    name: 'Grenoble & Métropole',
    department: '38',
    delay: '40 à 50 min',
    description: 'Présence régulière sur la cuvette grenobloise et le Grésivaudan pour logements et locaux pro.',
    communes: ['Grenoble', 'Échirolles', 'Saint-Martin-d\'Hères', 'Meylan', 'Fontaine', 'Seyssinet-Pariset', 'Voiron'],
    popularInterventions: ['Installation tertiaire & pro', 'Mise en sécurité logement', 'Diagnostic électrique'],
  },
  {
    id: 'thonon',
    name: 'Thonon-les-Bains & Chablais',
    department: '74',
    delay: '30 à 45 min',
    description: 'Ligne directe dédiée pour les résidences et commerces du littoral lémanique.',
    communes: ['Thonon-les-Bains', 'Douvaine', 'Sciez', 'Allinges', 'Publier', 'Anthy-sur-Léman', 'Bons-en-Chablais'],
    popularInterventions: ['Dépannage d\'urgence', 'Rénovation maison & villa', 'Raccordements basse tension'],
  },
  {
    id: 'evian',
    name: 'Évian-les-Bains & Rive Lémanique',
    department: '74',
    delay: '35 à 50 min',
    description: 'Prestations soignées pour l\'ensemble du pays d\'Évian et le plateau de Gavot.',
    communes: ['Évian-les-Bains', 'Neuvecelle', 'Lugrin', 'Maxilly-sur-Léman', 'Saint-Paul-en-Chablais', 'Féternes'],
    popularInterventions: ['Appareillage de prestige', 'Remise aux normes', 'Dépannage 24h/24'],
  },
];

export function GoogleZoneMap() {
  const [activeHub, setActiveHub] = useState<HubZone>(REGIONAL_HUBS[0]);

  return (
    <div className="w-full bg-white rounded-3xl border border-neutral-200/90 shadow-sm overflow-hidden">
      {/* Reassurance Header Bar */}
      <div className="bg-neutral-950 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-800">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              Artisan de Proximité
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible 24h/24 & 7j/7
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            {COMPANY_INFO.name}
            <span className="text-xs font-normal text-neutral-400">· Haute-Savoie, Savoie & Isère</span>
          </h3>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-amber-400 font-bold">{COMPANY_INFO.googleRating} ★</span>
            <span className="text-neutral-400">Note d'excellence</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-300">Siège : {COMPANY_INFO.address.city} (74100)</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
            className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <Phone className="w-4 h-4 fill-neutral-950" />
            <span>Appeler : {COMPANY_INFO.phoneOffice}</span>
          </a>
        </div>
      </div>

      {/* Crucial Multi-Zone Clarification Banner */}
      <div className="bg-amber-50 border-b border-amber-200/80 px-6 sm:px-8 py-3.5 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-start sm:items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Zones desservies :</strong> Grenoble, Annecy, Chambéry, Annemasse, Thonon, Évian — <span className="font-semibold text-amber-900">ainsi que toutes les villes, agglomérations et communes situées autour et entre ces secteurs.</span>
          </p>
        </div>
        <span className="text-[11px] font-semibold text-amber-800 shrink-0 uppercase tracking-wider">
          Déplacement rapide
        </span>
      </div>

      {/* Interactive Hub Grid Selector */}
      <div className="p-6 sm:p-8 bg-neutral-50/40 border-b border-neutral-100">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
            Sélectionnez votre secteur géographique :
          </h4>
          <span className="text-xs text-neutral-500 hidden sm:inline">6 grands pôles & communes voisines</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {REGIONAL_HUBS.map((hub) => {
            const isSelected = activeHub.id === hub.id;
            return (
              <button
                key={hub.id}
                onClick={() => setActiveHub(hub)}
                className={`p-3 rounded-xl border text-left transition-all text-xs flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-md ring-1 ring-amber-400/40'
                    : 'bg-white text-neutral-800 border-neutral-200/80 hover:border-neutral-400'
                }`}
              >
                <div>
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold mb-1.5 ${
                    isSelected ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-100 text-neutral-700'
                  }`}>
                    {hub.department}
                  </span>
                  <div className="font-semibold text-xs leading-snug line-clamp-1">
                    {hub.name.split(' & ')[0]}
                  </div>
                </div>
                <div className={`mt-2 text-[10px] ${isSelected ? 'text-amber-300 font-medium' : 'text-neutral-500'}`}>
                  {hub.delay}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hub Detail Panel (Elegant Luxury Editorial Layout - No fake radar or GPS) */}
      <div className="p-6 sm:p-10 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Sector Details & Communes */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">
                Pôle Actif ({activeHub.department})
              </span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Intervention sous {activeHub.delay}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              {activeHub.name}
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {activeHub.description} Notre électricien intervient sur le centre-ville ainsi que dans toutes les localités périphériques et axes intermédiaires.
            </p>
          </div>

          {/* Communes List Pill Grid */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-800">
              Communes & agglomérations couvertes sur ce secteur :
            </div>
            <div className="flex flex-wrap gap-2">
              {activeHub.communes.map((commune, cIdx) => (
                <span
                  key={cIdx}
                  className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-medium transition-colors"
                >
                  {commune}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg text-xs font-medium">
                + Toutes localités environnantes
              </span>
            </div>
          </div>

          {/* Frequent Interventions */}
          <div className="space-y-2.5 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-800">
              Interventions fréquentes dans cette zone :
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeHub.popularInterventions.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-xs text-neutral-700 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Direct Conversion Card with Clear CTA */}
        <div className="lg:col-span-5 bg-neutral-950 text-white p-6 sm:p-8 rounded-2xl border border-neutral-900 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>BESOIN D'UN ÉLECTRICIEN SUR CE SECTEUR ?</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Intervention rapide à {activeHub.name.split(' & ')[0]}
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Nous envoyons un artisan équipé de matériel normé NF. Réponse immédiate au téléphone ou par SMS.
            </p>
          </div>

          <div className="space-y-3 pt-1">
            <a
              href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 fill-neutral-950" />
              <span>Appeler le {COMPANY_INFO.phoneOffice}</span>
            </a>

            <a
              href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=Bonjour%20YAL%20%C3%89lectricit%C3%A9%2C%20je%20suis%20situ%C3%A9%20%C3%A0%20${encodeURIComponent(activeHub.name.split(' & ')[0])}%20et%20je%20souhaite%20une%20intervention%20pour...`}
              className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Envoyer un SMS direct</span>
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-3 text-[11px] text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Arrivée : {activeHub.delay}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Décennale AXA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
