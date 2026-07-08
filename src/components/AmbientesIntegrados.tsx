import { imageMap } from '../data/images';

export function AmbientesIntegrados() {
  const mainImage = imageMap.find(img => img.src === '/images/sala-integrada.jpg');
  const secImage = imageMap.find(img => img.src === '/images/sala-amplitude.jpg');

  return (
    <section id="ambientes-integrados" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start">
        
        {/* Left: Dominant image */}
        <div className="w-full md:w-[55%]">
          <img 
            src={mainImage?.src} 
            alt={mainImage?.alt} 
            className="w-full h-auto object-cover aspect-[3/4] md:aspect-auto rounded-xl border border-mineral-200/80 shadow-lg" 
            loading="lazy"
          />
        </div>

        {/* Right: Text and secondary image */}
        <div className="w-full md:w-[45%] flex flex-col pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-mineral-900 mb-6 leading-[1.15]">
            Uma área social que deixa a casa respirar.
          </h2>
          <p className="text-mineral-800 text-base md:text-lg mb-12 md:mb-16 leading-relaxed">
            Sala e cozinha se conectam em um ambiente aberto, com pé-direito alto, porcelanato polido e grandes portas de vidro que ampliam a sensação de integração.
          </p>
          
          <div className="w-3/4 ml-auto self-end">
            <img 
              src={secImage?.src} 
              alt={secImage?.alt} 
              className="w-full h-auto object-cover aspect-[3/4] rounded-xl border border-mineral-200/80 shadow-lg" 
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
