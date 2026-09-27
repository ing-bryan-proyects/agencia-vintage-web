/**
 * Aseguradoras y aliados financieros.
 * Logos extraídos de la presentación comercial (PDF), página 7.
 */
export interface Aliado {
  nombre: string;
  logo: string | null;
}

export const aseguradoras: Aliado[] = [
  { nombre: "SBS Seguros", logo: "/images/aliados/sbs.png" },
  { nombre: "AXA Colpatria", logo: "/images/aliados/axa-colpatria.png" },
  { nombre: "Seguros Mundial", logo: "/images/aliados/mundial.png" },
  { nombre: "Equidad Seguros", logo: "/images/aliados/equidad.png" },
  { nombre: "Chubb Seguros", logo: "/images/aliados/chubb.png" },
  { nombre: "HDI Seguros", logo: "/images/aliados/hdi.png" },
];

export const financieras: Aliado[] = [
  { nombre: "CrediSeguro", logo: "/images/aliados/crediseguro.png" },
  { nombre: "Finesa", logo: "/images/aliados/finesa.png" },
];

export const certificadora = {
  nombre: "Fasecolda",
  descripcion: "Federación de Aseguradores Colombianos",
  logoBlanco: "/images/aliados/fasecolda-blanco.png",
  logoNavy: "/images/aliados/fasecolda-navy.png",
};
