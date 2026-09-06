import { createWhatsappUrl, defaultWhatsappMessage } from "@/lib/whatsapp";

export function ConversionSection() {
  return <section className="conversion"><div><p className="eyebrow">ORIENTAÇÃO COMEÇA COM UMA BOA CONVERSA</p><h2>Seu próximo passo pode começar <i>agora.</i></h2></div><a className="button button-primary whatsapp-cta" href={createWhatsappUrl(defaultWhatsappMessage)} target="_blank" rel="noreferrer"><span className="whatsapp-cta-label">Chamar no WhatsApp</span><span className="whatsapp-cta-arrow">→</span></a></section>;
}
