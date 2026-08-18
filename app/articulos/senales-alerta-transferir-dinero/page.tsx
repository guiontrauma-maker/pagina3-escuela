import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

export default function SenalesAlertaTransferirDinero() {
  return (
    <>
      <Navbar />

      <main className={styles.articlePage}>

        <section className={styles.articleHero}>
          <div className={styles.heroInner}>

            <Link href="/" className={styles.backLink}>
              ← Volver al inicio
            </Link>

            <span className={styles.category}>
              SEGURIDAD
            </span>

            <h1>
              5 señales de alerta
              <br />
              <em>antes de transferir dinero.</em>
            </h1>

            <p className={styles.intro}>
              Antes de realizar una operación, existen ciertos
              indicadores que conviene revisar para reducir el riesgo
              de tomar una decisión apresurada.
            </p>

            <div className={styles.articleMeta}>
              <span>AER</span>
              <span>·</span>
              <span>Guía de seguridad</span>
            </div>

          </div>
        </section>


        <article className={styles.articleContent}>

          <div className={styles.articleMain}>

            <p className={styles.lead}>
              Una transferencia de dinero puede realizarse en pocos
              minutos. Precisamente por eso, detenerse unos momentos
              antes de enviar los fondos puede ser una de las medidas
              más importantes para evitar una decisión equivocada.
            </p>


            <div className={styles.alertCard}>

              <span>01</span>

              <div>
                <h2>
                  Te están presionando para pagar
                </h2>

                <p>
                  Si alguien insiste en que debes transferir dinero
                  inmediatamente para no perder una oportunidad,
                  obtener un beneficio o resolver un supuesto problema,
                  conviene detenerse.
                </p>
              </div>

            </div>


            <div className={styles.alertCard}>

              <span>02</span>

              <div>
                <h2>
                  El destinatario no está claro
                </h2>

                <p>
                  Antes de transferir fondos debes poder identificar
                  claramente quién recibirá el dinero y por qué.
                  Si los datos cambian constantemente o no corresponden
                  con la persona o empresa con la que estabas tratando,
                  revisa la situación.
                </p>
              </div>

            </div>


            <div className={styles.alertCard}>

              <span>03</span>

              <div>
                <h2>
                  Te piden información sensible
                </h2>

                <p>
                  Solicitudes inesperadas de contraseñas, códigos de
                  seguridad, datos bancarios o información personal
                  requieren especial atención.
                </p>

                <p>
                  Una persona que solicita información adicional para
                  completar una operación debería poder explicar
                  claramente por qué la necesita.
                </p>
              </div>

            </div>


            <div className={styles.alertCard}>

              <span>04</span>

              <div>
                <h2>
                  La explicación no coincide
                </h2>

                <p>
                  Si el motivo de la transferencia cambia durante la
                  conversación o la persona que te contactó ofrece
                  explicaciones diferentes, detén el proceso hasta
                  verificar la información.
                </p>
              </div>

            </div>


            <div className={styles.alertCard}>

              <span>05</span>

              <div>
                <h2>
                  No puedes verificar la operación
                </h2>

                <p>
                  Una operación importante debería poder comprobarse
                  mediante información independiente y verificable.
                </p>

                <p>
                  No dependas únicamente de capturas de pantalla,
                  mensajes, llamadas o enlaces enviados por la persona
                  que solicita el pago.
                </p>
              </div>

            </div>


            <div className={styles.pauseBox}>

              <span>
                ANTES DE TRANSFERIR
              </span>

              <h3>
                Detente. Verifica. Después decide.
              </h3>

              <p>
                Si algo no coincide, no tienes suficiente información
                o sientes presión para actuar inmediatamente, puedes
                detener la operación mientras revisas la situación.
              </p>

            </div>


            <h2 className={styles.finalHeading}>
              Una transferencia no debería
              <br />
              dejarte sin respuestas.
            </h2>

            <p>
              La prevención comienza con preguntas sencillas: ¿quién
              recibe el dinero?, ¿por qué debo transferirlo?, ¿puedo
              verificar la información?, ¿qué ocurre si decido esperar?
            </p>

            <p>
              Si no puedes responderlas con claridad, es razonable
              detenerte y recopilar más información antes de continuar.
            </p>


            <div className={styles.finalNote}>
              <strong>AER</strong>

              <p>
                Nuestro objetivo es ayudarte a comprender las señales
                de riesgo y tomar decisiones con mayor claridad.
              </p>
            </div>

          </div>

        </article>


        <section className={styles.articleCta}>

          <span>
            IDENTIFICACIÓN
          </span>

          <h2>
            ¿Reconoces alguna
            <br />
            de estas señales?
          </h2>

          <p>
            Puedes revisar tu situación y organizar la información
            disponible antes de tomar nuevas decisiones.
          </p>

          <Link
            href="/identificacion-de-fraude"
            className={styles.ctaButton}
          >
            Revisar una posible situación
          </Link>

        </section>


        <footer className={styles.footer}>
          <Link href="/">
            ← Volver a AER Asesoría Especializada en Recuperación 
          </Link>
        </footer>

      </main>
    </>
  );
}