
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { type Post, formatDate } from '@/utils/i18n';
import { CalendarIcon, BookOpenIcon } from 'lucide-react';

interface ArticleCardProps {
  post: Post;
  className?: string;
}

export function ArticleCard({ post, className = '' }: ArticleCardProps) {
  const { language, t } = useLanguage();
  
  return (
    <Link 
      to={`/articles/${post.id}`} 
      className={`group block overflow-hidden rounded-lg border border-border bg-card hover-lift ${className}`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title[language]} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
          <div className="flex items-center">
            <CalendarIcon className="h-3 w-3 mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <BookOpenIcon className="h-3 w-3 mr-1" />
            <span>5 min read</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title[language]}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          {post.excerpt[language]}
        </p>
        
        <div className="inline-flex items-center text-sm font-medium text-primary">
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
        </div>
      </div>
    </Link>
  );
}
