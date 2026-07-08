import { propertyData } from '../data/property';
import { getWhatsAppLink } from '../utils/whatsapp';

export function Hero() {
  const whatsappUrl = getWhatsAppLink('interest');

  return (
    <section id="hero" className="w-full flex flex-col md:flex-row min-h-[90vh] md:min-h-[600px] bg-mineral-900">
      {/* Mobile Image: Prioritize on mobile, full width */}
      <div className="w-full aspect-[3/4] md:hidden relative">
        <img 
          src="/images/frente-1.jpg" 
          alt="Fachada e área externa da casa no Parque das Flores, em Goiânia." 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mineral-900 via-mineral-900/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Content Side (Left on Desktop, Below on Mobile) */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-6 py-12 md:py-16 md:pl-12 lg:pl-24 xl:pl-32 md:pr-12 relative z-10 text-white">
        <span className="text-xs font-semibold tracking-widest uppercase text-mineral-400 mb-6 md:mb-8">
          {propertyData.location.neighborhood}, {propertyData.location.city}
        </span>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-5 md:mb-6">
          Espaço para viver bem, por dentro e por fora.
        </h1>
        
        <p className="text-mineral-200 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-md">
          Casa com 3 quartos, sendo 1 suíte, ambientes integrados e área gourmet no Parque das Flores, em Goiânia.
        </p>
        
        <div className="mb-10 md:mb-12">
          <span className="block text-xs font-medium text-mineral-400 mb-1 uppercase tracking-widest">Investimento</span>
          <span className="font-display text-3xl md:text-4xl font-semibold text-white">
            {propertyData.priceFormatted}
          </span>
        </div>
        
        <div className="flex flex-col items-start w-full sm:w-auto">
          <a 
            id="cta_hero_whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 bg-white text-mineral-900 font-medium text-sm md:text-base tracking-wide hover:bg-mineral-100 transition-colors"
          >
            QUERO CONHECER ESTA CASA
          </a>
          <span className="text-xs text-mineral-400 mt-4 block">
            Fale diretamente com o corretor responsável pelo imóvel.
          </span>
        </div>
      </div>

      {/* Desktop Image Side (Right on Desktop, Hidden on Mobile) */}
      <div className="hidden md:block w-[55%] relative">
        <img 
          src="/images/frente-1.jpg" 
          alt="Fachada e área externa da casa no Parque das Flores, em Goiânia." 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mineral-900 via-mineral-900/40 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
