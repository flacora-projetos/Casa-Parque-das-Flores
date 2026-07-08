import { propertyData } from '../data/property';

export function Resumo() {
  return (
    <section id="resumo" className="w-full bg-white py-12 md:py-20 border-b border-mineral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-wrap justify-between items-start md:items-center gap-8 md:gap-12">
        
        <div className="flex flex-col items-start w-[40%] md:w-auto">
          <span className="text-3xl md:text-4xl font-display font-medium text-mineral-900">
            {propertyData.features.bedrooms}
          </span>
          <span className="text-sm md:text-base text-mineral-800 mt-1 uppercase tracking-wider text-xs font-semibold">Quartos</span>
        </div>
        
        <div className="flex flex-col items-start w-[40%] md:w-auto">
          <span className="text-3xl md:text-4xl font-display font-medium text-mineral-900">
            {propertyData.features.suites}
          </span>
          <span className="text-sm md:text-base text-mineral-800 mt-1 uppercase tracking-wider text-xs font-semibold">Suíte</span>
        </div>
        
        <div className="flex flex-col items-start w-[40%] md:w-auto">
          <span className="text-3xl md:text-4xl font-display font-medium text-mineral-900">
            {propertyData.features.areaTotal}m²
          </span>
          <span className="text-sm md:text-base text-mineral-800 mt-1 uppercase tracking-wider text-xs font-semibold">Área total</span>
        </div>
        
        <div className="flex flex-col items-start w-[40%] md:w-auto">
          <span className="text-3xl md:text-4xl font-display font-medium text-mineral-900">
            {propertyData.features.areaBuilt}m²
          </span>
          <span className="text-sm md:text-base text-mineral-800 mt-1 uppercase tracking-wider text-xs font-semibold">Construídos</span>
        </div>
        
        <div className="flex flex-col items-start w-full md:w-auto mt-2 md:mt-0 pt-6 md:pt-0 border-t border-mineral-100 md:border-none">
          <span className="text-lg md:text-xl font-display font-medium text-mineral-900">
            Área Gourmet
          </span>
          <span className="text-sm md:text-base text-mineral-800 mt-1 flex items-center">
             <span className="w-1.5 h-1.5 rounded-full bg-mineral-300 mr-2"></span>
             Churrasqueira
          </span>
        </div>
        
        <div className="flex flex-col items-start w-full md:w-auto mt-2 md:mt-0 pt-6 md:pt-0 border-t border-mineral-100 md:border-none">
          <span className="text-lg md:text-xl font-display font-medium text-mineral-900">
            {propertyData.location.neighborhood}
          </span>
          <span className="text-sm md:text-base text-mineral-800 mt-1 flex items-center">
             <span className="w-1.5 h-1.5 rounded-full bg-mineral-300 mr-2"></span>
             {propertyData.location.city}
          </span>
        </div>

      </div>
    </section>
  );
}
