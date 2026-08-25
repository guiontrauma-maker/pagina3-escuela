"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { contactConfig } from "@/components/contact/contactConfig";
import styles from "./page.module.css";

const WHATSAPP_URL = `https://wa.me/${
  contactConfig.whatsappNumber
}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;

const EMAIL_URL =
  "mailto:aer@asesoriaespecializada.com?subject=Solicitud%20de%20orientación";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      countryCode: formData.get("countryCode"),
      phone: formData.get("phone"),
      currency: formData.get("currency"),
      amount: formData.get("amount"),
      caseType: formData.get("caseType"),
      description: formData.get("description"),
      privacy: formData.get("privacy") === "on",
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "No fue posible enviar el formulario.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      alert(
        "No fue posible enviar la información. Por favor, inténtalo nuevamente.",
      );
    }
  }

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
              situación irregular, puedes compartir la información de tu caso
              para recibir una primera orientación.
            </p>
          </div>

          <div className={styles.introSide}>
            <span>01</span>

            <p>
              La información inicial nos ayuda a comprender el contexto antes
              de determinar cuáles podrían ser los siguientes pasos.
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTENIDO PRINCIPAL
            ===================================================== */}

        <section className={styles.mainSection}>
          <div className={styles.mainGrid}>
            {/* =================================================
                FORMULARIO
                ================================================= */}

            <div className={styles.formColumn}>
              <div className={styles.formHeader}>
                <span className={styles.sectionLabel}>
                  INFORMACIÓN DEL CASO
                </span>

                <h2>
                  Comparte los detalles
                  <br />
                  principales.
                </h2>

                <p>
                  No necesitas conocer términos técnicos. Describe la situación
                  con tus propias palabras y proporciona únicamente la
                  información que consideres necesaria.
                </p>
              </div>

              <form className={styles.caseForm} onSubmit={handleSubmit}>
                {/* NOMBRE */}

                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre completo</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Escribe tu nombre"
                    required
                  />
                </div>

                {/* CORREO */}

                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo electrónico</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nombre@correo.com"
                    required
                  />
                </div>

                {/* TELEFONO */}

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Número de teléfono</label>

                  <div className={styles.phoneRow}>
                    <select
                      name="countryCode"
                      aria-label="Código de país"
                      defaultValue="+52"
                    >
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+1">🇨🇦 +1</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+57">🇨🇴 +57</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+51">🇵🇪 +51</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Número de teléfono"
                      required
                    />
                  </div>
                </div>

                {/* MONTO */}

                <div className={styles.formGroup}>
                  <label htmlFor="amount">Monto aproximado involucrado</label>

                  <div className={styles.amountRow}>
                    <select
                      name="currency"
                      aria-label="Moneda"
                      defaultValue="MXN"
                    >
                      <option value="MXN">MXN</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="COP">COP</option>
                      <option value="ARS">ARS</option>
                      <option value="CLP">CLP</option>
                    </select>

                    <input
                      id="amount"
                      name="amount"
                      type="text"
                      inputMode="decimal"
                      placeholder="Ej. 150,000"
                    />
                  </div>

                  <span className={styles.fieldHint}>
                    Si no conoces el monto exacto, puedes proporcionar una
                    cantidad aproximada.
                  </span>
                </div>

                {/* TIPO DE CASO */}

                <div className={styles.formGroup}>
                  <label htmlFor="caseType">Tipo de situación</label>

                  <select
                    id="caseType"
                    name="caseType"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    <option value="fraude-bancario">Fraude bancario</option>

                    <option value="inversion">Inversión sospechosa</option>

                    <option value="criptomonedas">Criptomonedas</option>

                    <option value="phishing">Phishing o engaño digital</option>

                    <option value="suplantacion">
                      Suplantación de identidad
                    </option>

                    <option value="inmobiliario">Fraude inmobiliario</option>

                    <option value="comercio">Comercio electrónico</option>

                    <option value="piramidal">Esquema piramidal</option>

                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* DESCRIPCIÓN */}

                <div className={styles.formGroup}>
                  <label htmlFor="description">Describe lo ocurrido</label>

                  <textarea
                    id="description"
                    name="description"
                    rows={7}
                    placeholder="Cuéntanos brevemente qué ocurrió, cómo comenzó la situación y qué sucedió después..."
                    required
                  />

                  <span className={styles.fieldHint}>
                    Evita compartir contraseñas, códigos de seguridad, números
                    completos de tarjetas o información que no sea necesaria
                    para comprender el caso.
                  </span>
                </div>

                {/* CHECKBOX */}

                <label className={styles.checkboxRow}>
                  <input type="checkbox" name="privacy" required />

                  <span>
                    Confirmo que la información proporcionada es correcta y
                    acepto que sea utilizada para analizar mi solicitud de
                    orientación.
                  </span>
                </label>

                {/* BOTÓN */}

                <button type="submit" className={styles.submitButton}>
                  Enviar información del caso
                  <span>→</span>
                </button>

                {/* AVISO */}

                <div className={styles.securityNote}>
                  <span className={styles.lockIcon}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm-7-2a2 2 0 1 4 0v2h-4V6Zm7 14H7V10h10v10Zm-5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                    </svg>
                  </span>

                  <span>
                    Tu información se trata con carácter confidencial y se
                    utiliza únicamente para dar seguimiento a tu solicitud.
                  </span>
                </div>

                {/* CONFIRMACIÓN */}

                {submitted && (
                  <div className={styles.successMessage}>
                    <strong>Información recibida.</strong>

                    <span>
                      Tu solicitud quedó registrada para una primera revisión.
                      Nos pondremos en contacto utilizando los datos
                      proporcionados.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* =================================================
                PANEL LATERAL
                ================================================= */}

            <aside className={styles.sideColumn}>
              <div className={styles.sideCard}>
                <span className={styles.sideNumber}>01</span>

                <span className={styles.sideLabel}>ANTES DE ENVIAR</span>

                <h3>
                  Una buena descripción ayuda a entender mejor tu situación.
                </h3>

                <p>
                  Puedes comenzar explicando cómo conociste la propuesta, qué te
                  ofrecieron, qué cantidad involucraste y qué ocurrió
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
                    <strong>Recibimos tu información</strong>

                    <p>Revisamos los datos iniciales que proporcionaste.</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <span className={styles.stepNumber}>02</span>

                  <div>
                    <strong>Comprendemos el contexto</strong>

                    <p>
                      Identificamos los elementos principales de la situación
                      descrita.
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
                <span>¿PREFIERES CONTACTARNOS DIRECTAMENTE?</span>

                <p>
                  También puedes solicitar orientación mediante nuestros
                  canales de contacto.
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
            <span>VALTARA </span>

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