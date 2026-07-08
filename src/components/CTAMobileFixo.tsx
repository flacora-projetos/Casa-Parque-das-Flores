import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '../utils/whatsapp';

export function CTAMobileFixo() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = getWhatsAppLink('interest');

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the first fold (approx 800px or 100vh)
      const scrolled = window.scrollY;
      if (scrolled > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 p-4 md:hidden">
      <a 
        id="cta_mobile_fixo"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center px-6 py-4 bg-mineral-900 text-white font-medium text-sm tracking-wide shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-sm"
      >
        QUERO CONHECER A CASA
      </a>
    </div>
  );
}
