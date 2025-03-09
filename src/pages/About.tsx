
import { useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Newsletter } from '@/components/Newsletter';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  // Properly type the ref array to accept HTMLDivElement specifically
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary/50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {t('aboutHeader')}
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Learn about our mission to help expats and locals achieve financial independence in Switzerland.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section 
          ref={(el) => { 
            if (el instanceof HTMLDivElement || el === null) {
              sectionsRef.current[0] = el;
            }
          }}
          className="py-16 opacity-0"
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2>{t('aboutUs')}</h2>
              <p>{t('aboutText')}</p>
              
              <p>
                At Swiss FIRE, we understand the unique challenges and opportunities that come with pursuing financial independence in Switzerland. Whether you're an expat navigating a new financial landscape or a local seeking to optimize your path to freedom, we provide actionable insights based on extensive research and personal experience.
              </p>
              
              <h3>Our Mission</h3>
              <p>
                Our mission is to demystify the Swiss financial system and provide clear, practical guidance on achieving financial independence in one of the world's most prosperous economies. We believe that with the right strategies, anyone can accelerate their journey to financial freedom.
              </p>
              
              <h3>For Expats</h3>
              <p>
                Moving to Switzerland opens up tremendous opportunities for wealth building, but also comes with a complex set of rules and systems to navigate. We offer practical advice on:
              </p>
              <ul>
                <li>Understanding and optimizing the Swiss tax system</li>
                <li>Navigating the three-pillar retirement system as a foreigner</li>
                <li>Building investment portfolios that work with Swiss regulations</li>
                <li>Planning for international mobility while preserving wealth</li>
              </ul>
              
              <h3>For Locals</h3>
              <p>
                If you've grown up in the Swiss system, you have unique advantages in your FIRE journey. We help you leverage these advantages with guidance on:
              </p>
              <ul>
                <li>Optimizing cantonal tax strategies</li>
                <li>Maximizing the benefits of each pillar in the retirement system</li>
                <li>Building efficient investment portfolios with Swiss-specific considerations</li>
                <li>Achieving early retirement within the Swiss regulatory framework</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section 
          ref={(el) => { 
            if (el instanceof HTMLDivElement || el === null) {
              sectionsRef.current[1] = el;
            }
          }}
          className="py-16 opacity-0"
        >
          <div className="container mx-auto px-6 md:px-8">
            <Newsletter />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
