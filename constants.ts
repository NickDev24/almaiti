import { Service, Testimonial, GalleryItem, Product, BlogPost } from './types';

export const APP_NAME = "Almaiti Hair Studio";
export const PHONE_NUMBER = "5493876234866";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`;
export const ADDRESS = "Pasaje la tablada 159, Salta Capital (A 4 cuadras del shopping)";
export const INSTAGRAM_LINK = "https://www.instagram.com/almaitii_aii/";
export const FACEBOOK_LINK = "https://www.facebook.com/almaitistudio/";
export const PROFILE_IMAGE_URL = "/img/principal.jpg";

export const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Galería', path: '/gallery' },
  { name: 'Productos', path: '/products' },
  { name: 'Editorial', path: '/blog' },
  { name: 'Sobre Mí', path: '/about' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Colorimetría Avanzada',
    description: 'Especialistas en rubios dorados, platinos suaves y correcciones. Usamos técnicas como Babylights y Money Piece para iluminar tu rostro. ✨',
    priceStart: '$ Consultar',
    duration: '4-5h',
    image: '/img/597111943_2920250574837350_3742034193919092740_n.jpg'
  },
  {
    id: '2',
    title: 'Pack: Sistema PLEX + Corte',
    description: 'La máxima protección para cabellos procesados. Reconstruye enlaces internos para un cabello sano y fuerte. Incluye corte de diseño. 🛡️',
    priceStart: '$30.000 aprox',
    duration: '2h',
    image: '/img/583339155_2897722423756832_3377982945140377848_n.jpg'
  },
  {
    id: '3',
    title: 'Pack: Células Madre + Corte',
    description: 'Regeneración profunda. Devuelve la masa capilar perdida y otorga un brillo espejo increíble. Ideal para recuperar vitalidad. 🧬',
    priceStart: '$28.000 aprox',
    duration: '2.5h',
    image: '/img/600291222_2920250324837375_5439759553759456894_n.jpg'
  },
  {
    id: '4',
    title: 'Nutrición Intensiva + Corte',
    description: 'Shock de hidratación y nutrición para cabellos secos. Recupera la suavidad y el movimiento natural. 🌸',
    priceStart: '$25.000 aprox',
    duration: '1.5h',
    image: '/img/598565781_2920250638170677_1166449569650803047_n.jpg'
  },
  {
    id: '5',
    title: 'Alisado & Modelado',
    description: 'Alisados fotónicos o keratina orgánica (formol-free). Lacio perfecto, sin frizz y con brillo extremo. ✨',
    priceStart: '$ Consultar',
    duration: '3h',
    image: '/img/600303970_2920250434837364_5880956941602764610_n.jpg'
  },
  {
    id: '6',
    title: 'Cortes Editoriales & Peinados',
    description: 'Desde un Bob Texturizado hasta recogidos Glam para eventos. Diseñamos el estilo que potencia tus facciones. 💇‍♀️',
    priceStart: 'En Packs',
    duration: '1h',
    image: '/img/585436102_2897724057090002_4102521254114430334_n.jpg'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [];

export const GALLERY_DATA: GalleryItem[] = [
  { id: '1', category: 'Color', title: 'Rubio Dorado Premium', afterUrl: '/img/574565606_2881338948728513_5735802821732093642_n.jpg' },
  { id: '2', category: 'Color', title: 'Babylights', afterUrl: '/img/583335912_2897723333756741_7837874004151699587_n.jpg' },
  { id: '3', category: 'Corte', title: 'Corte Texturizado', afterUrl: '/img/583339155_2897722423756832_3377982945140377848_n.jpg' },
  { id: '4', category: 'Color', title: 'Corrección de Color', afterUrl: '/img/584769957_2897723273756747_3410100722932340220_n.jpg' },
  { id: '5', category: 'Tratamiento', title: 'Nutrición Intensiva', afterUrl: '/img/584985551_2897723470423394_7479242762513839698_n.jpg' },
  { id: '6', category: 'Peinado', title: 'Peinado Editorial', afterUrl: '/img/585436102_2897724057090002_4102521254114430334_n.jpg' },
  { id: '7', category: 'Color', title: 'Iluminación Natural', afterUrl: '/img/586153548_2897724017090006_5838557405979763774_n.jpg' },
  { id: '8', category: 'Tratamiento', title: 'Botox Capilar', afterUrl: '/img/586552303_2897722380423503_6065383027284140757_n.jpg' },
  { id: '9', category: 'Color', title: 'Rubio Cálido', afterUrl: '/img/587031396_2897723427090065_5163096937002605303_n.jpg' },
  { id: '10', category: 'Alisado', title: 'Lacio Perfecto', afterUrl: '/img/587230584_2897722473756827_2481279559518462850_n.jpg' },
  { id: '11', category: 'Color', title: 'Money Piece', afterUrl: '/img/597111943_2920250574837350_3742034193919092740_n.jpg' },
  { id: '12', category: 'Peinado', title: 'Ondas al Agua', afterUrl: '/img/598565781_2920250638170677_1166449569650803047_n.jpg' },
  { id: '13', category: 'Corte', title: 'Bob Moderno', afterUrl: '/img/598970095_2920250401504034_299325091106880780_n.jpg' },
  { id: '14', category: 'Tratamiento', title: 'Células Madre', afterUrl: '/img/600291222_2920250324837375_5439759553759456894_n.jpg' },
  { id: '15', category: 'Peinado', title: 'Recogido Glam', afterUrl: '/img/600303970_2920250434837364_5880956941602764610_n.jpg' },
  { id: '16', category: 'Color', title: 'Morena Iluminada', afterUrl: '/img/600347845_2920250208170720_8789659133928607530_n.jpg' }
];

export const PRODUCTS_DATA: Product[] = [
  { id: '1', name: 'Kit Mantenimiento Alisado', price: '$22.000', description: 'Shampoo y Máscara pH ácido para prolongar tu alisado por meses.', image: '/img/586552303_2897722380423503_6065383027284140757_n.jpg' },
  { id: '2', name: 'Ampollas Nutrición', price: '$8.500', description: 'Shot de vitaminas para recuperar el cabello entre visitas al salón.', image: '/img/600291222_2920250324837375_5439759553759456894_n.jpg' },
  { id: '3', name: 'Serum Argan Oil', price: '$12.000', description: 'Oro líquido. Elimina el frizz y sella puntas al instante.', image: '/img/587230584_2897722473756827_2481279559518462850_n.jpg' },
  { id: '4', name: 'Protector Térmico', price: '$15.000', description: 'Indispensable si usas plancha o secador. Cuida tu fibra capilar.', image: '/img/600347845_2920250208170720_8789659133928607530_n.jpg' },
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: '1',
    title: 'Por qué el sistema PLEX salva tu cabello',
    category: 'Tecnología Capilar',
    date: '15 Ene, 2025',
    excerpt: 'Si piensas decolorarte, esto es obligatorio. Descubre cómo esta tecnología protege los enlaces internos del cabello durante procesos químicos.',
    image: '/img/583339155_2897722423756832_3377982945140377848_n.jpg',
    content: `
      <p class="lead">Si estás considerando un cambio de color importante, especialmente ir hacia tonos más claros, probablemente hayas escuchado la palabra "PLEX" flotando en el ambiente. Pero, ¿es solo marketing o realmente es el salvavidas que tu cabello necesita?</p>
      
      <h2>La Ciencia detrás del Daño</h2>
      <p>Para entender el sistema PLEX, primero debemos entender qué le sucede a tu cabello cuando lo decoloramos. Tu cabello está formado principalmente por una proteína llamada queratina, que se mantiene unida por enlaces disulfuro. Imagina estos enlaces como los escalones de una escalera de mano que mantienen la estructura firme.</p>
      <p>Cuando aplicamos decolorante (persulfatos), rompemos la melanina (el color), pero inevitablemente también rompemos algunos de estos enlaces disulfuro. El resultado es un cabello que, estructuralmente, se vuelve más débil, elástico como un chicle mojado y propenso al quiebre.</p>

      <h2>¿Qué hace el PLEX?</h2>
      <p>Aquí es donde entra la magia de la química moderna. Los sistemas PLEX (como Olaplex, Smartbond, Betaplex, etc.) actúan como un <strong>multiplicador de enlaces</strong>. Funcionan a nivel molecular para:</p>
      <ul>
        <li>Buscar enlaces de azufre rotos.</li>
        <li>Reconectarlos artificialmente durante el proceso químico.</li>
        <li>Crear un escudo protector alrededor de la cutícula.</li>
      </ul>
      <p>En Almaiti Hair Studio, no negociamos la salud capilar. Por eso, integramos el aditivo PLEX directamente en nuestra mezcla de decolorante. Esto nos permite elevar el tono de tu cabello sin comprometer su integridad estructural.</p>

      <h2>¿Vale la pena la inversión?</h2>
      <p>Absolutamente. Considera el PLEX como un seguro para tu cabello. La diferencia entre un rubio que se ve "pajoso" y seco, y uno que brilla y tiene movimiento, es casi siempre el uso de protectores de enlaces.</p>
      <p><strong>Veredicto Almaiti:</strong> Si vas a aclarar más de 2 tonos, el PLEX no es opcional, es fundamental para mantener esa melena de portada de revista.</p>
    `
  },
  {
    id: '2',
    title: 'Money Piece: La tendencia que ilumina',
    category: 'Tendencias',
    date: '08 Ene, 2025',
    excerpt: 'Unos pocos mechones frontales pueden cambiarlo todo. La técnica "Money Piece" sigue siendo la favorita para dar luz al rostro sin un compromiso total.',
    image: '/img/598565781_2920250638170677_1166449569650803047_n.jpg',
    content: `
      <p class="lead">En 2024 vimos el auge del "Old Money Blonde", pero entrando a 2025, la técnica del "Money Piece" se ha refinado para ser más sofisticada, menos bloqueada y mucho más integrada.</p>

      <h2>¿Qué es exactamente?</h2>
      <p>El Money Piece consiste en aclarar los mechones frontales que enmarcan el rostro (el contorno) de una manera más pronunciada que el resto del cabello. Su nombre viene de la idea de que hace que tu color se vea "caro" y lujoso al instante, aportando una luz tremenda a tu mirada sin necesidad de decolorar toda la cabeza.</p>

      <h2>¿Por qué sigue reinando en 2025?</h2>
      <ul>
        <li><strong>Bajo Mantenimiento:</strong> A diferencia de un rubio global, el crecimiento del Money Piece puede difuminarse suavemente.</li>
        <li><strong>Impacto Visual:</strong> Es el cambio perfecto para quienes quieren verse "más rubias" sin el daño de una decoloración completa.</li>
        <li><strong>Versatilidad:</strong> Funciona en morenas (con tonos caramelo o avellana) y en rubias (con tonos vainilla o platino).</li>
      </ul>

      <h2>El estilo Almaiti</h2>
      <p>En nuestro estudio, nos alejamos de las rayas gruesas tipo años 90. Buscamos un <em>Money Piece</em> "fundido". Utilizamos la técnica de cardado (teasing) para asegurar que la transición desde la raíz sea imperceptible. El objetivo es que parezca que el sol iluminó naturalmente tu rostro.</p>
      
      <p>Si sientes que tu cabello se ve plano o aburrido, pero te da miedo un cambio radical, agenda una cita para un diseño de contorno. Es el "lifting" capilar instantáneo.</p>
    `
  },
  {
    id: '3',
    title: 'Células Madre vs Botox: ¿Cuál elijo?',
    category: 'Tratamientos',
    date: '28 Dic, 2024',
    excerpt: 'Ambos recuperan el cabello, pero actúan diferente. Te explico cuándo necesitas regeneración profunda (Células Madre) y cuándo nutrición (Botox).',
    image: '/img/600291222_2920250324837375_5439759553759456894_n.jpg',
    content: `
      <p class="lead">Es la pregunta más frecuente en mi WhatsApp: "Alma, ¿necesito botox o células madre?". Aunque ambos son tratamientos recuperadores premium, sus objetivos y tecnologías son distintos.</p>

      <h2>Botox Capilar: El Relleno Nutritivo</h2>
      <p>A pesar de su nombre, no contiene toxina botulínica. Se llama así por su efecto "rejuvenecedor" inmediato.</p>
      <p><strong>¿Qué hace?</strong> Actúa principalmente rellenando la fibra capilar con vitaminas, aminoácidos, colágeno y ácido hialurónico. Su foco es eliminar el frizz, dar peso y devolver la suavidad.</p>
      <p><strong>Ideal para:</strong> Cabellos con frizz, resecos por el sol, o mecánicamente dañados por planchita. NO alisa, pero disciplina mucho el volumen.</p>

      <h2>Células Madre: La Regeneración Profunda</h2>
      <p>Este es un tratamiento de vanguardia biotecnológica. Utiliza células madre vegetales (generalmente de manzana suiza o argán) para estimular la regeneración del folículo y la fibra.</p>
      <p><strong>¿Qué hace?</strong> Trabaja a un nivel más profundo que el botox. Repara la estructura interna, engrosa la hebra capilar fina y ralentiza el envejecimiento del cabello. Aporta un brillo "espejo" característico.</p>
      <p><strong>Ideal para:</strong> Cabellos extremadamente procesados por decoloración, cabellos afinados por la edad o químicos, y melenas que han perdido su "cuerpo" natural.</p>

      <h2>El Veredicto</h2>
      <ul>
        <li>¿Buscas control de frizz y suavidad? <strong>Ve por el Botox.</strong></li>
        <li>¿Buscas reparación estructural y brillo extremo en cabello dañado? <strong>Ve por Células Madre.</strong></li>
      </ul>
      <p>En Almaiti siempre realizamos un diagnóstico previo sin cargo para recomendarte el cóctel exacto que tu melena pide a gritos.</p>
    `
  },
  {
    id: '4',
    title: 'Rutina para mantener tus Rubios Dorados',
    category: 'Color Care',
    date: '20 Dic, 2024',
    excerpt: 'El rubio dorado es lujo, pero requiere cuidado. Tips para evitar que se oxide o se vuelva opaco entre visitas al salón.',
    image: '/img/597111943_2920250574837350_3742034193919092740_n.jpg',
    content: `
      <p class="lead">Lograr el rubio perfecto es un arte, pero mantenerlo es una disciplina. El rubio dorado es tendencia absoluta para finales de 2024 y todo 2025, aportando calidez y juventud al rostro. Pero, ¿cómo evitamos que se convierta en un amarillo patito o naranja óxido?</p>

      <h2>1. El enemigo número uno: La Oxidación</h2>
      <p>El color del cabello se oxida con el aire, el sol y los minerales del agua. Esto revela los fondos de aclaración subyacentes (que naturalmente son naranjas o amarillos).</p>
      <p><strong>Solución:</strong> Utiliza un shampoo matizador (violeta) una vez cada 10 días. ¡Cuidado! Si abusas del shampoo violeta en un rubio dorado, puedes apagar el brillo y dejarlo opaco. La clave es el equilibrio.</p>

      <h2>2. Hidratación Ácida</h2>
      <p>El cabello decolorado es poroso. Necesita productos con pH ácido para sellar la cutícula y retener el color. Evita los shampoos de supermercado con sulfatos fuertes, ya que "barren" el matiz que aplicamos en el salón.</p>

      <h2>3. Protección Térmica: No negociable</h2>
      <p>El calor de la plancha a 200°C quema el pigmento matizador instantáneamente. Si inviertes en un balayage premium, invierte en un buen protector térmico. Es la diferencia entre un rubio de seda y uno de paja.</p>

      <h2>El Tip Almaiti de Verano</h2>
      <p>Antes de entrar a la piscina (cloro = verde), moja tu cabello con agua dulce y aplica una capa de crema de peinar o aceite. Esto crea una barrera física para que el cabello no absorba el agua clorada. ¡Tu rubio te lo agradecerá!</p>
    `
  },
  {
    id: '5',
    title: 'Empoderate con tu cambio de look',
    category: 'Estilo de Vida',
    date: '10 Dic, 2024',
    excerpt: 'Un cambio de cabello es el primer paso para una nueva actitud. Historias de transformación real en Almaiti.',
    image: '/img/585436102_2897724057090002_4102521254114430334_n.jpg',
    content: `
      <p class="lead">Coco Chanel dijo una vez: "Una mujer que se corta el cabello está a punto de cambiar su vida". Y en mis 11 años de experiencia, puedo confirmar que es totalmente cierto.</p>

      <h2>Más que estética, es psicología</h2>
      <p>El cabello es una de las pocas partes de nuestro cuerpo que podemos alterar radicalmente en un par de horas. Cuando una clienta se sienta en mi sillón y me dice "haz lo que quieras" o "quiero un cambio total", generalmente no está hablando solo de su pelo. Está hablando de cerrar un ciclo, de celebrar un logro, o de recuperar el control.</p>

      <h2>Historias Reales en Almaiti</h2>
      <p>Recuerdo a una clienta que vino después de una separación difícil. Tenía el cabello larguísimo, sin forma, que usaba como una cortina para esconderse. Diseñamos un <strong>Bob Francés</strong> a la altura de la mandíbula. Cuando cayó el último mechón y se miró al espejo, su postura cambió. Enderezó la espalda, sonrió y vi nacer una nueva confianza.</p>

      <p>O la ejecutiva que sentía que su imagen no reflejaba su autoridad. Unas <em>Babylights</em> estratégicas y un corte estructurado le dieron esa imagen de poder y sofisticación que necesitaba para su ascenso.</p>

      <h2>Tu imagen es tu carta de presentación</h2>
      <p>Empoderarse no es vanidad. Es alinear lo que eres por dentro con lo que muestras por fuera. En Almaiti Hair Studio, no solo "hacemos color". Escuchamos, interpretamos y traducimos tu esencia en tu imagen.</p>
      
      <p>Si sientes que tu exterior ya no coincide con tu interior, es hora de visitarnos. Te prometo que saldrás sintiéndote imparable.</p>
    `
  }
];