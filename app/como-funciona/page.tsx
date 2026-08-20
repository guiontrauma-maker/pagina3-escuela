import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

const steps = [
  {
    number: "01",
    title: "Identificamos",
    text: "Comenzamos entendiendo qué ocurrió, qué tipo de operación estuvo involucrada y cuáles son las señales que podrían representar un riesgo.",
    detail: "Señales · Operaciones · Comunicaciones",
  },
  {
    number: "02",
    title: "Organizamos",
    text: "Ordenamos la información disponible para construir una visión más clara de la situación y distinguir los elementos importantes.",
    detail: "Información · Evidencia · Contexto",
  },
  {
    number: "03",
    title: "Analizamos",
    text: "Revisamos las características del caso para identificar patrones, inconsistencias o elementos que requieran especial atención.",
    detail: "Riesgos · Patrones · Indicadores",
  },
  {
    number: "04",
    title: "Orientamos",
    text: "Presentamos la información de manera clara para que puedas comprender las alternativas disponibles y tomar decisiones con mayor seguridad.",
    detail: "Alternativas · Información · Decisiones",
  },
  {
    number: "05",
    title: "Damos seguimiento",
    text: "Cuando corresponde, facilitamos el seguimiento de la información y de la evolución de la situación.",
    detail: "Seguimiento · Actualización · Acompañamiento",
  },
];

const principles = [
  {
    number: "A",
    title: "Claridad",
    text: "Explicamos la información de manera comprensible, evitando hacer más complicada una situación que ya puede resultar difícil.",
  },
  {
    number: "B",
    title: "Orden",
    text: "Una situación compleja se vuelve más manejable cuando la información está organizada y puede revisarse paso a paso.",
  },
  {
    number: "C",
    title: "Información",
    text: "Nuestro enfoque parte de comprender antes de decidir. La información permite evaluar mejor las alternativas disponibles.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            HERO
            ===================================================== */}

        <section className={styles.hero}>

          <div className={styles.heroTop}>

            <span className={styles.eyebrow}>
              NUESTRO PROCESO
            </span>

            <span className={styles.heroIndex}>
              Es importante entender
            </span>

          </div>

          <div className={styles.heroGrid}>

            <div>
              <h1>
                Cómo
                <br />
                <em>funciona.</em>
              </h1>
            </div>

            <div className={styles.heroDescription}>

              <p className={styles.lead}>
                Cuando existe una posible situación de fraude, entender qué
                ocurrió es el primer paso para recuperar claridad.
              </p>

              <p>
                En Asesoria Especializada en Recuperacion  trabajamos mediante un proceso estructurado que
                permite identificar señales, organizar información, analizar
                el contexto y conocer las alternativas disponibles.
              </p>

            </div>

          </div>

          <div className={styles.heroLine}>
            <span>IDENTIFICAR</span>
            <span>ORGANIZAR</span>
            <span>ANALIZAR</span>
            <span>ORIENTAR</span>
            <span>SEGUIR</span>
          </div>

        </section>


        {/* =====================================================
            INTRO
            ===================================================== */}

        <section className={styles.intro}>

          <div className={styles.introLabel}>
            <span>01</span>
            <span>UN PROCESO MÁS CLARO</span>
          </div>

          <div className={styles.introContent}>

            <h2>
              No necesitas
              <br />
              tener todas
              <br />
              <em>las respuestas.</em>
            </h2>

            <div>

              <p>
                Una posible estafa puede generar dudas, presión e incertidumbre.
                En esos momentos es común no saber qué información es
                importante, qué documentos conservar o qué hacer a
                continuación.
              </p>

              <p>
                Por eso nuestro proceso comienza por ordenar la situación.
                Primero comprendemos el contexto y después avanzamos hacia
                una orientación más estructurada.
              </p>

              <Link
                href="/contacto"
                className={styles.textLink}
              >
                Hablar con Asesoria Especializada en Recuperacion <span>→</span>
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
            ===================================================== */}

        <section className={styles.process}>

          <div className={styles.processHeader}>

            <div>

              <span className={styles.sectionLabel}>
                EL PROCESO
              </span>

              <h2>
                Cinco pasos
                <br />
                para entender mejor.
              </h2>

            </div>

            <p>
              Cada situación tiene características diferentes. Nuestro
              proceso permite avanzar de forma ordenada sin asumir que todos
              los casos son iguales.
            </p>

          </div>


          <div className={styles.steps}>

            {steps.map((step) => (

              <article
                className={styles.step}
                key={step.number}
              >

                <div className={styles.stepNumber}>
                  {step.number}
                </div>

                <div className={styles.stepContent}>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                  <span>
                    {step.detail}
                  </span>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            WHAT WE DO
            ===================================================== */}

        <section className={styles.explanation}>

          <div className={styles.explanationHeader}>

            <span className={styles.sectionLabel}>
              ¿QUÉ HACEMOS?
            </span>

            <h2>
              Convertimos
              <br />
              información en
              <br />
              <em>claridad.</em>
            </h2>

          </div>


          <div className={styles.explanationBody}>

            <div className={styles.explanationImage}>
              <img
                src="/images/como-funciona-orientacion.jpg"
                alt="Orientación y análisis de información patrimonial"
              />
            </div>

            <div className={styles.explanationText}>

              <p>
                Nuestro objetivo no es complicar la situación con términos
                difíciles ni generar falsas expectativas.
              </p>

              <p>
                Trabajamos para que puedas comprender mejor lo que ocurrió,
                reconocer los elementos relevantes y tener una visión más
                clara de los siguientes pasos.
              </p>

              <p>
                La información disponible se organiza de manera que puedas
                identificar qué elementos requieren atención y cuáles pueden
                ser relevantes para continuar con el proceso.
              </p>

              <div className={styles.note}>

                <span>
                 Asesoría Especializada en Recuperació<nav></nav>
                </span>

                <p>
                  La orientación depende de las características y circunstancias
                  particulares de cada situación.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRINCIPLES
            ===================================================== */}

        <section className={styles.principles}>

          <div className={styles.principlesIntro}>

            <span className={styles.sectionLabel}>
              NUESTRO ENFOQUE
            </span>

            <h2>
              Tres principios
              <br />
              que guían el proceso.
            </h2>

          </div>


          <div className={styles.principlesGrid}>

            {principles.map((principle) => (

              <article
                className={styles.principleCard}
                key={principle.number}
              >

                <span>
                  {principle.number}
                </span>

                <h3>
                  {principle.title}
                </h3>

                <p>
                  {principle.text}
                </p>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            WHEN TO CONTACT
            ===================================================== */}

        <section className={styles.contactSection}>

          <div className={styles.contactBox}>

            <span className={styles.contactEyebrow}>
              ¿NO SABES POR DÓNDE EMPEZAR?
            </span>

            <h2>
              Comienza por
              <br />
              contar tu situación.
            </h2>

            <p>
              No necesitas tener toda la información organizada antes de
              acercarte. Puedes comenzar explicándonos qué ocurrió y qué
              dudas tienes.
            </p>

            <Link
              href="/contacto"
              className={styles.contactButton}
            >
              Iniciar evaluación
              <span>→</span>
            </Link>

          </div>

        </section>


        {/* =====================================================
            FOOTER SPACE
            ===================================================== */}

        <div className={styles.footerSpace}>

          <span>
           Asesoría Especializada en Recuperación 
          </span>

        </div>

      </main>
    </>
  );
}