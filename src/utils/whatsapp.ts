export type WhatsAppIntent = 'interest' | 'simulation' | 'visit';

const WHATSAPP_MESSAGES: Record<WhatsAppIntent, string> = {
  interest: 'Olá, Gabriel! Vi a casa de 3 quartos no Parque das Flores e gostaria de receber mais informações.',
  simulation: 'Olá, Gabriel! Vi a casa no Parque das Flores e gostaria de entender as possibilidades de financiamento para o meu perfil.',
  visit: 'Olá, Gabriel! Vi a casa no Parque das Flores e gostaria de verificar a disponibilidade para uma visita.',
};

export function getWhatsAppLink(intent: WhatsAppIntent): string {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;
  
  if (!number || number.includes('X')) {
    // Retorna vazio ou link neutro caso o número não tenha sido configurado.
    return '#'; 
  }

  const message = encodeURIComponent(WHATSAPP_MESSAGES[intent]);
  return `https://wa.me/${number}?text=${message}`;
}
