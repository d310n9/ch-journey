
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { MailIcon, CheckIcon } from 'lucide-react';

export function Newsletter() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    }, 1000);
  };

  return (
    <div className="bg-primary rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="relative p-8 md:p-12">
        <div className="flex flex-col items-center text-center space-y-4 max-w-xl mx-auto">
          <div className="bg-primary-foreground/10 rounded-full p-3">
            <MailIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            {t('newsletter')}
          </h3>
          
          <p className="text-primary-foreground/80">
            {t('newsletterSubtitle')}
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row w-full max-w-md gap-3 mt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              required
              disabled={isSubmitting || subscribed}
              className="flex-grow px-4 py-3 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            
            <button
              type="submit"
              disabled={isSubmitting || subscribed}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="animate-pulse">...</span>
              ) : subscribed ? (
                <>
                  <CheckIcon className="h-5 w-5 mr-1" />
                  <span>Subscribed</span>
                </>
              ) : (
                t('subscribe')
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
