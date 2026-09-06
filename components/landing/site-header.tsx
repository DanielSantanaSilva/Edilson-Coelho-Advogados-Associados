"use client";

import { useState } from "react";
import { Brand } from "./brand";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <header className="header"><Brand /><nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navegação principal"><a href="#escritorio" onClick={closeMenu}>Escritório</a><a href="#atuacao" onClick={closeMenu}>Atuação</a><a href="#contato" onClick={closeMenu}>Contato</a></nav><a className="header-cta" href="#contato">Agendar consulta <span>→</span></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? "×" : "☰"}</button></header>;
}
