import { propertyData } from '../data/property';
import { getWhatsAppLink } from '../utils/whatsapp';

export function Financiamento() {
  const whatsappUrl = getWhatsAppLink('simulation');

  return (
    <section id="financiamento" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-mineral-900 mb-12">
          Condições de Financiamento
        </h2>
        
        <div className="bg-mineral-50 p-8 md:p-12 border border-mineral-200 mb-10">
          <div className="mb-10">
            <span className="block text-sm font-semibold text-mineral-800 uppercase tracking-widest mb-2">Valor do Imóvel</span>
            <span className="text-4xl md:text-5xl font-display font-medium text-mineral-900">{propertyData.priceFormatted}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 border-t border-mineral-200 pt-10">
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold text-mineral-800 uppercase tracking-wider mb-2 text-center">Entrada Média</span>
              <span className="text-2xl md:text-3xl font-display font-medium text-mineral-900">{propertyData.financials.downPaymentFormatted}</span>
            </div>
            
            <div className="flex flex-col items-center md:border-l md:border-r border-mineral-200">
              <span className="text-sm font-semibold text-mineral-800 uppercase tracking-wider mb-2 text-center">Parcelas Médias</span>
              <span className="text-2xl md:text-3xl font-display font-medium text-mineral-900">{propertyData.financials.installmentsFormatted}</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold text-mineral-800 uppercase tracking-wider mb-2 text-center">Documentação Média</span>
              <span className="text-2xl md:text-3xl font-display font-medium text-mineral-900">{propertyData.financials.documentationFormatted}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-mineral-800 mb-12 text-left md:text-center leading-relaxed">
          {propertyData.financials.disclaimer}
        </p>

        <a 
          id="cta_financiamento"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-mineral-900 text-white font-medium text-sm md:text-base tracking-wide hover:bg-mineral-800 transition-colors w-full sm:w-auto"
        >
          FAZER UMA SIMULAÇÃO GRATUITA
        </a>
      </div>
    </section>
  );
}
