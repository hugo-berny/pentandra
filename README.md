# pentandra
This is a vibe code trial for web making

# PROYECTO: Rediseño Visual Pentandra.com.mx

## ROL
Eres un desarrollador frontend senior especializado en sitios web de alto rendimiento y diseño editorial minimalista. Tu objetivo es construir desde cero el rediseño visual de pentandra.com.mx manteniendo todo el contenido textual existente pero con una nueva identidad visual.

---

## CONTENIDO A PRESERVAR (NO MODIFICAR)

### Homepage — textos exactos a mantener:
- H1: "Construye el Futuro de Tu Presencia Digital"
- Subtítulo: "Del desarrollo web a la infraestructura en la nube, entregamos soluciones de nivel empresarial que escalan con tu negocio."
- CTA principal: "Empieza tu proyecto"
- Sección servicios label: "NUESTROS SERVICIOS"
- Sección servicios H2: "Todo lo que necesitas para liderar en la web"
- Párrafo servicios: "Soluciones digitales integrales diseñadas para el rendimiento, la seguridad y el crecimiento."
- Servicios (6 tarjetas):
  1. "Desarrollo de Páginas Web" — "Sitios web personalizados y responsivos, diseñados para convertir visitantes en clientes, utilizando frameworks modernos y mejores prácticas de SEO." — Features: Diseño UI/UX personalizado / Responsivo y Mobile-First / Optimizado para SEO / Optimizado para rendimiento
  2. "Hosting y Servicios Web" — "Soluciones de hosting confiables y de alto rendimiento, con servicios gestionados para mantener tu presencia web funcionando sin fallos." — Features: Gestión de hosting / SSL y Seguridad / Integración de CDN / Copias de Seguridad Automáticas
  3. "Desarrollo de Software" — "Ingeniería de software integral para aplicaciones web, aplicaciones móviles y sistemas empresariales, construidos con una arquitectura escalable." — Features: Desarrollo Full Stack / Diseño y construcción de APIs / Aplicaciones móviles / Diseño UX/UI
  4. "Integración de Software" — "Conecta tus herramientas de negocio de manera fluida, automatiza flujos de trabajo y unifica tu stack tecnológico para lograr la máxima eficiencia." — Features: Integración de APIs / Conectores de terceros / Migración de datos / Automatización de flujos de trabajo
  5. "Servicios Cloud y VPS" — "Infraestructura en la nube escalable y servidores privados virtuales adaptados a las demandas de tu carga de trabajo, con fiabilidad de nivel empresarial." — Features: VPS Escalable / Arquitectura en la nube / Balanceo de carga / 99.9% de disponibilidad garantizado
  6. "Soluciones E-Commerce" — "Desarrollo integral de tiendas en línea con integración de pasarelas de pago, gestión de catálogo de productos y diseño enfocado en conversión." — Features: Desarrollo de Tiendas en Línea / Integración de Pasarelas de Pago / Gestión de Catálogo de Productos / Optimización de Conversión
- Sección "POR QUÉ PENTANDRA" — H2: "El Equipo Adecuado, Ahora Mismo"
- Razones (3 bloques):
  1. "Tecnología de Vanguardia" — "Usamos los frameworks más recientes y enfoques nativos de la nube para ofrecer soluciones preparadas para el futuro."
  2. "Seguridad Empresarial" — "Protocolos de seguridad de nivel bancario, SSL, protección contra DDoS y auditorías periódicas mantienen tus datos seguros."
  3. "Soporte 24/7" — "Nuestro equipo dedicado está disponible las 24 horas del día para resolver problemas y responder tus preguntas."
- CTA final — H2: "Comienza tu próximo proyecto digital ahora" — Párrafo: "Hablemos sobre cómo podemos acelerar el crecimiento de tu negocio con nuestras soluciones a medida." — Botón: "Contáctanos hoy"
- Footer: "Copyright © 2026 Pentandra, todos los derechos reservados."

### Página de Contacto:
- Mantener formulario con campos: Nombre, Email, Empresa (opcional), Mensaje, botón "Enviar mensaje"
- El formulario es placeholder visual sin backend, sin acción real de envío
- Misma navegación y footer que homepage

