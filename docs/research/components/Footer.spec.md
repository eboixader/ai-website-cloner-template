# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static, contact form

## DOM Structure
```
<footer> (bg #0A3D62, min-height 851px)
  <div> (max-width 1224px, centered, 2-column layout)
    <div> (left column)
      <h5> "Educación" (white)
      <p> "Aprender puede ser divertido" (white, 14px)
      <div> (contact info)
        <p> "Contacto" (white, bold, 14-16px)
        <p> "ernesto@fundacionflors.es" (white, 14px)
      <p> "© 2024. All rights reserved." (white, 14px)
      <div> (social icons row)
        <a href="https://x.com/eboixader"> (X/Twitter icon, white, 24px)
    <div> (right column — contact form)
      <div> (white bg card, border-radius 20px, padding 30px)
        <input placeholder="Nombre"
        <input placeholder="Correo electrónico*"
        <textarea placeholder="Mensaje*"
        <button> "Enviar mensaje"
        <p> "Si no contesto en 2 días, envíame un mail"
```

## Computed Styles

### Footer
- backgroundColor: #0A3D62
- minHeight: 851px (desktop)
- padding: 16px 0
- width: 100%

### Inner container
- maxWidth: 1224px
- margin: 0 auto
- padding: 0 16px (mobile: 40px 16px)
- display: grid/flex
- gap: 24px

### Left column text
- h5: color #ffffff, fontSize 26px (h5-font-size), fontWeight 600, lineHeight 1.3
- p (tagline): color rgb(255,255,255), fontSize 14px, lineHeight 1.3
- Contact label: color #ffffff, fontWeight 700
- Contact email: color #ffffff, fontSize 14px
- Copyright: color #ffffff, fontSize 14px
- Social icon: color #ffffff, size 24px

### Contact form card
- backgroundColor: #ffffff
- borderRadius: 20px
- padding: 30px
- boxShadow: none

### Form inputs
- borderRadius: 10px
- borderWidth: 1px
- borderColor: rgb(184, 192, 204)
- fontSize: 16px, color: #0d141a
- label fontSize: 14px, color: #0d141a
- height: auto
- marginBottom: 15px (--form-elements-vertical-spacing)

### Form submit button (green)
- backgroundColor: rgb(15, 179, 70)
- color: #ffffff
- borderRadius: 999px
- padding: 16px 40px
- fontSize: 16px
- border: none
- cursor: pointer
- hover: backgroundColor rgb(29,30,32)
- transition: 0.2s ease

## Text Content (verbatim)
- Heading: "Educación"
- Tagline: "Aprender puede ser divertido"
- Contact label: "Contacto"
- Email: "ernesto@fundacionflors.es"
- Copyright: "© 2024. All rights reserved."
- Form fields: "Nombre", "Correo electrónico*", "Mensaje*"
- Button: "Enviar mensaje"
- Note: "Si no contesto en 2 días, envíame un mail"
- Social: X/Twitter → https://x.com/eboixader

## Responsive
- Desktop: 2-column grid (left info, right form)
- Mobile: stacked, padding 40px 16px
