import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

export default function InversionSospechosa() {
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
              PREVENCIÓN
            </span>

            <h1>
              ¿Cómo identificar una
              <br />
              <em>inversión sospechosa?</em>
            </h1>

            <p className={styles.intro}>
              Conoce algunas señales que pueden ayudarte a detectar
              propuestas de inversión que requieren mayor atención
              antes de tomar una decisión.
            </p>

            <div className={styles.articleMeta}>
              <span>VALTARA</span>
              <span>·</span>
              <span>Guía de prevención</span>
            </div>

          </div>
        </section>


        <article className={styles.articleContent}>

          <div className={styles.articleMain}>

            <p className={styles.lead}>
              Las propuestas de inversión pueden presentarse de muchas
              formas. Algunas parecen oportunidades legítimas, mientras
              que otras pueden contener señales que conviene revisar
              antes de entregar dinero o información personal.
            </p>

            <h2>
              La promesa de ganancias extraordinarias
            </h2>

            <p>
              Una de las primeras señales que merece atención es la
              promesa de obtener ganancias muy elevadas en poco tiempo,
              especialmente cuando se presenta como una oportunidad
              prácticamente segura.
            </p>

            <p>
              Ninguna inversión está completamente libre de riesgo.
              Cuando una propuesta insiste en que las ganancias están
              garantizadas o que no existe posibilidad de pérdida,
              es recomendable detenerse y analizar cuidadosamente
              la información disponible.
            </p>


            <div className={styles.highlight}>
              <span>SEÑAL DE ALERTA</span>
              <p>
                Desconfía de propuestas que presenten ganancias
                extraordinarias como algo seguro, inmediato o sin riesgo.
              </p>
            </div>


            <h2>
              Presión para decidir rápidamente
            </h2>

            <p>
              Otra señal frecuente es la presión para realizar un pago
              o transferencia inmediatamente. Algunas propuestas utilizan
              frases como “última oportunidad”, “cupo limitado” o
              “debes invertir hoy”.
            </p>

            <p>
              Una decisión financiera importante debería darte tiempo
              suficiente para revisar quién ofrece el servicio, cuáles
              son las condiciones y qué información existe sobre la
              operación.
            </p>


            <h2>
              Falta de información verificable
            </h2>

            <p>
              Antes de realizar una inversión conviene identificar
              claramente a la persona, empresa o plataforma que la
              está ofreciendo.
            </p>

            <p>
              Revisa si existen datos de contacto verificables,
              condiciones claras, documentación y referencias
              independientes. Una página web atractiva por sí sola
              no demuestra que una propuesta sea legítima.
            </p>


            <h2>
              Solicitudes de dinero difíciles de explicar
            </h2>

            <p>
              También es importante prestar atención cuando se solicita
              realizar transferencias a cuentas personales, utilizar
              métodos de pago poco habituales o enviar dinero con
              conceptos que no corresponden claramente al servicio
              ofrecido.
            </p>

            <p>
              Antes de transferir fondos, asegúrate de comprender
              exactamente quién recibirá el dinero, por qué concepto
              y bajo qué condiciones.
            </p>


            <div className={styles.checkList}>

              <h3>
                Antes de invertir, revisa:
              </h3>

              <div className={styles.checkItem}>
                <span>01</span>
                <p>
                  Quién está ofreciendo la inversión.
                </p>
              </div>

              <div className={styles.checkItem}>
                <span>02</span>
                <p>
                  Qué condiciones y riesgos existen.
                </p>
              </div>

              <div className={styles.checkItem}>
                <span>03</span>
                <p>
                  Cómo y dónde se realizará el pago.
                </p>
              </div>

              <div className={styles.checkItem}>
                <span>04</span>
                <p>
                  Si la información puede verificarse por fuentes independientes.
                </p>
              </div>

            </div>


            <h2>
              Si algo no parece claro, detente
            </h2>

            <p>
              No es necesario tomar una decisión inmediata. Si una
              propuesta genera dudas, lo recomendable es detener
              cualquier transferencia y reunir la información disponible
              antes de continuar.
            </p>

            <p>
              Identificar señales de alerta no significa determinar
              automáticamente que existe un fraude. Significa reconocer
              elementos que justifican una revisión más cuidadosa.
            </p>


            <div className={styles.finalNote}>
              <strong>
                VALTARA
              </strong>

              <p>
                Información clara para ayudarte a tomar decisiones
                con mayor seguridad frente a situaciones de riesgo
                patrimonial.
              </p>
            </div>

          </div>

        </article>


        <section className={styles.articleCta}>

          <span>
            ¿NECESITAS ORIENTACIÓN?
          </span>

          <h2>
            Comprende tu situación
            <br />
            antes de tomar una decisión.
          </h2>

          <p>
            Identifica las señales y organiza la información
            disponible sobre tu caso.
          </p>

          <Link
            href="/identificacion-de-fraude"
            className={styles.ctaButton}
          >
            Identificar un posible fraude
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