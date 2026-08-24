"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

type Category =
  | "Todas"
  | "VALTARA"
  | "Fraude"
  | "Orientación"
  | "Información"
  | "Seguridad"
  | "Seguimiento";

type Faq = {
  category: Exclude<Category, "Todas">;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    category: "VALTARA",
    question: "¿Qué es VALTARA?",
    answer:
      "VALTARA es una plataforma de orientación enfocada en situaciones que pueden poner en riesgo el patrimonio. Su objetivo es ayudarte a organizar la información, comprender las señales de alerta y conocer posibles alternativas para actuar con mayor claridad.",
  },
  {
    category: "VALTARA",
    question: "¿VALTARA es una institución financiera?",
    answer:
      "No. VALTARA no es un banco, casa de bolsa ni institución financiera. La plataforma está orientada a brindar información y acompañamiento inicial ante situaciones relacionadas con posibles fraudes o riesgos patrimoniales.",
  },
  {
    category: "VALTARA",
    question: "¿VALTARA garantiza recuperar mi dinero?",
    answer:
      "No existe una garantía de recuperación. Las posibilidades dependen de las circunstancias particulares de cada caso, de la información disponible y de las acciones que puedan realizarse posteriormente.",
  },
  {
    category: "Fraude",
    question: "¿Cómo puedo saber si fui víctima de un fraude?",
    answer:
      "Algunas señales pueden incluir promesas de ganancias extraordinarias, presión para transferir dinero rápidamente, solicitudes inusuales de información, identidades o instituciones difíciles de verificar y cambios repentinos en las condiciones acordadas. Una señal aislada no determina por sí misma que exista fraude, por lo que es importante revisar el contexto completo.",
  },
  {
    category: "Fraude",
    question: "¿Qué tipos de fraude puedo consultar?",
    answer:
      "Puedes encontrar orientación relacionada con situaciones como fraude bancario, inversiones fraudulentas, phishing, suplantación de identidad, fraudes inmobiliarios, comercio electrónico, criptomonedas y otros escenarios que puedan presentar señales de riesgo patrimonial.",
  },
  {
    category: "Fraude",
    question: "¿Qué hago si todavía me están pidiendo más dinero?",
    answer:
      "Antes de realizar nuevas transferencias, procura detenerte y verificar cuidadosamente la situación. Conserva las comunicaciones y comprobantes relacionados con el caso y evita proporcionar información adicional hasta comprender mejor lo que está ocurriendo.",
  },
  {
    category: "Fraude",
    question: "¿Qué hago si una persona dice representar a una institución?",
    answer:
      "No asumas que la identidad es auténtica solamente porque utiliza logotipos, nombres o documentos institucionales. Verifica la información utilizando canales oficiales e independientes y evita realizar pagos o compartir información sensible mientras exista alguna duda.",
  },
  {
    category: "Orientación",
    question: "¿Cómo comienza una orientación con VALTARA ?",
    answer:
      "El proceso comienza con la recopilación de información general sobre la situación. A partir de ella se pueden identificar elementos relevantes, organizar los antecedentes y determinar qué aspectos requieren mayor atención.",
  },
  {
    category: "Orientación",
    question: "¿Tengo que saber exactamente qué tipo de fraude ocurrió?",
    answer:
      "No. No necesitas llegar con una clasificación definitiva. Puedes explicar lo que sucedió con la mayor claridad posible y proporcionar los datos que tengas disponibles para ayudar a comprender el contexto.",
  },
  {
    category: "Orientación",
    question: "¿Puedo solicitar orientación aunque todavía no esté seguro de que exista un fraude?",
    answer:
      "Sí. Precisamente una revisión inicial puede ayudarte a identificar señales que merezcan atención. La existencia de una situación sospechosa debe analizarse considerando sus características y circunstancias.",
  },
  {
    category: "Orientación",
    question: "¿La orientación sustituye una asesoría legal?",
    answer:
      "No necesariamente. La información proporcionada por la plataforma tiene un carácter orientativo. Cuando las circunstancias lo requieran, puede ser conveniente buscar asesoría profesional especializada para determinar las acciones legales o financieras correspondientes.",
  },
  {
    category: "Información",
    question: "¿Qué información necesito proporcionar?",
    answer:
      "Puedes comenzar con información general: qué ocurrió, cuándo sucedió, con quién tuviste contacto, qué cantidad estuvo involucrada, cómo se realizó la operación y qué comunicaciones o comprobantes conservas.",
  },
  {
    category: "Información",
    question: "¿Debo enviar todos mis documentos desde el primer contacto?",
    answer:
      "No es necesario enviar indiscriminadamente toda tu documentación. Lo recomendable es comenzar con información general y proporcionar únicamente aquello que sea pertinente para comprender la situación.",
  },
  {
    category: "Información",
    question: "¿Qué documentos pueden ser útiles?",
    answer:
      "Dependiendo del caso, pueden resultar relevantes comprobantes de transferencias, contratos, recibos, conversaciones, correos electrónicos, capturas de pantalla, datos de contacto y cualquier documento relacionado con la operación.",
  },
  {
    category: "Información",
    question: "¿Qué pasa si ya no tengo algunas conversaciones o comprobantes?",
    answer:
      "Aun así puedes explicar lo ocurrido con la información que conserves. La ausencia de algún documento no significa automáticamente que no pueda revisarse la situación.",
  },
  {
    category: "Seguridad",
    question: "¿Mis datos son confidenciales?",
    answer:
      "La plataforma está diseñada con un enfoque de confidencialidad y protección de la información. Aun así, evita compartir contraseñas, códigos de seguridad, claves privadas o información que pueda utilizarse para acceder directamente a tus cuentas.",
  },
  {
    category: "Seguridad",
    question: "¿Debo proporcionar mis contraseñas?",
    answer:
      "No. Nunca debes compartir contraseñas, códigos de autenticación, NIP, tokens, claves privadas o información equivalente para permitir el acceso a tus cuentas.",
  },
  {
    category: "Seguridad",
    question: "¿Puedo enviar información bancaria?",
    answer:
      "Si cierta información bancaria resulta relevante para explicar una operación, proporciona únicamente los datos necesarios y evita compartir credenciales, contraseñas o códigos de seguridad.",
  },
  {
    category: "Seguridad",
    question: "¿Qué hago si ya compartí información sensible con un posible defraudador?",
    answer:
      "Actúa con rapidez. Considera contactar directamente a tu institución financiera mediante sus canales oficiales, cambiar las credenciales comprometidas y revisar tus cuentas. Conserva también evidencia de las comunicaciones relacionadas con el incidente.",
  },
  {
    category: "Seguimiento",
    question: "¿Qué ocurre después de enviar mi información?",
    answer:
      "La información puede utilizarse para comprender mejor el caso, identificar los elementos principales y determinar qué orientación puede resultar pertinente. El seguimiento dependerá de las características de cada situación.",
  },
  {
    category: "Seguimiento",
    question: "¿Puedo agregar información después de mi primer contacto?",
    answer:
      "Sí. Si posteriormente encuentras comprobantes, conversaciones u otros antecedentes relevantes, puedes conservarlos y compartirlos cuando corresponda para complementar la información inicial.",
  },
  {
    category: "Seguimiento",
    question: "¿Cuánto tiempo puede tomar revisar una situación?",
    answer:
      "El tiempo depende de la complejidad y de la cantidad de información disponible. Algunos casos pueden ser relativamente sencillos de organizar, mientras que otros requieren revisar numerosos antecedentes.",
  },
  {
    category: "Seguimiento",
    question: "¿Qué pasa si mi caso ocurrió hace mucho tiempo?",
    answer:
      "El tiempo transcurrido es un elemento importante, pero no necesariamente impide explicar una situación. Reúne los antecedentes que todavía conserves y proporciona una descripción clara de lo ocurrido.",
  },
];

