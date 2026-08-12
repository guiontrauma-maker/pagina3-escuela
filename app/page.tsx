"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

const WHATSAPP_URL =
  "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20sobre%20una%20situaci%C3%B3n%20relacionada%20con%20mi%20patrimonio";

const EMAIL_URL =
  "mailto:contacto@valtara.mx?subject=Solicitud%20de%20asesor%C3%ADa";


/* =========================================================
   ICONOS
   ========================================================= */

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.4ZM12.2 21.7h-.1c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9-.1 5.3-4.5 9.7-9.7 9.7Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5s0-.4-.1-.6c-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.5l9 6.2 9-6.2V6H3Zm18 12V9l-8.4 5.8a1 1 0 0 1-1.2 0L3 9v9h18Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9.2 16.6-4-4 1.4-1.4 2.6 2.6 7.9-7.9 1.4 1.4-9.3 9.3Z" />
    </svg>
  );
}


/* =========================================================
   ICONOS DE RIESGO
   Todos son SVG monocromáticos
   ========================================================= */

function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C7.58 2 4 4.24 4 7v10c0 2.76 3.58 5 8 5s8-2.24 8-5V7c0-2.76-3.58-5-8-5Zm0 2c3.31 0 6 1.35 6 3s-2.69 3-6 3-6-1.35-6-3 2.69-3 6-3Zm0 16c-3.31 0-6-1.35-6-3v-2.04C7.41 16.24 9.55 17 12 17s4.59-.76 6-2.04V17c0 1.65-2.69 3-6 3Zm0-5c-3.31 0-6-1.35-6-3V9.96C7.41 11.24 9.55 12 12 12s4.59-.76 6-2.04V12c0 1.65-2.69 3-6 3Z" />
    </svg>
  );
}

function DigitalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6v1h3v2H7v-2h3v-1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v10h16V6H4Z" />
    </svg>
  );
}

function IdentityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v12h16V6H4Zm8 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 6c.32-1.7 1.85-2.9 3.65-2.9h2.7c1.8 0 3.33 1.2 3.65 2.9H7Z" />
    </svg>
  );
}

function InvestmentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 18h16v2H4v-2Zm1-2 4.2-5.2 3 2.4L18 7.4l1.4 1.4-7 7-3-2.4L6.6 17H5v-1Zm0-8 4 2 3-3 3 1.5L19 5l1.4 1.4-4.5 4.5-3-1.5-3 3-4.9-2.45V8Z" />
    </svg>
  );
}

function PhishingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c-.7 0-1.27.57-1.27 1.27v3.1c-1.25.34-2.16 1.48-2.16 2.84 0 1.62 1.31 2.93 2.93 2.93h1v2.02h-2.3v1.5h2.3v2.3h1.5v-2.3h2.3v-1.5H14v-2.02h1c1.62 0 2.93-1.31 2.93-2.93 0-1.36-.91-2.5-2.16-2.84v-3.1C15.77 3.57 15.2 3 14.5 3h-2.5Zm0 1.5h2.5v2.74h-2.5V4.5Zm-2 5.71c0-.79.64-1.43 1.43-1.43h1.14c.79 0 1.43.64 1.43 1.43s-.64 1.43-1.43 1.43h-1.14c-.79 0-1.43-.64-1.43-1.43ZM4 19.5h16v1.5H4v-1.5Z" />
    </svg>
  );
}

function PyramidIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 3 20h18L12 3Zm0 3.2L17.55 18H6.45L12 6.2ZM11 10h2v5h-2v-5Zm0 6h2v2h-2v-2Z" />
    </svg>
  );
}


