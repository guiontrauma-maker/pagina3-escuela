import { contactConfig } from "./contactConfig";
import styles from "./ContactActions.module.css";

export default function ContactActions() {
  const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    contactConfig.whatsappMessage
  )}`;

  return (
    <div className={styles.actions}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="Contactar a Althea por WhatsApp"
      >
        <span className={styles.icon}>◉</span>

        <span className={styles.text}>
          <strong>WhatsApp</strong>
          <small>Habla con nosotros</small>
        </span>
      </a>

      <a
        href={`mailto:${contactConfig.email}`}
        className={styles.email}
        aria-label="Enviar correo a Asesoría EspecializadaenRecuperación"
      >
        <span className={styles.icon}>✉</span>

        <span className={styles.text}>
          <strong>Correo electrónico</strong>
          <small>{contactConfig.email}</small>
        </span>
      </a>
    </div>
  );
}