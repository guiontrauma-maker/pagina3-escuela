import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

export default function QueHacerDespuesDeUnaEstafa() {
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
              ORIENTACIÓN
            </span>

            <h1>
              ¿Qué hacer después
              <br />
              <em>de una posible estafa?</em>
            </h1>

            <p className={styles.intro}>
              Una guía inicial para organizar la información,
              protegerte de nuevas pérdidas y comprender los
              siguientes pasos.
            </p>

            <div className={styles.articleMeta}>
              <span>VALTARA</span>
              <span>·</span>
              <span>Guía de orientación</span>
            </div>

          </div>
        </section>


        <article className={styles.articleContent}>

          <div className={styles.articleMain}>

            <p className={styles.lead}>
              Después de una posible estafa es normal sentirse
              confundido. Lo más importante es evitar tomar nuevas
              decisiones apresuradas y comenzar por organizar
              cuidadosamente la información disponible.
            </p>


            <section className={styles.step}>

              <span>01</span>

              <div>
                <h2>
                  Detén nuevas transferencias
                </h2>

                <p>
                  Si todavía estás en contacto con la persona o
                  plataforma involucrada, evita realizar nuevos pagos
                  hasta comprender mejor lo ocurrido.
                </p>

                <p>
                  No transfieras dinero adicional con la promesa de
                  recuperar rápidamente los fondos anteriores.
                </p>
              </div>

            </section>


            <section className={styles.step}>

              <span>02</span>

              <div>
                <h2>
                  Conserva toda la información
                </h2>

                <p>
                  Guarda mensajes, correos electrónicos, comprobantes,
                  capturas de pantalla, números telefónicos, enlaces,
                  datos de cuentas y cualquier documento relacionado
                  con la situación.
                </p>

                <p>
                  No elimines conversaciones aunque parezcan poco
                  importantes. Pueden ayudar a reconstruir lo ocurrido.
                </p>
              </div>

            </section>


            <section className={styles.step}>

              <span>03</span>

              <div>
                <h2>
                  Organiza una cronología
                </h2>

                <p>
                  Anota qué ocurrió y en qué orden. Incluye fechas,
                  horarios aproximados, personas involucradas,
                  cantidades transferidas y medios utilizados.
                </p>

                <div className={styles.timeline}>

                  <div>
                    <strong>Fecha</strong>
                    <span>¿Cuándo ocurrió?</span>
                  </div>

                  <div>
                    <strong>Contacto</strong>
                    <span>¿Quién te contactó?</span>
                  </div>

                  <div>
                    <strong>Operación</strong>
                    <span>¿Qué cantidad se envió?</span>
                  </div>

                  <div>
                    <strong>Evidencia</strong>
                    <span>¿Qué documentos existen?</span>
                  </div>

                </div>

              </div>

            </section>


            <section className={styles.step}>

              <span>04</span>

              <div>
                <h2>
                  Verifica lo que realmente ocurrió
                </h2>

                <p>
                  Revisa tus estados de cuenta y comprobantes para
                  confirmar las operaciones realizadas.
                </p>

                <p>
                  Identifica qué pagos fueron realizados, a qué
                  destinatarios y mediante qué institución o plataforma.
                </p>
              </div>

            </section>


            <section className={styles.step}>

              <span>05</span>

              <div>
                <h2>
                  Busca orientación
                </h2>

                <p>
                  Una vez organizada la información, puedes buscar
                  orientación para comprender mejor las alternativas
                  disponibles de acuerdo con las características
                  específicas de tu situación.
                </p>

                <p>
                  La información concreta de cada caso puede determinar
                  qué pasos son apropiados y cuáles deben evitarse.
                </p>
              </div>

            </section>


            <div className={styles.warning}>

              <span>
                IMPORTANTE
              </span>

              <h3>
                Cuidado con las falsas promesas de recuperación.
              </h3>

              <p>
                Después de una estafa pueden aparecer personas o
                servicios que prometen recuperar el dinero a cambio
                de nuevos pagos. Antes de entregar más fondos,
                verifica cuidadosamente quién ofrece el servicio
                y qué puede realmente hacer.
              </p>

            </div>


            <h2 className={styles.finalHeading}>
              Organizar la información
              <br />
              es el primer paso.
            </h2>

            <p>
              Una situación de posible fraude puede parecer complicada
              cuando toda la información está dispersa. Reunir los
              documentos y reconstruir lo ocurrido permite comprender
              mejor el caso.
            </p>

            <p>
              No necesitas resolver todo de inmediato. Comienza por
              detener nuevas operaciones, conservar la evidencia y
              ordenar los hechos.
            </p>


            <div className={styles.finalNote}>

              <strong>
                VALTARA
              </strong>

              <p>
                Protección, información y orientación para ayudarte
                a recuperar claridad frente a una situación difícil.
              </p>

            </div>

          </div>

        </article>


        <section className={styles.articleCta}>

          <span>
            ORIENTACIÓN
          </span>

          <h2>
            ¿Quieres comprender
            <br />
            tu situación?
          </h2>

          <p>
            Organiza la información disponible y revisa las señales
            relacionadas con tu caso.
          </p>

          <Link
            href="/identificacion-de-fraude"
            className={styles.ctaButton}
          >
            Iniciar identificación
          </Link>

        </section>


        <footer className={styles.footer}>
          <Link href="/">
            ← Volver a VALTARA
          </Link>
        </footer>

      </main>
    </>
  );
}