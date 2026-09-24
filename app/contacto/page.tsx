"use client";

import Navbar from "@/components/layout/Navbar";
import { contactConfig } from "@/components/contact/contactConfig";
import styles from "./page.module.css";

const WHATSAPP_URL = `https://wa.me/${
  contactConfig.whatsappNumber
}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;

const EMAIL_URL =
  "mailto:aer@asesoriaespecializada.com?subject=Solicitud%20de%20orientación";

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      <main className={styles.contactPage}>
        {/* =====================================================
            INTRODUCCIÓN
            ===================================================== */}

        <section className={styles.introSection}>
          <div className={styles.introInner}>
            <div className={styles.introLabel}>
              <span className={styles.introDot}></span>
              VALTARA
            </div>

            <h1>
              Cuéntanos qué
              <br />
              <em>está pasando.</em>
            </h1>

            <p>
              Si consideras que tu patrimonio pudo haber estado expuesto a una
              situación irregular, puedes comunicarte directamente con nosotros
              para recibir una primera orientación.
            </p>
          </div>

          <div className={styles.introSide}>
            <span>01</span>

            <p>
              Una conversación inicial nos permite comprender el contexto y
              conocer los elementos principales de tu situación antes de
              determinar cuáles podrían ser los siguientes pasos.
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTACTO PRINCIPAL
            ===================================================== */}

        <section className={styles.mainSection}>
          <div className={styles.mainGrid}>
            {/* =================================================
                CONTACTO DIRECTO
                ================================================= */}

            <div className={styles.contactColumn}>
              <div className={styles.contactHeader}>
                <span className={styles.sectionLabel}>
                  CONTACTO DIRECTO
                </span>

                <h2>
                  Hablemos
                  <br />
                  <em>directamente.</em>
                </h2>

                <p>
                  Si prefieres no completar un formulario, puedes comunicarte
                  directamente con nosotros. Explícanos brevemente qué ocurrió
                  y te orientaremos sobre la información que puede ser útil para
                  comprender tu situación.
                </p>
              </div>

              {/* =================================================
                  WHATSAPP PRINCIPAL
                  ================================================= */}

              <div className={styles.whatsappCard}>
                <div className={styles.whatsappTop}>
                  <span className={styles.whatsappLabel}>
                    CANAL PRINCIPAL
                  </span>

                  <span className={styles.whatsappNumber}>01</span>
                </div>

                <div className={styles.whatsappIcon}>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.3-1.65a11.85 11.85 0 0 0 5.71 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.19 6.44 6.63 2 12.07 2a9.86 9.86 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7c0 5.45-4.44 9.89-9.91 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                </div>

                <h3>Hablar por WhatsApp</h3>

                <p>
                  Comunícate directamente con nuestro equipo para explicar tu
                  situación y recibir una primera orientación.
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                  Abrir conversación en WhatsApp
                  <span>↗</span>
                </a>

                <span className={styles.whatsappHint}>
                  Atención directa · Primera orientación
                </span>
              </div>

              {/* =================================================
                  CORREO
                  ================================================= */}

              <div className={styles.emailCard}>
                <div>
                  <span className={styles.emailLabel}>
                    OTRA FORMA DE CONTACTO
                  </span>

                  <h3>También puedes escribirnos por correo.</h3>

                  <p>
                    Si prefieres explicar tu situación con mayor detalle,
                    puedes enviarnos un mensaje directamente.
                  </p>
                </div>

                <a href={EMAIL_URL} className={styles.emailButton}>
                  aer@asesoriaespecializada.com
                  <span>↗</span>
                </a>
              </div>

              {/* =================================================
                  NOTA DE SEGURIDAD
                  ================================================= */}

              <div className={styles.contactSecurity}>
                <span className={styles.contactSecurityIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm-7-2a2 2 0 1 4 0v2h-4V6Zm7 14H7V10h10v10Zm-5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                  </svg>
                </span>

                <p>
                  No compartas contraseñas, códigos de seguridad, números
                  completos de tarjetas ni información confidencial que no sea
                  necesaria para explicar tu situación.
                </p>
              </div>
            </div>

            {/* =================================================
                PANEL LATERAL
                ================================================= */}

            <aside className={styles.sideColumn}>
              <div className={styles.sideCard}>
                <span className={styles.sideNumber}>01</span>

                <span className={styles.sideLabel}>
                  ANTES DE CONTACTARNOS
                </span>

                <h3>
                  Una explicación clara ayuda a comprender mejor tu situación.
                </h3>

                <p>
                  Puedes comenzar explicando cómo conociste la propuesta, qué
                  te ofrecieron, qué cantidad involucraste y qué ocurrió
                  posteriormente.
                </p>
              </div>

              <div className={styles.sideSteps}>
                <div className={styles.sideStepsHeader}>
                  <span>QUÉ SUCEDE DESPUÉS</span>
                </div>

                <div className={styles.step}>
                  <span className={styles.stepNumber}>01</span>

                  <div>
                    <strong>Escuchamos tu situación</strong>

                    <p>
                      Conocemos los datos iniciales que decidas compartir.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <span className={styles.stepNumber}>02</span>

                  <div>
                    <strong>Comprendemos el contexto</strong>

                    <p>
                      Identificamos los elementos principales de lo ocurrido.
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <span className={styles.stepNumber}>03</span>

                  <div>
                    <strong>Te orientamos</strong>

                    <p>
                      Recibes información sobre posibles alternativas y
                      siguientes pasos.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.directContact}>
                <span>¿PREFIERES OTRO CANAL?</span>

                <p>
                  También puedes comunicarte con nosotros mediante correo
                  electrónico.
                </p>

                <div className={styles.directLinks}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <span>↗</span>
                  </a>

                  <a href={EMAIL_URL}>
                    Correo electrónico
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            INFORMACIÓN QUE NO DEBES COMPARTIR
            ===================================================== */}

        <section className={styles.protectionSection}>
          <div className={styles.protectionInner}>
            <div className={styles.protectionHeading}>
              <span>SEGURIDAD DE LA INFORMACIÓN</span>

              <h2>
                Comparte lo necesario,
                <br />
                <em>no tus credenciales.</em>
              </h2>
            </div>

            <div className={styles.protectionGrid}>
              <div className={styles.protectionItem}>
                <span>01</span>

                <h3>Nunca envíes contraseñas</h3>

                <p>
                  No necesitamos contraseñas, códigos de acceso ni claves de
                  seguridad para comprender tu caso.
                </p>
              </div>

              <div className={styles.protectionItem}>
                <span>02</span>

                <h3>Evita datos financieros completos</h3>

                <p>
                  No compartas números completos de tarjetas, cuentas bancarias
                  o códigos de autenticación.
                </p>
              </div>

              <div className={styles.protectionItem}>
                <span>03</span>

                <h3>Describe los hechos</h3>

                <p>
                  La información sobre fechas, comunicaciones, operaciones y
                  acontecimientos puede ser más útil que compartir
                  credenciales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CIERRE
            ===================================================== */}

        <section className={styles.closingSection}>
          <div className={styles.closingContent}>
            <span>VALTARA</span>

            <h2>
              Entender lo ocurrido
              <br />
              es el primer paso.
            </h2>

            <p>
              Una situación patrimonial complicada puede generar incertidumbre.
              Obtener información clara puede ayudarte a tomar decisiones con
              mayor perspectiva.
            </p>

            <a href="/preguntas-frecuentes" className={styles.closingLink}>
              Consultar preguntas frecuentes
              <span>→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
