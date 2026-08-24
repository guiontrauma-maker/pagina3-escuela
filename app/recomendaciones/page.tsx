import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

export default function RecomendacionesPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            HERO / ENCABEZADO
            ===================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroInner}>

            <div className={styles.heroEyebrow}>
              <span>RESULTADO DE EVALUACIÓN</span>
            </div>

            <div className={styles.heroGrid}>

              <div className={styles.heroTitle}>
                <h1>
                  Tus siguientes
                  <br />
                  <em>pasos.</em>
                </h1>
              </div>

              <div className={styles.heroDescription}>
                <p>
                  A partir de las respuestas proporcionadas, encontramos
                  algunas señales que conviene tomar en cuenta antes de
                  realizar nuevas acciones.
                </p>

                <span>
                  Esta información es orientativa y no constituye una
                  determinación legal o profesional.
                </span>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            RESULTADO
            ===================================================== */}

        <section className={styles.resultSection}>

          <div className={styles.resultHeader}>

            <div>
              <span className={styles.sectionLabel}>
                01 · RESULTADO
              </span>

              <h2>
                Nivel de riesgo
                <br />
                <em>moderado.</em>
              </h2>
            </div>

            <div className={styles.riskBadge}>
              <span>RIESGO</span>
              <strong>MODERADO</strong>
            </div>

          </div>


          <div className={styles.riskCard}>

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

            <div className={styles.riskExplanation}>

              <div className={styles.riskIcon}>
                !
              </div>

              <div>
                <strong>
                  Algunas señales requieren atención.
                </strong>

                <p>
                  El resultado refleja las respuestas proporcionadas durante
                  la evaluación. Por sí solo no confirma que exista un fraude,
                  pero indica que puede ser conveniente revisar cuidadosamente
                  la situación antes de continuar.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SEÑALES IDENTIFICADAS
            ===================================================== */}

        <section className={styles.signalsSection}>

          <div className={styles.signalsIntro}>

            <span className={styles.sectionLabel}>
              02 · SEÑALES IDENTIFICADAS
            </span>

            <h2>
              Lo que merece
              <br />
              <em>mayor atención.</em>
            </h2>

            <p>
              Estas son algunas situaciones que pueden representar un
              elemento de riesgo cuando aparecen dentro de un mismo contexto.
            </p>

          </div>


          <div className={styles.signalList}>

            <article className={styles.signalItem}>

              <div className={styles.signalNumber}>
                01
              </div>

              <div className={styles.signalIcon}>
                ⚠️
              </div>

              <div className={styles.signalContent}>

                <h3>
                  Presión para tomar una decisión
                </h3>

                <p>
                  Cuando existe insistencia para realizar un pago, transferir
                  dinero o actuar inmediatamente, es recomendable detenerse
                  y verificar la información antes de continuar.
                </p>

              </div>

            </article>


            <article className={styles.signalItem}>

              <div className={styles.signalNumber}>
                02
              </div>

              <div className={styles.signalIcon}>
                💬
              </div>

              <div className={styles.signalContent}>

                <h3>
                  Contacto o comunicación inesperada
                </h3>

                <p>
                  Las comunicaciones no solicitadas o difíciles de verificar
                  requieren especial cuidado, especialmente cuando solicitan
                  dinero o información personal.
                </p>

              </div>

            </article>


            <article className={styles.signalItem}>

              <div className={styles.signalNumber}>
                03
              </div>

              <div className={styles.signalIcon}>
                🔎
              </div>

              <div className={styles.signalContent}>

                <h3>
                  Información que debe verificarse
                </h3>

                <p>
                  Antes de continuar, procura confirmar de manera independiente
                  la identidad de las personas, empresas o plataformas
                  involucradas.
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            RECOMENDACIONES INMEDIATAS
            ===================================================== */}

        <section className={styles.actionSection}>

          <div className={styles.actionIntro}>

            <span className={styles.sectionLabel}>
              03 · QUÉ HACER AHORA
            </span>

            <h2>
              Antes de realizar
              <br />
              <em>cualquier otro pago.</em>
            </h2>

            <p>
              Si todavía tienes dudas sobre la situación, estas acciones
              pueden ayudarte a proteger mejor tu información y tu patrimonio.
            </p>

          </div>


          <div className={styles.actionGrid}>

            <article className={styles.actionCard}>

              <span className={styles.actionNumber}>
                01
              </span>

              <div className={styles.actionIcon}>
                🛑
              </div>

              <h3>
                Detén nuevas transferencias
              </h3>

              <p>
                Evita enviar más dinero mientras no tengas claridad sobre
                quién está detrás de la operación y por qué se solicita.
              </p>

            </article>


            <article className={styles.actionCard}>

              <span className={styles.actionNumber}>
                02
              </span>

              <div className={styles.actionIcon}>
                📁
              </div>

              <h3>
                Conserva la evidencia
              </h3>

              <p>
                Guarda conversaciones, comprobantes, contratos, correos,
                capturas de pantalla y cualquier documento relacionado.
              </p>

            </article>


            <article className={styles.actionCard}>

              <span className={styles.actionNumber}>
                03
              </span>

              <div className={styles.actionIcon}>
                🔐
              </div>

              <h3>
                Protege tus accesos
              </h3>

              <p>
                Nunca compartas contraseñas, códigos de autenticación,
                NIP, tokens o claves privadas con terceros.
              </p>

            </article>


            <article className={styles.actionCard}>

              <span className={styles.actionNumber}>
                04
              </span>

              <div className={styles.actionIcon}>
                ✔️
              </div>

              <h3>
                Verifica por canales oficiales
              </h3>

              <p>
                Si alguien afirma representar a una institución, confirma
                su identidad utilizando información y canales oficiales.
              </p>

            </article>

          </div>

        </section>


        {/* =====================================================
            INFORMACIÓN QUE CONVIENE REUNIR
            ===================================================== */}

        <section className={styles.evidenceSection}>

          <div className={styles.evidenceHeader}>

            <span className={styles.sectionLabel}>
              04 · PREPARA TU INFORMACIÓN
            </span>

            <h2>
              Lo que puede ser útil
              <br />
              <em>tener a la mano.</em>
            </h2>

          </div>


          <div className={styles.evidenceGrid}>

            <div className={styles.evidenceColumn}>

              <span>01</span>

              <h3>
                Comprobantes
              </h3>

              <p>
                Transferencias, depósitos, recibos o cualquier comprobante
                relacionado con los pagos realizados.
              </p>

            </div>


            <div className={styles.evidenceColumn}>

              <span>02</span>

              <h3>
                Comunicaciones
              </h3>

              <p>
                Correos, mensajes, conversaciones y datos de contacto de las
                personas involucradas.
              </p>

            </div>


            <div className={styles.evidenceColumn}>

              <span>03</span>

              <h3>
                Documentos
              </h3>

              <p>
                Contratos, propuestas, facturas, recibos o documentos que
                hayan formado parte de la operación.
              </p>

            </div>


            <div className={styles.evidenceColumn}>

              <span>04</span>

              <h3>
                Cronología
              </h3>

              <p>
                Una descripción sencilla de qué ocurrió, cuándo ocurrió y
                cuáles fueron las acciones realizadas posteriormente.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA CONTACTO
            ===================================================== */}

        <section className={styles.contactSection}>

          <div className={styles.contactInner}>

            <div className={styles.contactText}>

              <span>
                ¿NECESITAS ORIENTACIÓN?
              </span>

              <h2>
                No tienes que
                <br />
                resolverlo <em>solo.</em>
              </h2>

              <p>
                Si la situación continúa generando dudas o ya realizaste
                una operación que ahora consideras sospechosa, puedes
                compartir la información disponible para recibir orientación
                sobre los siguientes pasos.
              </p>

            </div>


            <div className={styles.contactActions}>

              <Link
                href="/contacto"
                className={styles.primaryButton}
              >
                Hablar con VALTARA 
                <span>→</span>
              </Link>

              <Link
                href="/identificacion-de-fraude"
                className={styles.secondaryButton}
              >
                Volver a la evaluación
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            SEGURIDAD
            ===================================================== */}

        <section className={styles.securitySection}>

          <div className={styles.securityIcon}>
            🔒
          </div>

          <div>

            <strong>
              Protege tu información
            </strong>

            <p>
              Comparte únicamente los datos necesarios para explicar tu
              situación. Nunca envíes contraseñas, códigos de seguridad,
              claves privadas o credenciales de acceso.
            </p>

          </div>

        </section>


        {/* =====================================================
            DISCLAIMER
            ===================================================== */}

        <section className={styles.disclaimer}>

          <span>
            INFORMACIÓN IMPORTANTE
          </span>

          <p>
            Esta página presenta recomendaciones generales basadas en una
            evaluación orientativa. La información no constituye asesoría
            legal, financiera ni una determinación definitiva sobre la
            existencia de un fraude o sobre las posibilidades de recuperar
            recursos.
          </p>

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