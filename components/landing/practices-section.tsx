"use client";

import { PointerEvent, useRef, useState } from "react";
import { practices } from "@/data/practices";
import { SectionLabel } from "./section-label";

export function PracticesSection() {
  const [selectedPractice, setSelectedPractice] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, scrollLeft: 0, dragging: false });
  function startDrag(event: PointerEvent<HTMLDivElement>) { if (!railRef.current || (event.target as HTMLElement).closest("button")) return; dragStart.current = { x: event.clientX, scrollLeft: railRef.current.scrollLeft, dragging: true }; railRef.current.setPointerCapture(event.pointerId); }
  function dragRail(event: PointerEvent<HTMLDivElement>) { if (!railRef.current || !dragStart.current.dragging) return; railRef.current.scrollLeft = dragStart.current.scrollLeft - (event.clientX - dragStart.current.x); }
  function stopDrag(event: PointerEvent<HTMLDivElement>) { dragStart.current.dragging = false; if (railRef.current?.hasPointerCapture(event.pointerId)) railRef.current.releasePointerCapture(event.pointerId); }
  return <section className="practice-section" id="atuacao"><SectionLabel number="02">ÁREAS DE ATUAÇÃO</SectionLabel><div className="practice-intro"><h2>Soluções jurídicas à altura das suas <i>decisões.</i></h2><p>Atuação multidisciplinar para pessoas, famílias e empresas que valorizam previsibilidade e segurança.</p></div><div className="practice-carousel" aria-label="Áreas de atuação"><div className="practice-rail" ref={railRef} onPointerDown={startDrag} onPointerMove={dragRail} onPointerUp={stopDrag} onPointerCancel={stopDrag} onPointerLeave={stopDrag}>{practices.map(({ title, summary }, index) => <article className="practice-card" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{summary}</p><button type="button" onClick={() => setSelectedPractice(index)}>Saiba mais <b>→</b></button></article>)}</div><p className="carousel-hint">Arraste para explorar as áreas de atuação <span>→</span></p></div>{selectedPractice !== null && <div className="practice-modal" role="dialog" aria-modal="true" aria-labelledby="practice-modal-title"><div><button className="modal-close" type="button" onClick={() => setSelectedPractice(null)} aria-label="Fechar detalhes">×</button><span>{String(selectedPractice + 1).padStart(2, "0")} · ÁREA DE ATUAÇÃO</span><h3 id="practice-modal-title">{practices[selectedPractice].title}</h3><p>{practices[selectedPractice].details}</p><a className="button button-primary" href="#contato" onClick={() => setSelectedPractice(null)}>Falar com um advogado <span>→</span></a></div></div>}</section>;
}
