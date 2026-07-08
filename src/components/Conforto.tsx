import { imageMap } from '../data/images';

export function Conforto() {
  const mainImage = imageMap.find(img => img.id === 'quarto');
  const supportImage = imageMap.find(img => img.id === 'banheiro-principal');

  return (
    <section id="conforto" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Main Image */}
          <div className="w-full md:w-7/12">
            <img 
              src={mainImage?.src} 
              alt={mainImage?.alt} 
              className="w-full h-auto object-cover aspect-[3/4] md:aspect-auto rounded-xl border border-mineral-200/80 shadow-lg" 
              loading="lazy"
            />
          </div>

          {/* Text and Support */}
          <div className="w-full md:w-5/12 flex flex-col md:pt-24 lg:pt-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-mineral-900 mb-6 leading-[1.15]">
              3 quartos para a rotina ficar mais confortável.
            </h2>
            <p className="text-mineral-800 text-base md:text-lg mb-12 md:mb-20 leading-relaxed">
              A casa conta com três quartos, sendo uma suíte, além de banheiro social para atender a rotina da casa com mais privacidade e praticidade.
            </p>

            <div className="w-[85%] ml-auto md:mr-auto md:ml-0 lg:ml-8">
              <img 
                src={supportImage?.src} 
                alt={supportImage?.alt} 
                className="w-full h-auto object-cover aspect-[3/4] rounded-xl border border-mineral-200/80 shadow-lg" 
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
