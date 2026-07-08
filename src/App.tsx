/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Hero } from './components/Hero';
import { Resumo } from './components/Resumo';
import { AmbientesIntegrados } from './components/AmbientesIntegrados';
import { AreaGourmet } from './components/AreaGourmet';
import { Conforto } from './components/Conforto';
import { Acabamento } from './components/Acabamento';
import { Galeria } from './components/Galeria';
import { Financiamento } from './components/Financiamento';
import { Localizacao } from './components/Localizacao';
import { CTAFinal } from './components/CTAFinal';
import { CTAMobileFixo } from './components/CTAMobileFixo';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="min-h-screen bg-mineral-50 font-sans text-mineral-900 selection:bg-mineral-900 selection:text-white pb-24 md:pb-0 overflow-x-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Resumo Rápido */}
      <Resumo />

      {/* 3. Ambientes Integrados */}
      <AmbientesIntegrados />

      {/* 4. Área Gourmet */}
      <AreaGourmet />

      {/* 5. Conforto */}
      <Conforto />

      {/* 6. Acabamento */}
      <Acabamento />

      {/* 7. Galeria */}
      <Galeria />

      {/* 8. Financiamento */}
      <Financiamento />

      {/* 9. Localização */}
      <Localizacao />

      {/* 10. CTA Final */}
      <CTAFinal />

      {/* 11. Footer */}
      <Footer />

      {/* Fixed CTA for Mobile */}
      <CTAMobileFixo />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
