
"use client";

import { useEffect, useState } from "react";
import "../admin.css";

type Contacto = {
  id: string;
  tipo: "contacto";
  datos: {
    name?: string;
    email?: string;
    countryCode?: string;
    phone?: string;
    currency?: string;
    amount?: string;
    caseType?: string;
    description?: string;
    privacy?: boolean;
  };
  recibidoEn: string;
  estado: "recibido";
};

export default function ContactosPage() {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [contactoSeleccionado, setContactoSeleccionado] =
    useState<Contacto | null>(null);
  const [moviendoId, setMoviendoId] = useState<string | null>(null);

  useEffect(() => {
    cargarContactos();
  }, []);

  async function cargarContactos() {
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

      setContactos(
        result.records.filter(
          (registro: Contacto) => registro.tipo === "contacto"
        )
      );
    } catch (error) {
      console.error(error);
      setError("No fue posible cargar los contactos.");
    } finally {
      setLoading(false);
    }
  }

  async function enviarAPapelera(id: string) {
    const confirmar = window.confirm(
      "¿Estás seguro de que quieres enviar este contacto a la papelera?"
    );

    if (!confirmar) return;

    try {
      setMoviendoId(id);

      const response = await fetch(`/api/admin/registros/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: "papelera",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "No fue posible enviar el contacto a papelera."
        );
      }

      setContactos((actuales) =>
        actuales.filter((contacto) => contacto.id !== id)
      );

      if (contactoSeleccionado?.id === id) {
        setContactoSeleccionado(null);
      }
    } catch (error) {
      console.error(error);

      window.alert(
        error instanceof Error
          ? error.message
          : "No fue posible enviar el contacto a papelera."
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

  function formatCaseType(caseType?: string) {
    if (!caseType) return "No especificado";

    const tipos: Record<string, string> = {
      transferencia: "Transferencia",
      inversion: "Inversión",
      compra: "Compra",
      fraude: "Fraude",
      otro: "Otro",
    };

    return tipos[caseType] || caseType;
  }

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div>
          <div className="admin-brand">
            <div className="admin-logo">V</div>
            <div className="admin-brand-text">
              <strong>Althea</strong>
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

            <a
              href="/admin/contactos"
              className="admin-nav-link active"
            >
              <span className="nav-icon">✉</span>
              Contactos
            </a>

            <a href="/admin/casos" className="admin-nav-link">
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
              <small> Althea operativo</small>
            </div>
          </div>

          <a href="/" className="back-site">
            ← Volver al sitio
          </a>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div className="admin-breadcrumb">GESTIÓN / CONTACTOS</div>

          <div className="admin-user">
            <div className="admin-user-avatar">V</div>

            <div>
              <strong>Althea</strong>
              <span>Administrador</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <header className="admin-welcome">
            <div>
              <span className="section-label">GESTIÓN DE CONTACTOS</span>

              <h1>Contactos recibidos</h1>

              <p>
                Información enviada desde el formulario de contacto de
                Althea.
              </p>
            </div>

            <div className="platform-status">
              <span />
              Sistema activo
            </div>
          </header>

          <section className="contacts-panel">
            <div className="panel-heading">
              <div>
                <h2>Registros recibidos</h2>
              </div>

              <span className="activity-count">
                {contactos.length}{" "}
                {contactos.length === 1 ? "registro" : "registros"}
              </span>
            </div>

            {loading && (
              <div className="contacts-empty">
                <div className="contacts-empty-icon">◌</div>
                <h2>Cargando registros...</h2>
                <p>Consultando la información almacenada en MongoDB.</p>
              </div>
            )}

            {!loading && error && (
              <div className="contacts-empty">
                <div className="contacts-empty-icon">!</div>
                <h2>No fue posible cargar los registros</h2>
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && contactos.length === 0 && (
              <div className="contacts-empty">
                <div className="contacts-empty-icon">✉</div>
                <h2>No hay contactos registrados</h2>
                <p>
                  Cuando alguien complete el formulario de contacto,
                  aparecerá aquí.
                </p>
              </div>
            )}

            {!loading && !error && contactos.length > 0 && (
              <>
                <div className="contacts-table-header">
                  <span>CONTACTO</span>
                  <span>TELÉFONO</span>
                  <span>TIPO DE CASO</span>
                  <span>FECHA</span>
                  <span>ACCIONES</span>
                </div>

                {contactos.map((contacto) => (
                  <div className="contact-row" key={contacto.id}>
                    <div>
                      <strong>
                        {contacto.datos.name || "Sin nombre"}
                      </strong>
                      <small>
                        {contacto.datos.email || "Sin correo"}
                      </small>
                    </div>

                    <div>
                      <strong>
                        {contacto.datos.countryCode || ""}
                        {contacto.datos.phone || "Sin teléfono"}
                      </strong>
                    </div>

                    <div>
                      <span className="contact-status">
                        {formatCaseType(contacto.datos.caseType)}
                      </span>
                    </div>

                    <div>
                      <strong>
                        {formatFecha(contacto.recibidoEn)}
                      </strong>
                      <small>{formatHora(contacto.recibidoEn)}</small>
                    </div>

                    <div className="contact-actions">
                      <button
                        type="button"
                        className="contact-action"
                        onClick={() =>
                          setContactoSeleccionado(contacto)
                        }
                      >
                        Ver información
                      </button>

                      <button
                        type="button"
                        className="contact-trash"
                        disabled={moviendoId === contacto.id}
                        onClick={() =>
                          enviarAPapelera(contacto.id)
                        }
                      >
                        {moviendoId === contacto.id
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

      {contactoSeleccionado && (
        <div
          className="contact-modal-overlay"
          onClick={() => setContactoSeleccionado(null)}
        >
          <div
            className="contact-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="contact-modal-header">
              <div>
                <span className="section-label">
                  INFORMACIÓN DEL CONTACTO
                </span>

                <h2>
                  {contactoSeleccionado.datos.name ||
                    "Contacto sin nombre"}
                </h2>

                <p>
                  Registro recibido el{" "}
                  {formatFecha(contactoSeleccionado.recibidoEn)} a las{" "}
                  {formatHora(contactoSeleccionado.recibidoEn)}
                </p>
              </div>

              <button
                type="button"
                className="contact-modal-close"
                onClick={() => setContactoSeleccionado(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="contact-modal-grid">
              <div className="contact-detail">
                <span>Nombre</span>
                <strong>
                  {contactoSeleccionado.datos.name ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Correo electrónico</span>
                <strong>
                  {contactoSeleccionado.datos.email ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Teléfono</span>
                <strong>
                  {contactoSeleccionado.datos.countryCode || ""}
                  {contactoSeleccionado.datos.phone ||
                    "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Tipo de caso</span>
                <strong>
                  {formatCaseType(
                    contactoSeleccionado.datos.caseType
                  )}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Moneda</span>
                <strong>
                  {contactoSeleccionado.datos.currency ||
                    "No proporcionada"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Monto</span>
                <strong>
                  {contactoSeleccionado.datos.amount
                    ? `${contactoSeleccionado.datos.amount} ${
                        contactoSeleccionado.datos.currency || ""
                      }`
                    : "No proporcionado"}
                </strong>
              </div>

              <div className="contact-detail contact-detail-full">
                <span>Descripción</span>
                <strong>
                  {contactoSeleccionado.datos.description ||
                    "Sin descripción"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Privacidad aceptada</span>
                <strong>
                  {contactoSeleccionado.datos.privacy ? "Sí" : "No"}
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
                onClick={() => setContactoSeleccionado(null)}
              >
                Cerrar
              </button>

              <button
                type="button"
                className="contact-modal-danger"
                onClick={() =>
                  enviarAPapelera(contactoSeleccionado.id)
                }
                disabled={
                  moviendoId === contactoSeleccionado.id
                }
              >
                {moviendoId === contactoSeleccionado.id
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

