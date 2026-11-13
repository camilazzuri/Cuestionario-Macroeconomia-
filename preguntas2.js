// preguntas2.js — Banco Daypo + preguntas nuevas (58 preguntas), compatible con preguntas.js
// Mismo formato que preguntas.js. Los ids van del 73 al 137 (hay huecos porque se quitaron las repetidas del banco anterior).
// Tipos: "single" (una opción), "tf" (verdadero/falso) · correct: posiciones desde 0
// Se suma a ALL_QUESTIONS: cargá este archivo DESPUÉS de preguntas.js.
const PREGUNTAS_2 = [
  // ==========================================
  // BLOQUE 3: BANCO DAYPO Y PREGUNTAS NUEVAS (58 PREGUNTAS)
  // ==========================================
  {
    id: 73,
    type: "single",
    text: "Se consideran parte del consumo de bienes y servicios del estado: el gasto corriente, el gasto de inversión y el gasto social, por ello es correcto afirmar que:",
    options: [
      "Los bienes que utiliza el sector público para llevar a cabo sus funciones corresponden a gasto en bienes de capital.",
      "Los bienes adquiridos para la producción de otros bienes son parte del gasto social.",
      "Los salarios y erogaciones que el sector público abona a sus empleados y proveedores de servicios son parte del gasto corriente.",
      "Los Programas de Seguridad Social que brindan cobertura de salud, educación y subsidios o transferencias a personas con algún tipo de discapacidad son parte del gasto de inversión."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 74,
    type: "tf",
    text: "Cuando el tipo de cambio de un país A desciende en relación con la moneda de otro país B, se puede afirmar que la moneda de A sufre una apreciación y la de B, una depreciación.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Si el tipo de cambio de A desciende respecto de la moneda de B, la moneda de A se aprecia y la de B se deprecia."
  },
  {
    id: 75,
    type: "single",
    text: "El sistema de tipo de cambio:",
    options: [
      "Puede ser flotante entre un piso y un techo, con intervención estatal cuando resulta mayor al valor superior o menor al inferior.",
      "Es fluctuante cuando lo determina el gobierno.",
      "Es el precio de una moneda extranjera, por ejemplo dólar, en un mercado de divisas.",
      "Es fijo cuando es producto del equilibrio de mercado."
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 76,
    type: "single",
    text: "Si la Inversión es el destino del ahorro, se puede afirmar que:",
    options: [
      "Un país progresa cuando la Inversión Neta Interna es mayor a cero.",
      "La Inversión Neta Interna se relaciona con el nivel de desarrollo económico de un país.",
      "La Inversión Neta Interna se relaciona con el nivel de desarrollo económico de un país, que progresa cuando es mayor a cero y la Inversión de Reposición representa la depreciación del capital.",
      "La Inversión de Reposición representa la depreciación del capital."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 77,
    type: "single",
    text: "Entre las causas de la inflación se pueden mencionar:",
    options: [
      "La disminución del tipo de cambio considerando que la materia prima utilizada es importada.",
      "La rigidez de la oferta, por ejemplo en el sector agropecuario y ganadero.",
      "El incremento de la oferta en caso de un incentivo en la producción.",
      "La disminución del costo de factores de producción."
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 78,
    type: "single",
    text: "La Contabilidad Nacional se define como:",
    options: [
      "Registros de las transacciones que lleva a cabo el sector externo",
      "Registros sistematizados transaccionales de la vida económica de un país",
      "Registros sistematizados de gastos corrientes del sector público",
      "Normas contables que rigen la renta nacional"
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 79,
    type: "single",
    text: "¿Qué caracteriza a un Fondo Común de Inversión como intermediario no bancario?",
    options: [
      "Capta recursos mediante cuotas-partes para reinvertirlos en títulos",
      "Está obligado a mantener encajes técnicos en el Banco Central",
      "Permite emitir cheques contra los fondos depositados",
      "Su activo principal son las pólizas de seguro de vida"
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 80,
    type: "single",
    text: "En el Sistema Tributario Argentino (otra versión):",
    options: [
      "La nación recauda los impuestos indirectos que son coparticipables.",
      "Los impuestos aduaneros corresponden a la nación y son coparticipables.",
      "Las provincias y los municipios recaudan impuestos indirectos.",
      "Los impuestos aduaneros corresponden a las provincias."
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 81,
    type: "single",
    text: "El concepto de déficit global se obtiene sumando:",
    options: [
      "El déficit fiscal y el déficit cuasi fiscal",
      "La deuda externa y la deuda interna de las familias",
      "Los impuestos directos y los impuestos indirectos",
      "El consumo privado y la inversión extranjera"
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 82,
    type: "single",
    text: "El valor del tipo de cambio del dólar respecto al peso:",
    options: [
      "Aumenta si crecen las importaciones netas.",
      "Lo determina el Poder Ejecutivo.",
      "Se determina en relación a los precios internacionales de los alimentos.",
      "Aumenta si crecen las exportaciones netas."
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 83,
    type: "tf",
    text: "El gasto corriente es aquel que se destina a bienes de capital, cuya financiación supera un período fiscal.",
    options: ["Verdadero", "Falso"],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 84,
    type: "single",
    text: "Los Impuestos directos gravan:",
    options: [
      "La renta, las sucesiones y la propiedad.",
      "El consumo, como el Impuesto al Valor Agregado.",
      "El consumo, la renta y la propiedad.",
      "La renta y el consumo."
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 85,
    type: "single",
    text: "¿Qué efecto tiene el encaje técnico fijado por un banco comercial sobre su propia operatoria?",
    options: [
      "Es una herramienta para controlar la inflación del país desde el sector privado",
      "Asegura que el banco obtenga la máxima rentabilidad posible de sus créditos",
      "Determina la capacidad del banco para convertir depósitos en dinero líquido ante solicitudes",
      "Elimina la necesidad de que el banco recurra a redescuentos del Banco Central"
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 86,
    type: "single",
    text: "El sector financiero está conformado por:",
    options: [
      "Entidades que crean dinero como los bancos comerciales y otras que no crean dinero como las Compañías de Seguro.",
      "Entidades que crean dinero como el Banco Central, la Bolsa de Valores y los Fondos de Inversión, y otras que no crean dinero como las Administradoras de Fondos de Jubilaciones y Pensiones.",
      "Sólo entidades que crean dinero, como los bancos comerciales públicos y privados.",
      "Sólo entidades que crean dinero como las Compañías de Seguro y las Administradoras de Fondos de Jubilaciones y Pensiones."
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 87,
    type: "single",
    text: "El Sistema de Contabilidad Nacional se define como...",
    options: [
      "...los registros de las transacciones del sector externo como la balanza comercial",
      "...las normas contables que rigen la contabilidad nacional, e incluyen a la renta nacional",
      "...los registros sistematizados de las transacciones de la vida económica de un país en un período determinado de tiempo",
      "...las normas de balance contable del Banco Central de la República Argentina"
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 88,
    type: "single",
    text: "El aumento en la compra de bienes y servicios del exterior:",
    options: [
      "Genera una mayor oferta de dólares en la economía del país.",
      "Ninguna es correcta",
      "Aumenta la demanda de divisas en el país.",
      "Genera una mayor entrada de divisas al país."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 89,
    type: "single",
    text: "En economía la intervención estatal permite:",
    options: [
      "Generar la implementación de nuevas tecnologías para el cuidado del ambiente mediante la regulación a la actividad productiva.",
      "A través de impuestos asignar renta al beneficiando el acceso a la salud y educación a los sectores mas necesitados de la sociedad.",
      "Incrementar la eficacia de los mercados en casos de fallas, asignar renta o distribuir la riqueza a los sectores mas vulnerables de la sociedad y regular para cuidar el ambiente, entre otras cuestiones.",
      "Incrementar la eficacia en ausencia de competencia y presencia de externalidades negativas."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 92,
    type: "single",
    text: "La Contabilidad Nacional:",
    options: [
      "Proporciona datos del mercado laboral.",
      "Suma las transacciones generadas con el sector externo.",
      "Es un registro sistematizado de las transacciones de la vida económica de un país.",
      "Suma las transacciones realizadas por los agentes de todos los sectores exceptuando el Sector Público."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 93,
    type: "single",
    text: "Respecto de la demanda monetaria, ¿qué sucede con la demanda por motivo de especulación cuando la tasa de interés de mercado es muy elevada?",
    options: [
      "La demanda se mantiene constante",
      "Los agentes deciden no renovar sus depósitos",
      "La demanda de dinero en efectivo aumenta",
      "La demanda de dinero en efectivo disminuye"
    ],
    correct: [3],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 94,
    type: "tf",
    text: "Cuando el mercado determina el tipo de cambio, se considera un sistema de cambio fijo, mientras que, cuando el valor de algunas monedas fluctúa libremente mientras el de otras es el resultado de la intervención del estado, se trata de un sistema de cambio dirigido.",
    options: ["Verdadero", "Falso"],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 95,
    type: "tf",
    text: "Cuando un estado entra en default, ante el no pago de sus obligaciones, puede llevar a cabo un proceso de renegociación de deuda que implica tasas de interés más baja ante mayor riesgo.",
    options: ["Verdadero", "Falso"],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 96,
    type: "single",
    text: "En un sistema de Tipo de Cambio Fijo, si las importaciones superan a las exportaciones, ¿cómo debe actuar el Banco Central?",
    options: [
      "No debe intervenir, permitiendo que las fuerzas del mercado ajusten el tipo de cambio libremente",
      "Debe comprar divisas para aumentar sus reservas internacionales y fortalecer la industria nacional",
      "Debe salir a vender divisas de sus reservas para contrarrestar la tendencia al alza del tipo de cambio",
      "Debe emitir más moneda nacional para equilibrar la oferta y la demanda de divisas"
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 97,
    type: "single",
    text: "La Contabilidad Nacional comprende registros sistematizados de:",
    options: [
      "... ingresos genuinos y gastos corrientes del sector público.",
      "... importaciones y exportaciones.",
      "... las transacciones económicas de un país.",
      "... importaciones y exportaciones, gastos corrientes e ingresos genuinos del sector público"
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 98,
    type: "single",
    text: "¿A qué se llama Producto Bruto Interno Per Cápita?",
    options: [
      "El valor total de los bienes y servicios producidos por un país dividido entre la población total",
      "La suma de todos los ingresos generados por la población de un país",
      "El total de las exportaciones de un país dividido por la población",
      "El promedio de la producción de bienes y servicios por cada trabajador"
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 99,
    type: "single",
    text: "La Deuda Pública se considera externa cuando:",
    options: [
      "El acreedor es una persona física o jurídica extranjera.",
      "Siempre que sea contraída por el gobierno de un país sin importar quien sea el acreedor.",
      "El acreedor es una persona física o jurídica nacional.",
      "Se establece su cumplimiento en moneda nacional (pesos)."
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 101,
    type: "single",
    text: "En caso de déficit fiscal, para lograr el equilibrio el gobierno puede:",
    options: [
      "Aumentar el gasto corriente y así expandir la economía en general.",
      "Disminuir los impuestos y activar el sector privado.",
      "Fijar nuevos impuestos para aumentar su recaudación y contraer la economía, afectando en particular al sector privado.",
      "Aumentar los impuestos y disminuir el gasto público."
    ],
    correct: [3],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 102,
    type: "single",
    text: "Los impuestos (versión 2025):",
    options: [
      "Los crea el Poder Ejecutivo mediante decreto, ya que el legislador no puede crear impuestos.",
      "Según nuestra forma de gobierno federal pueden corresponder a la Nación, a las Provincias y a los Municipios y Comunas.",
      "Indirectos, como el IVA, se crean por ley del Congreso de la Nación, los recauda el Poder Ejecutivo Nacional a través de un ente autárquico, AFIP, y son coparticipables.",
      "Siempre requieren de una actividad del Estado como contraprestación al pago que realiza el contribuyente."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 103,
    type: "single",
    text: "¿Qué caracteriza a los intermediarios financieros no bancarios?",
    options: [
      "Emiten billetes y monedas de curso legal",
      "No tienen capacidad para crear dinero",
      "Reciben depósitos en cuenta corriente",
      "Su función principal es la custodia de reservas de oro"
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 104,
    type: "tf",
    text: "La bolsa de valores es un agente financiero que realiza tareas de intermediación entre la oferta y la demanda de empresas que emiten acciones negociables y de quienes las compran, mediante obligaciones negociables, préstamos que solicitan las empresas a particulares y se comprometen a su devolución con un interés periódico.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 105,
    type: "single",
    text: "El Sector Público cumple ciertas funciones en la economía de un país:",
    options: [
      "Ninguna es correcta",
      "Solamente brinda Justicia, Seguridad y Defensa e incorpora otras funciones ligadas a la economía en épocas extraordinarias (guerras, pandemia, etc.).",
      "Solamente brinda Justicia, Seguridad y Defensa.",
      "Su finalidad es modificar o controlar las conductas privadas"
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 106,
    type: "single",
    text: "La Deuda Pública se considera interna cuando:",
    options: [
      "El acreedor es una persona física o jurídica extranjera.",
      "Se establece su cumplimiento en moneda extranjera, por ejemplo en dólares.",
      "El acreedor es una persona física o jurídica nacional.",
      "Siempre que sea contraída por el gobierno de un país extranjero sin importar quién sea el acreedor o la moneda establecida para su cumplimiento."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 107,
    type: "single",
    text: "El estado interviene en un sistema de tipo de cambio:",
    options: [
      "Fluctuante y Fijo",
      "Fijo.",
      "Libre",
      "Fluctuante."
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 108,
    type: "single",
    text: "Un aumento del indicador Riesgo País implica:",
    options: [
      "Que en un proceso de refinanciación de deuda es aconsejable aumentar el plazo de recupero de la inversión.",
      "Que el país no puede cumplir con sus obligaciones.",
      "Una disminución de la tasa de interés de los bonos de deuda.",
      "Una mayor seguridad al momento de invertir en el país."
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 109,
    type: "single",
    text: "Respecto de la inflación, se considera que:",
    options: [
      "Es el aumento de los precios de una canasta de productos, bienes servicios que consumen las familias, en forma continua, por un período de tiempo, en un lugar determinado",
      "Se origina por la disminución del tipo de cambio que afecta los costos de los factores de la producción que utilizan materia prima importada",
      "Se origina por la flexibilidad de la oferta para reaccionar rápidamente ante éstos cambios, por ejemplo en una región agroindustrial",
      "Tiene como consecuencia un mayor poder adquisitivo de la moneda para el consumidor"
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 111,
    type: "single",
    text: "¿Qué mide el concepto de Riesgo País?",
    options: [
      "La diferencia entre el gasto público social y el gasto en defensa",
      "El déficit acumulado entre las exportaciones e importaciones anuales",
      "La tasa de inflación proyectada para el próximo año calendario",
      "La probabilidad de que un Estado se vea imposibilitado de cumplir con sus obligaciones financieras"
    ],
    correct: [3],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 112,
    type: "single",
    text: "¿Qué principio impositivo busca eliminar o minimizar el fraude fiscal?",
    options: [
      "Equidad horizontal",
      "Eficiencia",
      "Aplicabilidad",
      "Certeza"
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 113,
    type: "single",
    text: "La Oferta Monetaria (versión 2025):",
    options: [
      "Incluye efectivo + depósitos y se mide a través de los agregados monetarios M0; M1; M2 y M3",
      "Deriva del crédito bancario e incluye efectivo + depósitos",
      "Deriva del crédito bancario e incluye solamente el efectivo circulante",
      "Se mide a partir de agregados monetarios M0; M1; M2 y M3"
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 114,
    type: "tf",
    text: "El tipo de cambio Real se puede definir como la cantidad de moneda nacional ($) necesaria para adquirir una unidad de moneda extranjera o divisa, a valor del comprador o exportador y del vendedor o importador; la diferencia es el margen que representa el costo de la intermediación del agente cambiario.",
    options: ["Verdadero", "Falso"],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 115,
    type: "single",
    text: "La Balanza de Pagos:",
    options: [
      "En la cuenta de capital se registran los resultados, que pueden ser deficitarios o superavitarios",
      "En la cuenta de Pagos Oficiales se registran transacciones de montos importantes como turismo, transporte y comunicaciones",
      "Se la puede definir como una serie de registros contables sistematizados de las transacciones propias del sector público",
      "En la cuenta corriente registra la balanza comercial (exportaciones e importaciones) y la balanza de servicios, entre los que se incluye el turismo y las comunicaciones"
    ],
    correct: [3],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 116,
    type: "single",
    text: "Si una familia decide vender sus acciones para comprar una casa pero tarda meses en encontrarla, ¿qué función cumple el dinero mientras tanto?",
    options: [
      "Unidad de cuenta",
      "Patrón de pagos diferidos",
      "Medio de cambio",
      "Depósito de valor"
    ],
    correct: [3],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 117,
    type: "single",
    text: "Cuando el Banco Central de la República Argentina (BCRA) aumenta el encaje legal, se puede observar que:",
    options: [
      "Hay una mayor liquidez en la economía.",
      "Hay una menor liquidez en la economía.",
      "La liquidez de la economía se mantiene constante y los bancos comerciales tienen mayor rentabilidad.",
      "La liquidez de la economía se mantiene constante y los bancos comerciales tienen menor rentabilidad."
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 118,
    type: "tf",
    text: "El estado interviene en la distribución de la riqueza a través del sistema impositivo; de gastos y transferencias; directamente en el control de precios estableciendo precios máximos y precios mínimos. Se puede medir la distribución de la riqueza a través de la Curva de Lorenz.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 120,
    type: "single",
    text: "La diferencia entre el PBI y el PBN radica en:",
    options: [
      "Las importaciones",
      "Los servicios reales y financieros netos",
      "a) y b) son correctas",
      "Ninguna es correcta"
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 121,
    type: "single",
    text: "¿Cuál es la consecuencia común de la incertidumbre generada por una tasa de inflación muy alta?",
    options: [
      "Los consumidores tienen mayor claridad sobre qué bienes son baratos",
      "Se produce un aumento generalizado del ahorro en moneda nacional",
      "Los precios pueden variar abruptamente perjudicando la planificación de inversiones",
      "El Estado reduce automáticamente su deuda real sin esfuerzo fiscal"
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 122,
    type: "single",
    text: "Los bancos comerciales, tanto públicos como privados:",
    options: [
      "Miden su rentabilidad a través del spread bancario que se calcula como la diferencia entre la tasa de encaje y la tasa de interés",
      "Determinan la tasa de encaje legal que se aplica en el sector financiero según sus necesidades técnicas de credibilidad",
      "Realizan tareas de intermediación financiera, según normas del BCRA que es la autoridad del sector financiero",
      "Participan en la determinación de la Demanda Monetaria a través de los préstamos que otorgan"
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 123,
    type: "tf",
    text: "Ante una disminución del tipo de cambio oficial del peso en relación al euro, se considera que el peso se devalúa.",
    options: ["Verdadero", "Falso"],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 124,
    type: "tf",
    text: "Se afirma que la inflación de costos es aquella que trabaja con dos sectores: agropecuario e industrial, donde existen factores estructurales que determinan un bajo rendimiento.",
    options: ["Verdadero", "Falso"],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 125,
    type: "single",
    text: "El tipo de cambio:",
    options: [
      "Comprador menos Vendedor es la cantidad de pesos necesaria para adquirir un dólar",
      "Es el precio de la divisa e indica su abundancia o escasez relativa",
      "Nominal es un indicador del precio de una canasta de bienes y servicios de un país respecto de otro",
      "Real es el costo de la intermediación del agente cambiario"
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 127,
    type: "single",
    text: "En economía, a través de la intervención estatal:",
    options: [
      "Se regulan procedimientos, productos y mercados",
      "Los precios máximos benefician a los productores",
      "Solamente se establecen precios máximos",
      "Establece el funcionamiento de la Administración Pública"
    ],
    correct: [0],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 128,
    type: "single",
    text: "Ante un aumento inflacionario de precios:",
    options: [
      "Se observa una disminución del poder adquisitivo del ingreso afectando en menor medida a los asalariados.",
      "Es posible medirlo mediante un índice de precios que refleje el incremento de los precios de una canasta de bienes y servicios.",
      "El poder adquisitivo del ingreso disponible de los consumidores se mantiene porque los salarios aumentan en igual proporción.",
      "Aquellos que cuentan con menores ingresos tienden a invertir en bienes inmuebles o moneda extranjera."
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 129,
    type: "single",
    text: "El Producto Bruto Interno (PBI) se define como la sumatoria de:",
    options: [
      "Valor Agregado Neto y Exportaciones Netas.",
      "Valor Agregado Bruto de Productos Finales.",
      "Consumo de las empresas del sector privado y Gasto del sector público.",
      "Valor Agregado Bruto menos Depreciaciones."
    ],
    correct: [1],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 131,
    type: "single",
    text: "La teoría de las ventajas comparativas:",
    options: [
      "No nos permite predecir la dirección del comercio internacional, sólo suponer un modelo de especialización.",
      "Fundamenta el comercio internacional solo en función del gusto y las costumbres de los países.",
      "Se basa en un intercambio según su eficiencia comparativa y relativa y permite predecir la dirección del comercio internacional.",
      "Sostiene que, cuando un país A es más eficiente que un país B en todos los bienes que produce, no le conviene intercambiar con el país B."
    ],
    correct: [2],
    explanation: "Fuente: banco de preguntas Daypo (respuesta marcada como correcta en el test)."
  },
  {
    id: 132,
    type: "single",
    text: "¿Cuál es la definición de Renta Nacional desde la perspectiva del Ingreso?",
    options: [
      "Es el presupuesto total aprobado por el Congreso para el gasto público",
      "Es la suma de todo lo gastado por las familias en bienes de consumo durables",
      "Es la suma de rentas o ingresos de los factores de la producción (salarios, beneficios, etc.)",
      "Es el valor total de las Exportaciones netas de un país en un año"
    ],
    correct: [2],
    explanation: "Desde el enfoque del ingreso, la Renta Nacional suma las rentas de los factores de la producción: salarios, alquileres, intereses y beneficios. (Clave deducida: el documento original no traía la respuesta marcada.)"
  },
  {
    id: 133,
    type: "single",
    text: "Son funciones del Banco Central de la República Argentina (BCRA):",
    options: [
      "Desarrollar y ejecutar la Política Fiscal.",
      "Evaluar y corregir el equilibrio fiscal.",
      "Registrar las transacciones de la balanza de pagos.",
      "Emitir moneda de curso legal, emisión primaria, y regular la emisión secundaria de los bancos comerciales públicos y privados."
    ],
    correct: [3],
    explanation: "El BCRA emite moneda de curso legal (emisión primaria) y regula la emisión secundaria de los bancos comerciales. La política fiscal le corresponde al Poder Ejecutivo. (Clave deducida: el documento original no traía la respuesta marcada.)"
  },
  {
    id: 134,
    type: "single",
    text: "En la Balanza de Pagos, ¿qué registro incluye las transacciones de bienes, servicios y transferencias corrientes?",
    options: [
      "Presupuesto Nacional",
      "Cuenta de Capital",
      "Reservas Internacionales",
      "Cuenta corriente"
    ],
    correct: [3],
    explanation: "La cuenta corriente registra el comercio de bienes y servicios y las transferencias corrientes. (Clave deducida: el documento original no traía la respuesta marcada.)"
  },
  {
    id: 135,
    type: "single",
    text: "¿En qué consiste la Ley de un solo precio vinculada a la Paridad de Poder Adquisitivo?",
    options: [
      "Asegura que el PBI de los países pobres sea igual al de los países ricos cuando se mide en dólares nominales",
      "Es una ley gubernamental que prohíbe la inflación de bienes finales en economías abiertas",
      "Dictamina que el tipo de cambio nominal debe ser siempre igual a la tasa de inflación acumulada anual",
      "Establece que, en ausencia de barreras, un bien idéntico debe venderse al mismo precio en todos los países al expresarse en la misma moneda"
    ],
    correct: [3],
    explanation: "Sin barreras ni costos de transporte, un bien idéntico se vende al mismo precio en todos los países al expresarlo en una misma moneda. Es la base de la PPA. (Clave deducida: el documento original no traía la respuesta marcada.)"
  },
  {
    id: 136,
    type: "single",
    text: "En el Sistema Tributario Argentino:",
    options: [
      "Sólo la Nación puede cobrar impuestos.",
      "Las provincias sólo cobran tasas.",
      "Los municipios cobran tasas, por ejemplo, alumbrado público.",
      "Los municipios no tienen facultades tributarias."
    ],
    correct: [2],
    explanation: "Los municipios cobran tasas por los servicios que prestan, como el alumbrado público. Nación, provincias y municipios tienen facultades tributarias. (Clave deducida: el documento original no traía la respuesta marcada.)"
  },
  {
    id: 137,
    type: "single",
    text: "La moneda y el dinero conceptualmente…",
    options: [
      "… surgen cuando una sociedad avanza desde una economía de subsistencia hacia otra economía de intercambio.",
      "… son necesarias para el pago de las operaciones de comercio internacional.",
      "… son herramientas de trueque.",
      "… se emiten como medio de pago de impuestos."
    ],
    correct: [0],
    explanation: "La moneda y el dinero surgen cuando la sociedad pasa de una economía de subsistencia a una de intercambio, para superar las limitaciones del trueque. (Clave deducida: el documento original no traía la respuesta marcada.)"
  }
];

if (typeof ALL_QUESTIONS !== "undefined") {
  ALL_QUESTIONS.push(...PREGUNTAS_2);
} else {
  window.ALL_QUESTIONS = PREGUNTAS_2;
}
