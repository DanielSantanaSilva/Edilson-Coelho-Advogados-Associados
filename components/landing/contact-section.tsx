"use client";

import { FormEvent } from "react";
import { practices } from "@/data/practices";
import { createWhatsappUrl } from "@/lib/whatsapp";

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = new FormData(event.currentTarget); const message = `Olá, meu nome é ${form.get("name")}.\nContato: ${form.get("phone")}.\nInteresse: ${form.get("interest")}.\nMensagem: ${form.get("message") || "Gostaria de agendar uma conversa."}`; window.open(createWhatsappUrl(message), "_blank", "noopener,noreferrer"); }
  return <section className="contact" id="contato"><div className="contact-panel"><p className="eyebrow">FALE CONOSCO</p><h2>Conte com uma equipe pronta para ouvir você.</h2><p>Envie seus dados e inicie uma conversa confidencial com nosso escritório pelo WhatsApp.</p><ul><li>Atendimento próximo e individualizado</li><li>Informações tratadas com confidencialidade</li><li>Retorno para compreender sua necessidade</li></ul></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>AGENDAMENTO</span><strong>Solicite seu atendimento</strong></div><label>Nome completo<input name="name" autoComplete="name" required placeholder="Como podemos chamar você?" /></label><label>Telefone / WhatsApp<input name="phone" type="tel" autoComplete="tel" required placeholder="(00) 00000-0000" /></label><label>Área de interesse<select name="interest" defaultValue="" required><option value="" disabled>Selecione uma opção</option>{practices.map(({ title }) => <option key={title}>{title}</option>)}<option>Outro assunto</option></select></label><label>Como podemos ajudar?<textarea name="message" rows={3} placeholder="Conte brevemente sua necessidade." /></label><button className="button button-primary submit" type="submit">Solicitar atendimento <span>→</span></button><small>Você será direcionado ao WhatsApp para finalizar o contato.</small></form></section>;
}
