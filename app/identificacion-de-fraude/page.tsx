"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

type FraudType =
  | "Inversión"
  | "Transferencia bancaria"
  | "Compra o venta"
  | "Contacto sospechoso"
  | "Préstamo o crédito"
  | "Otra situación"
  | null;

type Answer = "si" | "no" | null;

export default function IdentificacionFraudePage() {
  const [fraudType, setFraudType] = useState<FraudType>(null);
  const [stillContacting, setStillContacting] = useState<Answer>(null);
  const [askedForMore, setAskedForMore] = useState<Answer>(null);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showFinalActions, setShowFinalActions] = useState(false);

  const currentStep = useMemo(() => {
    if (!fraudType) return 1;
    if (!stillContacting) return 2;
    if (!askedForMore) return 3;
    return 4;
  }, [fraudType, stillContacting, askedForMore]);

  const progress = (currentStep / 4) * 100;

  const selectFraudType = (type: FraudType) => {
    setFraudType(type);
    setStillContacting(null);
    setAskedForMore(null);
    setShowQuestions(true);
    setShowFinalActions(false);
  };

  const selectStillContacting = (answer: Answer) => {
    setStillContacting(answer);
    setAskedForMore(null);
    setShowFinalActions(false);
  };

  const selectAskedForMore = (answer: Answer) => {
    setAskedForMore(answer);
    setShowFinalActions(true);
  };

  const resetEvaluation = () => {
    setFraudType(null);
    setStillContacting(null);
    setAskedForMore(null);
    setShowQuestions(false);
    setShowFinalActions(false);
  };

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
    HERO
    ===================================================== */}

<section className={styles.hero}>

  <div className={styles.heroContent}>

    <div className={styles.eyebrow}>
      <span></span>
      IDENTIFICACIÓN DE FRAUDE
    </div>

    <h1>
      ¿Crees que podrías
      <br />
      estar frente a un <em>fraude?</em>
    </h1>

    <p>
      Responde algunas preguntas sobre tu situación y descubre
      si existen señales que podrían requerir mayor atención.
    </p>

    <a
      href="#evaluacion"
      className={styles.heroButton}
    >
      Comenzar evaluación
      <span>→</span>
    </a>

    <div className={styles.heroDisclaimer}>
      Evaluación orientativa · No constituye una determinación legal
    </div>

  </div>

</section>

{/* =====================================================
    SERVICIOS DE ASISTENCIA A VÍCTIMAS DE FRAUDE
    ===================================================== */}

<section className={styles.servicesSection}>

  <div className={styles.servicesHeader}>

    <h2>
      Servicios de Asistencia a Víctimas de Fraude
    </h2>

    <p>
      Analizamos tu caso de forma personalizada para activar los
      mecanismos de recuperación correspondientes.
    </p>

  </div>


  <div className={styles.servicesGrid}>


    {/* =================================================
        SERVICIO 01 — CHARGEBACK
        ================================================= */}

    <article className={styles.serviceCard}>

      <div className={styles.serviceImageWrapper}>

        <img
          src="/images/chargeback.jpg"
          alt="Gestión de Chargeback"
          className={styles.serviceImage}
        />

      </div>

      <div className={styles.serviceContent}>

        <span className={styles.serviceCategory}>
          PROCEDIMIENTO BANCARIO
        </span>

        <h3>
          Gestión de
          <br />
          Chargeback
        </h3>

        <p>
          Tramitamos solicitudes formales de retrocesión de fondos
          mediante VISA/Mastercard ante tu entidad bancaria por
          cobros fraudulentos o falta de entrega de servicio.
        </p>

        <Link
          href="/contacto"
          className={styles.serviceButton}
        >
          Quiero recuperar mi dinero
        </Link>

      </div>

    </article>


    {/* =================================================
        SERVICIO 02 — BLOCKCHAIN FORENSICS
        ================================================= */}

    <article className={styles.serviceCard}>

      <div className={styles.serviceImageWrapper}>

        <img
          src="/images/blockchain-forensics.jpg"
          alt="Rastreo de Criptoactivos"
          className={styles.serviceImage}
        />

      </div>

      <div className={styles.serviceContent}>

        <span className={styles.serviceCategory}>
          BLOCKCHAIN FORENSICS
        </span>

        <h3>
          Rastreo de
          <br />
          Criptoactivos
        </h3>

        <p>
          Auditamos y rastreamos transferencias en la cadena de
          bloques (Bitcoin, USDT, Ethereum) para identificar las
          billeteras receptoras y Exchange regulados destino.
        </p>

        <Link
          href="/contacto"
          className={styles.serviceButton}
        >
          Quiero recuperar mi dinero
        </Link>

      </div>

    </article>


    {/* =================================================
        SERVICIO 03 — DEFENSA LEGAL
        ================================================= */}

    <article className={styles.serviceCard}>

      <div className={styles.serviceImageWrapper}>

        <img
          src="/images/defensa-legal.jpg"
          alt="Denuncias y Reguladores"
          className={styles.serviceImage}
        />

      </div>

      <div className={styles.serviceContent}>

        <span className={styles.serviceCategory}>
          DEFENSA LEGAL
        </span>

        <h3>
          Denuncias y
          <br />
          Reguladores
        </h3>

        <p>
          Elaboramos la documentación legal pertinente para
          presentar denuncias formales ante organismos de regulación
          financiera y fiscalías especializadas.
        </p>

        <Link
          href="/contacto"
          className={styles.serviceButton}
        >
          Quiero recuperar mi dinero
        </Link>

      </div>

    </article>


  </div>

