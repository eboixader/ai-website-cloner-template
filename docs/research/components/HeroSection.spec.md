# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static layout over autoplay video background

## DOM Structure
```
<section> (full viewport width, min-height 943px, position relative, overflow hidden)
  <div> (video background container, absolute inset-0)
    <video autoplay muted loop playsinline (100% width/height, objectFit cover)
    <div> (overlay, absolute inset-0, bg black 0.45 opacity)
  <div> (content container, relative z-10, max-width 1224px, centered, padding)
    <h1> center, white, 64px — "Eboixader"
    <p> center, white, 32px — subtitle
    <div> (3 black pill buttons row, centered, gap 16px)
      <a> "Recursos por materia"
      <a> "IA en el aula"
      <a> "Formación y asesoramiento"
    <div> (description text area, left-aligned, color rgb(240,226,226), 18px)
      <p> long description text (multiple paragraphs)
    <div> (2 secondary text boxes, 16px, center, white)
    <div> (2 green pill buttons, centered, gap 16px)
      <a> "Así entiendo la educación"
      <a> "Reflexiones docentes"
```

## Computed Styles

### Section
- position: relative
- minHeight: 943px
- width: 100%
- overflow: hidden
- padding: 16px 0

### Video background
- position: absolute
- inset: 0
- width: 100%, height: 100%
- objectFit: cover
- objectPosition: center 85% (--26c569ba: 85%, vertical)
- zIndex: 0

### Overlay
- position: absolute
- inset: 0
- backgroundColor: rgba(0,0,0,0.45) (--0d23f5d7: 0.45)
- zIndex: 1

### Content wrapper
- position: relative
- zIndex: 2
- maxWidth: 1224px (--3f3138e2)
- margin: 0 auto
- padding: 0 16px (mobile), 0 (desktop within max-width)
- display: flex
- flexDirection: column
- alignItems: center
- paddingTop: 83px (from grid-row position)

### H1 "Eboixader"
- color: rgb(255,255,255)
- fontSize: 64px (desktop), 40px (mobile)
- fontWeight: 600
- fontFamily: 'Open Sans', sans-serif
- lineHeight: 1.3
- textAlign: center

### Subtitle paragraph
- color: rgb(255,255,255)
- fontSize: 32px (--fontSizeDesktop: 32px)
- fontWeight: 600
- fontFamily: 'Open Sans', sans-serif
- lineHeight: 1.3
- textAlign: center
- maxWidth: 800px

### Black pill buttons
- backgroundColor: rgb(0,0,0)
- color: rgb(255,255,255)
- borderRadius: 999px
- paddingLeft: 40px, paddingRight: 40px
- paddingTop: 16px, paddingBottom: 16px
- fontSize: 16px
- fontWeight: 400
- border: none
- cursor: pointer
- transition: background-color 0.2s ease
- hover: backgroundColor rgb(29,30,32)

### Description text
- color: rgb(240,226,226)
- fontSize: 18px
- fontWeight: 400
- lineHeight: 1.3
- textAlign: left
- maxWidth: 749px (from --ff15b110 value for that element)

### Green pill buttons
- backgroundColor: rgb(15,179,70)
- color: rgb(255,255,255)
- borderRadius: 999px
- paddingLeft: 40px, paddingRight: 40px
- paddingTop: 16px, paddingBottom: 16px
- fontSize: 16px
- fontWeight: 400
- transition: background-color 0.2s ease
- hover: backgroundColor rgb(29,30,32)

## Text Content (verbatim)

**H1:** Eboixader

**Subtitle:** Recursos de aula, ideas para docentes, y proyectos con IA que enseñan a pensar, no a repetir.

**Black buttons row:**
- Recursos por materia → /recursos-por-materia
- IA en el aula → /iag-en-el-aula
- Formación y asesoramiento → /formacion

**Description area (rgb(240,226,226), 18px, left):**
Con el objetivo de ayudar a docentes y centros educativos.

Aquí encontrarás recursos reales de aula, propuestas con inteligencia artificial y experiencias educativas diseñadas desde el pensamiento crítico. Todo lo que se comparte ha sido probado antes con alumnado real, con la única intención de AYUDAR.

Materiales de Física y Química, Biología y Geología, Matemáticas y Tecnología listos para usar o adaptar.

Acompañamiento a docentes y centros que quieren innovar con sentido y sin depender de modas.

Propuestas para trabajar la inteligencia artificial como herramienta y como objeto de aprendizaje, desde una mirada ética y pedagógica.

Si te interesa conocer cómo entiendo la educación, la innovación y el papel de la tecnología en el aula, aquí comparto reflexiones y experiencias personales.

**Secondary text boxes (center, white, 16px):**
- Left: "IA en el aula" 
- Right: "Formación y asesoramiento"
- Center: "Recursos por materia"

**Green buttons:**
- Así entiendo la educación → /asi-entiendo-la-educacion
- Reflexiones docentes → /reflexiones-docentes (target _blank)

## Assets
- Video: https://videos.pexels.com/video-files/8538236/8538236-uhd_1440_2514_30fps.mp4
- Poster: https://images.pexels.com/videos/8538236/apple-apricot-blooming-branch-8538236.jpeg

## Responsive
- Desktop (1440px): min-height 943px, full grid layout
- Mobile (390px): stacked, min-height auto, buttons full width ~36vw