---

## IDENTIDAD VISUAL

### Paleta de colores:
- Fondo principal: #0a0a0a (negro profundo)
- Fondo secundario / cards: #111111 o #0f0f0f
- Bordes: rgba(255,255,255,0.08) — líneas muy sutiles
- Texto principal: #f0f0f0
- Texto secundario: #888888
- Acento degradado de marca: from #22c55e (verde) to #f59e0b (ámbar/naranja-amarillo) — usar en: logo placeholder, líneas decorativas, hover states, CTA buttons, separadores
- El degradado siempre va de izquierda a derecha o de arriba a abajo: verde → naranja/amarillo

### Tipografía:
- Fuente principal: 'Everett' — importar desde: https://fonts.cdnfonts.com/css/everett
- Fallback stack: ui-sans-serif, system-ui, sans-serif
- Escala tipográfica:
  - Display/Hero: clamp(3rem, 8vw, 7rem), weight 500, letter-spacing: -0.03em
  - H1 secciones: clamp(2rem, 4vw, 3.5rem), weight 500, letter-spacing: -0.02em
  - H2: clamp(1.5rem, 3vw, 2.5rem), weight 400
  - Labels/eyebrow: 0.7rem, weight 500, letter-spacing: 0.12em, uppercase, color: texto secundario
  - Body: clamp(0.9rem, 1.5vw, 1.05rem), line-height: 1.7, color: texto secundario
  - Monospace para elementos de terminal/teclado: 'JetBrains Mono', monospace — importar desde Google Fonts

---

## REFERENCIAS DE DISEÑO (aplicar estas influencias)

### De vercel.com:
- Sistema de grid con líneas delgadas (1px, rgba blanca muy baja opacidad) formando cuadrículas estructurales visibles
- Secciones divididas por estas líneas de grid, no por fondos o separadores convencionales
- Las tarjetas de servicios viven dentro de celdas del grid
- Espaciado generoso entre secciones: mínimo 120px vertical
- La información "respira" — no hay elementos apretados
- Cruces (+) en las intersecciones del grid como detalle decorativo
- Navegación sticky con fondo muy ligeramente translúcido al hacer scroll (backdrop-filter: blur)

### De tsh.io:
- Tipografía como elemento arquitectónico: los títulos grandes dominan el espacio
- Texto hero muy grande, sin miedo al tamaño
- Jerarquía visual clara entre eyebrow label → título → subtítulo → body

### De ref.digital:
- Bloques que se dividen con precisión quirúrgica
- Sensación de que cada elemento tiene su "slot" exacto en el layout
- Sin decoraciones innecesarias — la geometría del layout ES el diseño
- Transiciones de hover muy sutiles: opacity y transform, nada más

---

## ELEMENTOS PROHIBIDOS
- ❌ Iconos (SVG decorativos, icon fonts, emoji)
- ❌ Imágenes o ilustraciones
- ❌ Gradientes en fondos grandes (solo en elementos específicos: logo, bordes de acento, botones)
- ❌ Sombras exageradas (box-shadow máximo: muy sutil, 0 0 0 1px rgba)
- ❌ Animaciones que bloqueen el render o usen JavaScript pesado
- ❌ Frameworks CSS externos (no Bootstrap, no Tailwind, no Bulma)
- ❌ Cualquier dependencia de npm o CDN que no sea la fuente tipográfica
- ❌ Backend o servicios de formulario

## ELEMENTOS OBLIGATORIOS EN LUGAR DE ICONOS
Usar caracteres de teclado / terminal como decoradores visuales:
- `>_` para indicar items de terminal
- `[ ]` o `[x]` para listas de features
- `//` como separador decorativo
- `->` o `=>` como indicadores de dirección/acción
- `*` como bullet point técnico
- `/` como separador en breadcrumb o navegación
- `{ }` como delimitadores de sección técnica
- `#` como prefijo de label tipo terminal

---

## ESTRUCTURA DE ARCHIVOS A CREAR
pentandra/
├── index.html
├── contacto.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── animations.css
└── js/
└── main.js

