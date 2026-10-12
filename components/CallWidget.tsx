'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, X, Zap } from 'lucide-react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/company-info';

export function CallWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Widget d'appel et de contact rapide" className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Modal Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-neutral-200/80 p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0">
                <Image
                  src="/images/mascot-hero.jpg"
                  alt="Mascotte YAL Électricité"
                  fill
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-950 flex items-center gap-1.5">
                  YAL Électricité
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h4>
                <p className="text-[11px] text-neutral-500">Service direct · 24h/24 & 7j/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded-md transition-colors"
              aria-label="Fermer le volet d'appel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
            Besoin d'un dépannage immédiat ou d'un conseil pour votre installation ? Choisissez votre canal direct :
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {/* Direct Phone Call */}
            <a
              href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
              className="flex items-center justify-between px-4 py-3 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md active:scale-98 border border-neutral-800"
            >
              <span className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-bold">
                  <Phone className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
                </div>
                <span>Appeler maintenant</span>
              </span>
              <span className="text-amber-300 text-xs font-bold">{COMPANY_INFO.phoneOffice}</span>
            </a>

            {/* Direct Native SMS */}
            <a
              href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=Bonjour%20YAL%20%C3%89lectricit%C3%A9%2C%20j%27ai%20besoin%20d%27une%20intervention%20%C3%A9lectrique%20%C3%A0%20(pr%C3%A9cisez%20votre%20adresse)...`}
              className="flex items-center justify-between px-4 py-3 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 border border-neutral-200 rounded-xl text-xs font-semibold transition-all active:scale-98"
            >
              <span className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-neutral-200/80 flex items-center justify-center text-neutral-700">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>Envoyer un SMS direct</span>
              </span>
              <span className="text-neutral-700 text-xs font-bold">{COMPANY_INFO.phoneMobile}</span>
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-500">
            <span className="flex items-center gap-1 font-medium">
              <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
              Réponse instantanée
            </span>
            <span>Annemasse & Région</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Buttons */}
      <div className="flex items-center gap-2 bg-neutral-950 text-white p-1.5 rounded-full shadow-2xl border border-neutral-800 backdrop-blur-sm">
        {/* Direct Call Quick Button avec glow battement de coeur */}
        <a
          href={`tel:${COMPANY_INFO.phoneOfficeRaw}`}
          className="animate-call-heartbeat flex items-center gap-2 pl-3.5 pr-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-xs rounded-full hover:brightness-105 transition-all shadow-md active:scale-95 whitespace-nowrap border border-amber-300/40"
          aria-label={`Appeler immédiatement le ${COMPANY_INFO.phoneOffice}`}
        >
          <Phone className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
          <span>Appeler</span>
        </a>

        {/* Direct SMS Quick Button */}
        <a
          href={`sms:${COMPANY_INFO.phoneMobileRaw}?body=Bonjour%20YAL%20%C3%89lectricit%C3%A9%2C%20je%20vous%20contacte%20pour...`}
          className="flex items-center gap-1.5 px-3 py-2 text-neutral-200 hover:text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors whitespace-nowrap"
          aria-label="Envoyer un SMS direct"
        >
          <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">SMS</span>
        </a>

        {/* Details / Mascot Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-800 border border-neutral-700 flex items-center justify-center hover:border-amber-400 transition-colors"
          aria-label="Ouvrir le menu d'assistance"
        >
          <Image
            src="/images/mascot-hero.jpg"
            alt="YAL Mascotte"
            fill
            className="object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </button>
      </div>
    </aside>
  );
}