/* =========================================================
   HOME
   ========================================================= */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <main className={styles.home}>

        {/* =====================================================
            HERO
            ===================================================== */}

        <section className={styles.hero} id="inicio">

          <div className={styles.heroGlow}></div>

          <div className={styles.heroContent}>

            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Resguardo y Recuperación Patrimonial
            </div>

            <h1 className={styles.heroTitle}>
              Protegemos lo que
              <br />
              <span>más importa.</span>
            </h1>

            <p className={styles.heroDescription}>
              En VALTARA te ayudamos a identificar señales de fraude,
              comprender tu situación y conocer las alternativas disponibles
              para proteger tu patrimonio.
            </p>

            <div className={styles.heroActions}>

              <a
                href="/identificacion-de-fraude"
                className={styles.primaryButton}
              >
                Identificar un posible fraude
              </a>

              <a
                href="#como-funciona"
                className={styles.secondaryButton}
              >
                Conoce cómo funciona
              </a>

            </div>

            <div className={styles.heroNote}>
              <span className={styles.noteIcon}>
                <CheckIcon />
              </span>

              Orientación inicial · Información confidencial
            </div>

            <div className={styles.trustBar}>

              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <span></span>
                </span>

                <div>
                  <strong>Información protegida</strong>
                  <span>Tratamiento confidencial</span>
                </div>
              </div>

              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <span></span>
                </span>

                <div>
                  <strong>Atención clara</strong>
                  <span>Proceso paso a paso</span>
                </div>
              </div>

              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <span></span>
                </span>

                <div>
                  <strong>Análisis inicial</strong>
                  <span>Sin compromiso</span>
                </div>
              </div>

            </div>

          </div>


          {/* ===================================================
              PANEL
              =================================================== */}

          <div className={styles.panelWrapper}>

            <div className={styles.operationalPanel}>

              <div className={styles.panelHeader}>

                <div className={styles.panelHeaderContent}>

                  <span className={styles.panelEyebrow}>
                    VALTARA
                  </span>

                  <h2>
                    Tu patrimonio,
                    <br />
                    bajo una segunda mirada.
                  </h2>

                  <p>
                    Indicadores generales para ayudarte a comprender
                    posibles situaciones de riesgo patrimonial.
                  </p>

                </div>

                <div className={styles.status}>
                  <span></span>
                  Plataforma activa
                </div>

              </div>


              <div className={styles.panelDivider}></div>


              <div className={styles.statsGrid}>

                <div className={styles.statCard}>
                  <span className={styles.statIndex}>
                    Los
                  </span>

                  <strong className={styles.statNumber}>
                    10
                  </strong>

                  <span className={styles.statLabel}>
                    Tipos de fraudes
                    <br />
                    identificables
                  </span>
                </div>


                <div className={styles.statCard}>
                  <span className={styles.statIndex}>
                    Nuestros
                  </span>

                  <strong className={styles.statNumber}>
                    18
                  </strong>

                  <span className={styles.statLabel}>
                    Indicadores
                    <br />
                    de riesgo
                  </span>
                </div>


                <div className={styles.statCard}>
                  <span className={styles.statIndex}>
                    Brindamos atencion
                  </span>

                  <strong className={styles.statNumber}>
                    24<span className={styles.statPlus}>h</span>
                  </strong>

                  <span className={styles.statLabel}>
                    los 7 dias
                    <br />
                    de la semana
                  </span>
                </div>

              </div>


              <div className={styles.panelContact}>

                <div className={styles.panelContactText}>

                  <span>
                    ORIENTACIÓN DIRECTA
                  </span>

                  <h3>
                    ¿Necesitas asesoría?
                  </h3>

                  <p>
                    Comunícate con nosotros y recibe orientación
                    sobre tu situación.
                  </p>

                </div>


                <div className={styles.contactOptions}>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactOption}
                    aria-label="Pedir asesoría por WhatsApp"
                    title="Pedir asesoría por WhatsApp"
                  >
                    <span className={styles.contactIcon}>
                      <WhatsAppIcon />
                    </span>
                  </a>


                  <a
                    href={EMAIL_URL}
                    className={styles.contactOption}
                    aria-label="Pedir asesoría por correo electrónico"
                    title="Pedir asesoría por correo electrónico"
                  >
                    <span className={styles.contactIcon}>
                      <EmailIcon />
                    </span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            REFERENTES
            ===================================================== */}

        <section className={styles.references}>

          <p>
            REFERENTES Y MARCOS REGULATORIOS
          </p>

          <div className={styles.referenceList}>

            <span>CONDUSEF</span>
            <i></i>

            <span>CNBV</span>
            <i></i>

            <span>PROFECO</span>
            <i></i>

            <span>FCA</span>

          </div>

        </section>


        {/* =====================================================
            IDENTIDAD
            ===================================================== */}

        <section className={styles.identity}>

          <div className={styles.identityInner}>

            <span className={styles.identityLabel}>
              VALTARA
            </span>

            <h2>
              Tu patrimonio,
              <br />
              <em>nuestra prioridad.</em>
            </h2>

            <p>
              Protección, información y orientación para ayudarte
              a tomar decisiones con mayor claridad frente a
              situaciones que puedan poner en riesgo tu patrimonio.
            </p>

          </div>

        </section>


        {/* =====================================================
            RIESGO
            ===================================================== */}

        <section
          className={styles.riskSection}
          id="fraude"
        >

          <div className={styles.sectionIntro}>

            <span>
              IDENTIFICACIÓN
            </span>

            <h2>
              ¿Tu patrimonio
              <br />
              está en riesgo?
            </h2>

            <p>
              Conocer las señales de alerta puede ayudarte a reconocer
              situaciones sospechosas antes de tomar una decisión.
            </p>

          </div>


          <div className={styles.riskGrid}>

            <article className={styles.riskCard}>
              <span className={styles.cardNumber}>01</span>

              <div className={styles.cardIcon}>
                <MoneyIcon />
              </div>

              <h3>
                Fraude financiero
              </h3>

              <p>
                Operaciones, servicios o propuestas que presentan
                señales de irregularidad.
              </p>
            </article>


            <article className={styles.riskCard}>
              <span className={styles.cardNumber}>02</span>

              <div className={styles.cardIcon}>
                <DigitalIcon />
              </div>

              <h3>
                Fraude digital
              </h3>

              <p>
                Engaños realizados mediante plataformas digitales,
                sitios web o comunicaciones electrónicas.
              </p>
            </article>


            <article className={styles.riskCard}>
              <span className={styles.cardNumber}>03</span>

              <div className={styles.cardIcon}>
                <IdentityIcon />
              </div>

              <h3>
                Suplantación
              </h3>

              <p>
                Uso indebido de identidades, instituciones o
                información personal para generar confianza.
              </p>
            </article>


            <article className={styles.riskCard}>
              <span className={styles.cardNumber}>04</span>

              <div className={styles.cardIcon}>
                <InvestmentIcon />
              </div>

              <h3>
                Inversiones sospechosas
              </h3>

              <p>
                Promesas de ganancias extraordinarias o condiciones
                que requieren especial atención.
              </p>
            </article>


            <article className={styles.riskCard}>
              <span className={styles.cardNumber}>05</span>

              <div className={styles.cardIcon}>
                <PhishingIcon />
              </div>

              <h3>
                Phishing y engaños
              </h3>

              <p>
                Mensajes o comunicaciones diseñadas para obtener
                información o provocar transferencias.
              </p>
            </article>


            <article className={styles.riskCard}>
              <span className={styles.cardNumber}>06</span>

              <div className={styles.cardIcon}>
                <PyramidIcon />
              </div>

              <h3>
                Esquemas piramidales
              </h3>

              <p>
                Modelos que dependen principalmente de incorporar
                nuevos participantes para sostener sus operaciones.
              </p>
            </article>

          </div>

        </section>


        {/* =====================================================
            COMO FUNCIONA
            ===================================================== */}

        <section
          className={styles.processSection}
          id="como-funciona"
        >

          <div className={styles.processHeading}>

            <span>
              NUESTRO PROCESO
            </span>

            <h2>
              Cómo te ayudamos
            </h2>

            <p>
              Convertimos información compleja en un proceso más claro,
              ordenado y fácil de comprender.
            </p>

          </div>


          <div className={styles.processGrid}>

            <article className={styles.processItem}>
              <span>01</span>

              <h3>
                Identificamos
              </h3>

              <p>
                Analizamos las señales y características principales
                de la situación que estás enfrentando.
              </p>
            </article>


            <article className={styles.processItem}>
              <span>02</span>

              <h3>
                Organizamos
              </h3>

              <p>
                Reunimos la información relevante para comprender
                mejor el contexto del caso.
              </p>
            </article>


            <article className={styles.processItem}>
              <span>03</span>

              <h3>
                Orientamos
              </h3>

              <p>
                Presentamos alternativas y próximos pasos de forma
                clara y comprensible.
              </p>
            </article>


            <article className={styles.processItem}>
              <span>04</span>

              <h3>
                Damos seguimiento
              </h3>

              <p>
                Facilitamos el seguimiento de la información y evolución
                del proceso.
              </p>
            </article>

          </div>

        </section>


        {/* =====================================================
            MENSAJE HUMANO
            ===================================================== */}

        <section className={styles.messageSection}>

          <div className={styles.messageBox}>

            <div className={styles.messageAccent}></div>

            <span>
              UNA SITUACIÓN DIFÍCIL NO TIENE QUE SER CONFUSA
            </span>

            <h2>
              No estás frente
              <br />
              al problema solo.
            </h2>

            <p>
              Cuando ocurre un fraude, tomar decisiones puede resultar
              complicado. Nuestro objetivo es ayudarte a entender la
              situación y recuperar el control mediante información clara.
            </p>

            <a
              href="/contacto"
              className={styles.lightButton}
            >
              Comenzar una evaluación
            </a>

          </div>

        </section>


        {/* =====================================================
            TIPOS DE CASOS
            ===================================================== */}

        <section className={styles.casesSection}>

          <div className={styles.sectionIntroCentered}>

            <span>
              CASOS
            </span>

            <h2>
              Situaciones que podemos ayudarte a identificar
            </h2>

            <p>
              Algunos de los escenarios más comunes relacionados con
              riesgos patrimoniales y financieros.
            </p>

          </div>


          <div className={styles.caseTags}>

            <span>Fraude bancario</span>
            <span>Inversiones fraudulentas</span>
            <span>Criptomonedas</span>
            <span>Phishing</span>
            <span>Suplantación de identidad</span>
            <span>Esquemas piramidales</span>
            <span>Fraudes inmobiliarios</span>
            <span>Comercio electrónico</span>

          </div>

        </section>


        {/* =====================================================
            CENTRO DE CONOCIMIENTO
            ===================================================== */}

        <section className={styles.knowledgeSection}>

          <div className={styles.knowledgeHeading}>

            <span>
              CENTRO DE CONOCIMIENTO
            </span>

            <h2>
              Información para tomar
              <br />
              mejores decisiones.
            </h2>

          </div>


          <div className={styles.articleGrid}>

            <article className={styles.articleCard}>

              <span>
                PREVENCIÓN
              </span>

              <h3>
                ¿Cómo identificar una inversión sospechosa?
              </h3>

              <p>
                Conoce algunas señales que pueden ayudarte a detectar
                propuestas de inversión que requieren mayor atención.
              </p>

              <a href="/articulos/inversion-sospechosa">
                Leer artículo →
              </a>

            </article>


            <article className={styles.articleCard}>

              <span>
                SEGURIDAD
              </span>

              <h3>
                5 señales de alerta antes de transferir dinero
              </h3>

              <p>
                Antes de realizar una operación, existen ciertos
                indicadores que conviene revisar.
              </p>

              <a href="/articulos/senales-alerta-transferir-dinero">
                Leer artículo →
              </a>

            </article>


            <article className={styles.articleCard}>

              <span>
                ORIENTACIÓN
              </span>

              <h3>
                ¿Qué hacer después de una posible estafa?
              </h3>

              <p>
                Una guía inicial para organizar la información y
                comprender los siguientes pasos.
              </p>

              <a href="/articulos/que-hacer-despues-de-una-estafa">
                Leer artículo →
              </a>

            </article>

          </div>

        </section>


        {/* =====================================================
            PREGUNTAS FRECUENTES
            ===================================================== */}

        <section className={styles.faqSection}>

          <div className={styles.faqHeading}>

            <span>
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Respuestas claras
              <br />
              para tus dudas.
            </h2>

          </div>


          <div className={styles.faqList}>

            <details open={openFaq === 0}>

              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenFaq(openFaq === 0 ? null : 0);
                }}
              >
                ¿VALTARA puede recuperar mi dinero?
                <span>+</span>
              </summary>

              <p>
                VALTARA funciona como una plataforma de orientación y
                seguimiento. La recuperación de fondos depende de las
                características y circunstancias de cada caso.
              </p>

            </details>


            <details open={openFaq === 1}>

              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenFaq(openFaq === 1 ? null : 1);
                }}
              >
                ¿Qué información necesito proporcionar?
                <span>+</span>
              </summary>

              <p>
                Inicialmente puedes proporcionar información general
                sobre la situación para identificar posibles señales
                de riesgo.
              </p>

            </details>


            <details open={openFaq === 2}>

              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenFaq(openFaq === 2 ? null : 2);
                }}
              >
                ¿Mis datos son confidenciales?
                <span>+</span>
              </summary>

              <p>
                La plataforma está diseñada bajo un enfoque de
                confidencialidad y protección de la información.
              </p>

            </details>


            <details open={openFaq === 3}>

              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenFaq(openFaq === 3 ? null : 3);
                }}
              >
                ¿Qué hago si todavía estoy siendo contactado?
                <span>+</span>
              </summary>

              <p>
                Evita compartir información adicional o realizar nuevas
                transferencias hasta comprender mejor la situación.
              </p>

            </details>

          </div>

        </section>


        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section className={styles.finalCta}>

          <div className={styles.finalCtaGlow}></div>

          <div className={styles.finalCtaContent}>

            <span>
              VALTARA
            </span>

            <h2>
              Tu patrimonio merece
              <br />
              una segunda mirada.
            </h2>

            <p>
              Identifica las señales. Comprende tu situación.
              Decide con información.
            </p>

            <a
              href="/identificacion-de-fraude"
              className={styles.finalButton}
            >
              Iniciar evaluación
            </a>

            <div className={styles.finalMotto}>
              Tu patrimonio, nuestra prioridad.
            </div>

          </div>

        </section>


        {/* =====================================================
            FOOTER SPACE
            ===================================================== */}

        <div className={styles.footerSpace}>

          <span>
            VALTARA · Resguardo y Recuperación Patrimonial
          </span>

        </div>

      </main>
    </>
  );
}