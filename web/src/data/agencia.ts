/**
 * Contenido institucional y de valor de la agencia.
 * Misión y visión son borradores redactados a partir del material del cliente.
 * TODO: validar misión y visión con el cliente.
 */
export const propuesta = {
  titulo: "No te dejamos solo cuando más nos necesitas",
  texto:
    "Ofrecemos asesoramiento continuo en los procesos de reclamación ante las aseguradoras, con las personas idóneas en el tema. Es nuestro factor diferencial: la gran mayoría de las agencias no ofrece este servicio a sus clientes.",
};

export const compromiso =
  "Gestionamos y asesoramos para que disfrutes de total tranquilidad, sabiendo que tú, tu familia y tu negocio están protegidos por nuestra amplia cobertura de seguros.";

export const diferencial = propuesta.texto;

/** Historia de la agencia (texto oficial suministrado por el cliente). */
export const historia = [
  "Agencia Vintage de Seguros Ltda. nació el 28 de agosto de 2018 con el propósito de brindar una asesoría cercana, técnica y responsable en materia de seguros.",
  "A lo largo de nuestra trayectoria hemos desarrollado una especial experiencia en el sector transporte, acompañando a empresas, propietarios y operadores en la identificación y protección de los riesgos propios de su actividad, mediante soluciones aseguradoras ajustadas a sus necesidades.",
  "Nuestro trabajo combina el conocimiento del mercado asegurador con una visión jurídica especializada. La dirección de la agencia está a cargo de Julio Ramón Velosa Huertas, abogado, especialista en Derecho Procesal y especialista en Responsabilidad Civil y del Estado, formación que aporta un valor adicional al análisis de coberturas, responsabilidades, reclamaciones y siniestros.",
  "En Vintage entendemos que asegurar no es simplemente expedir una póliza. Es conocer el riesgo, estructurar una protección adecuada y acompañar al cliente cuando realmente lo necesita.",
];

/** Misión y visión oficiales (texto suministrado por el cliente). */
export const mision = [
  "En Agencia Vintage de Seguros Ltda. asesoramos a personas y empresas en la identificación, administración y transferencia de sus riesgos, con especial experiencia en el sector transporte.",
  "Brindamos soluciones aseguradoras acompañadas de una atención cercana, técnica y responsable, integrando el conocimiento del mercado de seguros con una visión jurídica que nos permite comprender de manera integral las coberturas, responsabilidades y situaciones que pueden surgir frente a un siniestro.",
];

export const vision = [
  "Consolidarnos como una agencia de seguros reconocida por su especialización y experiencia en el sector transporte, la calidad de su asesoría y el acompañamiento permanente a sus clientes.",
  "Buscamos fortalecer continuamente nuestro conocimiento técnico y jurídico, ampliar nuestras soluciones aseguradoras y construir relaciones de largo plazo basadas en la confianza, la transparencia y la adecuada gestión de los riesgos.",
];

export interface Pilar {
  titulo: string;
  texto: string;
  icono: string;
}

export const pilares: Pilar[] = [
  {
    titulo: "Pólizas y planes de seguros",
    texto:
      "Personas, familias y empresas: encontramos la cobertura que se ajusta a lo que necesitas proteger.",
    icono: "documento",
  },
  {
    titulo: "Financiamos tu plan de seguros",
    texto: "Financiación de hasta el 100% de la póliza con nuestros aliados financieros.",
    icono: "financiar",
  },
  {
    titulo: "Aseguradoras y aliados de confianza",
    texto: "Trabajamos con compañías líderes del mercado asegurador colombiano.",
    icono: "alianza",
  },
];

export const diferenciales: Pilar[] = [
  {
    titulo: "Acompañamiento en reclamaciones",
    texto:
      "Asesoría continua ante las aseguradoras, con personas expertas. La mayoría de las agencias no ofrece este servicio.",
    icono: "chat",
  },
  {
    titulo: "Asesoría especializada",
    texto:
      "Analizamos lo que necesitas proteger y te presentamos las pólizas y planes que mejor se ajustan a ti o a tu empresa.",
    icono: "documento",
  },
  {
    titulo: "Financiación del 100%",
    texto:
      "Con nuestros aliados financieros CrediSeguro y Finesa puedes financiar la totalidad de tu póliza.",
    icono: "financiar",
  },
  {
    titulo: "Aseguradoras líderes",
    texto: "SBS, AXA Colpatria, Seguros Mundial, Equidad, Chubb y HDI confían en nosotros.",
    icono: "escudo",
  },
];

export interface Paso {
  titulo: string;
  texto: string;
}

export const pasos: Paso[] = [
  {
    titulo: "Te escuchamos",
    texto: "Entendemos qué necesitas proteger: tu vida, tu vehículo, tu carga o tu empresa.",
  },
  {
    titulo: "Comparamos opciones",
    texto:
      "Te presentamos pólizas de nuestras aseguradoras aliadas, con coberturas claras.",
  },
  {
    titulo: "Financiamos tu póliza",
    texto: "Con CrediSeguro y Finesa puedes financiar hasta el 100% de tu seguro.",
  },
  {
    titulo: "Estamos en tu reclamación",
    texto: "Si ocurre un siniestro, te asesoramos ante la aseguradora hasta el final.",
  },
];

/** Beneficios destacados en la página de cierre del brochure (pág. 4). */
export const beneficiosBrochure: string[] = [
  "Seriedad de la oferta",
  "Cumplimiento del contrato",
  "Devolución de pago anticipado",
  "Calidad del servicio",
  "Estabilidad de la obra",
  "Financiamiento del 100% de la póliza",
];

/** Beneficios de la póliza de cumplimiento (brochure). */
export const beneficiosCumplimiento: string[] = [
  "Seriedad de la oferta",
  "Cumplimiento del contrato",
  "Devolución de pago anticipado",
  "Calidad del servicio",
  "Estabilidad de la obra",
  "Responsabilidad civil extracontractual",
];

export const publicoObjetivo = [
  {
    numero: "01",
    titulo: "Personas y familias",
    texto:
      "Seguros de vida, accidentes personales, autos, motos y SOAT para que tu familia esté tranquila.",
  },
  {
    numero: "02",
    titulo: "Empresas",
    texto:
      "Todo riesgo, responsabilidad civil, cumplimiento, transportes y vida grupo para proteger tu operación.",
  },
  {
    numero: "03",
    titulo: "Microempresarios",
    texto:
      "Microseguros y seguros de bajo costo diseñados para proteger el patrimonio de tu negocio.",
  },
];
