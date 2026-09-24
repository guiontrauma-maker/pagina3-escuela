"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

const WHATSAPP_URL =
  "https://wa.me/5658165677?text=Hola%2C%20me%20gustaría%20recibir%20orientación%20sobre%20mi%20situación.";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.2 5.2 12 6.4l4.6 4.6H4v2h12.6L12 17.6l-4.6 4.6 1.2 1.2 6.6-6.6-6.6-6.6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.07 0C5.55 0 .25 5.3.25 11.82c0 2.08.54 4.11 1.57 5.9L.17 24l6.43-1.68a11.8 11.8 0 0 0 5.47 1.35h.01c6.51 0 11.8-5.3 11.8-11.82 0-3.16-1.23-6.13-3.36-8.37ZM12.08 21.65h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.83 9.83 0 1 1 8.39 4.68Zm5.39-7.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.19 2.06 3.14 4.99 4.4.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className={styles.stars} aria-label="Cinco estrellas">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
}

export default function CasosReales() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            INTRODUCCIÓN
            ===================================================== */}

        <section className={styles.introSection}>

          <div className={styles.introMeta}>
            <span>CASOS REALES</span>
            <span>EXPERIENCIAS Y APRENDIZAJES</span>
          </div>

          <div className={styles.introGrid}>

            <div className={styles.introTitle}>
              <h1>
                Historias que
                <br />
                <em>ayudan a entender</em>
                <br />
                el riesgo.
              </h1>
            </div>

            <div className={styles.introText}>
              <p>
                Cada situación de fraude tiene características distintas.
                Conocer experiencias y señales que se repiten puede ayudar
                a reconocer un riesgo antes de tomar una nueva decisión.
              </p>

              <p>
                Los casos presentados en esta sección son ejemplos
                representativos. Algunos nombres, cantidades y detalles
                pueden haber sido modificados para proteger la privacidad
                de las personas involucradas.
              </p>

              <Link href="/contacto" className={styles.textLink}>
                Necesito orientación
                <ArrowIcon />
              </Link>
            </div>

          </div>

        </section>


        {/* =====================================================
            INDICADORES
            ===================================================== */}

        <section className={styles.metricsSection}>

          <div className={styles.metricsIntro}>
            <span>UNA MIRADA GENERAL</span>

            <h2>
              Lo que hemos observado
              <br />
              en diferentes situaciones.
            </h2>
          </div>

          <div className={styles.metricsGrid}>

            <div className={styles.metric}>
              <strong>+120</strong>
              <span>experiencias analizadas</span>
            </div>

            <div className={styles.metric}>
              <strong>78%</strong>
              <span>identificaron señales de alerta</span>
            </div>

            <div className={styles.metric}>
              <strong>24h</strong>
              <span>tiempo promedio de primera orientación</span>
            </div>

            <div className={styles.metric}>
              <strong>6</strong>
              <span>categorías principales de riesgo</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            CASOS DESTACADOS
            ===================================================== */}

        <section className={styles.featuredSection}>

          <div className={styles.sectionHeader}>

            <div>
              <span>HISTORIAS DESTACADAS</span>

              <h2>
                Detrás de cada caso
                <br />
                hay una experiencia.
              </h2>
            </div>

            <p>
              Estas historias muestran situaciones representativas y
              algunas de las señales que pueden aparecer antes de que
              una persona identifique el problema.
            </p>

          </div>


          <div className={styles.featuredList}>

            {/* CASO 01 */}

            <article className={styles.featuredCase}>

              <div className={styles.caseSide}>

                <span className={styles.caseNumber}>
                  01
                </span>

                <div>

                  <span className={styles.caseType}>
                    INVERSIÓN SOSPECHOSA
                  </span>

                  <h3>
                    Mariana R.
                  </h3>

                  <span className={styles.caseLocation}>
                    Guadalajara, Jalisco
                  </span>

                </div>

              </div>


              <div className={styles.caseMain}>

                <StarRating />

                <blockquote>
                  “La propuesta parecía legítima porque utilizaban
                  documentación y nombres de instituciones conocidas.
                  El problema comenzó cuando empezaron a pedirme nuevas
                  transferencias para liberar mis ganancias.”
                </blockquote>

                <div className={styles.caseDetails}>

                  <div>
                    <span>Situación</span>

                    <p>
                      Pérdida aproximada de $185,000 MXN después de
                      realizar varias transferencias.
                    </p>
                  </div>

                  <div>
                    <span>Señales identificadas</span>

                    <ul>
                      <li>
                        Rendimientos aparentemente garantizados.
                      </li>

                      <li>
                        Presión para depositar rápidamente.
                      </li>

                      <li>
                        Comunicación exclusivamente digital.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span>Resultado</span>

                    <p>
                      La persona logró organizar la documentación
                      disponible y detener nuevas transferencias mientras
                      buscaba orientación.
                    </p>
                  </div>

                </div>

              </div>

            </article>


            {/* CASO 02 */}

            <article
              className={`${styles.featuredCase} ${styles.featuredCaseReverse}`}
            >

              <div className={styles.caseSide}>

                <span className={styles.caseNumber}>
                  02
                </span>

                <div>

                  <span className={styles.caseType}>
                    SUPLANTACIÓN DIGITAL
                  </span>

                  <h3>
                    Carlos M.
                  </h3>

                  <span className={styles.caseLocation}>
                    Monterrey, Nuevo León
                  </span>

                </div>

              </div>


              <div className={styles.caseMain}>

                <StarRating />

                <blockquote>
                  “Recibí una llamada que parecía provenir de mi banco.
                  La persona conocía algunos datos míos y eso hizo que
                  confiara en la conversación.”
                </blockquote>

                <div className={styles.caseDetails}>

                  <div>
                    <span>Situación</span>

                    <p>
                      Comunicación fraudulenta seguida de solicitudes
                      de códigos y movimientos bancarios.
                    </p>
                  </div>

                  <div>
                    <span>Señales identificadas</span>

                    <ul>
                      <li>
                        Solicitud de códigos de seguridad.
                      </li>

                      <li>
                        Urgencia para actuar inmediatamente.
                      </li>

                      <li>
                        Uso de información personal previa.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span>Resultado</span>

                    <p>
                      Se detuvieron nuevas operaciones y se inició la
                      organización de información relacionada con el caso.
                    </p>
                  </div>

                </div>

              </div>

            </article>


            {/* CASO 03 */}

            <article className={styles.featuredCase}>

              <div className={styles.caseSide}>

                <span className={styles.caseNumber}>
                  03
                </span>

                <div>

                  <span className={styles.caseType}>
                    FRAUDE INMOBILIARIO
                  </span>

                  <h3>
                    Andrea P.
                  </h3>

                  <span className={styles.caseLocation}>
                    Ciudad de México
                  </span>

                </div>

              </div>


              <div className={styles.caseMain}>

                <StarRating />

                <blockquote>
                  “Todo parecía avanzar demasiado rápido. Cuando pedí
                  revisar algunos documentos antes de entregar el dinero,
                  comenzaron a cambiar las condiciones.”
                </blockquote>

                <div className={styles.caseDetails}>

                  <div>
                    <span>Situación</span>

                    <p>
                      Solicitud de anticipo para una operación inmobiliaria
                      con documentación que presentaba inconsistencias.
                    </p>
                  </div>

                  <div>
                    <span>Señales identificadas</span>

                    <ul>
                      <li>
                        Condiciones que cambiaban constantemente.
                      </li>

                      <li>
                        Presión para entregar un anticipo.
                      </li>

                      <li>
                        Información documental inconsistente.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span>Resultado</span>

                    <p>
                      Se evitó realizar una nueva transferencia hasta
                      verificar la información disponible.
                    </p>
                  </div>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            CASOS BREVES
            ===================================================== */}

        <section className={styles.shortCasesSection}>

          <div className={styles.shortCasesHeading}>

            <span>OTRAS EXPERIENCIAS</span>

            <h2>
              Situaciones que también requieren atención.
            </h2>

          </div>


          <div className={styles.shortCasesGrid}>

            <article>
              <span>04</span>

              <h3>
                Laura S.
              </h3>

              <strong>
                Phishing
              </strong>

              <p>
                Recibió una comunicación falsa solicitando actualizar
                información bancaria mediante un enlace.
              </p>

              <small>
                Resultado: evitó realizar nuevas operaciones.
              </small>
            </article>


            <article>
              <span>05</span>

              <h3>
                Roberto G.
              </h3>

              <strong>
                Inversión digital
              </strong>

              <p>
                Una plataforma mostraba rendimientos crecientes y
                posteriormente solicitó depósitos adicionales.
              </p>

              <small>
                Resultado: identificó inconsistencias antes de continuar.
              </small>
            </article>


            <article>
              <span>06</span>

              <h3>
                Fernanda L.
              </h3>

              <strong>
                Comercio electrónico
              </strong>

              <p>
                Realizó un pago por un producto que nunca fue entregado
                y posteriormente dejó de recibir respuesta.
              </p>

              <small>
                Resultado: reunió comprobantes y comunicaciones.
              </small>
            </article>


            <article>
              <span>07</span>

              <h3>
                Jorge A.
              </h3>

              <strong>
                Esquema piramidal
              </strong>

              <p>
                Fue invitado a participar en un modelo que prometía
                ingresos elevados por incorporar nuevos participantes.
              </p>

              <small>
                Resultado: decidió no realizar nuevas aportaciones.
              </small>
            </article>

          </div>

        </section>


        {/* =====================================================
            SEÑALES COMUNES
            ===================================================== */}

        <section className={styles.signalsSection}>

          <div className={styles.signalsIntro}>

            <span>
              LO QUE SE REPITE
            </span>

            <h2>
              Diferentes historias.
              <br />
              Señales similares.
            </h2>

            <p>
              Aunque los casos pueden ser muy distintos, existen patrones
              que aparecen con frecuencia y que conviene reconocer.
            </p>

          </div>


          <div className={styles.signalsList}>

            <div className={styles.signal}>

              <span>
                01
              </span>

              <div>
                <h3>
                  Urgencia
                </h3>

                <p>
                  Se utiliza presión para conseguir que la persona tome
                  una decisión antes de poder revisar la información.
                </p>
              </div>

            </div>


            <div className={styles.signal}>

              <span>
                02
              </span>

              <div>
                <h3>
                  Ganancias extraordinarias
                </h3>

                <p>
                  Se presentan beneficios aparentemente garantizados o
                  muy superiores a los esperados.
                </p>
              </div>

            </div>


            <div className={styles.signal}>

              <span>
                03
              </span>

              <div>
                <h3>
                  Autoridad aparente
                </h3>

                <p>
                  Se utilizan nombres, documentos o identidades para
                  generar una sensación de legitimidad.
                </p>
              </div>

            </div>


            <div className={styles.signal}>

              <span>
                04
              </span>

              <div>
                <h3>
                  Falta de transparencia
                </h3>

                <p>
                  La información sobre la operación, empresa o persona
                  responsable resulta difícil de verificar.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TESTIMONIOS
            ===================================================== */}

        <section className={styles.testimonialsSection}>

          <div className={styles.testimonialsHeader}>

            <span>
              VOCES DE EXPERIENCIA
            </span>

            <h2>
              Entender lo ocurrido
              <br />
              también es parte del proceso.
            </h2>

          </div>


          <div className={styles.testimonialsGrid}>

            <article>

              <StarRating />

              <p>
                “Lo más importante fue poder ordenar la información y
                entender qué señales debía revisar.”
              </p>

              <strong>
                Patricia L.
              </strong>

              <span>
                Experiencia de orientación
              </span>

            </article>


            <article>

              <StarRating />

              <p>
                “Después de analizar la situación pude dejar de tomar
                decisiones impulsivas y revisar mis opciones con más calma.”
              </p>

              <strong>
                Jorge A.
              </strong>

              <span>
                Experiencia de orientación
              </span>

            </article>


            <article>

              <StarRating />

              <p>
                “La claridad de la información fue lo que más me ayudó
                a comprender qué estaba pasando.”
              </p>

              <strong>
                Fernanda M.
              </strong>

              <span>
                Experiencia de orientación
              </span>

            </article>

          </div>


          <p className={styles.exampleNote}>
            Las historias y testimonios mostrados en esta sección son
            ejemplos representativos utilizados con fines informativos.
          </p>

        </section>


        {/* =====================================================
            PARTICIPAR / WHATSAPP
            ===================================================== */}

        <section className={styles.participateSection}>

          <div className={styles.participateContent}>

            <span>
              COMPARTE TU EXPERIENCIA
            </span>

            <h2>
              Tu historia también
              <br />
              puede ayudar a otros.
            </h2>

            <p>
              Si has atravesado una situación relacionada con fraude,
              engaño o riesgo patrimonial, puedes hablar directamente
              con nuestro equipo para explicar lo ocurrido.
            </p>

            <p>
              No necesitas preparar un formulario ni tener toda la
              información organizada. Puedes comenzar explicando
              brevemente qué ocurrió.
            </p>


            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >

              <span className={styles.whatsappIcon}>
                <WhatsAppIcon />
              </span>

              <span>
                Hablar por WhatsApp
              </span>

              <span className={styles.whatsappArrow}>
                ↗
              </span>

            </a>

          </div>

        </section>


        {/* =====================================================
            FAQ
            ===================================================== */}

        <section className={styles.faqSection}>

          <div className={styles.faqIntro}>

            <span>
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Antes de
              <br />
              compartir tu caso.
            </h2>

            <p>
              Algunas respuestas para ayudarte a decidir qué información
              es conveniente proporcionar.
            </p>

          </div>


          <div className={styles.faqList}>

            {[
              {
                question:
                  "¿Los casos publicados corresponden a personas reales?",

                answer:
                  "Los casos de esta sección pueden ser ejemplos representativos. Cuando una experiencia real se utiliza con fines informativos, se protege la identidad y se solicita la autorización correspondiente.",
              },

              {
                question:
                  "¿Puedo enviar mi caso aunque todavía no haya recuperado mi dinero?",

                answer:
                  "Sí. Puedes compartir información sobre una situación aunque todavía se encuentre en proceso o no hayas obtenido una recuperación.",
              },

              {
                question:
                  "¿Mi historia será publicada automáticamente?",

                answer:
                  "No. El envío de un caso no significa que será publicado. Cualquier utilización de una experiencia con fines testimoniales requiere una autorización específica.",
              },

              {
                question:
                  "¿Qué información debo evitar compartir?",

                answer:
                  "No incluyas contraseñas, códigos de seguridad, claves privadas, números completos de tarjetas ni credenciales de acceso.",
              },

              {
                question:
                  "¿Qué sucede después de enviar mi información?",

                answer:
                  "La información puede ser revisada para comprender inicialmente la situación. Si proporcionaste autorización para contacto, podrás recibir comunicación relacionada con los datos enviados.",
              },

              {
                question:
                  "¿Puedo solicitar orientación directamente?",

                answer:
                  "Sí. Si prefieres hablar directamente sobre tu situación, puedes utilizar WhatsApp para solicitar orientación.",
              },

            ].map((faq, index) => (

              <details
                key={faq.question}
                open={openFaq === index}
              >

                <summary
                  onClick={(event) => {
                    event.preventDefault();

                    setOpenFaq(
                      openFaq === index
                        ? null
                        : index
                    );
                  }}
                >

                  <span>
                    {faq.question}
                  </span>

                  <b>
                    {openFaq === index
                      ? "−"
                      : "+"}
                  </b>

                </summary>

                <p>
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </section>


        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section className={styles.finalSection}>

          <div>

            <span>
              VALTARA
            </span>

            <h2>
              Tu experiencia
              <br />
              también puede prevenir.
            </h2>

            <p>
              Si necesitas orientación sobre una situación patrimonial,
              estamos aquí para ayudarte a comprenderla.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.finalButton}
            >
              Hablar por WhatsApp
              <span>↗</span>
            </a>

          </div>

        </section>

      </main>
    </>
  );
}
