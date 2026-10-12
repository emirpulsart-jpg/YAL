'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-info';

const INTERVENTIONS = [
  { 
    id: 'devis-rdv', 
    title: 'Devis & Rendez-vous', 
    badge: 'Chiffrage gratuit',
    icon: Calendar,
    description: 'Étude technique sur mesure pour votre projet'
  },
  { 
    id: 'installation', 
    title: 'Installation', 
    badge: 'Neuf & Tertiaire',
    icon: Layers,
    description: 'Tableaux électriques, distribution & bornes IRVE'
  },
  { 
    id: 'renovation', 
    title: 'Rénovation', 
    badge: 'Prestige & Norme',
    icon: Sparkles,
    description: 'Remise en sécurité NFC 15-100 & appareillages luxe'
  },
  { 
    id: 'depannage-urgence', 
    title: 'Dépannage & Urgence', 
    badge: '24h/24 & 7j/7',
    icon: Zap,
    description: 'Coupure, court-circuit, disjoncteur différentiel'
  },
];

export default function DevisRendezVousPage() {
  const [selectedIntervention, setSelectedIntervention] = useState('Devis & Rendez-vous');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const smsText = `Bonjour YAL Électricité, je souhaite un devis / RDV pour : ${selectedIntervention}. Contact : ${fullName} (${phone}). Besoin : ${description || 'Demande d\'intervention'}.`;

  return (
    <div className="w-full bg-white selection:bg-amber-400 selection:text-neutral-950 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-neutral-950 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-neutral-950 font-medium">Devis & Rendez-vous</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Devis & Prise de Rendez-vous
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Choisissez votre type d'intervention et renseignez vos coordonnées. Notre artisan vous recontacte rapidement avec une proposition claire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Simplified Low-Friction Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-neutral-950">Demande validée avec succès !</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Merci {fullName || 'cher client'}. Notre technicien YAL Électricité a reçu votre demande pour <strong>{selectedIntervention}</strong> et vous contacte très vite au <strong>{phone || 'votre numéro'}</strong>.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                    className="px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 border border-neutral-800"
                  >
                    <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Appeler directement au {COMPANY_INFO.phoneOffice}</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl"
                  >
                    Nouvelle demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* 1. Only the 4 Requested Interventions */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                    Type d'intervention
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {INTERVENTIONS.map((item) => {
                      const active = selectedIntervention === item.title;
                      const Icon = item.icon;
                      return (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setSelectedIntervention(item.title)}
                          className={`p-4 rounded-xl border text-left transition-all text-xs flex flex-col justify-between ${
                            active
                              ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                              : 'border-neutral-200 hover:border-neutral-400 text-neutral-800 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Icon className={`w-5 h-5 ${active ? 'text-amber-400' : 'text-neutral-700'}`} />
                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                              active ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-100 text-neutral-600'
                            }`}>
                              {item.badge}
                            </span>
                          </div>
                          <div>
                            <span className="font-bold text-sm block">{item.title}</span>
                            <span className={`text-[11px] mt-0.5 block ${active ? 'text-neutral-300' : 'text-neutral-500'}`}>
                              {item.description}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Coordonnées de contact (identiques à contact : Nom et prénom même case, mail, tel, description) */}
                <div className="space-y-4 pt-2 border-t border-neutral-100">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                    Vos coordonnées
                  </label>

                  {/* Nom et Prénom dans la même case */}
                  <div>
                    <label className="text-xs text-neutral-800 font-semibold block mb-1">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-neutral-800 font-semibold block mb-1">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="07 XX XX XX XX"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-800 font-semibold block mb-1">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jean.dupont@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-800 font-semibold block mb-1">
                      Description brève de votre besoin *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Décrivez en quelques mots votre demande (ville, type de panne ou de travaux)..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Submit Actions (sans effet glow ici) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold tracking-wide transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Envoyer ma demande ({selectedIntervention})</span>
                  </button>

                  <a
                    href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=${encodeURIComponent(smsText)}`}
                    className="w-full sm:w-auto px-5 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                    <span>Envoyer en SMS direct</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-neutral-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Devis gratuit, sans engagement. Réponse rapide assurée.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Authentic Mascot Taking Notes & Trust Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {/* Mascot Devis Card */}
            <div className="bg-gradient-to-b from-neutral-50 to-neutral-100/60 p-6 rounded-3xl border border-neutral-200/80 flex flex-col items-center text-center">
              <div className="relative aspect-[3/4] w-56 rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center mb-4">
                <Image
                  src="/images/mascot-devis.jpg"
                  alt="Mascotte YAL Électricité prenant des notes pour un devis"
                  fill
                  className="object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-neutral-950">
                  L'Engagement Clarté YAL
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
                  Chaque chiffrage détaille précisément le matériel normé, la main d'œuvre qualifiée et le délai d'exécution. Aucun frais caché.
                </p>
              </div>

              <div className="mt-5 w-full pt-4 border-t border-neutral-200/80 flex items-center justify-around text-xs font-semibold text-neutral-800">
                <span>0€ Frais de dossier</span>
                <span className="text-neutral-300">·</span>
                <span>Réponse rapide</span>
                <span className="text-neutral-300">·</span>
                <span>Prix fermes</span>
              </div>
            </div>

            {/* Direct Phone Assistance Pod */}
            <div className="bg-neutral-950 text-white p-6 rounded-2xl border border-neutral-900 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                <Phone className="w-4 h-4 fill-amber-400" />
                <span>VOUS PRÉFÉREZ ÉCHANGER DIRECTEMENT ?</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Notre artisan électricien est joignable sans intermédiaire pour répondre à vos questions et organiser votre intervention.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Appeler le {COMPANY_INFO.phoneOffice}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
