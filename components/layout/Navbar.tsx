"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const navigation = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Identificación de fraude",
    href: "/identificacion-de-fraude",
  },
  {
    label: "Cómo funciona",
    href: "/como-funciona",
  },
  {
    label: "Casos reales",
    href: "/casos-reales",
  },
  {
    label: "Preguntas frecuentes",
    href: "/preguntas-frecuentes",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="valtara-navbar">
      <div className="valtara-navbar__container">

        {/* MARCA */}
        <Link
          href="/"
          className="valtara-brand"
          onClick={closeMenu}
        >
          <div className="valtara-brand__logo">
            <span>V</span>
          </div>

          <div className="valtara-brand__text">
            <div className="valtara-brand__name">
              AER
            </div>

            <div className="valtara-brand__descriptor">
              Asesoria Especializada en Recuperación 
            </div>
          </div>
        </Link>

        {/* BOTÓN HAMBURGUESA — SOLO MÓVIL */}
        <button
          type="button"
          className={`valtara-navbar__menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVEGACIÓN */}
        <nav
          className={`valtara-navbar__navigation ${
            menuOpen ? "is-open" : ""
          }`}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="valtara-navbar__link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}