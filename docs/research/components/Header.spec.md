# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** sticky, white background, dropdown nav on hover

## DOM Structure
```
<header> (sticky, white bg, full width)
  <div> (max-width 1240px, centered, flex row)
    <a href="/"> (logo link)
      <img src="/images/logo.svg" alt="Eboixader logo" (109px wide, 47px height)
    <nav>
      <a>Inicio</a>
      <div> (dropdown item)
        <a>Recursos por materia</a>
        <ul> (dropdown)
          <li><a>Recursos de Biología y Geología</a></li>
          <li><a>Recursos de Física y Química</a></li>
        </ul>
      </div>
      <div> (dropdown item)
        <a>IAg en el aula</a>
        <ul>
          <li><a>Mi Bot Box</a></li>
          <li><a>Ejemplos de uso en el aula</a></li>
          <li><a>Documentos y guías</a></li>
          <li><a>Mis GPT's</a></li>
          <li><a>Mis faros en IAg</a></li>
          <li><a>apps-interactivas</a></li>
        </ul>
      </div>
      <div> (dropdown item)
        <a>Formación</a>
        <ul>
          <li><a>Así entiendo la educación</a></li>
          <li><a>Clase DiNvertIdA</a></li>
          <li><a>Mi evolución docente</a></li>
          <li><a>Mis 10 Mandamientos Docentes</a></li>
          <li><a>Páginas amigas</a></li>
          <li><a>Reflexiones docentes</a></li>
        </ul>
      </div>
    </nav>
```

## Computed Styles

### Header container
- position: sticky, top: 0
- backgroundColor: #ffffff
- zIndex: 100
- width: 100%
- paddingTop: 22px, paddingBottom: 22px
- paddingLeft: 16px, paddingRight: 16px

### Inner container
- maxWidth: 1240px
- margin: 0 auto
- display: flex
- justifyContent: space-between
- alignItems: center
- gap: 64px (--link-spacing)

### Logo image
- width: 109px
- height: 47px
- objectFit: contain

### Nav
- display: flex
- gap: 24px (approx, from --element-spacing: 16px)
- alignItems: center

### Nav links
- color: #0d141a
- fontSize: 16px
- fontWeight: 400
- fontFamily: 'Open Sans', sans-serif
- lineHeight: 1.5
- letterSpacing: normal
- textDecoration: none
- cursor: pointer

### Dropdown
- backgroundColor: #ffffff
- boxShadow: 0 4px 16px rgba(0,0,0,0.12)
- borderRadius: 8px
- padding: 8px 0
- minWidth: 220px
- position: absolute

## Mobile Behavior
- Hamburger menu button visible at < 768px
- Drawer/overlay opens from left or top
- Header height: 66px mobile
- Logo width: 112px mobile

## Assets
- Logo: `/images/logo.svg`
