"use client";

import { useEffect, useState } from "react";
import "../admin.css";

type PapeleraRecord = {
  id: string;
  tipo: "contacto" | "caso";
  datos: Record<string, unknown>;
  recibidoEn: string;
  estado: "papelera";
};

export default function PapeleraPage() {
  const [registros, setRegistros] = useState<PapeleraRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [procesando, setProcesando] = useState("");

  async function cargarPapelera() {
    try {
      setLoading(true);
      setError("");

    const response = await fetch("/api/admin/registros?estado=papelera");

      if (!response.ok) {
        throw new Error("No fue posible obtener los registros.");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Error al obtener registros.");
      }

      const registrosPapelera = result.records.filter(
        (registro: PapeleraRecord) => registro.estado === "papelera"
      );

      setRegistros(registrosPapelera);
    } catch (error) {
      console.error(error);
      setError("No fue posible cargar la papelera.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    cargarPapelera();
  }, []);

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

  function obtenerNombre(registro: PapeleraRecord) {
    const nombre = registro.datos.name;

    if (typeof nombre === "string" && nombre.trim()) {
      return nombre;
    }

    return "Sin nombre";
  }

  function obtenerDescripcion(registro: PapeleraRecord) {
    if (registro.tipo === "contacto") {
      const email = registro.datos.email;

      if (typeof email === "string" && email.trim()) {
        return email;
      }

      return "Contacto";
    }

    const caseType = registro.datos.caseType;

    if (typeof caseType === "string" && caseType.trim()) {
      return caseType;
    }

    return "Caso real";
  }

  async function restaurarRegistro(id: string) {
    const confirmar = window.confirm(
      "¿Quieres restaurar este registro? Volverá a aparecer en Contactos o Casos reales."
    );

    if (!confirmar) {
      return;
    }

    try {
      setProcesando(id);
      setError("");

      const response = await fetch(`/api/admin/registros/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: "recibido",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "No fue posible restaurar el registro."
        );
      }

      await cargarPapelera();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "No fue posible restaurar el registro."
      );
    } finally {
      setProcesando("");
    }
  }

  async function eliminarDefinitivamente(id: string) {
    const confirmar = window.confirm(
      "Esta acción eliminará el registro definitivamente de MongoDB. ¿Deseas continuar?"
    );

    if (!confirmar) {
      return;
    }

    try {
      setProcesando(id);
      setError("");

      const response = await fetch(`/api/admin/registros/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "No fue posible eliminar el registro."
        );
      }

      await cargarPapelera();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "No fue posible eliminar el registro."
      );
    } finally {
      setProcesando("");
    }
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

            <a href="/admin/casos" className="admin-nav-link">
              <span className="nav-icon">▣</span>
              Casos reales
            </a>

            <a
              href="/admin/papelera"
              className="admin-nav-link active"
            >
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
              <small>aer operativo</small>
            </div>
          </div>

          <a href="/" className="back-site">
            ← Volver al sitio
          </a>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <span className="admin-breadcrumb">PAPELERA</span>

          <div className="admin-user">
            <div className="admin-user-avatar">V</div>

            <div>
              <strong>aer</strong>
              <span>Administrador</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <div className="admin-welcome">
            <div>
              <span className="section-label">REGISTROS ELIMINADOS</span>

              <h1>Papelera</h1>

              <p>
                Administra los registros enviados a la papelera y decide si
                deseas restaurarlos o eliminarlos definitivamente.
              </p>
            </div>

            <div className="platform-status">
              <span />
              Sistema activo
            </div>
          </div>

          <div className="trash-notice">
            <div className="trash-notice-icon">⌫</div>

            <div>
              <strong>Registros en papelera</strong>

              <p>
                Los registros permanecen aquí hasta que sean restaurados o
                eliminados definitivamente.
              </p>
            </div>
          </div>

          {loading && (
            <section className="trash-panel">
              <div className="trash-empty">
                <div className="trash-empty-icon">⌛</div>

                <h2>Cargando papelera...</h2>

                <p>
                  Consultando los registros almacenados en MongoDB.
                </p>
              </div>
            </section>
          )}

          {!loading && error && (
            <section className="trash-panel">
              <div className="trash-empty">
                <div className="trash-empty-icon">!</div>

                <h2>No fue posible cargar la papelera</h2>

                <p>{error}</p>
              </div>
            </section>
          )}

          {!loading && !error && registros.length === 0 && (
            <section className="trash-panel">
              <div className="trash-empty">
                <div className="trash-empty-icon">⌫</div>

                <h2>La papelera está vacía</h2>

                <p>
                  Los registros enviados a la papelera aparecerán aquí.
                </p>
              </div>
            </section>
          )}

          {!loading && !error && registros.length > 0 && (
            <section className="trash-panel">
              <div className="trash-table-header">
                <span>REGISTRO</span>
                <span>ORIGEN</span>
                <span>FECHA</span>
                <span>ACCIONES</span>
              </div>

              {registros.map((registro) => {
                const ocupado = procesando === registro.id;

                return (
                  <div className="trash-row" key={registro.id}>
                    <div>
                      <strong>{obtenerNombre(registro)}</strong>

                      <small>{obtenerDescripcion(registro)}</small>
                    </div>

                    <div>
                      <span className="trash-origin">
                        {registro.tipo === "contacto"
                          ? "Contacto"
                          : "Caso real"}
                      </span>
                    </div>

                    <div>
                      <strong>{formatFecha(registro.recibidoEn)}</strong>

                      <small>{formatHora(registro.recibidoEn)}</small>
                    </div>

                    <div className="trash-actions">
                      <button
                        type="button"
                        onClick={() => restaurarRegistro(registro.id)}
                        disabled={ocupado}
                      >
                        {ocupado ? "Procesando..." : "Restaurar"}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          eliminarDefinitivamente(registro.id)
                        }
                        disabled={ocupado}
                      >
                        Eliminar definitivamente
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}