Cada archivo CSS tiene una responsabilidad única y está comentado. El JS es mínimo, solo para:
1. Clase `scrolled` en navbar al hacer scroll (threshold: 20px)
2. Animación de entrada de elementos al entrar en viewport (IntersectionObserver, clase `is-visible`)
3. Nada más

---

## ARQUITECTURA CSS

### variables.css — definir TODAS las variables aquí:
```css
:root {
  /* Colors */
  --color-bg: #0a0a0a;
  --color-bg-secondary: #111111;
  --color-bg-card: #0f0f0f;
  --color-border: rgba(255, 255, 255, 0.07);
  --color-border-hover: rgba(255, 255, 255, 0.15);
  --color-text: #f0f0f0;
  --color-text-secondary: #888888;
  --color-text-tertiary: #555555;
  --color-accent-start: #22c55e;
  --color-accent-end: #f59e0b;
  
  /* Typography */
  --font-sans: 'Everett', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  
  /* Spacing */
  --space-section: clamp(80px, 12vw, 160px);
  --space-gap: clamp(16px, 3vw, 32px);
  
  /* Grid */
  --grid-line: 1px solid var(--color-border);
  --grid-max: 1280px;
  --grid-padding: clamp(20px, 5vw, 80px);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
}
```

---

## COMPONENTES CLAVE A CONSTRUIR

### 1. NAVBAR
- Logo: placeholder con texto "PENTANDRA" en gradient clip (verde→naranja)
- Links: "Inicio" y "Contacto" — sin submenús
- Al scroll >20px: añadir clase `.scrolled` que aplica `background: rgba(10,10,10,0.85); backdrop-filter: blur(16px);`
- Sin hamburger complejo en mobile: solo stack vertical
- Height: 72px desktop, 60px mobile
- Border-bottom: `var(--grid-line)` siempre visible

### 2. HERO SECTION
- Altura: 100vh mínimo en desktop, auto en mobile
- Líneas de grid visibles como fondo (CSS puro, usando pseudo-elementos o background-image con repeating-linear-gradient muy sutil)
- El texto H1 "Construye el Futuro de Tu Presencia Digital" debe ser el protagonista absoluto, tamaño máximo permitido
- Badge/label antes del título: `# 01 — INICIO` en estilo terminal
- El CTA "Empieza tu proyecto" → botón con borde degradado (técnica: wrapper con gradient background, inner con bg sólido)
- Coordenadas decorativas en esquinas: ej. `[28.6353° N, 106.0889° W]` (coordenadas de México) o similar, en texto muy pequeño monospace, muy baja opacidad

### 3. SERVICIOS GRID
- Label eyebrow: `# 02 — SERVICIOS`
- 6 tarjetas en grid: 3 columnas desktop, 2 tablet, 1 mobile
- Cada tarjeta:
  - Borde: `var(--grid-line)`
  - Padding: 32px
  - Esquina superior derecha: número de servicio `01`, `02`... en monospace, muy pequeño, color tertiary
  - Título del servicio
  - Descripción
  - Lista de features con prefijo `[x]`
  - Hover: `border-color: var(--color-border-hover); transform: translateY(-4px)` — transition suave
- Las tarjetas están separadas por las líneas del grid (border), no por gaps con espacio vacío

### 4. POR QUÉ PENTANDRA
- Label: `# 03 — VENTAJAS`
- 3 columnas en desktop, separadas por líneas verticales
- En lugar de iconos: usar caracteres terminales grandes como decorador: `>_`, `[ ]`, `{}`
- Cada bloque tiene el caracter en grande (font-size: 2rem, font-mono, color degradado), título, y descripción

### 5. CTA FINAL
- Fondo ligeramente diferente: usar líneas de grid más densas o sutil diferenciación
- Label: `# 04 — CONTACTO`
- Texto grande centrado
- Botón principal con efecto: borde con gradiente animado (CSS animation, muy sutil, no agresivo)

### 6. FOOTER
- Grid de 2 columnas: copyright izquierda, link a contacto derecha
- Border-top: línea de grid
- Muy minimalista

