import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppLink('interest');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-24 md:bottom-8 right-4 md:right-8 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:bg-[#22bf5b] hover:scale-110 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
