// Tipos: "single" (una opción), "multi" (casillas), "tf" (verdadero/falso), "text" (respuesta escrita)
// correct: posiciones desde 0 · answers: respuestas aceptadas en "text" · explanation: justificaciones UV
const ALL_QUESTIONS = [
  // ==========================================
  // BLOQUE 1: BANCO 2026 (50 PREGUNTAS)
  // ==========================================
  {
    id: 1,
    type: "single",
    text: "El Banco Central de la República Argentina (BCRA) pone en circulación $ 900.000 millones, de los cuales, el 20% se encuentra en reservas en los bancos. El BCRA ha realizado créditos al Estado por el 30% de la Base Monetaria (BM), créditos al sector financiero por el 20% de la BM y tiene reservas propias por el 20% de la BM. En un momento determinado, el Estado solicita un crédito por $ 150.000. PREGUNTA: ¿Cuál es el monto inicial de los créditos otorgados por el BCRA al Estado?",
    options: ["$420.000 millones.", "$180.000 millones.", "$150.000 millones.", "$270.000 millones."],
    correct: [3],
    explanation: "Justificación UV: Los créditos al Estado representan el 30% de la base monetaria inicial: 900.000 × 0,30 = 270.000 millones. (Nota: en el aula virtual figuraba erróneamente tildada 420.000 como clave de sistema, pero su propia justificación matemática ratifica 270.000 millones)."
  },
  {
    id: 2,
    type: "single",
    text: "En la estructura del Sistema Impositivo Argentino, ¿cuál es el organismo autárquico encargado de la aplicación, percepción y fiscalización de tributos a nivel nacional?",
    options: [
      "El Ministerio de Trabajo, Empleo y Seguridad Social.",
      "La Sindicatura General de la Nación (SIGEN).",
      "El Banco Central de la República Argentina (BCRA).",
      "La Agencia de Recaudación y Control Aduanero (ARCA)."
    ],
    correct: [3],
    explanation: "Justificación UV: ARCA es el organismo autárquico del Estado nacional encargado de administrar, percibir y fiscalizar los tributos (reemplazante institucional de la ex AFIP)."
  },
  {
    id: 3,
    type: "single",
    text: "Según la clasificación impositiva sobre qué recae la obligación, ¿cuál de los siguientes es un ejemplo de impuesto directo?",
    options: [
      "El Impuesto al Valor Agregado (IVA)",
      "Los impuestos internos aplicados al consumo de bebidas alcohólicas.",
      "El Impuesto a las Ganancias y a los Bienes Personales",
      "Los derechos de importación aplicados en aduana"
    ],
    correct: [2],
    explanation: "Justificación UV: El impuesto a las Ganancias y a los Bienes Personales grava directamente la renta y el patrimonio del sujeto pasivo. El IVA y los aranceles son impuestos indirectos."
  },
  {
    id: 4,
    type: "single",
    text: "Si el Banco Central decide comprar bonos del Estado en el mercado abierto, ¿qué efecto directo se produce?",
    options: [
      "Reduce la Base Monetaria al retirar billetes de circulación a cambio de los papeles públicos.",
      "Aumenta la oferta monetaria inyectando liquidez al mercado, lo que tiende a bajar la tasa de interés.",
      "Aumenta la tasa de encaje bancario automáticamente para compensar la operación.",
      "Contrae el crédito al sector público al exigir la cancelación de los pasivos estatales."
    ],
    correct: [1],
    explanation: "Justificación UV: Al comprar bonos, el Banco Central entrega dinero a cambio de títulos públicos, inyectando liquidez en el mercado, lo cual expande la oferta monetaria y tiende a disminuir la tasa de interés."
  },
  {
    id: 5,
    type: "single",
    text: "A diferencia del Índice de Precios al Consumidor (IPC), ¿cuál es la característica distintiva del Deflactor del PBI como indicador de precios?",
    options: [
      "Refleja los precios de todos los bienes y servicios de la economía (consumo, mayoristas, capital y sector público) al ser el cociente entre el PBI nominal y el PBI real.",
      "Mide únicamente la evolución de los precios de la canasta familiar básica consumida por los hogares.",
      "Mide de manera única las variaciones de los bienes manufacturados importados para consumo final.",
      "Evalúa exclusivamente los costos de insumos de la construcción privada de viviendas urbanas."
    ],
    correct: [0],
    explanation: "Justificación UV: El Deflactor del PBI abarca la totalidad de los componentes del producto nacional, capturando una cobertura más amplia que la canasta de consumo del IPC."
  },
  {
    id: 6,
    type: "single",
    text: "En la teoría de la inflación estructural, ¿por qué razón el gobierno decide incrementar la oferta monetaria y convalidar el proceso de alza de precios?",
    options: [
      "Ante la rigidez de la oferta agropecuaria para responder al crecimiento, suben los precios de los alimentos y los salarios; el gobierno emite para evitar la recesión y el desempleo.",
      "Para sostener un esquema ortodoxo estricto de metas de inflación a largo plazo.",
      "Porque busca neutralizar de forma directa el impacto del Índice de Precios Mayoristas sobre las importaciones.",
      "Para elevar el poder adquisitivo real de los trabajadores sin alterar los precios de los industriales."
    ],
    correct: [0],
    explanation: "Justificación UV: El enfoque estructuralista plantea que ante presiones de precios causadas por rigideces de oferta y disputas distributivas, el gobierno prefiere convalidar la inflación emitiendo dinero antes que provocar una crisis de empleo."
  },
  {
    id: 7,
    type: "single",
    text: "¿Cómo se define formalmente la Base Monetaria (o emisión primaria) en el sistema financiero?",
    options: [
      "Como el volumen total de créditos otorgados por las compañías financieras del sistema privado.",
      "Como la diferencia entre la tasa de interés activa y la tasa de interés pasiva cobrada por la banca.",
      "Como la suma del efectivo en poder del público más las reservas bancarias (efectivo en bancos y depósitos en el Banco Central).",
      "Como los depósitos a plazo fijo sumados a las reservas de divisas del sector externo."
    ],
    correct: [2],
    explanation: "Justificación UV: Refleja la composición de la Base Monetaria (BM = Cp + RTb), la cual abarca el circulante fuera del Banco Central y los encajes o reservas bancarias."
  },
  {
    id: 8,
    type: "single",
    text: "En el contexto de la inflación de costos, ¿qué sucede si se produce un incremento salarial sin un aumento equivalente en la productividad del trabajo?",
    options: [
      "Aumenta el costo salarial unitario por producto, impulsando al empresario a trasladar el costo a los precios finales o a buscar financiamiento con interés.",
      "La masa monetaria se contrae espontáneamente para compensar el alza de los sueldos.",
      "Se genera un equilibrio inmediato en la balanza de pagos sin alterar los márgenes de ganancia de las empresas.",
      "Se reduce automáticamente el precio final al consumidor debido a la mayor eficiencia marginal del capital."
    ],
    correct: [0],
    explanation: "Justificación UV: Al no aumentar la cantidad de producto por trabajador, el costo laboral unitario sube, trasladándose al precio de venta o requiriendo crédito bancario que genera más costos financieros."
  },
  {
    id: 9,
    type: "single",
    text: "¿Qué caracteriza a las \"transferencias\" realizadas por el sector público dentro del gasto estatal?",
    options: [
      "Son retribuciones otorgadas a proveedores privados a cambio de insumos corrientes.",
      "Constituyen inversiones financieras destinadas a la adquisición de acciones en el extranjero.",
      "Son pagos realizados a personas o instituciones sin recibir una contraprestación directa de bienes o servicios a cambio.",
      "Son desembolsos dedicados exclusivamente a la compra de maquinaria e infraestructura pública."
    ],
    correct: [2],
    explanation: "Justificación UV: Las transferencias consisten en erogaciones (como subsidios o jubilaciones) donde el receptor no entrega un producto o servicio directo al Estado como contraprestación."
  },
  {
    id: 10,
    type: "single",
    text: "¿Cuál es una de las razones del intercambio comercial vinculada a la existencia de \"Economías de Escala\"?",
    options: [
      "La reducción de los costos unitarios mediante producciones masivas y el uso de tecnologías avanzadas.",
      "Las discrepancias culturales en los gustos y preferencias de consumo entre países.",
      "La mera abundancia o dotación heterogénea de recursos minerales e hídricos en el territorio.",
      "La aplicación restrictiva de aranceles y cuotas a la importación por parte del gobierno."
    ],
    correct: [0],
    explanation: "Justificación UV: Las economías de escala permiten aprovechar costos unitarios decrecientes al expandir la producción, incentivando la especialización y el comercio exterior."
  },
  {
    id: 11,
    type: "single",
    text: "¿Cuál es el rasgo definitorio fundamental que contrapone al Sector Público respecto del Sector Privado?",
    options: [
      "El Sector Público representa la propiedad pública y emana la política económica, mientras que el Privado representa la propiedad individual o empresarial.",
      "El Sector Público opera sin marco legal ni regulaciones, mientras que el Privado está regido por leyes gubernamentales.",
      "El Sector Público no puede contraer deudas financieras, a diferencia de las empresas privadas.",
      "El Sector Público busca maximizar ganancias financieras, mientras que el Privado financia bienes públicos no rentables."
    ],
    correct: [0],
    explanation: "Justificación UV: El sector público es conducido por el Estado para guiar la economía y proveer bienes públicos, en contraste con la propiedad y gestión privada individual o empresarial."
  },
  {
    id: 12,
    type: "single",
    text: "Durante periodos inflacionarios, cuando los ingresos nominales de las personas aumentan pero sus ingresos reales no cambian, ¿qué fenómeno tributario suele ocurrir?",
    options: [
      "Quedan exentas automáticamente del pago de impuestos a las ganancias y sobre los bienes personales.",
      "Pasan a categorías superiores de aportes, sufriendo una reducción en su ingreso disponible mediante un impuesto encubierto.",
      "Se reduce el déficit público sin afectar la distribución de la renta ni la tasa de interés.",
      "Aumenta su poder adquisitivo debido al incremento automático de los incentivos fiscales al consumo."
    ],
    correct: [1],
    explanation: "Justificación UV: Este fenómeno (arrastre fiscal) distorsiona la distribución del ingreso; al elevarse los tramos nominales, se tributan alícuotas más altas sin haber aumentado la capacidad real."
  },
  {
    id: 13,
    type: "single",
    text: "¿Qué diferencia fundamental existe entre un banco comercial y un intermediario financiero no bancario?",
    options: [
      "Los bancos comerciales no están sujetos a la regulación ni supervisión del Banco Central.",
      "Los bancos comerciales solo pueden captar fondos del sector público y no de clientes particulares.",
      "Los intermediarios no bancarios no tienen capacidad para crear dinero bancario (emisión secundaria).",
      "Los intermediarios no bancarios poseen el monopolio de la emisión de billetes y monedas de curso legal."
    ],
    correct: [2],
    explanation: "Justificación UV: Señala la distinción clave: mientras la banca comercial genera dinero bancario por medio de depósitos y préstamos, las entidades no bancarias no tienen esa capacidad."
  },
  {
    id: 14,
    type: "single",
    text: "El Banco Central de la República Argentina (BCRA) pone en circulación $ 900.000 millones, de los cuales, el 20% se encuentra en reservas en los bancos. El BCRA ha realizado créditos al Estado por el 30% de la Base Monetaria (BM), créditos al sector financiero por el 20% de la BM y tiene reservas propias por el 20% de la BM. En un momento determinado, el Estado solicita un crédito por $ 150.000. ¿En qué porcentaje aumenta la base monetaria respecto de su valor inicial?",
    options: ["10%", "16,67%", "15%", "20%"],
    correct: [1],
    explanation: "Justificación UV: La variación porcentual es (150.000 / 900.000) × 100 = 16,67%. La nueva base monetaria representa el 116,67% de su valor inicial."
  },
  {
    id: 15,
    type: "single",
    text: "En el marco del análisis del desarrollo, ¿qué caracterizaba al concepto tradicional de \"desarrollo sostenido\" frente al desarrollo sostenible?",
    options: [
      "La utilización constante e irracional de los recursos naturales sin prever su capacidad de recuperación.",
      "La medición del crecimiento económico ajustado por la brecha de desigualdad social.",
      "La incorporación rigurosa de principios de economía circular y reciclaje masivo.",
      "El uso prioritario de impuestos sobre las emisiones de carbono y subvenciones verdes."
    ],
    correct: [0],
    explanation: "Justificación UV: El enfoque extractivo tradicional ('desarrollo sostenido') buscaba maximizar el crecimiento cuantitativo sin contemplar la capacidad de regeneración de los ecosistemas."
  },
  {
    id: 16,
    type: "single",
    text: "¿Qué instrumento contable recopila estadísticamente el conjunto de transacciones económicas entre residentes de un país y el resto del mundo?",
    options: [
      "El Censo Económico Nacional.",
      "El Índice de Desarrollo Humano.",
      "La Balanza de Pagos.",
      "El Presupuesto del Sector Público."
    ],
    correct: [2],
    explanation: "Justificación UV: La Balanza de Pagos es el registro sistemático de todas las operaciones comerciales, de servicios y financieras con el exterior en un período determinado."
  },
  {
    id: 17,
    type: "single",
    text: "Dentro de las funciones del Estado, ¿cómo se ejerce principalmente la función de \"redistribuir la renta\"?",
    options: [
      "Emitiendo títulos de deuda pública destinados a absorber el crédito excedente del sector privado.",
      "Eliminando todos los subsidios y dejando que el libre mercado determine los salarios absolutos.",
      "Mediante el uso de transferencias, asistencia social e impuestos progresivos que modifican la capacidad de consumo.",
      "Fijando precios máximos únicamente para los bienes de capital importados por el sector industrial."
    ],
    correct: [2],
    explanation: "Justificación UV: El Estado capta fondos según la capacidad contributiva de los ciudadanos y los reasigna a través de asistencia social y transferencias para reducir desigualdades."
  },
  {
    id: 18,
    type: "single",
    text: "¿Cuál es el objetivo principal y la consecuencia directa de aplicar una política monetaria restrictiva o contractiva?",
    options: [
      "Aumentar la emisión secundaria para abaratar el costo del crédito y acelerar el consumo.",
      "Reducir el crecimiento de la cantidad de dinero para frenar presiones en los precios, lo que eleva la tasa de interés.",
      "Aumentar la cantidad de divisas en las reservas mediante la compra directa sin emisión de moneda.",
      "Incrementar los depósitos mediante una reducción drástica del encaje legal de los bancos."
    ],
    correct: [1],
    explanation: "Justificación UV: La política contractiva busca retirar o limitar la liquidez para controlar la inflación, haciendo el dinero más caro y elevando la tasa de interés."
  },
  {
    id: 19,
    type: "single",
    text: "¿Qué función cumple la denominada \"Cuenta de Inversión\" en la gestión presupuestaria estatal?",
    options: [
      "Reflejar la ejecución presupuestaria efectivamente realizada para ser sometida a aprobación por ley.",
      "Autorizar los límites máximos de endeudamiento externo del Banco Central.",
      "Prever los ingresos que se recaudarán durante el próximo ciclo fiscal.",
      "Registrar los fondos fiduciarios creados exclusivamente para obras públicas."
    ],
    correct: [0],
    explanation: "Justificación UV: La cuenta de inversión rinde cuentas al Poder Legislativo sobre cómo se ejecutaron los recursos y gastos autorizados en la ley de presupuesto."
  },
  {
    id: 20,
    type: "single",
    text: "El Banco Central de la República Argentina (BCRA) pone en circulación $ 900.000 millones, de los cuales, el 20% se encuentra en reservas en los bancos. El BCRA ha realizado créditos al Estado por el 30% de la Base Monetaria (BM), créditos al sector financiero por el 20% de la BM y tiene reservas propias por el 20% de la BM. En un momento determinado, el Estado solicita un crédito por $ 150.000. PREGUNTA: ¿Cuánto dinero se encuentra inicialmente en poder del público?",
    options: ["$180.000 millones.", "$900.000 millones.", "$630.000 millones.", "$720.000 millones."],
    correct: [3],
    explanation: "Justificación UV: La base monetaria se integra por efectivo en poder del público y reservas bancarias. Por lo tanto: 900.000 - 180.000 (20%) = 720.000 millones."
  },
  {
    id: 21,
    type: "single",
    text: "¿Cuál es el fenómeno económico definido por la coexistencia de estancamiento de la actividad, incremento del desempleo y alza persistente de precios?",
    options: ["Estanflación.", "Inflación de demanda.", "Deflación de costos.", "Inflación galopante."],
    correct: [0],
    explanation: "Justificación UV: La estanflación combina la recesión o estancamiento económico con la inflación, generando desempleo y distorsiones simultáneas en el mercado."
  },
  {
    id: 22,
    type: "single",
    text: "Si el tipo de cambio nominal pasa de $1.000 a $1.200 por dólar, mientras los precios internos y externos permanecen constantes, ¿qué sucede con el tipo de cambio real?",
    options: ["Disminuye un 20%.", "Permanece constante.", "Aumenta un 200%.", "Aumenta un 20%."],
    correct: [3],
    explanation: "Justificación UV: Definiendo el tipo de cambio real como TCR = E × P* / P, si ambos niveles de precios permanecen constantes, el TCR aumenta en la misma proporción que E: (1.200 - 1.000) / 1.000 = 20%. Es una depreciación real."
  },
  {
    id: 23,
    type: "single",
    text: "¿Cuál de las siguientes situaciones representa un proceso de creación secundaria de dinero?",
    options: [
      "El Banco Central compra divisas emitiendo base monetaria.",
      "Un banco comercial otorga un préstamo y acredita el importe en la cuenta del prestatario.",
      "El Gobierno recauda impuestos.",
      "El Banco Central imprime nuevos billetes."
    ],
    correct: [1],
    explanation: "Justificación UV: Los bancos comerciales crean dinero bancario cuando conceden préstamos y acreditan depósitos. Esa expansión constituye creación secundaria de dinero."
  },
  {
    id: 24,
    type: "single",
    text: "¿A qué categoría pertenece el Impuesto al Valor Agregado (IVA) según el objeto sobre el que recae la obligación impositiva?",
    options: [
      "Contribución especial destinada al financiamiento de obras viales.",
      "Impuesto indirecto sobre bienes y servicios (consumo).",
      "Impuesto directo sobre ganancias de capital y herencias.",
      "Impuesto plano sobre la titularidad de bienes inmuebles."
    ],
    correct: [1],
    explanation: "Justificación UV: El IVA grava la venta y prestación de servicios a lo largo del proceso económico, trasladándose hasta el consumidor final."
  },
  {
    id: 25,
    type: "single",
    text: "¿Cuál de los siguientes aspectos constituye una limitación explícita del PBI como indicador de bienestar económico?",
    options: [
      "La omisión del trabajo no remunerado en el hogar y de la economía informal o sumergida.",
      "La imposibilidad de sumar los bienes finales producidos por el sector servicios.",
      "La deducción automática de los costos ambientales y la contaminación.",
      "La exclusión de la producción generada por empresas extranjeras dentro del territorio nacional."
    ],
    correct: [0],
    explanation: "Justificación UV: El PBI mide la actividad de mercado pero ignora el trabajo doméstico no remunerado, la economía sumergida y no descuenta las externalidades negativas."
  },
  {
    id: 26,
    type: "single",
    text: "¿Cuál de las siguientes afirmaciones distingue correctamente la creación primaria de la creación secundaria de dinero?",
    options: [
      "La creación primaria aumenta la base monetaria, mientras que la secundaria puede originarse mediante préstamos y creación de depósitos de los bancos comerciales.",
      "La creación primaria corresponde exclusivamente a los bancos comerciales.",
      "La creación secundaria se produce cuando el BCRA imprime billetes.",
      "La creación secundaria implica necesariamente una reducción de la base monetaria."
    ],
    correct: [0],
    explanation: "Justificación UV: La creación primaria corresponde al Banco Central y se vincula con la emisión de base monetaria. La secundaria corresponde al crédito y depósitos de la banca comercial."
  },
  {
    id: 27,
    type: "single",
    text: "¿Cuál es la característica principal que diferencia a una tasa de un impuesto tradicional?",
    options: [
      "La tasa se rige únicamente por la progresividad del nivel de consumo general.",
      "La tasa requiere la existencia de una contraprestación o actividad jurídica específica por parte del Estado hacia el contribuyente.",
      "La tasa no puede ser cobrada por municipios, sino únicamente por el gobierno nacional.",
      "La tasa se aplica exclusivamente sobre la renta anual percibida por las personas físicas."
    ],
    correct: [1],
    explanation: "Justificación UV: Las tasas se distinguen por estar vinculadas a la prestación directa, efectiva o potencial de un servicio público específico e individualizado hacia el contribuyente."
  },
  {
    id: 28,
    type: "single",
    text: "¿Qué ajuste distingue fundamentalmente al denominado \"PBI verde\" del PBI convencional?",
    options: [
      "Multiplica el PBI real por el índice de crecimiento de la población urbana.",
      "Resta del PBI el valor monetario de los recursos naturales deteriorados y la contaminación.",
      "Sustrae la totalidad del gasto público destinado a subvenciones energéticas.",
      "Añade al PBI el total de importaciones de bienes tecnológicos limpios."
    ],
    correct: [1],
    explanation: "Justificación UV: El PBI verde busca reflejar el costo ecológico descontando el agotamiento de recursos naturales y la degradación ambiental generada por la producción."
  },
  {
    id: 29,
    type: "single",
    text: "¿En qué consiste el 'spread' bancario que obtienen los bancos comerciales en su actividad?",
    options: [
      "Es la diferencia entre la tasa activa (cobrada por los préstamos) y la tasa pasiva (pagada por los depósitos).",
      "Es el porcentaje de depósitos que los bancos comerciales deben mantener congelados por ley.",
      "Es la tasa de interés fijada por el Banco Central para otorgar redescuentos a las entidades financieras.",
      "Es la relación matemática entre el valor de las reservas de oro del Banco Central y el circulante."
    ],
    correct: [0],
    explanation: "Justificación UV: Define el margen financiero bruto resultante de la intermediación entre el costo de captar fondos y el rendimiento obtenido al prestarlos."
  },
  {
    id: 30,
    type: "single",
    text: "¿Qué distingue a un impuesto progresivo de uno proporcional?",
    options: [
      "En el impuesto progresivo, el monto computable permanece totalmente fijo sin importar el ingreso del individuo.",
      "En el impuesto progresivo, la tasa impositiva aumenta a medida que se incrementa la base imponible.",
      "El impuesto progresivo se aplica únicamente sobre el consumo de bienes de primera necesidad.",
      "El impuesto progresivo reduce la alícuota aplicable a medida que la riqueza del sujeto pasivo asciende."
    ],
    correct: [1],
    explanation: "Justificación UV: En la estructura progresiva, la alícuota requerida aumenta a la par de la base imponible, buscando la equidad distributiva."
  },
  {
    id: 31,
    type: "single",
    text: "¿Cómo se define el Producto Bruto Nacional (PBN) a partir del Producto Bruto Interno (PBI)?",
    options: [
      "Sumando el consumo privado y restando el gasto público del PBI.",
      "Multiplicando el PBI nominal por el nivel general de precios del mercado exterior.",
      "Sumando o restando al PBI el saldo de remesas externas o remuneración neta de factores productivos.",
      "Restando únicamente la depreciación del capital fijo al PBI total."
    ],
    correct: [2],
    explanation: "Justificación UV: El PBN ajusta la producción territorial del PBI incorporando las rentas de factores nacionales en el exterior y descontando las rentas de factores extranjeros en el país."
  },
  {
    id: 32,
    type: "single",
    text: "¿Cómo se define la finalidad extrafiscal de un impuesto?",
    options: [
      "Pretende reemplazar las contribuciones especiales mediante aranceles a la importación.",
      "Financia de forma exclusiva los salarios corrientes y gastos operativos del personal público.",
      "Busca satisfacer directamente una necesidad pública, orientada a disuadir el consumo de un bien o fomentar una actividad económica.",
      "Tiene como único objetivo recaudar ingresos genuinos para cubrir el déficit financiero estatal."
    ],
    correct: [2],
    explanation: "Justificación UV: La finalidad extrafiscal utiliza el tributo para influir de forma directa en conductas, incentivos o desincentivos de la sociedad (ej. impuestos al tabaco o ambientales)."
  },
  {
    id: 33,
    type: "single",
    text: "El Banco Central de la República Argentina (BCRA) pone en circulación $ 900.000 millones, de los cuales, el 20% se encuentra en reservas en los bancos. El BCRA ha realizado créditos al Estado por el 30% de la Base Monetaria (BM), créditos al sector financiero por el 20% de la BM y tiene reservas propias por el 20% de la BM. En un momento determinado, el Estado solicita un crédito por $ 150.000. ¿Cuál es el valor total de los activos expresamente identificados en el enunciado antes del nuevo crédito?",
    options: ["$450.000 millones.", "$630.000 millones.", "$900.000 millones.", "$720.000 millones."],
    correct: [1],
    explanation: "Justificación UV: Se suman créditos al Estado (270.000), créditos al sector financiero (180.000) y reservas propias (180.000). El total es 630.000 millones."
  },
  {
    id: 34,
    type: "single",
    text: "Un impuesto cuyo hecho imponible se detecta en un momento puntual, como la compraventa de un inmueble, se clasifica como:",
    options: [
      "Impuesto instantáneo.",
      "Impuesto progresivo de flujo continuo.",
      "Impuesto periódico.",
      "Tasa divisible de registro."
    ],
    correct: [0],
    explanation: "Justificación UV: Los impuestos instantáneos se perfeccionan en un acto o momento determinado del tiempo, como la transferencia de dominio de un bien."
  },
  {
    id: 35,
    type: "single",
    text: "¿Por qué el Estado suele intervenir regulando o prestando servicios directos en los llamados \"monopolios naturales\"?",
    options: [
      "Para impedir que las empresas privadas realicen inversiones en activos de capital a largo plazo.",
      "Porque estas empresas carecen por completo de tecnología para producir bienes de consumo masivo.",
      "Para garantizar que los productos exportables mantengan ventajas comparativas internacionales.",
      "Debido a que presentan elevadas infraestructuras y costos fijos muy altos que desincentivan la competencia eficiente."
    ],
    correct: [3],
    explanation: "Justificación UV: La presencia de costos fijos masivos e infraestructura indivisible hace que una sola entidad sea más eficiente a gran escala, requiriendo regulación para evitar fijación abusiva de tarifas."
  },
  {
    id: 36,
    type: "single",
    text: "¿A qué hace referencia específica el concepto de \"Déficit Cuasi Fiscal\"?",
    options: [
      "A las deudas comerciales acumuladas exclusivamente por las empresas provinciales de servicios públicos.",
      "A las pérdidas y operaciones monetarias generadas por la actividad del Banco Central y la emisión monetaria.",
      "Al desfasaje de caja temporal entre la recolección de impuestos directos e indirectos.",
      "Al presupuesto no ejecutado por los ministerios al cierre del año fiscal."
    ],
    correct: [1],
    explanation: "Justificación UV: El déficit cuasi fiscal surge de los pasivos remunerados y pérdidas financieras operativas de la propia autoridad monetaria (BCRA)."
  },
  {
    id: 37,
    type: "single",
    text: "¿Cuál de los siguientes conceptos corresponde al activo del balance del BCRA?",
    options: [
      "Los créditos otorgados al Estado.",
      "El efectivo emitido en circulación.",
      "La base monetaria.",
      "Las reservas de los bancos comerciales depositadas en el BCRA."
    ],
    correct: [0],
    explanation: "Justificación UV: Los créditos otorgados al Estado constituyen derechos de cobro del Banco Central y se registran en su activo. La base monetaria y encajes son pasivos monetarios."
  },
  {
    id: 38,
    type: "single",
    text: "¿Cuál es la principal diferencia entre la emisión primaria y la emisión secundaria de dinero?",
    options: [
      "La emisión primaria la realiza exclusivamente el Banco Central, mientras que la secundaria la generan los bancos comerciales mediante la concesión de créditos.",
      "La emisión primaria incluye los depósitos bancarios a plazo, mientras que la secundaria solo abarca billetes y monedas en circulación.",
      "La emisión secundaria equivale a la Base Monetaria, mientras que la primaria representa la Oferta Monetaria total de la economía.",
      "La emisión primaria tiene un efecto multiplicador de 1 a 3 en los depósitos, mientras que la emisión secundaria es de efecto directo 1 a 1."
    ],
    correct: [0],
    explanation: "Justificación UV: Afirma el principio de que la creación primaria proviene de la autoridad monetaria central, mientras que la secundaria surge de la expansión crediticia de los bancos."
  },
  {
    id: 39,
    type: "single",
    text: "¿Cómo afecta un incremento en la tasa de encaje legal (o exigencia de reservas) al multiplicador del dinero?",
    options: [
      "Reduce el multiplicador del dinero, disminuyendo la capacidad de generación de emisión secundaria.",
      "Elimina la capacidad del Banco Central para controlar la liquidez del mercado monetario.",
      "Mantiene inalterado el multiplicador, afectando únicamente a la cantidad de dinero emitida por el gobierno.",
      "Aumenta el multiplicador del dinero, expandiendo la Oferta Monetaria a un efecto mayor."
    ],
    correct: [0],
    explanation: "Justificación UV: Al requerir un mayor porcentaje de reserva retenida, disminuye la proporción de depósitos prestables, contrayendo la creación de dinero bancario."
  },
  {
    id: 40,
    type: "single",
    text: "¿En qué consisten las operaciones de redescuento realizadas por el Banco Central?",
    options: [
      "Son ventas transitorias de divisas con el compromiso de reventa al mismo tipo de cambio.",
      "Son préstamos que el Banco Central concede a las entidades bancarias para cubrir diferencias transitorias de caja.",
      "Son bonificaciones en las tasas activas cobradas a pequeños ahorristas en cajas de ahorro.",
      "Son quitas impositivas que el Estado otorga al sector privado para estimular las exportaciones."
    ],
    correct: [1],
    explanation: "Justificación UV: El redescuento es una línea de asistencia de liquidez que el BCRA abre para auxilio transitorio del sistema bancario."
  },
  {
    id: 41,
    type: "single",
    text: "¿Cuál de las siguientes operaciones se registra como un crédito en la cuenta corriente de la balanza de pagos de Argentina?",
    options: [
      "Una empresa argentina importa maquinaria de Alemania.",
      "Una empresa argentina exporta productos agrícolas a Brasil.",
      "Un residente argentino compra acciones de una empresa extranjera.",
      "El Gobierno argentino amortiza capital de una deuda externa."
    ],
    correct: [1],
    explanation: "Justificación UV: Las exportaciones de bienes generan ingresos de divisas del exterior y se registran como créditos en la balanza de mercancías dentro de la cuenta corriente."
  },
  {
    id: 42,
    type: "single",
    text: "¿Qué implica un valor alto dentro del Tipo de Cambio Real (TCR)?",
    options: [
      "Que los bienes extranjeros son relativamente baratos en comparación con los bienes nacionales.",
      "Que las exportaciones netas obligatoriamente se reducen a cero.",
      "Que los productos nacionales son extremadamente baratos frente a la producción internacional.",
      "Que la economía se encuentra cerrada al comercio por aranceles prohibitivos."
    ],
    correct: [0],
    explanation: "Justificación UV: De acuerdo a la convención adoptada en la cátedra sobre la relación de precios internacionales, un TCR alto refleja bienes foráneos económicamente accesibles en términos relativos."
  },
  {
    id: 43,
    type: "single",
    text: "Ante una situación sostenida de déficit fiscal, ¿cuál de las siguientes medidas representa una forma directa de financiamiento sin apelar a la deuda ni a la emisión monetaria?",
    options: [
      "La venta de activos estatales o la acumulación de libramientos impagos.",
      "El aumento automático de las importaciones de bienes de capital.",
      "La implementación de una política fiscal expansiva con subsidios al consumo.",
      "El incremento del gasto corriente a través de transferencias sociales."
    ],
    correct: [0],
    explanation: "Justificación UV: El Estado puede financiar su brecha vendiendo patrimonio público o postergando pagos pendientes (libramientos impagos) sin emisión ni crédito bancario."
  },
  {
    id: 44,
    type: "single",
    text: "En un régimen de tipo de cambio flexible, si aumenta la demanda de dólares y la oferta permanece constante, ¿qué efecto se espera sobre el tipo de cambio nominal expresado en pesos por dólar?",
    options: [
      "Ninguna variación porque el Banco Central fija siempre la cotización.",
      "Una disminución simultánea de la oferta monetaria y de los precios.",
      "Una disminución del tipo de cambio y apreciación del peso.",
      "Un aumento del tipo de cambio y depreciación del peso."
    ],
    correct: [3],
    explanation: "Justificación UV: El aumento de demanda de divisas eleva su precio en moneda local (depreciación del peso frente a la moneda foránea)."
  },
  {
    id: 45,
    type: "single",
    text: "Cuando el Estado prohíbe o grava con impuestos elevados la oferta de determinados bienes (como el tabaco), ¿sobre qué decisión fundamental de la economía está actuando?",
    options: [
      "Sobre la fijación del tipo de cambio para regular las exportaciones e importaciones.",
      "Sobre la estructura legal de los Colegios Profesionales que otorgan matriculación.",
      "Sobre el equilibrio entre el déficit fiscal y el déficit cuasi fiscal del banco central.",
      "Sobre la decisión de \"Qué producir\" y consumir, desalentando bienes con externalidades negativas."
    ],
    correct: [3],
    explanation: "Justificación UV: El Estado interviene en el 'qué producir' al alterar los incentivos relativos de producción y consumo de bienes con daño social."
  },
  {
    id: 46,
    type: "single",
    text: "¿Qué tipo de política monetaria realiza el BCRA al otorgar el crédito mediante emisión de dinero?",
    options: [
      "Política cambiaria de apreciación.",
      "Política monetaria expansiva.",
      "Política monetaria contractiva.",
      "Política fiscal restrictiva."
    ],
    correct: [1],
    explanation: "Justificación UV: Es una política monetaria expansiva porque aumenta la base monetaria mediante creación primaria de dinero."
  },
  {
    id: 47,
    type: "single",
    text: "¿En qué consiste un impuesto de tipo \"plano\" según la clasificación por proporcionalidad?",
    options: [
      "Es una tarifa variable calculada en función del costo directo de mantenimiento del servicio de alumbrado.",
      "Es un monto fijo que no depende de la base imponible o renta, sin considerar la capacidad de pago del sujeto obligado.",
      "Es una alícuota que disminuye progresivamente a medida que asciende la renta acumulada del obligado.",
      "Es una carga impositiva que varía en función de las deducciones personales fijadas por ley."
    ],
    correct: [1],
    explanation: "Justificación UV: El impuesto plano o capitación fija una suma constante e idéntica independientemente de la base imponible o de la renta."
  },
  {
    id: 48,
    type: "single",
    text: "¿Qué caracteriza a las contribuciones especiales frente a otras formas de tributos?",
    options: [
      "El contribuyente recibe un beneficio directo o diferencial derivado de una obra o actividad pública específica.",
      "Su abono es voluntario y no está sujeto a la potestad tributaria del Estado.",
      "Tienen por única finalidad disuadir el consumo de productos nocivos para la salud pública.",
      "Recaen de manera exclusiva sobre las actividades de comercio exterior e importación de insumos."
    ],
    correct: [0],
    explanation: "Justificación UV: En las contribuciones especiales el presupuesto de hecho radica en la obtención de un beneficio diferencial generado por una obra pública realizada."
  },
  {
    id: 49,
    type: "single",
    text: "En caso de que el Poder Legislativo no sancione a tiempo la Ley de Presupuesto para el nuevo ejercicio, ¿qué procedimiento legal se aplica?",
    options: [
      "La reconducción automática del presupuesto vigente al finalizar el ejercicio inmediato anterior.",
      "La intervención directa del Banco Central para cubrir los fondos de la administración central.",
      "La emisión de un decreto de necesidad y urgencia que duplica los créditos presupuestarios previos.",
      "La suspensión temporal de todo el gasto público hasta la aprobación de un nuevo proyecto."
    ],
    correct: [0],
    explanation: "Justificación UV: Ante la falta de sanción, la ley establece la reconducción automática del presupuesto anterior para evitar la paralización operativa del Estado."
  },
  {
    id: 50,
    type: "single",
    text: "¿Qué caracteriza fundamentalmente a la inflación galopante a diferencia de la hiperinflación?",
    options: [
      "Alcanza tasas de dos o tres dígitos anuales con pérdida rápida del valor monetario, pero sin llegar a la destrucción total del sistema de precios ni al abandono generalizado de la moneda local por el trueque.",
      "Se mantiene por debajo del 10% anual, resultando lenta y predecible para los agentes económicos.",
      "Presenta incrementos continuos de precios superiores al 50% mensual que obligan a la sustitución inmediata de la moneda por el trueque.",
      "Se origina exclusivamente por rigideces estructurales en la oferta de bienes primarios que impiden el ajuste a corto plazo."
    ],
    correct: [0],
    explanation: "Justificación UV: La inflación galopante desvaloriza rápidamente los saldos pero aún conserva la unidad de cambio formal, a diferencia del colapso terminal de la hiperinflación."
  },

  // ==========================================
  // BLOQUE 2: HISTÓRICAS RELEVANTES DE AÑOS ANTERIORES (2020-2025)
  // ==========================================
  {
    id: 51,
    type: "multi",
    text: "¿Cuáles son los motivos de demanda de dinero según la teoría keynesiana?",
    options: ["Financiación", "Especulación", "Modernización", "Circulación", "Emisión", "Transacción", "Precaución"],
    correct: [1, 5, 6],
    explanation: "Justificación de cátedra: Los tres motivos fundamentales de demanda de dinero son Transacción (pagos corrientes), Precaución (imprevistos) y Especulación (tasa de interés y activos financieros)."
  },
  {
    id: 52,
    type: "single",
    text: "Cuando la inflación alcanza valores extraordinarios y se produce una hiperinflación, ¿cuál es la función que el dinero deja de cumplir en primer término?",
    options: [
      "Ser un medio de cambio",
      "Ser un medio de pago",
      "Ser un sistema de referencia o de medición",
      "Ser un activo financiero que se conserva a través del tiempo (reserva de valor)",
      "Ser una unidad de cuenta"
    ],
    correct: [3],
    explanation: "Justificación de cátedra: En hiperinflación el dinero pierde instantáneamente su valor de compra, por lo que nadie lo conserva como reserva de valor con el paso del tiempo."
  },
  {
    id: 53,
    type: "single",
    text: "¿Cuál de las siguientes NO es una de las funciones que cumple el dinero en la economía?",
    options: [
      "Ser un medio de cambio",
      "Ser un medio de pago",
      "Ser un sistema de referencia o de medición",
      "Ser un activo financiero que conserva valor a través del tiempo",
      "Ser una unidad de cuenta"
    ],
    correct: [2],
    explanation: "Justificación de cátedra: Las funciones formales son unidad de cuenta, medio de cambio/pago y depósito o reserva de valor. 'Sistema de referencia o medición' no es una función del dinero."
  },
  {
    id: 54,
    type: "single",
    text: "La Solvencia Bancaria se define como:",
    options: [
      "Tener ganancia al final del ejercicio.",
      "Velocidad de transformarse en moneda.",
      "Capacidad para convertir los depósitos en efectivo.",
      "Tener más dinero del que deben (patrimonio neto superior a sus deudas)."
    ],
    correct: [3],
    explanation: "Justificación de cátedra: Solvencia es poseer activos mayores a los pasivos totales. La liquidez, en cambio, es la capacidad inmediata de convertir activos en efectivo."
  },
  {
    id: 55,
    type: "single",
    text: "La Liquidez Bancaria es:",
    options: [
      "Tener más dinero del que deben.",
      "Capacidad para convertir los depósitos en efectivo de manera inmediata.",
      "Tener ganancia en las colocaciones crediticias.",
      "Velocidad de transformar deuda en acciones."
    ],
    correct: [1],
    explanation: "Justificación de cátedra: La liquidez representa la capacidad del banco de atender la demanda inmediata de retiros de efectivo por parte de los depositantes."
  },
  {
    id: 56,
    type: "single",
    text: "La Rentabilidad Bancaria es:",
    options: [
      "Velocidad de transformarse en moneda.",
      "Tener más dinero del que deben.",
      "Capacidad para convertir los depósitos en efectivo.",
      "Tener ganancia en su intermediación y colocaciones."
    ],
    correct: [3],
    explanation: "Justificación de cátedra: La rentabilidad mide el margen de beneficio financiero y ganancia sobre el capital propio invertido en la actividad."
  },
  {
    id: 57,
    type: "single",
    text: "¿Cuál de las siguientes medidas NO aconsejaría usted para saldar una Balanza de Pagos deficitaria?",
    options: [
      "Fomentar las exportaciones con incentivos cambiarios.",
      "Declararse en cesación de pagos (default).",
      "Solicitar financiamiento de organismos internacionales.",
      "Reducir importaciones de bienes prescindibles."
    ],
    correct: [1],
    explanation: "Justificación de cátedra: Declararse en cesación de pagos aísla al país del crédito externo y destruye la confianza comercial internacional."
  },
  {
    id: 58,
    type: "text",
    text: "¿Cuál es la mejor manera de fortalecer y mejorar genuinamente el valor de nuestra moneda nacional? (Escriba una sola palabra)",
    answers: ["Exportando", "exportar"],
    explanation: "Justificación de cátedra: Exportando se generan divisas genuinas de comercio exterior que robustecen las reservas del Banco Central."
  },
  {
    id: 59,
    type: "single",
    text: "Suponiendo un régimen de tipo de cambio fijo, ¿qué sucede si la Balanza de Pagos se encuentra en déficit sostenido?",
    options: [
      "Aumenta la oferta de divisas, por lo que el BCRA debe salir a comprar divisas.",
      "Aumenta la demanda de divisas, por lo que el BCRA debe salir a comprar divisas.",
      "Aumenta la oferta de divisas, por lo que el BCRA debe salir a vender divisas.",
      "Aumenta la demanda de divisas, por lo que el BCRA debe salir a vender divisas."
    ],
    correct: [3],
    explanation: "Justificación de cátedra: El déficit comercial implica salida neta de divisas (mayor demanda de dólares para pagar al exterior), obligando al BCRA a vender reservas para mantener el precio fijo."
  },
  {
    id: 60,
    type: "single",
    text: "El Ingreso Bruto Interno (YBI) a costo de factores se calcula como:",
    options: [
      "Salario + Beneficios",
      "Salario + Alquiler + Interés + Beneficios",
      "Consumo + Gasto Público + Inversión",
      "Productos Finales - Insumos Intermedios"
    ],
    correct: [1],
    explanation: "Justificación de cátedra: El YBI por el enfoque del ingreso es la sumatoria de las retribuciones a los factores productivos: salarios (trabajo), alquileres (tierra), intereses (capital) y beneficios (empresa)."
  },
  {
    id: 61,
    type: "tf",
    text: "Se puede definir a la Inflación como el aumento sustancial, sostenido y continuo del nivel general de precios de los bienes y servicios de una economía en un período de tiempo determinado, en forma continua y no ocasional.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Justificación de cátedra: Para ser considerado inflación el aumento debe ser generalizado, continuo y de cuantía significativa."
  },
  {
    id: 62,
    type: "tf",
    text: "De las funciones Consumo y Ahorro, es correcto afirmar que la suma de la Propensión Marginal al Consumo (PMC) y la Propensión Marginal al Ahorro (PMA) es siempre mayor que 1.",
    options: ["Verdadero", "Falso"],
    correct: [1],
    explanation: "Justificación de cátedra: Es Falso. Todo incremento de ingreso se divide exclusivamente entre consumir y ahorrar, por lo cual PMC + PMA = 1 exactamente."
  },
  {
    id: 63,
    type: "tf",
    text: "El Producto Bruto Interno (PBI) prescinde en su cálculo convencional de los costes ecológicos y sociales generados por la actividad económica.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Justificación de cátedra: El PBI tradicional solo mide transacciones monetarias sin deducir la contaminación ni el deterioro del capital natural ni desigualdades."
  },
  {
    id: 64,
    type: "single",
    text: "Respecto del Ahorro y la Inversión en una economía, se puede afirmar con rigor que:",
    options: [
      "Un país progresa cuando la Inversión Neta Interna es menor a cero.",
      "Un aumento en la Inversión Bruta Interna implica siempre una disminución del PBI.",
      "La Inversión Neta Interna se calcula como la diferencia entre la Inversión Bruta Interna y la Inversión de Reposición (depreciación).",
      "La Inversión de Reposición incrementa el stock de capital neto del país."
    ],
    correct: [2],
    explanation: "Justificación de cátedra: INI = IBI - Depreciación (Inversión de Reposición). Si la INI es positiva, el país incrementa su dotación neta de capital."
  },
  {
    id: 65,
    type: "single",
    text: "¿Cuáles de las siguientes variables macroeconómicas se consideran indicadores de desarrollo, pero NO de calidad de vida?",
    options: [
      "Curva de Lorenz y Producto Bruto Interno per cápita (PBI per cápita).",
      "Inversión Bruta Interna (IBI) y Huella Hídrica.",
      "Índice de Desarrollo Humano (IDH) y Huella Hídrica.",
      "PBI real y Huella de Carbono."
    ],
    correct: [0],
    explanation: "Justificación de cátedra: La Curva de Lorenz y el PBI per cápita miden variables económicas y distributivas de desarrollo cuantitativo, mientras que el IDH y las huellas ecológicas evalúan calidad de vida."
  },
  {
    id: 66,
    type: "single",
    text: "Son indicadores que evalúan de manera directa la calidad de vida y sostenibilidad en una región:",
    options: [
      "Curva de Lorenz y PBI per cápita.",
      "Índice de Desarrollo Humano (IDH) y Huella Hídrica / Huella de Carbono.",
      "Tipo de cambio real y saldo de Balanza de Pagos.",
      "PBI nominal y Base Monetaria."
    ],
    correct: [1],
    explanation: "Justificación de cátedra: El IDH y las huellas ecológicas miden bienestar social, salud, longevidad y preservación ambiental directa."
  },
  {
    id: 67,
    type: "tf",
    text: "El Producto Bruto Interno corregido según la Paridad de Poder Adquisitivo (PPA) permite comparar la producción eliminando el efecto distorsivo de los tipos de cambio, tomando como base los precios de una canasta en EE.UU. como referencia.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Justificación de cátedra: La metodología PPA homologa el poder real de compra internacional eliminando las oscilaciones cambiarias momentáneas."
  },
  {
    id: 68,
    type: "single",
    text: "En el análisis de la economía en colores, ¿qué aspecto específico analiza la denominada \"economía gris\"?",
    options: [
      "El narcotráfico y el tráfico internacional de armas.",
      "La producción artística y cultural comunitaria.",
      "Los trabajos y actividades informales que generan empleo en economías en desarrollo.",
      "Las tecnologías de energías renovables y reciclaje."
    ],
    correct: [2],
    explanation: "Justificación de cátedra: La economía gris abarca actividades informales de subsistencia no registradas fiscalmente pero no tipificadas como delitos penales graves (a diferencia de la economía negra)."
  },
  {
    id: 69,
    type: "single",
    text: "La Teoría de las Ventajas Comparativas de David Ricardo demuestra que:",
    options: [
      "A través del comercio internacional un país necesariamente pierde lo que el otro gana.",
      "Cada país genera mayor eficiencia aislándose para producir todo lo que consume.",
      "Aunque un país sea más eficiente en todos los bienes producidos, la especialización en aquello donde su ventaja relativa sea mayor beneficiará a ambos países.",
      "El intercambio internacional solo beneficia a los países con abundancia de metales preciosos."
    ],
    correct: [2],
    explanation: "Justificación de cátedra: La ventaja comparativa fundamenta el comercio en el costo de oportunidad relativo, logrando que ambos países amplíen sus posibilidades de consumo."
  },
  {
    id: 70,
    type: "tf",
    text: "La Renta Nacional se define formalmente como el Producto Nacional Neto a costo de factores (PNNcf) y arroja el mismo resultado ya sea calculado por el producto, por el ingreso o por el gasto.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Justificación de cátedra: En contabilidad social, el flujo circular garantiza la equivalencia de los tres métodos de cálculo."
  },
  {
    id: 71,
    type: "single",
    text: "En caso de registrarse superávit fiscal en las cuentas del Estado, ¿qué medida de política fiscal expansiva puede adoptar el gobierno para equilibrarlo?",
    options: [
      "Invertir en bienes de capital y obra pública aumentando el gasto para dinamizar la economía.",
      "Crear nuevos impuestos extraordinarios para contraer el consumo privado.",
      "Aumentar impuestos y reducir el gasto público simultáneamente.",
      "Suspender la recaudación de tributos coparticipables."
    ],
    correct: [0],
    explanation: "Justificación de cátedra: El superávit permite reasignar recursos hacia inversiones de infraestructura pública que eleven la productividad general sin generar déficit."
  },
  {
    id: 72,
    type: "tf",
    text: "El tipo de cambio efectivo o 'de bolsillo' se calcula a partir del tipo de cambio nominal ajustado por los aranceles, gravámenes, reintegros o retenciones al comercio exterior.",
    options: ["Verdadero", "Falso"],
    correct: [0],
    explanation: "Justificación de cátedra: Es el valor real neto por unidad de divisa que efectivamente percibe el exportador o abona el importador tras impuestos aduaneros."
  }
];