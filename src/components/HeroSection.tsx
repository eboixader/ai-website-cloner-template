import Link from "next/link";

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "943px",
        width: "100%",
        overflow: "hidden",
        padding: "16px 0",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {/* Video background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <video
          src="https://videos.pexels.com/video-files/8538236/8538236-uhd_1440_2514_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/8538236/apple-apricot-blooming-branch-8538236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 85%",
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1224px",
          margin: "0 auto",
          padding: "24px 16px 95px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Row 2: H1 Title */}
        <h1
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "64px",
            fontWeight: 600,
            lineHeight: 1.3,
            textAlign: "center",
            margin: "83px 0 34px 0",
          }}
          className="hero-h1"
        >
          Eboixader
        </h1>

        {/* Row 4: Subtitle */}
        <p
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: 1.3,
            textAlign: "center",
            maxWidth: "860px",
            margin: "0 0 56px 0",
          }}
          className="hero-subtitle"
        >
          Recursos de aula, ideas para docentes, y proyectos con IA que enseñan a pensar, no a repetir.
        </p>

        {/* Row 6: Description A — left aligned, warm white, 18px */}
        <div
          style={{
            color: "rgb(240, 226, 226)",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.3,
            textAlign: "left",
            maxWidth: "749px",
            width: "100%",
            marginBottom: "50px",
          }}
        >
          <p style={{ margin: "0 0 12px 0", fontWeight: 600 }}>
            Con el objetivo de ayudar a docentes y centros educativos.
          </p>
          <p style={{ margin: 0 }}>
            Aquí encontrarás recursos reales de aula, propuestas con inteligencia artificial y experiencias educativas diseñadas desde el pensamiento crítico. Todo lo que se comparte ha sido probado antes con alumnado real, con la única intención de AYUDAR.
          </p>
        </div>

        {/* Row 8: 3 black pill CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "62px",
          }}
          className="black-btns-row"
        >
          <Link href="/recursos-por-materia" className="btn-pill btn-pill-primary">
            Recursos por materia
          </Link>
          <Link href="/iag-en-el-aula" className="btn-pill btn-pill-primary">
            IA en el aula
          </Link>
          <Link href="/formacion" className="btn-pill btn-pill-primary">
            Formación y asesoramiento
          </Link>
        </div>

        {/* Row 10: 3-column white text boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
            width: "100%",
            maxWidth: "1000px",
            marginBottom: "47px",
          }}
          className="three-col-text"
        >
          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "16px",
              lineHeight: 1.3,
              textAlign: "center",
              margin: 0,
            }}
          >
            Materiales de Física y Química, Biología y Geología, Matemáticas y Tecnología listos para usar o adaptar.
          </p>
          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "16px",
              lineHeight: 1.3,
              textAlign: "center",
              margin: 0,
            }}
          >
            Propuestas para trabajar la inteligencia artificial como herramienta y como objeto de aprendizaje, desde una mirada ética y pedagógica.
          </p>
          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "16px",
              lineHeight: 1.3,
              textAlign: "center",
              margin: 0,
            }}
          >
            Acompañamiento a docentes y centros que quieren innovar con sentido y sin depender de modas.
          </p>
        </div>

        {/* Row 12: "Si te interesa..." text — warm white, 18px, left */}
        <div
          style={{
            color: "rgb(240, 226, 226)",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.3,
            textAlign: "left",
            maxWidth: "858px",
            width: "100%",
            marginBottom: "64px",
          }}
        >
          <p style={{ margin: 0 }}>
            Si te interesa conocer cómo entiendo la educación, la innovación y el papel de la tecnología en el aula, aquí comparto reflexiones y experiencias personales.
          </p>
        </div>

        {/* Row 14: 2 green CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="green-btns-row"
        >
          <Link href="/asi-entiendo-la-educacion" className="btn-pill btn-pill-green">
            Así entiendo la educación
          </Link>
          <Link href="/reflexiones-docentes" target="_blank" rel="noopener" className="btn-pill btn-pill-green">
            Reflexiones docentes
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-h1 {
            font-size: 40px !important;
            margin: 40px 0 24px 0 !important;
          }
          .hero-subtitle {
            font-size: 24px !important;
            margin: 0 0 32px 0 !important;
          }
          .three-col-text {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .black-btns-row a,
          .green-btns-row a {
            padding: 14px 36px !important;
            min-width: calc(36vw - 8px);
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
