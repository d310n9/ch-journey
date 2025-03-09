
// Mock data for the blog posts
export interface Post {
  id: string;
  title: {
    en: string;
    de: string;
    fr: string;
    it: string;
  };
  excerpt: {
    en: string;
    de: string;
    fr: string;
    it: string;
  };
  content: {
    en: string;
    de: string;
    fr: string;
    it: string;
  };
  date: string;
  author: string;
  category: 'investing' | 'saving' | 'taxation' | 'retirement' | 'expats';
  image: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: 'swiss-fire-basics',
    title: {
      en: 'The Swiss Path to FIRE: A Comprehensive Guide',
      de: 'Der Schweizer Weg zum FIRE: Ein umfassender Leitfaden',
      fr: 'La voie suisse vers FIRE : Un guide complet',
      it: 'Il percorso svizzero verso FIRE: Una guida completa'
    },
    excerpt: {
      en: 'Discover the unique aspects of pursuing financial independence in Switzerland, from high salaries to efficient taxation.',
      de: 'Entdecken Sie die einzigartigen Aspekte des Strebens nach finanzieller Unabhängigkeit in der Schweiz, von hohen Gehältern bis hin zu effizienter Besteuerung.',
      fr: 'Découvrez les aspects uniques de la recherche de l\'indépendance financière en Suisse, des salaires élevés à une fiscalité efficace.',
      it: 'Scopri gli aspetti unici del perseguimento dell\'indipendenza finanziaria in Svizzera, dagli alti stipendi alla tassazione efficiente.'
    },
    content: {
      en: 'Switzerland offers unique advantages for those pursuing FIRE (Financial Independence, Retire Early). With its high salaries, relatively efficient taxation system, and robust economy, it's an ideal place to build wealth rapidly. However, the high cost of living presents challenges that require strategic planning. This comprehensive guide explores how to navigate the Swiss financial landscape to achieve your FIRE goals faster and more efficiently.',
      de: 'Die Schweiz bietet einzigartige Vorteile für diejenigen, die FIRE (Finanzielle Unabhängigkeit, Frühzeitige Pensionierung) anstreben. Mit ihren hohen Gehältern, einem relativ effizienten Steuersystem und einer robusten Wirtschaft ist sie ein idealer Ort, um schnell Vermögen aufzubauen. Die hohen Lebenshaltungskosten stellen jedoch Herausforderungen dar, die eine strategische Planung erfordern. Dieser umfassende Leitfaden erklärt, wie man durch die Schweizer Finanzlandschaft navigiert, um die FIRE-Ziele schneller und effizienter zu erreichen.',
      fr: 'La Suisse offre des avantages uniques pour ceux qui poursuivent FIRE (Indépendance Financière, Retraite Anticipée). Avec ses salaires élevés, son système fiscal relativement efficace et son économie robuste, c\'est un endroit idéal pour constituer rapidement un patrimoine. Cependant, le coût élevé de la vie présente des défis qui nécessitent une planification stratégique. Ce guide complet explore comment naviguer dans le paysage financier suisse pour atteindre vos objectifs FIRE plus rapidement et plus efficacement.',
      it: 'La Svizzera offre vantaggi unici per coloro che perseguono FIRE (Indipendenza Finanziaria, Pensionamento Anticipato). Con i suoi alti stipendi, il sistema fiscale relativamente efficiente e l\'economia robusta, è un luogo ideale per costruire rapidamente ricchezza. Tuttavia, l\'alto costo della vita presenta sfide che richiedono una pianificazione strategica. Questa guida completa esplora come navigare nel panorama finanziario svizzero per raggiungere i tuoi obiettivi FIRE più velocemente e in modo più efficiente.'
    },
    date: '2023-06-15',
    author: 'Sophie Müller',
    category: 'investing',
    image: 'https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    featured: true
  },
  {
    id: 'pillar-system-explained',
    title: {
      en: 'Understanding the Swiss Pillar System for Retirement',
      de: 'Das Schweizer Säulensystem für die Altersvorsorge verstehen',
      fr: 'Comprendre le système des piliers suisses pour la retraite',
      it: 'Capire il sistema dei pilastri svizzeri per la pensione'
    },
    excerpt: {
      en: 'A deep dive into Switzerland\'s three-pillar retirement system and how to optimize it for early retirement.',
      de: 'Ein tiefer Einblick in das Schweizer Drei-Säulen-System für die Altersvorsorge und wie man es für die Frühpensionierung optimieren kann.',
      fr: 'Une analyse approfondie du système de retraite à trois piliers de la Suisse et comment l\'optimiser pour une retraite anticipée.',
      it: 'Un\'analisi approfondita del sistema pensionistico svizzero a tre pilastri e come ottimizzarlo per il pensionamento anticipato.'
    },
    content: {
      en: 'Switzerland\'s pension system is often cited as one of the most robust in the world, built on three distinct pillars: state pension, occupational pension, and private savings. For those pursuing FIRE, understanding how to optimize contributions to Pillar 3a and leverage tax benefits is essential. This article breaks down each pillar and offers strategies to use the system to your advantage when planning for early retirement.',
      de: 'Das Schweizer Rentensystem gilt oft als eines der robustesten der Welt und basiert auf drei verschiedenen Säulen: staatliche Rente, berufliche Vorsorge und private Ersparnisse. Für diejenigen, die FIRE anstreben, ist es wichtig zu verstehen, wie die Beiträge zur Säule 3a optimiert und Steuervorteile genutzt werden können. Dieser Artikel erläutert jede Säule und bietet Strategien, um das System zu Ihrem Vorteil zu nutzen, wenn Sie eine Frühpensionierung planen.',
      fr: 'Le système de retraite suisse est souvent cité comme l\'un des plus robustes au monde, construit sur trois piliers distincts : la pension d\'État, la pension professionnelle et l\'épargne privée. Pour ceux qui poursuivent FIRE, comprendre comment optimiser les contributions au Pilier 3a et tirer parti des avantages fiscaux est essentiel. Cet article décompose chaque pilier et propose des stratégies pour utiliser le système à votre avantage lors de la planification d\'une retraite anticipée.',
      it: 'Il sistema pensionistico svizzero è spesso citato come uno dei più robusti al mondo, costruito su tre pilastri distinti: pensione statale, pensione professionale e risparmi privati. Per coloro che perseguono FIRE, è essenziale capire come ottimizzare i contributi al Pilastro 3a e sfruttare i vantaggi fiscali. Questo articolo scompone ogni pilastro e offre strategie per utilizzare il sistema a proprio vantaggio nella pianificazione del pensionamento anticipato.'
    },
    date: '2023-05-10',
    author: 'Jean Dupont',
    category: 'retirement',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'taxation-strategies',
    title: {
      en: 'Tax Optimization Strategies for Expats in Switzerland',
      de: 'Steueroptimierungsstrategien für Expats in der Schweiz',
      fr: 'Stratégies d\'optimisation fiscale pour les expatriés en Suisse',
      it: 'Strategie di ottimizzazione fiscale per espatriati in Svizzera'
    },
    excerpt: {
      en: 'Learn how to navigate Switzerland\'s complex cantonal tax systems and maximize your savings as an expat.',
      de: 'Erfahren Sie, wie Sie durch die komplexen kantonalen Steuersysteme der Schweiz navigieren und Ihre Ersparnisse als Expat maximieren können.',
      fr: 'Apprenez à naviguer dans les systèmes fiscaux cantonaux complexes de la Suisse et à maximiser vos économies en tant qu\'expatrié.',
      it: 'Scopri come navigare nei complessi sistemi fiscali cantonali della Svizzera e massimizzare i tuoi risparmi come espatriato.'
    },
    content: {
      en: 'For expats in Switzerland, understanding the tax landscape can significantly impact your path to financial independence. Each canton has its own tax rates and regulations, creating opportunities for strategic planning. This guide explores how to legally minimize your tax burden, from choosing the right canton to live in to making the most of international tax treaties and available deductions specific to foreigners working in Switzerland.',
      de: 'Für Expats in der Schweiz kann das Verständnis der Steuervorschriften den Weg zur finanziellen Unabhängigkeit erheblich beeinflussen. Jeder Kanton hat seine eigenen Steuersätze und Vorschriften, was Möglichkeiten für strategische Planung schafft. Dieser Leitfaden erklärt, wie Sie Ihre Steuerlast legal minimieren können, von der Wahl des richtigen Kantons bis hin zur optimalen Nutzung internationaler Steuerabkommen und verfügbarer Abzüge speziell für Ausländer, die in der Schweiz arbeiten.',
      fr: 'Pour les expatriés en Suisse, comprendre le paysage fiscal peut avoir un impact significatif sur votre chemin vers l\'indépendance financière. Chaque canton a ses propres taux et réglementations fiscales, créant des opportunités pour une planification stratégique. Ce guide explore comment minimiser légalement votre charge fiscale, du choix du bon canton pour vivre à la maximisation des traités fiscaux internationaux et des déductions disponibles spécifiques aux étrangers travaillant en Suisse.',
      it: 'Per gli espatriati in Svizzera, comprendere il panorama fiscale può avere un impatto significativo sul percorso verso l\'indipendenza finanziaria. Ogni cantone ha le proprie aliquote fiscali e normative, creando opportunità per una pianificazione strategica. Questa guida esplora come ridurre legalmente il carico fiscale, dalla scelta del cantone giusto in cui vivere a sfruttare al massimo i trattati fiscali internazionali e le deduzioni disponibili specifiche per gli stranieri che lavorano in Svizzera.'
    },
    date: '2023-04-22',
    author: 'David Smith',
    category: 'taxation',
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'investing-swiss-etfs',
    title: {
      en: 'The Ultimate Guide to Swiss ETFs for FIRE Investors',
      de: 'Der ultimative Leitfaden zu Schweizer ETFs für FIRE-Investoren',
      fr: 'Le guide ultime des ETF suisses pour les investisseurs FIRE',
      it: 'La guida definitiva agli ETF svizzeri per gli investitori FIRE'
    },
    excerpt: {
      en: 'Discover the best ETF options available to Swiss investors and how to build a tax-efficient portfolio.',
      de: 'Entdecken Sie die besten ETF-Optionen für Schweizer Anleger und wie Sie ein steuereffizienztes Portfolio aufbauen können.',
      fr: 'Découvrez les meilleures options d\'ETF disponibles pour les investisseurs suisses et comment construire un portefeuille fiscalement efficace.',
      it: 'Scopri le migliori opzioni ETF disponibili per gli investitori svizzeri e come costruire un portafoglio fiscalmente efficiente.'
    },
    content: {
      en: 'Exchange-Traded Funds (ETFs) are a cornerstone of many FIRE strategies, offering diversification and low fees. For investors in Switzerland, there are unique considerations when selecting ETFs, including domicile treatment for tax purposes and currency hedging options. This comprehensive guide explores the best ETF options available to Swiss residents, how to access global markets efficiently, and strategies to minimize the tax impact on your investment returns.',
      de: 'Exchange-Traded Funds (ETFs) sind ein Eckpfeiler vieler FIRE-Strategien und bieten Diversifikation und niedrige Gebühren. Für Investoren in der Schweiz gibt es bei der Auswahl von ETFs einzigartige Überlegungen, einschließlich der Domizilbehandlung für Steuerzwecke und Währungsabsicherungsoptionen. Dieser umfassende Leitfaden untersucht die besten ETF-Optionen, die Schweizer Einwohnern zur Verfügung stehen, wie man effizient auf globale Märkte zugreift und Strategien zur Minimierung der steuerlichen Auswirkungen auf Ihre Anlagerenditen.',
      fr: 'Les fonds négociés en bourse (ETF) sont une pierre angulaire de nombreuses stratégies FIRE, offrant diversification et faibles frais. Pour les investisseurs en Suisse, il existe des considérations uniques lors de la sélection des ETF, y compris le traitement du domicile à des fins fiscales et les options de couverture de change. Ce guide complet explore les meilleures options d\'ETF disponibles pour les résidents suisses, comment accéder efficacement aux marchés mondiaux et les stratégies pour minimiser l\'impact fiscal sur vos rendements d\'investissement.',
      it: 'Gli Exchange-Traded Funds (ETF) sono un pilastro di molte strategie FIRE, offrendo diversificazione e commissioni basse. Per gli investitori in Svizzera, ci sono considerazioni uniche nella selezione degli ETF, incluso il trattamento del domicilio a fini fiscali e le opzioni di copertura valutaria. Questa guida completa esplora le migliori opzioni ETF disponibili per i residenti svizzeri, come accedere in modo efficiente ai mercati globali e le strategie per minimizzare l\'impatto fiscale sui rendimenti degli investimenti.'
    },
    date: '2023-03-07',
    author: 'Markus Weber',
    category: 'investing',
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
  }
];

// Helper function to get formatted date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Get featured post
export function getFeaturedPost(): Post | undefined {
  return posts.find(post => post.featured);
}

// Get recent posts, excluding the featured one
export function getRecentPosts(count: number = 3): Post[] {
  return posts
    .filter(post => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
