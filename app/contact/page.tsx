'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-info';
import { GoogleZoneMap } from '@/components/GoogleZoneMap';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const smsDirect = `Bonjour YAL Électricité, je vous contacte : ${fullName || 'Client'} (${phone || 'sans tél'}). Besoin : ${description || 'Demande d\'intervention'}`;

  return (
    <div className="w-full bg-white selection:bg-amber-400 selection:text-neutral-950 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-neutral-950 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-neutral-950 font-medium">Contact</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Contact & Coordonnées Directes
          </h1>

          <p className="text-base text-neutral-600 leading-relaxed">
            Pour un dépannage immédiat, un conseil technique ou un devis d'installation : joignez directement {COMPANY_INFO.name}. Nous répondons 24/24 et 7j/7 sur Annemasse, Annecy, Chambéry, Grenoble, Thonon, Évian et toutes les communes voisines.
          </p>
        </div>

        {/* 4 Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Téléphone Standard */}
          <div className="p-6 rounded-2xl bg-neutral-950 text-white space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-neutral-950 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5 fill-neutral-950" />
              </div>
              <div>
                <span className="text-xs uppercase text-amber-400 tracking-wider font-semibold">Ligne Directe</span>
                <h3 className="text-base font-bold text-white mt-0.5">Appel Téléphonique</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Joignable directement pour toute question ou dépannage.
                </p>
              </div>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
              className="mt-4 block py-2.5 px-3.5 bg-neutral-900 hover:bg-neutral-800 text-amber-300 text-xs font-bold rounded-xl text-center border border-neutral-800 transition-colors"
            >
              {COMPANY_INFO.phoneOffice}
            </a>
          </div>

          {/* Card 2: Ligne SMS Direct */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-950 transition-colors space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase text-neutral-500 tracking-wider font-semibold">Réponse Rapide</span>
                <h3 className="text-base font-bold text-neutral-950 mt-0.5">Message SMS Direct</h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Envoyez un SMS directement à l'artisan avec votre adresse ou question.
                </p>
              </div>
            </div>
            <a
              href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=Bonjour%20YAL%20%C3%89lectricit%C3%A9%2C...`}
              className="mt-4 block py-2.5 px-3.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold rounded-xl text-center border border-neutral-200 transition-colors"
            >
              SMS : {COMPANY_INFO.phoneMobile}
            </a>
          </div>

          {/* Card 3: Courriel */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-950 transition-colors space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase text-neutral-500 tracking-wider font-semibold">Par Email</span>
                <h3 className="text-base font-bold text-neutral-950 mt-0.5">Courriel Électronique</h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Pour l'envoi de plans, descriptifs ou demandes administratives.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="mt-4 block py-2.5 px-3.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-semibold rounded-xl text-center border border-neutral-200 transition-colors truncate"
            >
              {COMPANY_INFO.email}
            </a>
          </div>

          {/* Card 4: Siège Réel */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-950 transition-colors space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase text-neutral-500 tracking-wider font-semibold">Adresse Réelle</span>
                <h3 className="text-base font-bold text-neutral-950 mt-0.5">Siège de l'Entreprise</h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {COMPANY_INFO.address.full}
                </p>
              </div>
            </div>
            <div className="mt-4 py-2.5 px-3 bg-neutral-50 text-xs text-neutral-700 rounded-xl border border-neutral-200 text-center font-medium">
              Annemasse, Haute-Savoie, Savoie & Isère
            </div>
          </div>
        </div>

        {/* Low-Friction Form and Reassurance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-10 shadow-sm">
            <h2 className="text-xl font-bold text-neutral-950 mb-1">Une demande particulière ?</h2>
            <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
              Remplissez simplement ces quelques informations, notre artisan vous recontacte au plus vite.
            </p>

            {sent ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Demande envoyée avec succès !</h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                  Merci {fullName || 'cher client'}. Nous vous recontactons au <strong>{phone || 'votre numéro'}</strong> dans les meilleurs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-lg"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Nom et prénom (même case) */}
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
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-colors"
                  />
                </div>

                {/* 2. Téléphone & 3. Email */}
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Description brève */}
                <div>
                  <label className="text-xs text-neutral-800 font-semibold block mb-1">
                    Description brève de votre besoin *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Décrivez brièvement votre besoin (ex : panne de disjoncteur, devis tableau, rénovation, borne de recharge...)"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-950 text-xs text-neutral-900 outline-none transition-colors"
                  />
                </div>

                {/* Submit buttons (sans glow ici) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold tracking-wide transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Envoyer ma demande</span>
                  </button>

                  <a
                    href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=${encodeURIComponent(smsDirect)}`}
                    className="w-full sm:w-auto px-5 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                    <span>Envoyer en SMS</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-neutral-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Réponse directe de l'artisan. Zéro démarchage intempestif.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Horaires & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/90 space-y-4">
              <div className="flex items-center gap-2 text-neutral-950 font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Horaires & Disponibilité</span>
              </div>

              <div className="space-y-3 text-xs text-neutral-600">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <div className="font-semibold text-neutral-900">Accueil & Prise de Rendez-vous :</div>
                  <div className="mt-1">{COMPANY_INFO.openingHours.office}</div>
                </div>

                <div className="p-3.5 bg-neutral-950 text-white rounded-xl border border-neutral-900">
                  <div className="font-semibold text-amber-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Dépannage d'Urgence :
                  </div>
                  <div className="mt-1 text-neutral-300">{COMPANY_INFO.openingHours.emergency}</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-950 text-white space-y-4 border border-neutral-900">
              <span className="text-xs uppercase text-amber-400 font-bold">Un problème urgent ?</span>
              <h3 className="text-lg font-bold text-white">Appelez directement sans attendre</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Pour une coupure totale, une odeur suspecte ou un disjoncteur qui saute, l'appel téléphonique reste le moyen le plus direct.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-neutral-950" />
                <span>Appeler le {COMPANY_INFO.phoneOffice}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regional Zones Section */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Périmètre d'Intervention
            </h2>
            <h3 className="text-2xl font-bold text-neutral-950">
              Zones Desservies & Communes Alentours
            </h3>
          </div>
          <GoogleZoneMap />
        </div>
      </div>
    </div>
  );
}
