
import { useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import { Newsletter } from '@/components/Newsletter';
import { useLanguage } from '@/contexts/LanguageContext';
import { posts } from '@/utils/i18n';

const Articles = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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
                {t('articles')}
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Explore our collection of articles on financial independence and early retirement in Switzerland.
              </p>
            </div>
          </div>
        </section>
        
        {/* Articles Section */}
        <section 
          ref={sectionRef}
          className="py-16 opacity-0"
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <Newsletter />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
