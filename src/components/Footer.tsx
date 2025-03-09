
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('siteTitle')}</h3>
            <p className="text-sm text-muted-foreground">{t('siteTagline')}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('siteTitle')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm hover:text-primary transition-colors">
                  {t('articles')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('newsletter')}</h3>
            <p className="text-sm text-muted-foreground">{t('newsletterSubtitle')}</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={t('emailPlaceholder')}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            {t('footerText')}
          </p>
        </div>
      </div>
    </footer>
  );
}
