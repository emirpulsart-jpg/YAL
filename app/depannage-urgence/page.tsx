import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  Zap, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-info';

const URGENCY_FAULTS = [
  {
    title: 'Disjoncteur différentiel qui saute en continu',
    description: 'Impossible de réenclencher votre disjoncteur général ou un interrupteur différentiel. Recherche de fuite de courant ou d\'appareil défectueux.',
    danger: 'Moyen',
  },
  {
    title: 'Coupure de courant totale isolée',
    description: 'Vos voisins ont de l\'électricité mais votre logement est dans le noir complet. Diagnostic d\'arrivée Enedis et tableau principal.',
    danger: 'Élevé',
  },
  {
    title: 'Odeur de plastique brûlé ou grésillement au tableau',
    description: 'Signe critique d\'un départ d\'arc électrique, d\'un bornier desserré ou d\'une surcharge imminente nécessitant une coupure d\'urgence.',
    danger: 'Critique - Coupez le général',
  },
  {
    title: 'Prise de courant brûlée ou court-circuit avec fumée',
    description: 'Mise en sécurité immédiate du circuit, isolation du départ défaillant et remplacement des appareillages calcinés.',
    danger: 'Critique',
  },
  {
    title: 'Ballon d\'eau chaude ou convecteur disjoncté',
    description: 'Court-circuit sur résistance thermoplongeuse ou défaut de thermostat. Diagnostic et remise en service rapide.',
    danger: 'Moyen',
  },
  {
    title: 'Défaut de terre ou fuite électrique sous infiltration d\'eau',
    description: 'Protection vitale des personnes contre les risques d\'électrisation dans les pièces d\'eau ou après dégât des eaux.',
    danger: 'Critique',
  },
];

export default function DepannageUrgencePage() {
  return (
    <div className="w-full bg-white selection:bg-blue-600 selection:text-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Urgent Emergency Banner */}
        <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 border border-neutral-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  Dépannage d'Urgence Immédiat
                </span>
                <span className="text-neutral-400 text-xs">
                  Délai moyen constaté : <strong className="text-cyan-400">Moins de 45 min</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Urgence Électrique 24h/24 & 7j/7 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">Un électricien en route chez vous.</span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
                Panne totale, tableau en surchauffe ou court-circuit dangereux : nous intervenons à Annemasse, Annecy, Chambéry, Grenoble, Thonon, Évian et toutes les communes voisines sans interruption.
              </p>

              {/* Direct Mega Call Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                  className="px-8 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl transition-all shadow-xl shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-3 border border-blue-400/40"
                  aria-label={`Appeler le standard dépannage ${COMPANY_INFO.phoneOffice}`}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center">
                    <Phone className="w-4 h-4 fill-white text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-wider text-blue-100 leading-none font-bold">Appel d'Urgence</span>
                    <span className="text-base font-extrabold tracking-tight leading-none mt-1">{COMPANY_INFO.phoneOffice}</span>
                  </div>
                </a>

                <a
                  href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=URGENCE%20ELECTRIQUE%20-%20Adresse%20%3A%20(indiquez%20votre%20adresse)%20-%20Nature%20panne%20%3A%20...`}
                  className="px-6 py-5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-semibold text-xs rounded-2xl transition-colors active:scale-95 flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Envoyer un SMS d'Urgence ({COMPANY_INFO.phoneMobile})</span>
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Véhicules équipés de pièces de rechange NF
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Tarifs annoncés en amont
                </span>
              </div>
            </div>

            {/* Mascot Sliding on Electrical Cable */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative aspect-[3/4] w-64 sm:w-72 rounded-3xl overflow-hidden bg-neutral-900/80 border border-neutral-800 p-3 shadow-inner flex items-center justify-center">
                <Image
                  src="/images/mascot-urgence.png"
                  alt="Mascotte YAL Électricité glissant sur un câble pour une urgence rapide"
                  fill
                  className="object-contain p-2"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Safety First Advice While Waiting */}
        <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/80 border border-blue-200/90 text-blue-950 space-y-3">
          <div className="flex items-center gap-2.5 text-blue-900 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Consignes de sécurité immédiates en attendant notre passage</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-blue-950 leading-relaxed pt-1">
            <div className="p-3 bg-white/90 rounded-xl border border-blue-200/80">
              <strong>1. Ne touchez à aucun fil dénudé :</strong> Même isolé en apparence, un conducteur peut être sous tension dangereuse.
            </div>
            <div className="p-3 bg-white/90 rounded-xl border border-blue-200/80">
              <strong>2. Coupez le disjoncteur général :</strong> Si vous sentez une odeur de chaud ou entendez un grésillement, basculez le disjoncteur principal sur OFF (0).
            </div>
            <div className="p-3 bg-white/90 rounded-xl border border-blue-200/80">
              <strong>3. Débranchez les appareils sensibles :</strong> Ordinateurs, téléviseurs ou électroménager branchés sur la ligne incriminée.
            </div>
          </div>
        </div>

        {/* Diagnostic of Common Electrical Faults */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Pannes Fréquentes
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              Quelles pannes prenons-nous en charge immédiatement ?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {URGENCY_FAULTS.map((fault, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-950 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-md bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-medium">
                      Risque : {fault.danger}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-950">{fault.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {fault.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Demander l'intervention</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Transparent Pricing Philosophy */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200/90 space-y-6">
          <div className="max-w-xl space-y-1">
            <span className="text-xs uppercase text-neutral-500 font-semibold">Transparence Totale</span>
            <h3 className="text-2xl font-bold text-neutral-950">Comment est calculé le tarif de dépannage ?</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Pas de mauvaise surprise : notre artisan vous donne le tarif forfaitaire déplacement et recherche de panne dès le premier échange téléphonique avant tout départ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
              <span className="text-xs font-bold uppercase text-neutral-400">1. Déplacement Rapide</span>
              <p className="text-xs text-neutral-600">
                Arrivée sur place avec testeurs d'isolement professionnels.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
              <span className="text-xs font-bold uppercase text-neutral-400">2. Diagnostic Précis</span>
              <p className="text-xs text-neutral-600">
                Identification claire de la source de panne (défaut différentiel, échauffement, surcharge).
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
              <span className="text-xs font-bold uppercase text-neutral-400">3. Réparation avec Accord</span>
              <p className="text-xs text-neutral-600">
                Si une pièce doit être remplacée, validation du prix avant montage.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200">
            <span className="text-xs text-neutral-600">Ligne directe joignable 24h/24</span>
            <a
              href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-neutral-800"
            >
              <Phone className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span>Appeler le {COMPANY_INFO.phoneOffice}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
