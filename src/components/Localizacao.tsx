import { propertyData } from '../data/property';

export function Localizacao() {
  return (
    <section id="localizacao" className="w-full py-20 md:py-32 bg-mineral-900 text-mineral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12 lg:gap-24">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-8 leading-[1.15] text-white">
            Uma localização que facilita a rotina.
          </h2>
          <p className="text-mineral-200 text-base md:text-lg mb-10 leading-relaxed">
            No {propertyData.location.neighborhood}, a casa está em uma região com acesso a importantes vias e uma rede de comércio, serviços e lazer que ajuda a tornar o dia a dia mais prático.
          </p>
        </div>

        <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-mineral-800 pt-10 md:pt-0 md:pl-12 lg:pl-24 flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-mineral-400 mb-6">Principais Referências</span>
          <ul className="space-y-5">
            {propertyData.location.references.map((ref, index) => (
              <li key={index} className="flex items-center text-lg text-mineral-200">
                <span className="w-1.5 h-1.5 bg-mineral-500 rounded-full mr-4 shrink-0"></span>
                {ref}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
