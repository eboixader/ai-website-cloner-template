"use client";

import { useState } from "react";

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        fill="currentColor"
        d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z"
      />
    </svg>
  );
}

export function Footer() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer
      style={{
        backgroundColor: "#0A3D62",
        minHeight: "851px",
        width: "100%",
        padding: "16px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1224px",
          margin: "0 auto",
          padding: "40px 16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        {/* Left column — info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h5
            style={{
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: 600,
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Educación
          </h5>

          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "14px",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Aprender puede ser divertido
          </p>

          <div style={{ marginTop: "8px" }}>
            <p
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: 1.3,
                margin: "0 0 6px 0",
              }}
            >
              Contacto
            </p>
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontSize: "14px",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              ernesto@fundacionflors.es
            </p>
          </div>

          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "14px",
              lineHeight: 1.3,
              margin: 0,
              marginTop: "8px",
            }}
          >
            © 2024. All rights reserved.
          </p>

          {/* Social icons */}
          <div style={{ marginTop: "8px" }}>
            <a
              href="https://x.com/eboixader"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to Twitter page"
              style={{
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              <XIcon />
            </a>
          </div>
        </div>

        {/* Right column — contact form */}
        <div>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    color: "#0d141a",
                    border: "1px solid rgb(184, 192, 204)",
                    borderRadius: "10px",
                    outline: "none",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <input
                  type="email"
                  placeholder="Correo electrónico*"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    color: "#0d141a",
                    border: "1px solid rgb(184, 192, 204)",
                    borderRadius: "10px",
                    outline: "none",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <textarea
                  placeholder="Mensaje*"
                  required
                  rows={6}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    color: "#0d141a",
                    border: "1px solid rgb(184, 192, 204)",
                    borderRadius: "10px",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#1E88E5",
                    color: "#ffffff",
                    borderRadius: "50px",
                    padding: "16px 40px",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    lineHeight: "normal",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1565C0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1E88E5";
                  }}
                >
                  Enviar mensaje
                </button>
              </div>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#0d141a",
                  margin: 0,
                }}
              >
                Si no contesto en 2 días, envíame un mail
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}
