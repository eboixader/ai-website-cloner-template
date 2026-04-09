import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diseño educativo profesional y recursos para docentes | Eboixader",
  description:
    "Bienvenido a Eboixader, donde la educación se transforma. Explora recursos, noticias y un blog dedicado a metodologías activas e innovación en el aula. Conéctate con la pasión por la enseñanza y descubre herramientas para mejorar tu práctica educativa.",
  keywords: ["educación", "recursos educativos", "metodologías activas"],
  openGraph: {
    title: "Diseño educativo profesional y recursos para docentes | Eboixader",
    description:
      "Bienvenido a Eboixader, donde la educación se transforma. Explora recursos, noticias y un blog dedicado a metodologías activas e innovación en el aula.",
    url: "https://eboixader.es/",
    siteName: "Eboixader",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
