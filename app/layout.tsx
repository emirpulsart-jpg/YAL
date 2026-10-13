import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CallWidget } from '@/components/CallWidget';
import { COMPANY_INFO } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'YAL Électricité | Artisan Électricien Annemasse, Savoie & Isère · Urgence 24/7',
  description:
    'YAL Électricité à Annemasse : Devis & Rendez-vous, Installation, Rénovation, Dépannage et Urgence électrique 24h/24 7j/7. Intervention à Annemasse, Annecy, Chambéry, Grenoble, Thonon, Évian.',
  openGraph: {
    title: 'YAL Électricité | Artisan Électricien Annemasse & Région',
    description:
      'Intervention rapide. Devis gratuit, installations soignées, rénovations et dépannage 24/7.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'YAL Électricité',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAL Électricité | Artisan Électricien Haute-Savoie & Savoie',
    description:
      'Installation électrique, rénovation complète et dépannage d\'urgence 24/7.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.tagline,
    telephone: COMPANY_INFO.phoneOffice,
    email: COMPANY_INFO.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '€€',
    areaServed: COMPANY_INFO.interventionZone.cities,
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <CallWidget />
        <Footer />
      </body>
    </html>
  );
}
