import { propertyData } from '../data/property';
import { getWhatsAppLink } from '../utils/whatsapp';

export function Hero() {
  const whatsappUrl = getWhatsAppLink('interest');

  return (
    <section id="hero" className="relative w-full min-h-[100svh] md:min-h-[700px] flex items-center bg-mineral-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/frente-1.jpg" 
          alt="Fachada e área externa da casa no Parque das Flores, em Goiânia." 
          className="w-full h-full object-cover object-center md:scale-[1.25] md:translate-x-[12.5%]"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-overlay-mobile md:bg-hero-overlay-desktop pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="w-full relative z-10 px-6 py-20 md:px-12 lg:px-24 xl:px-32 flex flex-col justify-end md:justify-center h-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-2xl mt-auto md:mt-0">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-mineral-300 mb-6 md:mb-8">
            {propertyData.location.neighborhood}, {propertyData.location.city}
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-5 md:mb-6 text-shadow-md">
            Espaço para viver bem, por dentro e por fora.
          </h1>
          
          <p className="text-mineral-200 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-md text-shadow-sm">
            Casa com 3 quartos, sendo 1 suíte, ambientes integrados e área gourmet no Parque das Flores, em Goiânia.
          </p>
          
          <div className="mb-10 md:mb-12">
            <span className="block text-xs font-medium text-mineral-300 mb-1 uppercase tracking-widest text-shadow-sm">Investimento</span>
            <span className="font-display text-3xl md:text-4xl font-semibold text-white text-shadow-md">
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
            <span className="text-xs text-mineral-300 mt-4 block">
              Fale diretamente com o corretor responsável pelo imóvel.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
