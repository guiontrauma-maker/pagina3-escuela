"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

const countries = [
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+1", flag: "🇺🇸", name: "Estados Unidos" },
  { code: "+34", flag: "🇪🇸", name: "España" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+51", flag: "🇵🇪", name: "Perú" },
];

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17 9h-1V6a4 4 0 0 0-8 0v3H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Zm-7-3a2 2 0 0 1 4 0v3h-4V6Zm7 14H7v-9h10v9Zm-5-2a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.2 5.2 12 6.4l4.6 4.6H4v2h12.6L12 17.6l1.2 1.2 6.6-6.6-6.6-7Z" />
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "+52",
    phone: "",
    amount: "",
    type: "",
    description: "",
    contactPermission: false,
    testimonialPermission: false,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Caso enviado:", formData);

    alert(
      "Tu información fue registrada para revisión. Próximamente podrás continuar con el proceso de orientación."
    );
  };

  const handleChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

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
                <span className={styles.caseNumber}>01</span>

                <div>
                  <span className={styles.caseType}>
                    INVERSIÓN SOSPECHOSA
                  </span>

                  <h3>Mariana R.</h3>

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
                      <li>Rendimientos aparentemente garantizados.</li>
                      <li>Presión para depositar rápidamente.</li>
                      <li>Comunicación exclusivamente digital.</li>
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
                <span className={styles.caseNumber}>02</span>

                <div>
                  <span className={styles.caseType}>
                    SUPLANTACIÓN DIGITAL
                  </span>

                  <h3>Carlos M.</h3>

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
                      <li>Solicitud de códigos de seguridad.</li>
                      <li>Urgencia para actuar inmediatamente.</li>
                      <li>Uso de información personal previa.</li>
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
                <span className={styles.caseNumber}>03</span>

                <div>
                  <span className={styles.caseType}>
                    FRAUDE INMOBILIARIO
                  </span>

                  <h3>Andrea P.</h3>

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
                      <li>Condiciones que cambiaban constantemente.</li>
                      <li>Presión para entregar un anticipo.</li>
                      <li>Información documental inconsistente.</li>
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
            <h2>Situaciones que también requieren atención.</h2>
          </div>

          <div className={styles.shortCasesGrid}>

            <article>
              <span>04</span>
              <h3>Laura S.</h3>
              <strong>Phishing</strong>
              <p>
                Recibió una comunicación falsa solicitando actualizar
                información bancaria mediante un enlace.
              </p>
              <small>Resultado: evitó realizar nuevas operaciones.</small>
            </article>

            <article>
              <span>05</span>
              <h3>Roberto G.</h3>
              <strong>Inversión digital</strong>
              <p>
                Una plataforma mostraba rendimientos crecientes y
                posteriormente solicitó depósitos adicionales.
              </p>
              <small>Resultado: identificó inconsistencias antes de continuar.</small>
            </article>

            <article>
              <span>06</span>
              <h3>Fernanda L.</h3>
              <strong>Comercio electrónico</strong>
              <p>
                Realizó un pago por un producto que nunca fue entregado
                y posteriormente dejó de recibir respuesta.
              </p>
              <small>Resultado: reunió comprobantes y comunicaciones.</small>
            </article>

            <article>
              <span>07</span>
              <h3>Jorge A.</h3>
              <strong>Esquema piramidal</strong>
              <p>
                Fue invitado a participar en un modelo que prometía
                ingresos elevados por incorporar nuevos participantes.
              </p>
              <small>Resultado: decidió no realizar nuevas aportaciones.</small>
            </article>

          </div>

        </section>


        {/* =====================================================
            SEÑALES COMUNES
            ===================================================== */}

        <section className={styles.signalsSection}>

          <div className={styles.signalsIntro}>
            <span>LO QUE SE REPITE</span>
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
              <span>01</span>
              <div>
                <h3>Urgencia</h3>
                <p>
                  Se utiliza presión para conseguir que la persona tome
                  una decisión antes de poder revisar la información.
                </p>
              </div>
            </div>

            <div className={styles.signal}>
              <span>02</span>
              <div>
                <h3>Ganancias extraordinarias</h3>
                <p>
                  Se presentan beneficios aparentemente garantizados o
                  muy superiores a los esperados.
                </p>
              </div>
            </div>

            <div className={styles.signal}>
              <span>03</span>
              <div>
                <h3>Autoridad aparente</h3>
                <p>
                  Se utilizan nombres, documentos o identidades para
                  generar una sensación de legitimidad.
                </p>
              </div>
            </div>

            <div className={styles.signal}>
              <span>04</span>
              <div>
                <h3>Falta de transparencia</h3>
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
            <span>VOCES DE EXPERIENCIA</span>
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
              <strong>Patricia L.</strong>
              <span>Experiencia de orientación</span>
            </article>

            <article>
              <StarRating />
              <p>
                “Después de analizar la situación pude dejar de tomar
                decisiones impulsivas y revisar mis opciones con más calma.”
              </p>
              <strong>Jorge A.</strong>
              <span>Experiencia de orientación</span>
            </article>

            <article>
              <StarRating />
              <p>
                “La claridad de la información fue lo que más me ayudó
                a comprender qué estaba pasando.”
              </p>
              <strong>Fernanda M.</strong>
              <span>Experiencia de orientación</span>
            </article>

          </div>

          <p className={styles.exampleNote}>
            Las historias y testimonios mostrados en esta sección son
            ejemplos representativos utilizados con fines informativos.
          </p>

        </section>


        {/* =====================================================
            PARTICIPAR
            ===================================================== */}

        <section className={styles.participateSection}>

          <div className={styles.participateContent}>

            <span>COMPARTE TU EXPERIENCIA</span>

            <h2>
              Tu historia también
              <br />
              puede ayudar a otros.
            </h2>

            <p>
              Si has atravesado una situación relacionada con fraude,
              engaño o riesgo patrimonial, puedes compartir información
              sobre tu experiencia para que sea revisada.
            </p>

            <p>
              Algunas experiencias pueden convertirse posteriormente en
              historias informativas. Esto solo ocurriría con autorización
              expresa y después de revisar la información correspondiente.
            </p>

            <Link href="/contacto" className={styles.participateLink}>
              Necesito orientación
              <ArrowIcon />
            </Link>

          </div>

        </section>


        {/* =====================================================
            FORMULARIO
            ===================================================== */}

        <section className={styles.formSection} id="compartir-caso">

          <div className={styles.formHeader}>
            <span>FORMULARIO DE EXPERIENCIA</span>

            <h2>
              Comparte tu caso
              <br />
              con nosotros.
            </h2>

            <p>
              Proporciona únicamente la información necesaria para
              comprender inicialmente la situación.
            </p>
          </div>


          <form className={styles.caseForm} onSubmit={handleSubmit}>

            <div className={styles.formRow}>

              <label>
                Nombre completo
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    handleChange("name", event.target.value)
                  }
                  placeholder="Tu nombre"
                  required
                />
              </label>

              <label>
                Correo electrónico
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  placeholder="correo@ejemplo.com"
                  required
                />
              </label>

            </div>


            <div className={styles.formRow}>

              <label>
                País
                <select
                  value={formData.country}
                  onChange={(event) =>
                    handleChange("country", event.target.value)
                  }
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.name} ({country.code})
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Número de teléfono
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) =>
                    handleChange("phone", event.target.value)
                  }
                  placeholder="Número de contacto"
                  required
                />
              </label>

            </div>


            <div className={styles.formRow}>

              <label>
                Monto aproximado involucrado
                <input
                  type="text"
                  value={formData.amount}
                  onChange={(event) =>
                    handleChange("amount", event.target.value)
                  }
                  placeholder="Ej. $150,000 MXN"
                />
              </label>

              <label>
                Tipo de situación
                <select
                  value={formData.type}
                  onChange={(event) =>
                    handleChange("type", event.target.value)
                  }
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="fraude-financiero">
                    Fraude financiero
                  </option>
                  <option value="fraude-digital">
                    Fraude digital
                  </option>
                  <option value="suplantacion">
                    Suplantación
                  </option>
                  <option value="inversion">
                    Inversión sospechosa
                  </option>
                  <option value="phishing">
                    Phishing
                  </option>
                  <option value="inmobiliario">
                    Fraude inmobiliario
                  </option>
                  <option value="otro">
                    Otro
                  </option>
                </select>
              </label>

            </div>


            <label className={styles.fullField}>
              Describe brevemente tu caso
              <textarea
                value={formData.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
                }
                placeholder="Cuéntanos qué ocurrió, cómo comenzó la situación y qué ha sucedido hasta ahora."
                rows={7}
                required
              />
            </label>


            <div className={styles.permissions}>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={formData.contactPermission}
                  onChange={(event) =>
                    handleChange(
                      "contactPermission",
                      event.target.checked
                    )
                  }
                  required
                />

                <span>
                  Autorizo a VALTARA a utilizar mis datos para
                  comunicarse conmigo respecto a la información enviada.
                </span>
              </label>


              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={formData.testimonialPermission}
                  onChange={(event) =>
                    handleChange(
                      "testimonialPermission",
                      event.target.checked
                    )
                  }
                />

                <span>
                  Acepto que mi experiencia pueda ser considerada para
                  una historia informativa, siempre que posteriormente
                  se solicite y obtenga autorización para publicarla.
                </span>
              </label>

            </div>


            <button type="submit" className={styles.submitButton}>
              Enviar mi caso
              <ArrowIcon />
            </button>


            <div className={styles.formPrivacy}>

              <LockIcon />

              <p>
                La información proporcionada será tratada de forma
                confidencial. No compartas contraseñas, códigos de
                seguridad, claves privadas ni datos bancarios completos.
              </p>

            </div>

          </form>

        </section>


        {/* =====================================================
            FAQ
            ===================================================== */}

        <section className={styles.faqSection}>

          <div className={styles.faqIntro}>

            <span>PREGUNTAS FRECUENTES</span>

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
                question: "¿Los casos publicados corresponden a personas reales?",
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
                question: "¿Mi historia será publicada automáticamente?",
                answer:
                  "No. El envío de un caso no significa que será publicado. Cualquier utilización de una experiencia con fines testimoniales requiere una autorización específica.",
              },
              {
                question: "¿Qué información debo evitar compartir?",
                answer:
                  "No incluyas contraseñas, códigos de seguridad, claves privadas, números completos de tarjetas ni credenciales de acceso.",
              },
              {
                question: "¿Qué sucede después de enviar mi información?",
                answer:
                  "La información puede ser revisada para comprender inicialmente la situación. Si proporcionaste autorización para contacto, podrás recibir comunicación relacionada con los datos enviados.",
              },
              {
                question: "¿Puedo solicitar orientación directamente?",
                answer:
                  "Sí. Si prefieres hablar directamente sobre tu situación, puedes utilizar la página de contacto para solicitar orientación.",
              },
            ].map((faq, index) => (
              <details
                key={faq.question}
                open={openFaq === index}
              >
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenFaq(openFaq === index ? null : index);
                  }}
                >
                  <span>{faq.question}</span>

                  <b>
                    {openFaq === index ? "−" : "+"}
                  </b>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}

          </div>

        </section>


        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section className={styles.finalSection}>

          <div>
            <span>VALTARA</span>

            <h2>
              Tu experiencia
              <br />
              también puede prevenir.
            </h2>

            <p>
              Si necesitas orientación sobre una situación patrimonial,
              estamos aquí para ayudarte a comprenderla.
            </p>

            <Link href="/contacto" className={styles.finalButton}>
              Ir a contacto
              <ArrowIcon />
            </Link>
          </div>

        </section>

      </main>
    </>
  );
}