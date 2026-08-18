
"use client";

import { useEffect, useState } from "react";
import "../admin.css";

type Caso = {
  id: string;
  tipo: "caso";
  datos: {
    name?: string;
    email?: string;
    country?: string;
    phone?: string;
    amount?: string;
    type?: string;
    description?: string;
    contactPermission?: boolean;
    testimonialPermission?: boolean;
  };
  recibidoEn: string;
  estado: "recibido";
};

export default function CasosPage() {
  const [casos, setCasos] = useState<Caso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [casoSeleccionado, setCasoSeleccionado] = useState<Caso | null>(null);
  const [moviendoId, setMoviendoId] = useState<string | null>(null);

  useEffect(() => {
    cargarCasos();
  }, []);

  async function cargarCasos() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/registros");

      if (!response.ok) {
        throw new Error("No fue posible obtener los registros.");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Error al obtener registros.");
      }

      const registrosCaso = result.records.filter(
        (registro: Caso) => registro.tipo === "caso"
      );

      setCasos(registrosCaso);
    } catch (error) {
      console.error(error);
      setError("No fue posible cargar los casos.");
    } finally {
      setLoading(false);
    }
  }

  async function enviarAPapelera(id: string) {
    const confirmar = window.confirm(
      "¿Estás seguro de que quieres enviar este caso a la papelera?"
    );

    if (!confirmar) return;

    try {
      setMoviendoId(id);

      const response = await fetch("/api/admin/registros", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          estado: "papelera",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "No fue posible enviar el caso a papelera."
        );
      }

      setCasos((actuales) =>
        actuales.filter((caso) => caso.id !== id)
      );

      if (casoSeleccionado?.id === id) {
        setCasoSeleccionado(null);
      }
    } catch (error) {
      console.error(error);

      window.alert(
        error instanceof Error
          ? error.message
          : "No fue posible enviar el caso a papelera."
      );
    } finally {
      setMoviendoId(null);
    }
  }

  function formatFecha(fecha: string) {
    return new Intl.DateTimeFormat("es-MX", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(fecha));
  }

  function formatHora(fecha: string) {
    return new Intl.DateTimeFormat("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(fecha));
  }

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div>
          <div className="admin-brand">
            <div className="admin-logo">V</div>

            <div className="admin-brand-text">
              <strong>AER</strong>
              <span>Panel administrativo</span>
            </div>
          </div>

          <div className="admin-divider" />

          <nav className="admin-nav">
            <span className="admin-nav-label">GESTIÓN</span>

            <a href="/admin" className="admin-nav-link">
              <span className="nav-icon">⌂</span>
              Inicio
            </a>

            <a href="/admin/contactos" className="admin-nav-link">
              <span className="nav-icon">✉</span>
              Contactos
            </a>

            <a
              href="/admin/casos"
              className="admin-nav-link active"
            >
              <span className="nav-icon">▣</span>
              Casos reales
            </a>

            <a href="/admin/papelera" className="admin-nav-link">
              <span className="nav-icon">⌫</span>
              Papelera
            </a>
          </nav>
        </div>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-status">
            <span className="status-dot" />

            <div>
              <strong>Sistema activo</strong>
              <small>AER operativo</small>
            </div>
          </div>

          <a href="/" className="back-site">
            ← Regresar al sitio
          </a>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <span className="admin-breadcrumb">
            AER  / ADMINISTRACIÓN / CASOS REALES
          </span>

          <div className="admin-user">
            <div className="admin-user-avatar">A</div>

            <div>
              <strong>Administrador</strong>
              <span>Panel de control</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <section className="admin-welcome">
            <div>
              <span className="section-label">GESTIÓN DE CASOS</span>

              <h1>Casos reales</h1>

              <p>
                Consulta y administra la información enviada mediante el
                formulario de Casos reales de AER.
              </p>
            </div>

            <div className="platform-status">
              <span />
              {casos.length} {casos.length === 1 ? "caso" : "casos"}
            </div>
          </section>

          <section className="cases-panel">
            <div className="cases-table-header">
              <span>REGISTRO</span>
              <span>INFORMACIÓN</span>
              <span>FECHA Y HORA</span>
              <span>ESTADO</span>
              <span>ACCIÓN</span>
            </div>

            {loading && (
              <div className="cases-empty">
                <div className="cases-empty-icon">◌</div>

                <h2>Cargando casos...</h2>

                <p>
                  Consultando la información almacenada en MongoDB.
                </p>
              </div>
            )}

            {!loading && error && (
              <div className="cases-empty">
                <div className="cases-empty-icon">!</div>

                <h2>No fue posible cargar los casos</h2>

                <p>{error}</p>
              </div>
            )}

            {!loading && !error && casos.length === 0 && (
              <div className="cases-empty">
                <div className="cases-empty-icon">▣</div>

                <h2>Aún no hay casos</h2>

                <p>
                  Los casos enviados desde el formulario de Casos reales
                  aparecerán aquí automáticamente.
                </p>
              </div>
            )}

            {!loading && !error && casos.length > 0 && (
              <>
                {casos.map((caso) => (
                  <div className="case-row" key={caso.id}>
                    <div>
                      <strong>{caso.id}</strong>
                      <small>Formulario de caso real</small>
                    </div>

                    <div>
                      <strong>
                        {caso.datos.name || "Sin nombre"}
                      </strong>

                      <small>
                        {caso.datos.email || "Sin correo"}
                      </small>
                    </div>

                    <div>
                      <strong>
                        {formatFecha(caso.recibidoEn)}
                      </strong>

                      <small>
                        {formatHora(caso.recibidoEn)}
                      </small>
                    </div>

                    <div>
                      <span className="case-status">
                        Recibido
                      </span>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="case-action"
                        onClick={() => setCasoSeleccionado(caso)}
                      >
                        Ver caso
                      </button>

                      <button
                        type="button"
                        className="case-trash"
                        disabled={moviendoId === caso.id}
                        onClick={() => enviarAPapelera(caso.id)}
                      >
                        {moviendoId === caso.id
                          ? "Moviendo..."
                          : "Papelera"}
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </section>
        </div>
      </section>

      {casoSeleccionado && (
        <div
          className="contact-modal-overlay"
          onClick={() => setCasoSeleccionado(null)}
        >
          <div
            className="contact-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="contact-modal-header">
              <div>
                <span className="section-label">
                  INFORMACIÓN DEL CASO
                </span>

                <h2>
                  {casoSeleccionado.datos.name ||
                    "Caso sin nombre"}
                </h2>

                <p>
                  Registro recibido el{" "}
                  {formatFecha(casoSeleccionado.recibidoEn)} a las{" "}
                  {formatHora(casoSeleccionado.recibidoEn)}
                </p>
              </div>

              <button
                type="button"
                className="contact-modal-close"
                onClick={() => setCasoSeleccionado(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="contact-modal-grid">
              <div className="contact-detail">
                <span>Nombre</span>
                <strong>
                  {casoSeleccionado.datos.name ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Correo electrónico</span>
                <strong>
                  {casoSeleccionado.datos.email ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>País</span>
                <strong>
                  {casoSeleccionado.datos.country ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Teléfono</span>
                <strong>
                  {casoSeleccionado.datos.phone ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Monto</span>
                <strong>
                  {casoSeleccionado.datos.amount ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Tipo de caso</span>
                <strong>
                  {casoSeleccionado.datos.type ||
                    "No especificado"}
                </strong>
              </div>

              <div className="contact-detail contact-detail-full">
                <span>Descripción</span>
                <strong>
                  {casoSeleccionado.datos.description ||
                    "Sin descripción"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Permiso de contacto</span>
                <strong>
                  {casoSeleccionado.datos.contactPermission
                    ? "Sí"
                    : "No"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Permiso testimonial</span>
                <strong>
                  {casoSeleccionado.datos.testimonialPermission
                    ? "Sí"
                    : "No"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Estado</span>
                <strong>Recibido</strong>
              </div>
            </div>

            <div className="contact-modal-footer">
              <button
                type="button"
                className="contact-modal-secondary"
                onClick={() => setCasoSeleccionado(null)}
              >
                Cerrar
              </button>

              <button
                type="button"
                className="contact-modal-danger"
                onClick={() =>
                  enviarAPapelera(casoSeleccionado.id)
                }
                disabled={
                  moviendoId === casoSeleccionado.id
                }
              >
                {moviendoId === casoSeleccionado.id
                  ? "Moviendo..."
                  : "Enviar a papelera"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

