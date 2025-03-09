
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'de' | 'fr' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get language from localStorage, or use browser language, or default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'de', 'fr', 'it'].includes(browserLang)) {
      return browserLang as Language;
    }
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    const initialLanguage = storedLanguage || getBrowserLanguage();
    setLanguageState(initialLanguage);
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    if (!isLoaded) return '';
    
    // This is a simple implementation. In a real app, you'd use a more robust i18n solution.
    const translations: Record<Language, Record<string, string>> = {
      en: {
        'home': 'Home',
        'articles': 'Articles',
        'about': 'About',
        'siteTitle': 'Swiss FIRE',
        'siteTagline': 'Financial Independence in Switzerland',
        'featuredPost': 'Featured Post',
        'latestArticles': 'Latest Articles',
        'newsletter': 'Newsletter',
        'newsletterSubtitle': 'Get the latest updates on Swiss FIRE',
        'subscribe': 'Subscribe',
        'emailPlaceholder': 'Your email',
        'footerText': '© 2023 Swiss FIRE. All rights reserved.',
        'welcomeHeader': 'Achieve Financial Independence in Switzerland',
        'welcomeSubheader': 'Expert advice for expats and locals on the path to FIRE',
        'readMore': 'Read More',
        'aboutHeader': 'About Swiss FIRE',
        'aboutUs': 'About Us',
        'aboutText': 'Swiss FIRE provides guidance on achieving financial independence and early retirement in Switzerland. We offer insights for both expats navigating the Swiss financial landscape and locals looking to optimize their path to financial freedom.',
      },
      de: {
        'home': 'Startseite',
        'articles': 'Artikel',
        'about': 'Über uns',
        'siteTitle': 'Swiss FIRE',
        'siteTagline': 'Finanzielle Unabhängigkeit in der Schweiz',
        'featuredPost': 'Empfohlener Artikel',
        'latestArticles': 'Neueste Artikel',
        'newsletter': 'Newsletter',
        'newsletterSubtitle': 'Erhalten Sie die neuesten Updates zu Swiss FIRE',
        'subscribe': 'Abonnieren',
        'emailPlaceholder': 'Ihre E-Mail',
        'footerText': '© 2023 Swiss FIRE. Alle Rechte vorbehalten.',
        'welcomeHeader': 'Finanzielle Unabhängigkeit in der Schweiz erreichen',
        'welcomeSubheader': 'Expertenrat für Expats und Einheimische auf dem Weg zu FIRE',
        'readMore': 'Weiterlesen',
        'aboutHeader': 'Über Swiss FIRE',
        'aboutUs': 'Über Uns',
        'aboutText': 'Swiss FIRE bietet Anleitungen zur Erreichung finanzieller Unabhängigkeit und Frühpensionierung in der Schweiz. Wir bieten Einblicke sowohl für Expats, die sich in der Schweizer Finanzlandschaft zurechtfinden, als auch für Einheimische, die ihren Weg zur finanziellen Freiheit optimieren möchten.',
      },
      fr: {
        'home': 'Accueil',
        'articles': 'Articles',
        'about': 'À propos',
        'siteTitle': 'Swiss FIRE',
        'siteTagline': 'Indépendance financière en Suisse',
        'featuredPost': 'Article vedette',
        'latestArticles': 'Derniers articles',
        'newsletter': 'Bulletin',
        'newsletterSubtitle': 'Recevez les dernières mises à jour sur Swiss FIRE',
        'subscribe': 'S\'abonner',
        'emailPlaceholder': 'Votre e-mail',
        'footerText': '© 2023 Swiss FIRE. Tous droits réservés.',
        'welcomeHeader': 'Atteindre l\'indépendance financière en Suisse',
        'welcomeSubheader': 'Conseils d\'experts pour expatriés et locaux sur la voie du FIRE',
        'readMore': 'Lire la suite',
        'aboutHeader': 'À propos de Swiss FIRE',
        'aboutUs': 'À Propos de Nous',
        'aboutText': 'Swiss FIRE fournit des conseils sur la réalisation de l\'indépendance financière et de la retraite anticipée en Suisse. Nous offrons des aperçus tant pour les expatriés naviguant dans le paysage financier suisse que pour les locaux cherchant à optimiser leur chemin vers la liberté financière.',
      },
      it: {
        'home': 'Home',
        'articles': 'Articoli',
        'about': 'Chi siamo',
        'siteTitle': 'Swiss FIRE',
        'siteTagline': 'Indipendenza finanziaria in Svizzera',
        'featuredPost': 'Articolo in evidenza',
        'latestArticles': 'Ultimi articoli',
        'newsletter': 'Newsletter',
        'newsletterSubtitle': 'Ricevi gli ultimi aggiornamenti su Swiss FIRE',
        'subscribe': 'Iscriviti',
        'emailPlaceholder': 'La tua email',
        'footerText': '© 2023 Swiss FIRE. Tutti i diritti riservati.',
        'welcomeHeader': 'Raggiungere l\'indipendenza finanziaria in Svizzera',
        'welcomeSubheader': 'Consigli di esperti per espatriati e locali sul percorso verso il FIRE',
        'readMore': 'Leggi di più',
        'aboutHeader': 'Informazioni su Swiss FIRE',
        'aboutUs': 'Chi Siamo',
        'aboutText': 'Swiss FIRE fornisce una guida per raggiungere l\'indipendenza finanziaria e il pensionamento anticipato in Svizzera. Offriamo approfondimenti sia per gli espatriati che navigano nel panorama finanziario svizzero sia per i locali che cercano di ottimizzare il loro percorso verso la libertà finanziaria.',
      }
    };

    return translations[language][key] || key;
  };

  // Only render children when translations are loaded
  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse h-8 w-8 rounded-full bg-primary/40"></div>
    </div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
