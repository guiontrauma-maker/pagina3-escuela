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
  return (
    <header className="valtara-navbar">
      <div className="valtara-navbar__container">

        {/* MARCA */}
        <Link href="/" className="valtara-brand">

          <div className="valtara-brand__logo">
            <span>V</span>
          </div>

          <div className="valtara-brand__text">

            <div className="valtara-brand__name">
              VALTARA
            </div>

            <div className="valtara-brand__descriptor">
              Resguardo y Recuperación Patrimonial
            </div>

          </div>

        </Link>


        {/* NAVEGACIÓN */}
        <nav className="valtara-navbar__navigation">

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="valtara-navbar__link"
            >
              {item.label}
            </Link>
          ))}

        </nav>

      </div>
    </header>
  );
}