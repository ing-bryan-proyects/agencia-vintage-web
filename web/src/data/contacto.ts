/**
 * Datos de contacto de la agencia.
 * Fuente: brochure y presentación comercial (PDF).
 * TODO: confirmar dirección, horario y unificar teléfonos/correo definitivos.
 */
export const contacto = {
  nombre: "Agencia Vintage de Seguros LTDA",
  telefonos: ["+57 302 524 4339"],
  // Número principal para enlaces tel: y WhatsApp (solo dígitos, con indicativo)
  telefonoPrincipal: "573025244339",
  correo: "agenciavintagedeseguros@gmail.com",
  web: "agenciavintagedeseguros.com",
  webUrl: "https://agenciavintagedeseguros.com",
  direccion: "Carrera 82 # 19-20, oficina 120",
  ciudad: "Bogotá",
  horario: ["Lunes a jueves: 8:00 a.m. a 5:00 p.m.", "Viernes: 8:00 a.m. a 1:00 p.m."],
  eslogan: "Comprometidos con tu tranquilidad y tu seguridad.",
  fotoOficina: "/images/fotos/oficina.jpg",
  // Mapa: consulta por dirección. Si el pin no queda exacto, reemplazar por el
  // enlace/coordenadas exactas de Google Maps que indique el cliente.
  mapaConsulta: "Carrera 82 # 19-20, Bogotá, Colombia",
} as const;

export const mapaEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contacto.mapaConsulta)}&hl=es&z=17&output=embed`;
export const mapaLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contacto.mapaConsulta)}`;

export const whatsappUrl = `https://wa.me/${contacto.telefonoPrincipal}`;
export const telUrl = `tel:+${contacto.telefonoPrincipal}`;
export const correoUrl = `mailto:${contacto.correo}`;
