import { createWhatsappUrl, defaultWhatsappMessage } from "@/lib/whatsapp";

export function ConversionSection() {
  return <section className="conversion"><div><p className="eyebrow">ORIENTAÇÃO COMEÇA COM UMA BOA CONVERSA</p><h2>Seu próximo passo pode começar <i>agora.</i></h2></div><a className="button button-primary" href={createWhatsappUrl(defaultWhatsappMessage)} target="_blank" rel="noreferrer">Chamar no WhatsApp <span>→</span></a></section>;
}
