import { useState, useEffect, useCallback } from 'react';
import { imageMap } from '../data/images';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Galeria() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Filter images that have 'galeria' in their section array and sort by galleryPosition
  const galleryImages = imageMap
    .filter(img => img.section.includes('galeria') && img.galleryPosition)
    .sort((a, b) => (a.galleryPosition || 0) - (b.galleryPosition || 0));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
    
    setTouchStart(null);
  };

  return (
    <section id="cta_galeria" className="w-full py-20 md:py-32 bg-mineral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-mineral-900 mb-12 text-center md:text-left">
          Conheça cada detalhe.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index}
              role="button"
              tabIndex={0}
              className="cursor-pointer group overflow-hidden relative aspect-[3/4] rounded-xl border border-mineral-200/80 shadow-sm"
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`Abrir imagem ${index + 1} na galeria`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-mineral-900/0 group-hover:bg-mineral-900/10 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-mineral-900/95 flex flex-col items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header */}
          <div className="absolute top-0 w-full flex justify-between items-center p-4 md:p-6 z-10 text-white">
            <span className="text-sm md:text-base font-medium tracking-widest">
              {currentIndex + 1} / {galleryImages.length}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Main Image */}
          <div 
            className="relative w-full max-w-5xl h-full max-h-[80vh] flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            <img 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].alt} 
              className="max-w-full max-h-full object-contain pointer-events-none"
            />
          </div>

          {/* Navigation Controls (Desktop) */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
