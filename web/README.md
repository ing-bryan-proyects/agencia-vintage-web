# Agencia Vintage de Seguros — Sitio web

Landing page profesional de **Agencia Vintage de Seguros LTDA**, con **dos modelos de diseño** navegables para presentar al cliente y decidir el definitivo.

- **Modelo A · Clásico dorado** — carbón, dorado y azul marino, títulos con serifa. Rutas en `/a`.
- **Modelo B · Corporativo moderno** — fondo claro, azul marino y acentos dorados. Rutas en `/b`.
- **Página de inicio (`/`)** — selector para presentar ambos modelos.

## Stack

- **[Astro 5](https://astro.build)** — sitio estático, altísimo rendimiento y SEO, envía casi nada de JavaScript.
- **[Tailwind CSS v4](https://tailwindcss.com)** — sistema de estilos con tokens de marca centralizados.
- **TypeScript** — datos y lógica tipados.
- Interacciones (menú móvil, pestañas, acordeón) en JavaScript nativo: cero dependencias de UI, más rápido y más seguro.

## Requisitos

- [Node.js](https://nodejs.org) 18.20 o superior (probado con Node 22).

## Cómo ejecutarlo en local

```bash
cd web
npm install       # solo la primera vez
npm run dev       # servidor de desarrollo
```

Abre **http://localhost:4321** en el navegador. La página se recarga sola al guardar cambios.

Otros comandos:

```bash
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve dist/ para revisar el resultado final
npm run check     # revisa tipos y errores de Astro
```

## Estructura del proyecto

```
web/
├─ public/
│  └─ images/            # logos de la agencia y de los clientes
├─ src/
│  ├─ components/
│  │  ├─ modelo-a/       # encabezado, pie y CTA del Modelo A
│  │  ├─ modelo-b/       # encabezado, pie, aliados y "te llamamos" del Modelo B
│  │  ├─ Icono.astro     # iconos SVG reutilizables
│  │  ├─ Abanico.astro   # motivo art déco del logo
│  │  └─ LogosClientes.astro
│  ├─ data/              # CONTENIDO editable (todo el texto sale de aquí)
│  │  ├─ seguros.ts      # catálogo de pólizas por categoría
│  │  ├─ clientes.ts     # logos de clientes
│  │  ├─ aliados.ts      # aseguradoras y financieras
│  │  ├─ contacto.ts     # teléfonos, correo, dirección, horario
│  │  └─ agencia.ts      # misión, visión, diferenciales, pasos
│  ├─ layouts/           # BaseLayout + LayoutA + LayoutB
│  ├─ pages/
│  │  ├─ index.astro     # selector de modelos
│  │  ├─ a/              # Modelo A: inicio, quienes-somos, servicios, contacto
│  │  └─ b/              # Modelo B: inicio, quienes-somos, servicios, contacto
│  └─ styles/global.css  # tokens de marca (colores y tipografías)
└─ astro.config.mjs
```

## Editar el contenido

Casi todo el texto vive en `src/data/`. Por ejemplo, para cambiar teléfonos o correo, edita `src/data/contacto.ts`; para las pólizas, `src/data/seguros.ts`. Ambos modelos leen los mismos datos, así que un cambio se refleja en los dos.

## Pendiente antes de publicar

- Reemplazar los marcadores `[Logo]`, `[Foto: ...]` y `[Mapa ...]` por imágenes reales
  (logos de aseguradoras, financieras y Fasecolda; fotografías; mapa embebido).
- Completar dirección, horario y confirmar teléfonos/correo definitivos en `contacto.ts`.
- Validar **misión** y **visión** (borradores en `agencia.ts`).
- Confirmar el nombre del cliente del logo circular en `clientes.ts`.
- Conectar el envío real de los formularios (servicio de correo o backend).
- Ajustar `site` en `astro.config.mjs` al dominio final.

## Seguridad y buenas prácticas

- Sitio estático: sin base de datos ni servidor expuesto, mínima superficie de ataque.
- Sin dependencias de terceros para la interfaz (solo Astro y Tailwind).
- Formularios con `type`, `required` y autorización de datos (Ley 1581 de 2012).
- Cuando se conecte el envío de formularios, validar en el servidor y añadir protección anti-spam
  (reCAPTCHA/hCaptcha o token) y cabeceras de seguridad (CSP, HSTS) en el hosting.

---

Desarrollado por **bryan.dev** para Agencia Vintage de Seguros LTDA.
