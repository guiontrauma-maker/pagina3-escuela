
"use client";

import { useEffect, useState } from "react";
import "./admin.css";

type Registro = {
  id: string;
  tipo: "contacto" | "caso";
  datos?: {
    name?: string;
    email?: string;
    description?: string;
  };
  recibidoEn: string;
  estado: "recibido" | "papelera";
};

export default function AdminPage() {
  const [recibidos, setRecibidos] = useState<Registro[]>([]);
  const [papelera, setPapelera] = useState<Registro[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarRegistros();
  }, []);

  async function cargarRegistros() {
    try {
      setLoading(true);

      const [recibidosResponse, papeleraResponse] = await Promise.all([
        fetch("/api/admin/registros?estado=recibido"),
        fetch("/api/admin/registros?estado=papelera"),
      ]);

      const recibidosData = await recibidosResponse.json();
      const papeleraData = await papeleraResponse.json();

      if (recibidosData.success) {
        setRecibidos(recibidosData.records || []);
      }

      if (papeleraData.success) {
        setPapelera(papeleraData.records || []);
      }
    } catch (error) {
      console.error("Error al cargar información:", error);
    } finally {
      setLoading(false);
    }
  }

  const contactos = recibidos.filter(
    (registro) => registro.tipo === "contacto"
  );

  const casos = recibidos.filter(
    (registro) => registro.tipo === "caso"
  );

  const actividad = [...recibidos, ...papelera]
    .sort(
      (a, b) =>
        new Date(b.recibidoEn).getTime() -
        new Date(a.recibidoEn).getTime()
    )
    .slice(0, 5);

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

  function nombreRegistro(registro: Registro) {
    return registro.datos?.name || "Registro recibido";
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

            <a href="/admin" className="admin-nav-link active">
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
            AER / ADMINISTRACIÓN / INICIO
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
              <span className="section-label">PANEL GENERAL</span>

              <h1>Administración</h1>

              <p>
                Consulta el estado actual de la información recibida
                por AER.
              </p>
            </div>

            <div className="platform-status">
              <span />
              Sistema activo
            </div>
          </section>

          <section className="admin-stats">
            <div className="admin-stat-card">
              <span>CONTACTOS</span>
              <strong>{loading ? "—" : contactos.length}</strong>
              <small>Registros recibidos</small>
            </div>

            <div className="admin-stat-card">
              <span>CASOS REALES</span>
              <strong>{loading ? "—" : casos.length}</strong>
              <small>Casos recibidos</small>
            </div>

            <div className="admin-stat-card">
              <span>PAPELERA</span>
              <strong>{loading ? "—" : papelera.length}</strong>
              <small>Registros archivados</small>
            </div>

            <div className="admin-stat-card">
              <span>TOTAL ACTIVO</span>
              <strong>
                {loading ? "—" : recibidos.length}
              </strong>
              <small>Registros disponibles</small>
            </div>
          </section>

          <section className="admin-dashboard-grid">
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div>
                  <span className="section-label">
                    ACTIVIDAD RECIENTE
                  </span>

                  <h2>Últimos registros</h2>
                </div>

                <span className="admin-panel-count">
                  {recibidos.length}
                </span>
              </div>

              {loading ? (
                <div className="admin-empty">
                  <strong>Cargando información...</strong>
                  <p>
                    Consultando los registros almacenados.
                  </p>
                </div>
              ) : actividad.length === 0 ? (
                <div className="admin-empty">
                  <strong>Aún no hay actividad</strong>
                  <p>
                    Los registros nuevos aparecerán aquí
                    automáticamente.
                  </p>
                </div>
              ) : (
                <div className="admin-activity-list">
                  {actividad.map((registro) => (
                    <div
                      className="admin-activity-item"
                      key={registro.id}
                    >
                      <div className="admin-activity-icon">
                        {registro.tipo === "caso" ? "▣" : "✉"}
                      </div>

                      <div className="admin-activity-info">
                        <strong>
                          {registro.tipo === "caso"
                            ? "Nuevo caso recibido"
                            : "Nuevo mensaje de contacto"}
                        </strong>

                        <span>
                          {nombreRegistro(registro)}
                        </span>
                      </div>

                      <div className="admin-activity-date">
                        <strong>
                          {formatFecha(registro.recibidoEn)}
                        </strong>

                        <small>
                          {formatHora(registro.recibidoEn)}
                        </small>
                      </div>

                      <span
                        className={
                          registro.estado === "papelera"
                            ? "case-status empty"
                            : "case-status"
                        }
                      >
                        {registro.estado === "papelera"
                          ? "Papelera"
                          : "Recibido"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <aside className="admin-panel admin-quick-panel">
              <div className="admin-panel-header">
                <div>
                  <span className="section-label">
                    ACCESO RÁPIDO
                  </span>

                  <h2>Administración</h2>
                </div>
              </div>

              <p>
                Accede directamente a las áreas principales
                del sistema.
              </p>

              <div className="quick-links">
                <a href="/admin/contactos">
                  <span>✉</span>

                  <div>
                    <strong>Contactos</strong>
                    <small>
                      {contactos.length} registros recibidos
                    </small>
                  </div>

                  <b>→</b>
                </a>

                <a href="/admin/casos">
                  <span>▣</span>

                  <div>
                    <strong>Casos reales</strong>
                    <small>
                      {casos.length} casos recibidos
                    </small>
                  </div>

                  <b>→</b>
                </a>

                <a href="/admin/papelera">
                  <span>⌫</span>

                  <div>
                    <strong>Papelera</strong>
                    <small>
                      {papelera.length} registros
                    </small>
                  </div>

                  <b>→</b>
                </a>
              </div>
            </aside>
          </section>
        </div>
      </section>
    </main>
  );
}

