/**
 * Catálogo de seguros que gestiona la agencia.
 * Fuente: presentación comercial y brochure (PDF). Ortografía corregida.
 */
export type Segmento = "personas" | "empresas";

export interface Poliza {
  titulo: string;
  descripcion: string;
  /** Sub-coberturas o beneficios opcionales. */
  detalles?: string[];
}

export interface Categoria {
  id: string;
  segmento: Segmento;
  /** Nombre corto para menús y pestañas. */
  nombre: string;
  /** Título largo de la sección. */
  titulo: string;
  intro: string;
  /** Nombre del icono (ver componentes Icono*). */
  icono: string;
  polizas: Poliza[];
}

export const categorias: Categoria[] = [
  {
    id: "autos",
    segmento: "personas",
    nombre: "Autos y RC",
    titulo: "Seguros autos y RC",
    intro:
      "Coberturas para vehículos particulares, de trabajo y de servicio público, y la responsabilidad civil que conllevan.",
    icono: "auto",
    polizas: [
      {
        titulo: "Autos",
        descripcion:
          "Protege tu vehículo frente a los posibles daños generados por un choque o accidente de tránsito, así como a los terceros afectados.",
      },
      {
        titulo: "Motos",
        descripcion:
          "Seguro especial pensado para los motociclistas colombianos, que ampara sus motos frente a daños por accidentes de tránsito o a sus propios bienes.",
      },
      {
        titulo: "SOAT",
        descripcion:
          "Seguro obligatorio de accidentes de tránsito para todo vehículo automotor que transite por el territorio nacional. Ampara los daños corporales causados a las personas en un accidente de tránsito.",
      },
      {
        titulo: "Vehículos utilitarios",
        descripcion:
          "Protección frente a los riesgos a los que se exponen las pick-ups sencillas, camionetas y vans utilizadas como herramienta de trabajo.",
      },
      {
        titulo: "Vehículos pesados",
        descripcion:
          "Protección patrimonial del vehículo pesado de carga ante daños materiales o hurto, además de las pérdidas o lesiones causadas a terceros en accidentes de tránsito.",
      },
      {
        titulo: "Vehículos de servicio público",
        descripcion:
          "Protege a los propietarios de vehículos de servicio público frente a daños o pérdidas de sus vehículos, y cubre los perjuicios patrimoniales ocasionados a terceros.",
      },
      {
        titulo: "RCC transporte público",
        descripcion:
          "Indemniza a los pasajeros del vehículo asegurado que sufran lesiones corporales derivadas de la responsabilidad civil contractual.",
      },
      {
        titulo: "RCE transporte público",
        descripcion:
          "Indemniza los perjuicios materiales causados a terceros, derivados de la responsabilidad civil extracontractual en la que incurra el asegurado.",
      },
    ],
  },
  {
    id: "vida",
    segmento: "personas",
    nombre: "Vida y accidentes",
    titulo: "Seguros de vida",
    intro:
      "Respaldo para ti, tu familia y tus colaboradores ante enfermedad, incapacidad, fallecimiento o accidentes.",
    icono: "vida",
    polizas: [
      {
        titulo: "Individual",
        descripcion:
          "Diseñado para otorgar cobertura en forma individual a causa de una incapacidad o enfermedad grave.",
      },
      {
        titulo: "Vida deudores",
        descripcion:
          "Respalda las obligaciones crediticias del asegurado en caso de fallecimiento o incapacidad total y permanente.",
      },
      {
        titulo: "Vida grupo",
        descripcion:
          "Indemniza a los beneficiarios o al propio asegurado ante los riesgos a los cuales se encuentre amparado.",
      },
      {
        titulo: "Accidentes personales",
        descripcion:
          "Resarce las pérdidas económicas derivadas de un accidente y cubre los gastos médicos en los que incurra el asegurado.",
      },
      {
        titulo: "Accidentes en viajes",
        descripcion:
          "Resarce las pérdidas económicas y los gastos médicos del asegurado por accidentes ocurridos durante el viaje.",
      },
      {
        titulo: "Accidentes estudiantiles",
        descripcion:
          "Respalda a los estudiantes de instituciones educativas frente a accidentes que puedan sufrir dentro o fuera del plantel.",
      },
    ],
  },
  {
    id: "generales",
    segmento: "empresas",
    nombre: "Seguros generales",
    titulo: "Seguros generales",
    intro:
      "Protegemos el patrimonio de personas y empresas frente a pérdidas económicas, reclamaciones de terceros e incumplimientos.",
    icono: "escudo",
    polizas: [
      {
        titulo: "Propiedades",
        descripcion:
          "Protegemos el patrimonio de nuestros asegurados frente a pérdidas económicas derivadas de eventos catastróficos, hurtos o pérdidas durante el transporte de mercancías.",
      },
      {
        titulo: "Patrimonial",
        descripcion:
          "Amparamos a nuestros asegurados y su patrimonio ante pérdidas económicas derivadas de actos deshonestos o fraudulentos de sus colaboradores.",
      },
      {
        titulo: "Responsabilidad civil",
        descripcion:
          "Protección ante eventuales reclamaciones de terceros afectados por perjuicios generados en el desarrollo de una actividad económica.",
        detalles: [
          "General",
          "Profesional",
          "Para directores y administradores",
          "Infidelidad y riesgos financieros",
        ],
      },
      {
        titulo: "Cumplimiento",
        descripcion:
          "Póliza de indemnización al asegurado o beneficiario por los perjuicios derivados del incumplimiento de las obligaciones adquiridas.",
        detalles: [
          "Seriedad de la oferta",
          "Cumplimiento del contrato",
          "Devolución de pago anticipado",
          "Calidad del servicio",
          "Estabilidad de la obra",
          "Responsabilidad civil extracontractual",
        ],
      },
      {
        titulo: "Ingeniería",
        descripcion:
          "Protección especial con un seguro de bajo costo, diseñado para microempresarios que desean proteger su patrimonio.",
      },
      {
        titulo: "Microseguros",
        descripcion:
          "Especialmente diseñado para microempresarios que quieren proteger su patrimonio con un seguro de bajo costo.",
      },
    ],
  },
  {
    id: "empresas",
    segmento: "empresas",
    nombre: "Todo riesgo empresas",
    titulo: "Todo riesgo para empresas",
    intro:
      "Propiedad para la empresa: obras, plantas industriales, bienes y maquinaria frente a daños accidentales y fenómenos naturales.",
    icono: "empresa",
    polizas: [
      {
        titulo: "Construcción o montaje",
        descripcion:
          "Protege a las empresas dedicadas a la construcción: respalda estructuras de acero con o sin equipo mecánico y/o eléctrico, instalaciones completas de plantas industriales y toda clase de maquinaria (calderas, aparatos, tuberías, equipo mecánico y eléctrico) ante errores durante el montaje, impericia, sabotaje, caída de partes, robo, incendio, rayos y explosión, entre otros.",
      },
      {
        titulo: "Daño material",
        descripcion:
          "Protege los bienes tangibles e intangibles asegurados (edificios, equipo electrónico, pérdida de utilidades, entre otros) frente a daños materiales accidentales, súbitos e imprevistos, o por eventos naturales. Cubre los costos y gastos necesarios para extinguir o evitar la propagación de los eventos cubiertos.",
      },
      {
        titulo: "Maquinaria y equipo",
        descripcion:
          "Protege el patrimonio de nuestros asegurados frente a pérdidas y/o daños materiales de máquinas y equipos que puedan ocasionarse por incendios y fenómenos naturales, entre otros.",
      },
      {
        titulo: "Maquinaria amarilla",
        descripcion:
          "Protección ante pérdidas y/o daños materiales de maquinaria amarilla y agrícola ocasionados por incendios, volcamientos, inundaciones y fenómenos naturales.",
      },
    ],
  },
  {
    id: "transportes",
    segmento: "empresas",
    nombre: "Transportes",
    titulo: "Seguro de transportes",
    intro:
      "Tu carga protegida desde el momento en que se despacha hasta que llega a su destinatario, por cualquier vía.",
    icono: "transporte",
    polizas: [
      {
        titulo: "Póliza automática para generadores de carga",
        descripcion:
          "Ampara los riesgos del traslado de bienes o mercancías de empresas generadoras de carga de importación, exportación, nacional y urbana, por vía aérea, marítima, fluvial, férrea, terrestre o cualquiera de sus combinaciones, desde el despacho hasta la entrega al destinatario.",
      },
      {
        titulo: "Póliza automática de transporte de mercancías",
        descripcion:
          "Ampara los riesgos del transporte terrestre de mercancías dentro del territorio nacional que sean responsabilidad del transportador asegurado, desde el despacho de la carga hasta su entrega en el destino final.",
      },
      {
        titulo: "Póliza específica de transporte de mercancías",
        descripcion:
          "Cobertura para un despacho determinado de mercancías de importación, exportación, nacional o urbana, por cualquier vía, desde que se despacha la carga hasta que es entregada al destinatario.",
      },
    ],
  },
];

export const categoriasPersonas = categorias.filter((c) => c.segmento === "personas");
export const categoriasEmpresas = categorias.filter((c) => c.segmento === "empresas");

export function categoriaPorId(id: string): Categoria | undefined {
  return categorias.find((c) => c.id === id);
}
