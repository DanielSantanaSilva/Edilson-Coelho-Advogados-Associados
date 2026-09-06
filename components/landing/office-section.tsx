import { SectionLabel } from "./section-label";

export function OfficeSection() {
  return <section className="authority" id="escritorio"><SectionLabel number="01">O ESCRITÓRIO</SectionLabel><div className="authority-grid"><h2>Uma atuação que acolhe o presente e protege o <i>futuro.</i></h2><div><p>O Edilson Coelho Advogados Associados transforma cenários jurídicos complexos em caminhos seguros, com uma atuação próxima de cada cliente e comprometida com resultados consistentes.</p><a className="inline-link" href="#contato">Conheça nossa abordagem <span>→</span></a></div></div><div className="principles"><div><b>01</b><h3>Escuta qualificada</h3><p>Entendemos o contexto antes de propor qualquer estratégia.</p></div><div><b>02</b><h3>Rigor técnico</h3><p>Profundidade jurídica em cada orientação e decisão.</p></div><div><b>03</b><h3>Relação de confiança</h3><p>Comunicação clara, disponibilidade e total discrição.</p></div></div></section>;
}
