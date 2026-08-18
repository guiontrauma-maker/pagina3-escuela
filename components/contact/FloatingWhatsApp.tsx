import { contactConfig } from "./contactConfig";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${
    contactConfig.whatsappNumber
  }?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floating}
      aria-label="Contactar a AER asesoria especializada por WhatsApp"
    >
      <svg
        className={styles.icon}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          d="M16 3.2C8.92 3.2 3.2 8.92 3.2 16c0 2.26.59 4.38 1.63 6.22L3.2 28.8l6.75-1.59A12.72 12.72 0 0 0 16 28.8c7.08 0 12.8-5.72 12.8-12.8S23.08 3.2 16 3.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M11.2 9.8c.35-.38.78-.42 1.16-.1l1.66 1.4c.34.29.42.77.2 1.16l-.72 1.27c-.17.3-.16.67.03.95.77 1.15 1.79 2.17 2.94 2.94.28.19.65.2.95.03l1.27-.72c.39-.22.87-.14 1.16.2l1.4 1.66c.32.38.28.81-.1 1.16l-.86.8c-.65.6-1.6.8-2.42.48-1.8-.7-3.54-1.88-5.02-3.36-1.48-1.48-2.66-3.22-3.36-5.02-.32-.82-.12-1.77.48-2.42l.8-.86Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}