export type ImagePriority = 'A' | 'B' | 'C';
export type ImageSection = 'hero' | 'integrados' | 'gourmet' | 'conforto' | 'acabamento' | 'externa' | 'galeria' | 'cta_final';

export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  priority: ImagePriority;
  section: ImageSection[];
  galleryPosition?: number;
}

export const imageMap: ImageAsset[] = [
  {
    id: 'frente-1',
    src: 'https://iili.io/ClUoOlV.jpg',
    alt: 'Fachada e área externa da casa no Parque das Flores, em Goiânia.',
    priority: 'A',
    section: ['hero', 'galeria'],
    galleryPosition: 1,
  },
  {
    id: 'sala-integrada',
    src: 'https://iili.io/ClUx1qv.jpg',
    alt: 'Sala e cozinha integradas com porcelanato polido e grandes portas de vidro.',
    priority: 'A',
    section: ['integrados', 'galeria'],
    galleryPosition: 2,
  },
  {
    id: 'area-gourmet',
    src: 'https://iili.io/ClUxJf4.jpg',
    alt: 'Área gourmet com churrasqueira e bancada aberta para a área externa.',
    priority: 'A',
    section: ['gourmet', 'galeria'],
    galleryPosition: 3,
  },
  {
    id: 'frente-2',
    src: 'https://iili.io/ClUxTgV.jpg',
    alt: 'Área externa frontal com paisagismo e fachada da casa.',
    priority: 'A',
    section: ['externa', 'cta_final', 'gourmet', 'galeria'],
    galleryPosition: 4,
  },
  {
    id: 'sala-amplitude',
    src: 'https://iili.io/ClUxcXa.jpg',
    alt: 'Outra perspectiva da área social integrada da casa.',
    priority: 'B',
    section: ['integrados', 'galeria'],
    galleryPosition: 5,
  },
  {
    id: 'quarto',
    src: 'https://iili.io/ClUx7mF.jpg',
    alt: 'Quarto da casa com piso claro e janela lateral.',
    priority: 'B',
    section: ['conforto', 'galeria'],
    galleryPosition: 6,
  },
  {
    id: 'banheiro-principal',
    src: 'https://iili.io/ClUxqbe.jpg',
    alt: 'Banheiro com bancada, espelho e revestimentos claros.',
    priority: 'A',
    section: ['conforto', 'acabamento', 'galeria'],
    galleryPosition: 7,
  },
  {
    id: 'banheiro-2',
    src: 'https://iili.io/ClUxFJS.jpg',
    alt: 'Outra perspectiva do banheiro com bancada e revestimentos claros.',
    priority: 'B',
    section: ['acabamento', 'galeria'],
    galleryPosition: 8,
  },
  {
    id: 'sala-apoio',
    src: 'https://iili.io/ClUxlLJ.jpg',
    alt: 'Ambiente interno com porta de vidro e piso em porcelanato.',
    priority: 'B',
    section: ['galeria'],
    galleryPosition: 9,
  },
  {
    id: 'corredor-quintal',
    src: 'https://iili.io/ClUxosj.jpg',
    alt: 'Corredor externo lateral da casa com acesso aos ambientes.',
    priority: 'B',
    section: ['externa', 'galeria'],
    galleryPosition: 10,
  },
  {
    id: 'area-servico',
    src: 'https://iili.io/ClUxd0l.jpg',
    alt: 'Área de serviço coberta da casa.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 11,
  },
  {
    id: 'banheiro-nicho',
    src: 'https://iili.io/ClUxK57.jpg',
    alt: 'Perspectiva do banheiro com nicho e revestimentos claros.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 12,
  },
  {
    id: 'corredor-interno',
    src: 'https://iili.io/ClUxCzu.jpg',
    alt: 'Corredor interno de circulação da casa.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 13,
  },
  {
    id: 'porta-rua',
    src: 'https://iili.io/ClUxR5P.jpg',
    alt: 'Acesso externo lateral da casa.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 14,
  }
];
