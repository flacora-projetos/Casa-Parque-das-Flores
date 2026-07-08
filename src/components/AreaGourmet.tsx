import { imageMap } from '../data/images';

export function AreaGourmet() {
  const mainImage = imageMap.find(img => img.id === 'area-gourmet');
  const supportImage = imageMap.find(img => img.id === 'frente-2');

  return (
    <section id="area-gourmet" className="w-full py-20 md:py-32 bg-mineral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-center md:items-stretch">
        
        {/* Left: Text and Support Image */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-mineral-900 mb-6 leading-[1.15]">
            Mais espaço para aproveitar a própria casa.
          </h2>
          <p className="text-mineral-800 text-base md:text-lg mb-12 md:mb-20 leading-relaxed max-w-lg">
            A área gourmet com churrasqueira cria um ambiente prático para reunir pessoas, preparar o almoço de domingo e aproveitar os momentos de descanso sem precisar sair de casa.
          </p>

          <div className="w-4/5 hidden md:block">
            <img 
              src={supportImage?.src} 
              alt={supportImage?.alt} 
              className="w-full h-auto object-cover aspect-[3/4] rounded-xl border border-mineral-200/80 shadow-lg" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Main Image */}
        <div className="w-full md:w-1/2 flex flex-col">
          <img 
            src={mainImage?.src} 
            alt={mainImage?.alt} 
            className="w-full h-auto object-cover aspect-[3/4] md:aspect-auto md:h-full md:min-h-[700px] rounded-xl border border-mineral-200/80 shadow-lg" 
            loading="lazy"
          />
          <div className="w-3/4 ml-auto mt-8 md:hidden">
            <img 
              src={supportImage?.src} 
              alt={supportImage?.alt} 
              className="w-full h-auto object-cover aspect-[3/4] rounded-xl border border-mineral-200/80 shadow-lg" 
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
