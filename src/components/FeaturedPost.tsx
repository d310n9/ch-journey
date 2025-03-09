
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { type Post, formatDate } from '@/utils/i18n';

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  const { language, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="opacity-0"
    >
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10" />
        
        <img 
          src={post.image} 
          alt={post.title[language]} 
          className="w-full h-96 object-cover"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex flex-col space-y-4 max-w-3xl">
            <div>
              <span className="inline-block bg-accent/80 backdrop-blur-sm text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                {t('featuredPost')}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {post.title[language]}
            </h2>
            
            <p className="text-white/80 text-sm sm:text-base">
              {post.excerpt[language]}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-sm">
                {formatDate(post.date)}
              </span>
              
              <Link 
                to={`/articles/${post.id}`}
                className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('readMore')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
