import { imageMap } from '../data/images';

export function Acabamento() {
  const img1 = imageMap.find(img => img.src === '/images/banheiro-principal.jpg');
  const img2 = imageMap.find(img => img.src === '/images/banheiro-2.jpg');

  return (
    <section id="acabamento" className="w-full py-20 md:py-32 bg-mineral-900 text-mineral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Text */}
          <div className="w-full md:w-[45%] order-2 md:order-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-10 md:mb-16 leading-[1.15] text-white">
              Detalhes que reforçam a sensação de cuidado.
            </h2>
            
            <ul className="space-y-6 md:space-y-8">
              {[
                'Porcelanato polido',
                'Portas e janelas em Blindex',
                'Paisagismo',
                'Acabamento contemporâneo'
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="h-6 w-6 rounded-full border border-mineral-500 flex items-center justify-center mr-5 mt-0.5 shrink-0 transition-colors group-hover:border-white">
                    <span className="w-1.5 h-1.5 bg-mineral-300 rounded-full group-hover:bg-white transition-colors"></span>
                  </span>
                  <span className="text-lg md:text-xl text-mineral-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Images */}
          <div className="w-full md:w-[55%] order-1 md:order-2 flex gap-4 md:gap-6 relative h-[550px] md:h-[700px]">
            <div className="w-1/2 h-4/5 self-end relative">
              <img 
                src={img2?.src} 
                alt={img2?.alt} 
                className="w-full h-full object-cover rounded-xl border border-mineral-700/50 shadow-lg" 
                loading="lazy"
              />
            </div>
            <div className="w-1/2 h-4/5 self-start relative">
              <img 
                src={img1?.src} 
                alt={img1?.alt} 
                className="w-full h-full object-cover rounded-xl border border-mineral-700/50 shadow-lg" 
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
