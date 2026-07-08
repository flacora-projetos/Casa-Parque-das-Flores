import { imageMap } from '../data/images';
import { propertyData } from '../data/property';
import { getWhatsAppLink } from '../utils/whatsapp';

export function CTAFinal() {
  const bgImage = imageMap.find(img => img.id === 'frente-2');
  const whatsappUrl = getWhatsAppLink('visit');

  return (
    <section id="cta-final" className="relative w-full min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={bgImage?.src} 
          alt=""
          className="w-full h-full object-cover object-center" 
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-mineral-900/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 leading-[1.15]">
          As fotos mostram a casa. A visita mostra se ela combina com você.
        </h2>
        
        <p className="text-mineral-200 text-lg md:text-xl mb-12">
          Casa com {propertyData.features.bedrooms} quartos, {propertyData.features.suites} suíte e {propertyData.features.areaBuilt} m² construídos no {propertyData.location.neighborhood}.
        </p>
        
        <a 
          id="cta_visita"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 bg-white text-mineral-900 font-medium text-sm md:text-base tracking-wide hover:bg-mineral-100 transition-colors w-full sm:w-auto mb-10"
        >
          AGENDAR UMA VISITA
        </a>
        
        <div className="flex flex-col items-center pt-8 border-t border-mineral-500/30 w-full max-w-xs">
          <span className="text-white font-medium mb-1">{propertyData.broker.name}</span>
          <span className="text-mineral-400 text-sm">CRECI {propertyData.broker.creci}</span>
        </div>
      </div>
    </section>
  );
}
