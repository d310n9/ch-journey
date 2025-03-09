
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex flex-col items-start transition-all duration-300 hover:opacity-80"
          >
            <h1 className="text-xl font-semibold tracking-tight">{t('siteTitle')}</h1>
            <p className="text-xs text-muted-foreground">{t('siteTagline')}</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/articles" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/articles' ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('articles')}
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/about' ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('about')}
            </Link>
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/articles" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/articles' ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('articles')}
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/about' ? 'text-primary' : 'text-foreground'
              }`}
            >
              {t('about')}
            </Link>
            <div className="pt-2">
              <LanguageSelector />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
