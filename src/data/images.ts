export type ImagePriority = 'A' | 'B' | 'C';
export type ImageSection = 'hero' | 'integrados' | 'gourmet' | 'conforto' | 'acabamento' | 'externa' | 'galeria' | 'cta_final';

export interface ImageAsset {
  src: string;
  alt: string;
  priority: ImagePriority;
  section: ImageSection[];
  galleryPosition?: number;
}

export const imageMap: ImageAsset[] = [
  {
    src: '/images/frente-1.jpg',
    alt: 'Fachada e área externa da casa no Parque das Flores, em Goiânia.',
    priority: 'A',
    section: ['hero', 'galeria'],
    galleryPosition: 1,
  },
  {
    src: '/images/sala-integrada.jpg',
    alt: 'Sala e cozinha integradas com porcelanato polido e grandes portas de vidro.',
    priority: 'A',
    section: ['integrados', 'galeria'],
    galleryPosition: 2,
  },
  {
    src: '/images/area-gourmet.jpg',
    alt: 'Área gourmet com churrasqueira e bancada aberta para a área externa.',
    priority: 'A',
    section: ['gourmet', 'galeria'],
    galleryPosition: 3,
  },
  {
    src: '/images/frente-2.jpg',
    alt: 'Área externa frontal com paisagismo e fachada da casa.',
    priority: 'A',
    section: ['externa', 'cta_final', 'gourmet', 'galeria'],
    galleryPosition: 4,
  },
  {
    src: '/images/sala-amplitude.jpg',
    alt: 'Outra perspectiva da área social integrada da casa.',
    priority: 'B',
    section: ['integrados', 'galeria'],
    galleryPosition: 5,
  },
  {
    src: '/images/quarto.jpg',
    alt: 'Quarto da casa com piso claro e janela lateral.',
    priority: 'B',
    section: ['conforto', 'galeria'],
    galleryPosition: 6,
  },
  {
    src: '/images/banheiro-principal.jpg',
    alt: 'Banheiro com bancada, espelho e revestimentos claros.',
    priority: 'A',
    section: ['conforto', 'acabamento', 'galeria'],
    galleryPosition: 7,
  },
  {
    src: '/images/banheiro-2.jpg',
    alt: 'Outra perspectiva do banheiro com bancada e revestimentos claros.',
    priority: 'B',
    section: ['acabamento', 'galeria'],
    galleryPosition: 8,
  },
  {
    src: '/images/sala-apoio.jpg',
    alt: 'Ambiente interno com porta de vidro e piso em porcelanato.',
    priority: 'B',
    section: ['galeria'],
    galleryPosition: 9,
  },
  {
    src: '/images/corredor-quintal.jpg',
    alt: 'Corredor externo lateral da casa com acesso aos ambientes.',
    priority: 'B',
    section: ['externa', 'galeria'],
    galleryPosition: 10,
  },
  {
    src: '/images/area-servico.jpg',
    alt: 'Área de serviço coberta da casa.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 11,
  },
  {
    src: '/images/banheiro-nicho.jpg',
    alt: 'Perspectiva do banheiro com nicho e revestimentos claros.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 12,
  },
  {
    src: '/images/corredor-interno.jpg',
    alt: 'Corredor interno de circulação da casa.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 13,
  },
  {
    src: '/images/porta-rua.jpg',
    alt: 'Acesso externo lateral da casa.',
    priority: 'C',
    section: ['galeria'],
    galleryPosition: 14,
  }
];