const categories: { label: Category; description: string }[] = [
  {
    label: "Todas",
    description: "Consulta todas las preguntas disponibles.",
  },
  {
    label: "VALTARA",
    description: "Conoce la plataforma y su alcance.",
  },
  {
    label: "Fraude",
    description: "Señales, situaciones sospechosas y prevención.",
  },
  {
    label: "Orientación",
    description: "Cómo funciona el acompañamiento inicial.",
  },
  {
    label: "Información",
    description: "Datos y documentos que pueden ser útiles.",
  },
  {
    label: "Seguridad",
    description: "Protección de información y cuentas.",
  },
  {
    label: "Seguimiento",
    description: "Qué ocurre después del primer contacto.",
  },
];

export default function PreguntasFrecuentes() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todas");
  const [search, setSearch] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "Todas" || faq.category === activeCategory;

      const matchesSearch =
        !normalizedSearch ||
        faq.question.toLowerCase().includes(normalizedSearch) ||
        faq.answer.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        {/* =====================================================
            ENCABEZADO
            ===================================================== */}

        <section className={styles.intro}>
          <div className={styles.introInner}>
            <div className={styles.introMeta}>
              <span className={styles.metaLine}></span>
              CENTRO DE ORIENTACIÓN
            </div>

            <div className={styles.introGrid}>
              <div>
                <h1>
                  Preguntas
                  <br />
                  <em>frecuentes.</em>
                </h1>
              </div>

              <div className={styles.introText}>
                <p>
                  Encuentra respuestas sobre VALTARA, situaciones de fraude,
                  seguridad de la información y el proceso de orientación.
                </p>

                <span>
                  Información clara antes de tomar una decisión.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BUSCADOR
            ===================================================== */}

        <section className={styles.searchSection}>
          <div className={styles.searchInner}>
            <div className={styles.searchLabel}>
              <span>01</span>
              BUSCAR UNA RESPUESTA
            </div>

            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>⌕</span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Escribe una pregunta o palabra clave..."
                aria-label="Buscar una pregunta"
              />

              {search && (
                <button
                  type="button"
                  className={styles.clearButton}
                  onClick={() => setSearch("")}
                  aria-label="Limpiar búsqueda"
                >
                  ×
                </button>
              )}
            </div>

            <p className={styles.searchHint}>
              Ejemplos: recuperación de dinero · documentos · confidencialidad
              · fraude · seguimiento
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTENIDO PRINCIPAL
            ===================================================== */}

        <section className={styles.faqArea}>
          <div className={styles.categoryColumn}>
            <div className={styles.categoryHeader}>
              <span>02</span>
              <strong>CATEGORÍAS</strong>
            </div>

            <div className={styles.categoryList}>
              {categories.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  className={`${styles.categoryButton} ${
                    activeCategory === category.label
                      ? styles.categoryButtonActive
                      : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(category.label);
                    setOpenQuestion(null);
                  }}
                >
                  <span className={styles.categoryName}>
                    {category.label}
                  </span>

                  <span className={styles.categoryDescription}>
                    {category.description}
                  </span>

                  <span className={styles.categoryArrow}>→</span>
                </button>
              ))}
            </div>

            <div className={styles.categoryNote}>
              <span className={styles.noteMark}>i</span>

              <p>
                Si no encuentras exactamente tu situación, puedes explicarla
                directamente para recibir orientación.
              </p>
            </div>
          </div>

          <div className={styles.questionsColumn}>
            <div className={styles.questionsHeader}>
              <div>
                <span>03</span>
                <strong>PREGUNTAS Y RESPUESTAS</strong>
              </div>

              <small>
                {filteredFaqs.length}{" "}
                {filteredFaqs.length === 1 ? "resultado" : "resultados"}
              </small>
            </div>

            {filteredFaqs.length > 0 ? (
              <div className={styles.questionsList}>
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openQuestion === index;

                  return (
                    <article
                      className={`${styles.questionItem} ${
                        isOpen ? styles.questionItemOpen : ""
                      }`}
                      key={`${faq.category}-${faq.question}`}
                    >
                      <button
                        type="button"
                        className={styles.questionButton}
                        onClick={() => toggleQuestion(index)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.questionNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className={styles.questionText}>
                          {faq.question}
                        </span>

                        <span className={styles.questionToggle}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`${styles.answerWrapper} ${
                          isOpen ? styles.answerWrapperOpen : ""
                        }`}
                      >
                        <div className={styles.answer}>
                          <span className={styles.answerCategory}>
                            {faq.category}
                          </span>

                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className={styles.noResults}>
                <span>—</span>

                <h3>No encontramos esa pregunta.</h3>

                <p>
                  Intenta utilizar otras palabras o consulta todas las
                  categorías disponibles.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("Todas");
                    setOpenQuestion(null);
                  }}
                >
                  Mostrar todas las preguntas
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            INFORMACIÓN IMPORTANTE
            ===================================================== */}

        <section className={styles.infoSection}>
          <div className={styles.infoIntro}>
            <span>ANTES DE COMPARTIR INFORMACIÓN</span>

            <h2>
              Algunas cosas que
              <br />
              <em>nunca debes entregar.</em>
            </h2>
          </div>

          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoNumber}>01</span>

              <div className={styles.infoIcon}>•••</div>

              <h3>Contraseñas</h3>

              <p>
                Ninguna orientación requiere conocer tus contraseñas de acceso
                a bancos, correos o plataformas.
              </p>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoNumber}>02</span>

              <div className={styles.infoIcon}>#</div>

              <h3>Códigos de seguridad</h3>

              <p>
                No compartas códigos de autenticación, NIP, tokens o claves
                temporales que permitan acceder a tus cuentas.
              </p>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoNumber}>03</span>

              <div className={styles.infoIcon}>×</div>

              <h3>Claves privadas</h3>

              <p>
                Si utilizas activos digitales, nunca entregues frases semilla,
                claves privadas o credenciales de acceso.
              </p>
            </article>
          </div>
        </section>

        {/* =====================================================
            CONTACTO
            ===================================================== */}

        <section className={styles.contactSection}>
          <div className={styles.contactCard}>
            <div className={styles.contactMark}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.contactContent}>
              <span className={styles.contactEyebrow}>
                ¿NO ENCONTRASTE LA RESPUESTA?
              </span>

              <h2>
                Cuéntanos qué
                <br />
                <em>está ocurriendo.</em>
              </h2>

              <p>
                Si tu situación no aparece en esta sección, puedes explicarnos
                lo ocurrido y proporcionar la información que tengas
                disponible.
              </p>
            </div>

            <Link href="/contacto" className={styles.contactButton}>
              Hablar con VALTARA
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* =====================================================
            PRIVACIDAD
            ===================================================== */}

        <section className={styles.privacySection}>
          <div className={styles.privacyIcon}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2 4 5v5c0 5.2 3.4 10 8 12 4.6-2 8-6.8 8-12V5l-8-3Zm0 4.2 5 1.9V10c0 3.8-2.3 7.4-5 9-2.7-1.6-5-5.2-5-9V8.1l5-1.9Zm-1 9.2 4.6-4.6-1.4-1.4-3.2 3.2-1.5-1.5-1.4 1.4 2.9 2.9Z" />
            </svg>
          </div>

          <div>
            <strong>Tu información merece cuidado.</strong>

            <p>
              Comparte únicamente los datos necesarios para explicar tu
              situación. Nunca envíes contraseñas, códigos de seguridad ni
              credenciales de acceso.
            </p>
          </div>
        </section>

        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section className={styles.finalSection}>
          <span>VALTARA</span>

          <h2>
            Información clara.
            <br />
            <em>Decisiones con mayor claridad.</em>
          </h2>

          <p>
            Cuando una situación genera dudas, entender lo que ocurre es el
            primer paso.
          </p>

          <Link href="/contacto" className={styles.finalButton}>
            Solicitar orientación
          </Link>
        </section>
      </main>
    </>
  );
}