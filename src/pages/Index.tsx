
import { useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import { FeaturedPost } from '@/components/FeaturedPost';
import { Newsletter } from '@/components/Newsletter';
import { useLanguage } from '@/contexts/LanguageContext';
import { getFeaturedPost, getRecentPosts } from '@/utils/i18n';
import { ChartBar, PiggyBank, Calendar } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(3);
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
        <section className="pt-32 pb-20 md:py-40 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-background" />
          
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
                {t('welcomeHeader')}
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
                {t('welcomeSubheader')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section
          ref={el => sectionsRef.current[0] = el}
          className="py-16 opacity-0"
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border shadow-subtle flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Strategic Investing</h3>
                <p className="text-muted-foreground">Learn how to build a tax-efficient investment portfolio suited for the Swiss market.</p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border shadow-subtle flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Swiss Tax Optimization</h3>
                <p className="text-muted-foreground">Discover legal strategies to minimize your tax burden across different Swiss cantons.</p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border shadow-subtle flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Early Retirement Planning</h3>
                <p className="text-muted-foreground">Plan your path to financial independence with Switzerland's robust pillar system.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post Section */}
        {featuredPost && (
          <section 
            ref={el => sectionsRef.current[1] = el}
            className="py-16 opacity-0"
          >
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="text-3xl font-bold mb-8">{t('featuredPost')}</h2>
              <FeaturedPost post={featuredPost} />
            </div>
          </section>
        )}
        
        {/* Recent Posts Section */}
        <section 
          ref={el => sectionsRef.current[2] = el}
          className="py-16 opacity-0"
        >
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-8">{t('latestArticles')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <ArticleCard 
                  key={post.id} 
                  post={post}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section 
          ref={el => sectionsRef.current[3] = el}
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

export default Home;
