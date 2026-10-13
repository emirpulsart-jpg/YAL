/**
 * YAL Électricité - Informations de l'entreprise
 * 
 * Modifiez facilement ces coordonnées selon vos besoins.
 * Le reste du site se met à jour automatiquement partout.
 */
export const COMPANY_INFO = {
  name: "YAL Électricité",
  shortName: "YAL",
  tagline: "Artisan Électricien Qualifié · 24h/24 & 7j/7 · Dépannage & Installations de Prestige",
  
  // Coordonnées téléphoniques & SMS
  phoneOffice: "06 09 69 42 01",
  phoneOfficeRaw: "+33609694201",
  phoneMobile: "06 09 69 42 01",
  phoneMobileRaw: "+33609694201",
  
  // Adresse email
  email: "elec@yal-one.com",
  
  // Adresse physique réelle
  address: {
    street: "4 Allée des Champs Jacquis",
    zipCode: "74100",
    city: "Annemasse",
    region: "Haute-Savoie",
    country: "France",
    full: "4 Allée des Champs Jacquis, 74100 Annemasse",
  },
  
  // Rayon & Zones desservies
  interventionZone: {
    primary: "Grenoble, Annecy, Chambéry, Annemasse, Thonon, Évian",
    cities: [
      "Annemasse",
      "Annecy",
      "Chambéry",
      "Grenoble",
      "Thonon-les-Bains",
      "Évian-les-Bains",
    ],
    coverageNote: "Interventions rapides à Annemasse, Annecy, Chambéry, Grenoble, Thonon, Évian ainsi que dans toutes les villes, communes et agglomérations situées autour et entre ces secteurs.",
    emergencyDelay: "Moins de 45 minutes selon secteur",
    availability: "24h/24 & 7j/7",
  },

  // Horaires d'ouverture
  openingHours: {
    office: "Du Lundi au Vendredi : 08h00 - 19h00 | Samedi : 09h00 - 18h00",
    emergency: "Dépannages & Urgences : 24h/24 et 7j/7 sans interruption",
  },

  // Évaluation & Confiance
  googleRating: 4.9,
  assurances: [
    "Garantie Décennale AXA",
    "Certification Qualifelec",
    "Conformité Norme NFC 15-100",
    "Agrément IRVE (Bornes de recharge)",
  ],
};
