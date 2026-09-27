/**
 * Clientes de la agencia (logos suministrados por el cliente).
 * TODO: confirmar el nombre del cliente del logo circular ("logo-b").
 */
export interface Cliente {
  nombre: string;
  logo: string;
}

export const clientes: Cliente[] = [
  { nombre: "Transportes Velosa", logo: "/images/clientes/transportes-velosa.jpg" },
  { nombre: "Transporte Riaño C. (TRC)", logo: "/images/clientes/trc-riano.jpg" },
  { nombre: "Transportes Riaño S.A.S.", logo: "/images/clientes/transportes-riano.jpg" },
  { nombre: "ZE & Asesoría Integral", logo: "/images/clientes/ze-asesoria.jpg" },
  { nombre: "Coopasovoltank", logo: "/images/clientes/coopasovoltank.jpg" },
  { nombre: "Trans InverLog", logo: "/images/clientes/trans-inverlog.jpg" },
  { nombre: "Satelvision", logo: "/images/clientes/satelvision.jpg" },
  { nombre: "VIDA — Seguridad y Salud en el Trabajo", logo: "/images/clientes/vida-sst.jpg" },
  { nombre: "Alex Mendivelso — Abogado", logo: "/images/clientes/alex-mendivelso.jpg" },
  { nombre: "Julio Velosa — Abogado", logo: "/images/clientes/julio-velosa.jpg" },
  { nombre: "Vanity Shop", logo: "/images/clientes/vanity-shop.jpg" },
  { nombre: "Cliente de la agencia", logo: "/images/clientes/logo-b.png" },
];