### 7. PÁGINA DE CONTACTO (contacto.html)
- Misma navbar y footer
- Hero reducido: solo label `# CONTACTO` y título "Hablemos"
- Formulario limpio:
  - Campos: Nombre, Email, Empresa (opcional), Mensaje
  - Estilo: borde `var(--grid-line)`, fondo transparente, texto `var(--color-text)`
  - Focus: `border-color: var(--color-accent-start)`
  - Label de cada campo en monospace pequeño uppercase
  - Botón submit: mismo estilo que CTA principal
  - Placeholder del formulario: sin `action`, `method="post"` pero sin JS de envío

---

## ANIMACIONES (js/main.js — máximo 50 líneas)

```javascript
// Solo estas dos funciones:

// 1. Navbar scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// 2. Fade-in on scroll con IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible'));
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

En CSS (animations.css):
```css
[data-animate] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger delay via nth-child o data-delay attribute */
[data-delay="1"] { transition-delay: 0.1s; }
[data-delay="2"] { transition-delay: 0.2s; }
[data-delay="3"] { transition-delay: 0.3s; }
```

---

## OPTIMIZACIÓN PARA GOOGLE PAGESPEED (objetivo: 99/100)

Aplicar obligatoriamente:

1. **Fuentes**: añadir `rel="preconnect"` y `rel="preload"` para las fuentes, usar `font-display: swap`
2. **CSS**: todo inline crítico en `<head>`, el resto diferido si es posible — dado que el CSS es pequeño, todo en `<link>` con media correcto
3. **HTML**: usar semántica correcta: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
4. **Meta tags completos**:
   - `<meta name="description">` con descripción relevante
   - `<meta name="viewport" content="width=device-width, initial-scale=1">`
   - `<meta name="theme-color" content="#0a0a0a">`
   - Open Graph básico
5. **Performance**:
   - Sin imágenes → 0 requests de imagen (score perfecto en ese rubro)
   - JS con `defer` attribute
   - CSS sin `@import` (usar `<link>` múltiples)
   - No usar `!important` innecesariamente
6. **Accessibility**:
   - `aria-label` en elementos interactivos sin texto visible
   - `lang="es"` en `<html>`
   - Contraste de colores: asegurar ratio mínimo 4.5:1 para texto sobre fondos
   - Skip navigation link
7. **Core Web Vitals**:
   - No hay imágenes = no hay LCP de imagen (LCP será el texto hero)
   - Sin layout shifts = usar dimensiones fijas donde aplique
   - JS mínimo = FID/INP óptimo

---

## CHECKLIST FINAL ANTES DE ENTREGAR

Verificar que el código cumple:
- [ ] Sin frameworks externos (solo fonts de CDN)
- [ ] Sin iconos de ningún tipo
- [ ] Sin emojis
- [ ] Fondo negro en toda la página
- [ ] Logo es placeholder de texto "PENTANDRA" con gradient
- [ ] Todo el contenido textual original está presente y sin modificaciones
- [ ] Grid lines visibles sutilmente en hero y secciones
- [ ] Formulario de contacto presente pero sin backend
- [ ] JS ≤ 50 líneas
- [ ] HTML semánticamente correcto
- [ ] Mobile responsive sin media queries excesivos (usar clamp() y grid auto-fit)
- [ ] `defer` en script
- [ ] `font-display: swap` en fuentes
- [ ] `preconnect` para dominios de fuentes
- [ ] Sin `!important` salvo reset
- [ ] Variables CSS centralizadas en variables.css
- [ ] Comentarios en cada archivo CSS indicando su propósito

---

## INSTRUCCIÓN FINAL

Genera los 8 archivos completos en este orden:
1. `css/variables.css`
2. `css/reset.css`
3. `css/base.css`
4. `css/layout.css`
5. `css/components.css`
6. `css/animations.css`
7. `js/main.js`
8. `index.html`
9. `contacto.html`

Cada archivo debe estar completo, sin placeholders de código como `/* ... resto del código ... */`. El código debe ser production-ready.