</section>
        {/* =====================================================
            EVALUACIÓN
            ===================================================== */}

        <section
          className={styles.evaluation}
          id="evaluacion"
        >

          <div className={styles.evaluationHeader}>

            <div>

              <span className={styles.sectionLabel}>
                EVALUACIÓN INICIAL
              </span>

              <h2>
                Comencemos por
                <br />
                entender tu situación.
              </h2>

            </div>

            <div className={styles.progressInfo}>

              <span>
                PASO {currentStep} DE 4
              </span>

              <strong>
                {Math.round(progress)}%
              </strong>

            </div>

          </div>


          <div className={styles.progressBar}>
            <span
              style={{
                width: `${progress}%`,
              }}
            ></span>
          </div>


          {/* =================================================
              PREGUNTA 1
              ================================================= */}

          {!showQuestions && !fraudType && (
            <div className={styles.questionCard}>

              <div className={styles.questionNumber}>
                PREGUNTA 01
              </div>

              <h3>
                ¿Qué tipo de situación estás enfrentando?
              </h3>

              <p>
                Selecciona la opción que más se acerque a lo que ocurrió.
              </p>

              <div className={styles.options}>

                <button
                  type="button"
                  className={styles.option}
                  onClick={() => selectFraudType("Inversión")}
                >
                  <span className={styles.optionIcon}>💰</span>

                  <span>
                    Inversión
                    <small>
                      Propuesta o plataforma de inversión
                    </small>
                  </span>

                  <b>→</b>
                </button>


                <button
                  type="button"
                  className={styles.option}
                  onClick={() => selectFraudType("Transferencia bancaria")}
                >
                  <span className={styles.optionIcon}>🏦</span>

                  <span>
                    Transferencia bancaria
                    <small>
                      Pago o transferencia de dinero
                    </small>
                  </span>

                  <b>→</b>
                </button>


                <button
                  type="button"
                  className={styles.option}
                  onClick={() => selectFraudType("Compra o venta")}
                >
                  <span className={styles.optionIcon}>🛒</span>

                  <span>
                    Compra o venta
                    <small>
                      Producto, servicio o comercio electrónico
                    </small>
                  </span>

                  <b>→</b>
                </button>


                <button
                  type="button"
                  className={styles.option}
                  onClick={() => selectFraudType("Contacto sospechoso")}
                >
                  <span className={styles.optionIcon}>📱</span>

                  <span>
                    Contacto sospechoso
                    <small>
                      Llamada, mensaje, correo o comunicación
                    </small>
                  </span>

                  <b>→</b>
                </button>


                <button
                  type="button"
                  className={styles.option}
                  onClick={() => selectFraudType("Préstamo o crédito")}
                >
                  <span className={styles.optionIcon}>💳</span>

                  <span>
                    Préstamo o crédito
                    <small>
                      Oferta o solicitud relacionada con crédito
                    </small>
                  </span>

                  <b>→</b>
                </button>


                <button
                  type="button"
                  className={styles.option}
                  onClick={() => selectFraudType("Otra situación")}
                >
                  <span className={styles.optionIcon}>❓</span>

                  <span>
                    Otra situación
                    <small>
                      Algo diferente a las opciones anteriores
                    </small>
                  </span>

                  <b>→</b>
                </button>

              </div>

            </div>
          )}


          {/* =================================================
              PREGUNTA 2
              ================================================= */}

          {fraudType && !stillContacting && (
            <div className={styles.questionCard}>

              <div className={styles.questionTopRow}>
                <div className={styles.questionNumber}>
                  PREGUNTA 02
                </div>

                <span className={styles.selectedType}>
                  {fraudType}
                </span>
              </div>

              <h3>
                ¿La persona, empresa o plataforma
                <br />
                te sigue contactando?
              </h3>

              <p>
                Indica si continúan intentando comunicarse contigo
                después de lo ocurrido.
              </p>

              <div className={styles.binaryOptions}>

                <button
                  type="button"
                  className={styles.binaryOption}
                  onClick={() => selectStillContacting("si")}
                >
                  <span className={styles.binaryEmoji}>📞</span>

                  <span>
                    Sí, todavía me contactan
                    <small>
                      Siguen enviándome mensajes, llamadas o solicitudes.
                    </small>
                  </span>

                  <b>→</b>
                </button>


                <button
                  type="button"
                  className={styles.binaryOption}
                  onClick={() => selectStillContacting("no")}
                >
                  <span className={styles.binaryEmoji}>🔕</span>

                  <span>
                    No, ya no me contactan
                    <small>
                      La comunicación terminó después de lo ocurrido.
                    </small>
                  </span>

                  <b>→</b>
                </button>

              </div>

            </div>
          )}


          {/* =================================================
              PREGUNTA 3
              ================================================= */}

          {fraudType && stillContacting && !askedForMore && (
            <div className={styles.questionCard}>

              <div className={styles.questionNumber}>
                PREGUNTA 03
              </div>

              <h3>
                ¿Te han pedido realizar otro pago
                <br />
                o entregar información sensible?
              </h3>

              <p>
                Por ejemplo, nuevos depósitos, cargos adicionales,
                contraseñas, códigos de seguridad o información bancaria.
              </p>

              <div className={styles.binaryOptions}>

                <button
                  type="button"
                  className={styles.binaryOption}
                  onClick={() => selectAskedForMore("si")}
                >
                  <span className={styles.binaryEmoji}>⚠️</span>

                  <span>
                    Sí, me han solicitado algo más
                    <small>
                      Me han pedido dinero, códigos o información adicional.
                    </small>
                  </span>

                  <b>→</b>
                </button>


                <button
                  type="button"
                  className={styles.binaryOption}
                  onClick={() => selectAskedForMore("no")}
                >
                  <span className={styles.binaryEmoji}>🛡️</span>

                  <span>
                    No, no me han solicitado nada más
                    <small>
                      No he recibido nuevas solicitudes después del incidente.
                    </small>
                  </span>

                  <b>→</b>
                </button>

              </div>

            </div>
          )}


          {/* =================================================
              FINAL DE EVALUACIÓN
              ================================================= */}

          {showFinalActions && (
            <div className={styles.finalEvaluationCard}>

              <div className={styles.finalEvaluationEmoji}>
                ⏱️
              </div>

              <span>
                EVALUACIÓN COMPLETADA
              </span>

              <h3>
                No pierdas más tiempo
                <br />
                si algo no parece correcto.
              </h3>

              <p>
                Tus respuestas muestran elementos que vale la pena
                revisar con mayor atención. Podemos ayudarte a organizar
                la información y conocer cuáles podrían ser tus siguientes
                pasos.
              </p>

              <div className={styles.actionButtons}>

                <Link
                  href="/contacto"
                  className={styles.primaryAction}
                >
                  Hablar con VALTARA
                  <span>→</span>
                </Link>


                <a
                  href="https://wa.me/5658165677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  <span>💬</span>
                  WhatsApp
                </a>


                <a
                  href="mailto:aer@asesoriaespecializada.com"
                  className={styles.secondaryAction}
                >
                  <span>✉️</span>
                  Escribir por correo
                </a>

              </div>

              <button
                type="button"
                className={styles.restartButton}
                onClick={resetEvaluation}
              >
                Volver a realizar la evaluación
              </button>

            </div>
          )}

        </section>


        {/* =====================================================
            SEÑALES
            ===================================================== */}

        <section className={styles.signals}>

          <div className={styles.signalsHeader}>

            <span>
              SEÑALES DE ALERTA
            </span>

            <h2>
              ¿Qué estamos buscando?
            </h2>

            <p>
              Existen comportamientos y características que pueden
              aumentar el nivel de riesgo de una situación.
            </p>

          </div>


          <div className={styles.signalGrid}>

            <article className={styles.signalCard}>

              <div className={styles.signalIcon}>
                ⚠️
              </div>

              <span>01</span>

              <h3>
                Presión para decidir
              </h3>

              <p>
                Te piden realizar un pago o tomar una decisión
                inmediatamente.
              </p>

            </article>


            <article className={styles.signalCard}>

              <div className={styles.signalIcon}>
                💰
              </div>

              <span>02</span>

              <h3>
                Ganancias garantizadas
              </h3>

              <p>
                Prometen rendimientos extraordinarios sin explicar
                claramente los riesgos.
              </p>

            </article>


            <article className={styles.signalCard}>

              <div className={styles.signalIcon}>
                🔎
              </div>

              <span>03</span>

              <h3>
                Información poco clara
              </h3>

              <p>
                No puedes verificar fácilmente quién está detrás
                de la operación.
              </p>

            </article>


            <article className={styles.signalCard}>

              <div className={styles.signalIcon}>
                🔐
              </div>

              <span>04</span>

              <h3>
                Solicitud de información
              </h3>

              <p>
                Te solicitan contraseñas, códigos o información
                financiera sensible.
              </p>

            </article>

          </div>

        </section>


        {/* =====================================================
    PROCESO
    ===================================================== */}

