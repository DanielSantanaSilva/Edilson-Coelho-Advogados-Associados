export const whatsappUrl = "https://wa.me/5511975766032";
export const defaultWhatsappMessage = "Olá, gostaria de agendar uma conversa com o escritório.";

export function createWhatsappUrl(message: string) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}
