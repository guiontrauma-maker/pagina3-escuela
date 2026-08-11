import { contactConfig } from "./contactConfig";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    contactConfig.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floating}
      aria-label="Contactar a VALTARA por WhatsApp"
    >
      <span className={styles.icon}>◉</span>

      <span className={styles.label}>
        WhatsApp
      </span>
    </a>
  );
}