<section className={styles.process}>

  <div className={styles.processIntro}>

    <span>
      TU INFORMACIÓN
    </span>

    <h2>
      Una evaluación
      <br />
      en cuatro pasos.
    </h2>

    <p>
      La evaluación está diseñada para ayudarte a ordenar
      la información, identificar patrones y reconocer
      posibles señales de riesgo en tu situación.
    </p>

  </div>


  <div className={styles.processSteps}>

    <div
      className={`${styles.processStep} ${styles.activeStep}`}
    >
      <div className={styles.stepCircle}>
        01
      </div>

      <div>
        <strong>
          Identificamos
        </strong>

        <span>
          El tipo de situación
        </span>

        <p>
          Revisamos lo ocurrido y determinamos qué tipo
          de situación podría estar relacionada con el caso.
        </p>
      </div>
    </div>


    <div className={styles.processStep}>

      <div className={styles.stepCircle}>
        02
      </div>

      <div>
        <strong>
          Analizamos
        </strong>

        <span>
          Si la situación continúa
        </span>

        <p>
          Observamos si existen nuevos contactos, solicitudes
          o movimientos que puedan representar un riesgo.
        </p>
      </div>

    </div>


    <div className={styles.processStep}>

      <div className={styles.stepCircle}>
        03
      </div>

      <div>
        <strong>
          Evaluamos
        </strong>

        <span>
          Las señales presentes
        </span>

        <p>
          Organizamos los datos disponibles para reconocer
          señales de alerta y comprender mejor el nivel de riesgo.
        </p>
      </div>

    </div>


    <div className={styles.processStep}>

      <div className={styles.stepCircle}>
        04
      </div>

      <div>
        <strong>
          Orientamos
        </strong>

        <span>
          Sobre posibles siguientes pasos
        </span>

        <p>
          Te explicamos las alternativas disponibles y qué
          información puede ser útil para continuar con tu caso.
        </p>
      </div>

    </div>

  </div>

