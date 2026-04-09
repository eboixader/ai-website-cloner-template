"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Recursos por materia",
    href: "/recursos-por-materia",
    children: [
      { label: "Recursos de Biología y Geología", href: "/recursos-de-biologia-y-geologia" },
      { label: "Recursos de Física y Química", href: "/recursos-de-fisica-y-quimica" },
    ],
  },
  {
    label: "IAg en el aula",
    href: "/iag-en-el-aula",
    children: [
      { label: "Mi Bot Box", href: "/mi-bot-box" },
      { label: "Ejemplos de uso en el aula", href: "/ejemplos-de-uso-en-el-aula" },
      { label: "Documentos y guías", href: "/documentos-y-guias" },
      { label: "Mis GPT's", href: "/mis-gpts" },
      { label: "Mis faros en IAg", href: "/mis-faros-en-iag" },
      { label: "apps-interactivas", href: "/apps-interactivas" },
    ],
  },
  {
    label: "Formación",
    href: "/formacion",
    children: [
      { label: "Así entiendo la educación", href: "/asi-entiendo-la-educacion" },
      { label: "Clase DiNvertIdA", href: "/clase-dinvertida" },
      { label: "Mi evolución docente", href: "/mi-evolucion-docente" },
      { label: "Mis 10 Mandamientos Docentes", href: "/mis-10-mandamientos-docentes" },
      { label: "Páginas amigas", href: "/paginas-amigas" },
      { label: "Reflexiones docentes", href: "/reflexiones-docentes" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
        width: "100%",
        borderBottom: "none",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "22px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/images/logo.svg"
            alt="Eboixader logo"
            width={109}
            height={47}
            priority
            style={{ width: "109px", height: "47px", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "none",
            gap: "32px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <div
              key={item.href}
              className="nav-item"
              style={{ position: "relative" }}
            >
              <Link
                href={item.href}
                style={{
                  color: "#0d141a",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  display: "block",
                  padding: "4px 0",
                }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        color: "#0d141a",
                        fontSize: "15px",
                        fontWeight: 400,
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        transition: "background-color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f5f5f5";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#0d141a",
            padding: "4px",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid rgb(229, 231, 235)",
            padding: "16px",
          }}
        >
          {navItems.map((item) => (
            <div key={item.href}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    color: "#0d141a",
                    fontSize: "16px",
                    fontWeight: 400,
                    textDecoration: "none",
                    flex: 1,
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#0d141a",
                      padding: "8px",
                      fontSize: "18px",
                    }}
                    aria-label="Toggle submenu"
                  >
                    {openDropdown === item.href ? "−" : "+"}
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.href && (
                <div style={{ paddingLeft: "16px" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        color: "#0d141a",
                        fontSize: "15px",
                        fontWeight: 400,
                        textDecoration: "none",
                        borderTop: "1px solid rgb(243, 244, 246)",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