</section>

        {/* =====================================================
            RESULTADO
            ===================================================== */}

        <section className={styles.resultSection}>

          <div className={styles.resultIntro}>

            <span>
              RESULTADO
            </span>

            <h2>
              ¿Cómo se verá
              <br />
              tu evaluación?
            </h2>

            <p>
              Al finalizar podrás visualizar un nivel de riesgo
              basado en las respuestas proporcionadas.
            </p>

          </div>


          <div className={styles.resultCard}>

            <div className={styles.resultTop}>

              <div>

                <span>
                  NIVEL DE RIESGO ESTIMADO
                </span>

                <h3>
                  Riesgo moderado
                </h3>

              </div>

              <div className={styles.riskBadge}>
                MODERADO
              </div>

            </div>


            <div className={styles.riskScale}>

              <div className={styles.scaleLabels}>
                <span>Bajo</span>
                <span>Moderado</span>
                <span>Alto</span>
              </div>

              <div className={styles.scaleBar}>
                <span></span>
              </div>

            </div>


            <div className={styles.resultDivider}></div>


            <div className={styles.resultMessage}>

              <div className={styles.resultIcon}>
                ⚠️
              </div>

              <div>

                <strong>
                  Algunas señales requieren atención.
                </strong>

                <p>
                  Este resultado es orientativo. La presencia de
                  determinadas señales no confirma por sí misma
                  la existencia de un fraude.
                </p>

              </div>

            </div>


            <Link
              href="/recomendaciones"
              className={styles.resultButton}
            >
              Ver recomendaciones
              <span>→</span>
            </Link>

          </div>

        </section>


        {/* =====================================================
            RECOMENDACIONES PREVENTIVAS
            ===================================================== */}

        <section className={styles.recommendations}>

          <div className={styles.recommendationHeading}>

            <span>
              MIENTRAS TANTO
            </span>

            <h2>
              Si tienes dudas,
              <br />
              actúa con precaución.
            </h2>

          </div>


          <div className={styles.recommendationList}>

            <div className={styles.recommendationItem}>

              <span>
                01
              </span>

              <div>
                <h3>
                  No realices nuevas transferencias.
                </h3>

                <p>
                  Si una situación genera dudas, evita enviar
                  más dinero hasta contar con información suficiente.
                </p>
              </div>

            </div>


            <div className={styles.recommendationItem}>

              <span>
                02
              </span>

              <div>
                <h3>
                  Conserva toda la información.
                </h3>

                <p>
                  Guarda comprobantes, conversaciones, correos,
                  capturas y cualquier documento relacionado.
                </p>
              </div>

            </div>


            <div className={styles.recommendationItem}>

              <span>
                03
              </span>

              <div>
                <h3>
                  Verifica antes de confiar.
                </h3>

                <p>
                  Comprueba la identidad de la persona o institución
                  y utiliza canales oficiales cuando sea posible.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DISCLAIMER
            ===================================================== */}

        <section className={styles.disclaimer}>

          <div className={styles.disclaimerIcon}>
            ℹ️
          </div>

          <div>

            <strong>
              Información importante
            </strong>

            <p>
              La herramienta de identificación de fraude de VALTARA
              proporciona una evaluación orientativa basada en la
              información proporcionada por el usuario. El resultado
              no constituye una determinación legal, financiera ni
              profesional de la existencia de un fraude.
            </p>

          </div>

        </section>


        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section className={styles.finalCta}>

          <div className={styles.finalGlow}></div>

          <div className={styles.finalContent}>

            <span>
              VALTARA
            </span>

            <h2>
              Cuando algo no parece correcto,
              <br />
              <em>vale la pena revisarlo.</em>
            </h2>

            <p>
              Identifica las señales antes de tomar una decisión.
            </p>

            <a
              href="#evaluacion"
              className={styles.finalButton}
            >
              Comenzar evaluación
            </a>

            <div className={styles.motto}>
              Tu patrimonio, nuestra prioridad.
            </div>

          </div>

        </section>


        {/* =====================================================
            FOOTER SPACE
            ===================================================== */}

        <div className={styles.footerSpace}>
          <span>
         VALTARA
          </span>
        </div>

      </main>
    </>
  );
}