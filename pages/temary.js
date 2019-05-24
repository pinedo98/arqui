import React from "react"
import * as tocbot from "tocbot"
import Layout from "../components/Layout";
import "../global.css"


export default class extends React.Component {
  componentDidMount() {
    tocbot.init({
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3, h4',
    });
  }

  render() {
    return (
      <Layout>
        <div className="container">

          <div className="content">
            <div className="js-toc-content">
              <h1 id="unidad-i-arquitecturas-de-cómputo">Unidad I: Arquitecturas de cómputo</h1>
              <hr/>
              <h2 id="1-modelos-de-arquitecturas-de-cómputo">1 Modelos de arquitecturas de cómputo</h2>
              <h3 id="11-clásicas">1.1 Clásicas</h3>
              <p>Estas arquitecturas se desarrollaron en las primeras computadoras
                electromecánicas y de tubos de vacío. Aun son usadas en procesadores
                empotrados de gama baja y son la base de la mayoría de las arquitecturas
                modernas </p>
              <p><strong>Arquitectura Mauchly-Eckert (Von Newman)</strong></p>
              <p>La principal desventaja de esta arquitectura, es que el bus de datos y direcciones
                único se convierte en un cuello de botella por el cual debe pasar toda la
                información que se lee de o se escribe a la memoria, obligando a que todos los
                accesos a esta sean secuenciales. Esto limita el grado de paralelismo (acciones
                que se pueden realizar al mismo tiempo) y por lo tanto, el desempeño de la
                computadora. Este efecto se conoce como el cuello de botella de Von Newman</p>
              <p><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/JohnvonNeumann-LosAlamos.gif" alt="Von Neumann"/></p>
              <h3 id="12-segmentadas">1.2 Segmentadas</h3>
              <p>Las arquitecturas segmentadas o con segmentación del cauce buscan mejorar el
                desempeño realizando paralelamente varias etapas del ciclo de instrucción al mismo
                tiempo. El procesador se divide en varias unidades funcionales independientes y se
                dividen entre ellas el procesamiento de las instrucciones.</p>
              <h3 id="13-de-multiprocesamiento">1.3 De multiprocesamiento</h3>
              <p>Cuando se desea incrementar el desempeño más aya de lo que permite la técnica
                de segmentación del cauce (limite teórico de una instrucción por ciclo de reloj), se
                requiere utilizar más de un procesador para la ejecución del programa de
                aplicación.</p>
              <p><img src="https://chsosunal20161910071.files.wordpress.com/2016/03/asimetrico.jpg" alt="Resultado de imagen para multiprocesamiento"/></p>
              <p>Las CPU de multiprocesamiento:</p>
              <ul>
                <li>SISO – (Single Instruction, Single Operand ) computadoras independientes</li>
                <li>SIMO – (Single Instruction, Multiple Operand ) procesadores vectoriales</li>
                <li>MISO – (Multiple Instruction, Single Operand ) No implementado</li>
                <li>MIMO – (Multiple Instruction, Multiple Operand ) sistemas SMP, Clusters</li>
              </ul>
              <h2 id="2-análisis-de-los-componentes">2 Análisis de los componentes</h2>
              <h3 id="21-cpu">2.1 CPU</h3>
              <p>La unidad central de procesamiento, UCP o CPU (por el acrónimo en inglés de
                central processing unit), o simplemente el procesador o microprocesador, es el
                componente del computador y otros dispositivos programables, que interpreta las
                instrucciones contenidas en los programas y procesa los datos. Los CPU
                proporcionan la característica fundamental de la computadora digital (la
                programabilidad) y son uno de los componentes necesarios encontrados en las
                computadoras de cualquier tiempo, junto con el almacenamiento primario y los
                dispositivos de entrada/salida. Se conoce como microprocesador el CPU que es
                manufacturado con circuitos integrados. Desde mediados de los años 1970, los
                microprocesadores de un solo chip han reemplazado casi totalmente todos los
                tipos de CPU, y hoy en día, el término &quot;CPU&quot; es aplicado usualmente a todos los
                microprocesadores.</p>
              <p>La expresión &quot;unidad central de proceso&quot; es, en términos generales, una
                descripción de una cierta clase de máquinas de lógica que pueden ejecutar
                complejos programas de computadora. Esta amplia definición puede fácilmente
                ser aplicada a muchos de los primeros computadores que existieron mucho antes
                que el término &quot;CPU&quot; estuviera en amplio uso. Sin embargo, el término en sí
                mismo y su acrónimo han estado en uso en la industria de la informática por lo
                menos desde el principio de los años 1960. La forma, el diseño y la
                implementación de los CPU ha cambiado drásticamente desde los primeros
                ejemplos, pero su operación fundamental ha permanecido bastante similar.</p>
              <p>Los primeros CPU fueron diseñados a la medida como parte de una computadora
                más grande, generalmente una computadora única en su especie. Sin embargo,
                este costoso método de diseñar los CPU a la medida, para una aplicación
                particular, ha desaparecido en gran parte y se ha sustituido por el desarrollo de
                clases de procesadores baratos y estandarizados adaptados para uno o muchos
                propósitos. Esta tendencia de estandarización comenzó generalmente en la era de
                los transistores discretos, computadoras centrales, y microcomputadoras, y fue
                acelerada rápidamente con la popularización del circuito integrado (IC), éste ha
                permitido que sean diseñados y fabricados CPU más complejos en espacios
                pequeños (en la orden de milímetros). Tanto la miniaturización como la
                estandarización de los CPU han aumentado la presencia de estos dispositivos
                digitales en la vida moderna mucho más allá de las aplicaciones limitadas de
                máquinas de computación dedicadas. Los microprocesadores modernos aparecen
                en todo, desde automóviles, televisores, neveras, calculadoras, aviones, hasta
                teléfonos móviles o celulares, juguetes, entre otros.</p>
              <h4 id="211-arquitecturas">2.1.1 Arquitecturas</h4>
              <p>Tanto la miniaturización como la estandarización de los CPU han aumentado la
                presencia de estos dispositivos digitales en la vida moderna mucho más allá de las
                aplicaciones limitadas de máquinas de computación dedicadas. Los
                microprocesadores modernos aparecen en todo, desde automóviles, televisores,
                neveras, calculadoras, aviones, hasta teléfonos móviles o celulares, juguetes,
                entre otros.</p>
              <h4 id="212-tipos">2.1.2 Tipos</h4>
              <p>Los primeros CPU fueron diseñados a la medida como parte de una computadora
                más grande, generalmente una computadora única en su especie. Sin embargo,
                este costoso método de diseñar los CPU a la medida, para una aplicación
                particular, ha desaparecido en gran parte y se ha sustituido por el desarrollo de
                clases de procesadores baratos y estandarizados adaptados para uno o muchos
                propósitos. Esta tendencia de estandarización comenzó generalmente en la era de
                los transistores discretos, computadoras centrales, y microcomputadoras, y fue
                acelerada rápidamente con la popularización del circuito integrado (IC), éste ha
                permitido que sean diseñados y fabricados CPU más complejos en espacios
                pequeños (en la orden de milímetros).</p>
              <h4 id="213-características">2.1.3 Características</h4>
              <p>Desde mediados de los años 1970, los microprocesadores de un solo chip han
                reemplazado casi totalmente todos los tipos de CPU, y hoy en día, el término &quot;CPU&quot; es
                aplicado usualmente a todos los microprocesadores.</p>
              <h3 id="22-memoria">2.2 Memoria</h3>
              <p>En informática, la memoria (también llamada almacenamiento) se refiere a parte
                de los componentes que forman parte de una computadora. Son dispositivos que
                retienen datos informáticos durante algún intervalo de tiempo. Las memorias de
                computadora proporcionan una de las principales funciones de la computación
                moderna, la retención o almacenamiento de información. Es uno de los
                componentes fundamentales de todas las computadoras modernas que,
                acoplados a una unidad central de procesamiento (CPU por su sigla en inglés,
                central processing unit), implementa lo fundamental del modelo de computadora
                de Arquitectura de von Neumann, usado desde los años 1940.
                Dispositivo basado en circuitos que posibilitan el almacenamiento limitado de
                información y su posterior recuperación.
                Las memorias suelen ser de rápido acceso, y pueden ser volátiles o no volátiles.
                La clasificación principal de memorias son RAM y ROM. Estas memorias son
                utilizadas para almacenamiento primario.</p>
              <p><img src="https://tecnologia-informatica.com/wp-content/uploads/2018/07/la-memoria-rom-7.jpeg" alt="Resultado de imagen para memoria ram y rom"/></p>
              <h4 id="221-conceptos-básicos-del-manejo-de-la-memoria">2.2.1 Conceptos básicos del manejo de la memoria</h4>
              <ul>
                <li><p>Una memoria es un dispositivo que puede mantenerse en por lo menos dos
                  estados estables por un cierto periodo de tiempo.</p>
                </li>
                <li><p>Cada uno de estos estados estables puede utilizarse para representar un bit.</p>
                </li>
                <li><p>A un dispositivo con la capacidad de almacenar por lo menos un bit se le
                  conoce como celda básica de memoria.Un dispositivo de memoria completo
                  se forma con varias celdas básicas y los circuitos asociados para poder leer y
                  escribir dichas celdas básicas, agrupadas como localidades de memoria que
                  permitan almacenar un grupo de N bits.</p>
                </li>
                <li><p>El número de bits que puede almacenar cada localidad de memoria es conocido
                  como el ancho de palabra de la memoria.</p>
                </li>
                <li><p>Coincide con el ancho del bus de datos</p>
                </li>
                <li><p>Uno de los circuitos auxiliares que integran la memoria es el decodificador de
                  direcciones.
                  Su función es la de activar a las celdas básicas que van a ser leídas o escritas
                  a partir de la dirección presente en el bus de direcciones.</p>
                </li>
                <li><p>Tiene como entradas las n lineas del bus de direcciones y 2n líneas de
                  habilitación de localidad, cada una correspondiente a una combinación binaria
                  distinta de los bits de direcciones.Por lo tanto, el número de localidades de
                  memoria disponibles en un dispositivo (T) se relaciona con el número de lineas
                  de dirección 2n .</p>
                </li>
              </ul>
              <h4 id="222-memoria-principal-semiconductora">2.2.2 Memoria principal semiconductora</h4>
              <p>Una <strong>memoria de semiconductor</strong> es un dispositivo electrónico digital de almacenamiento de datos, a menudo utilizada como memoria de ordenador, implementado con dispositivos electrónicos semiconductores en un circuito integrado (IC). Hay muchos tipos diferentes de implementaciones, que utilizan varias tecnologías.</p>
              <p>La mayoría de los tipos de memoria de semiconductores tienen la propiedad del acceso aleatorio, lo que significa que utiliza la misma cantidad de tiempo para acceder a cualquier ubicación de la  memoria, de forma que se puede acceder a los datos de forma eficiente de forma aleatoria. Esto contrasta con los medios de almacenamiento de los datos, como los discos duros y CDs , que leen y escriben los datos de forma consecutiva y, por lo tanto, el dato sólo puede ser accedido en la misma secuencia en que se escribió. La memoria de semiconductor también tiene  muchos mejores tiempos de acceso que otros tipos de almacenamiento de datos; se puede escribir o leer un byte de datos de la memoria de semiconductor en unos pocos nanoseconds, mientras que el tiempo de acceso para el almacenamiento rotatorio, como discos duros, está en el rango de los milisegundos. Por estas razones, se utiliza como  memoria de ordenador principal (almacenamiento primario), para mantener los datos con los que el ordenador
                actualmente está trabajando, entre otros usos.</p>
              <p><img src="http://files.introducion-a-la-tecnologia-wed.webnode.es/200000233-e4587e6a81/memoria-de-computadora-19-638_1.jpg" alt="Resultado de imagen para memoria semiconductora"/></p>
              <h4 id="223-memoria-cache">2.2.3 Memoria cache</h4>
              <p>En informática, una caché es un componente de hardware o software que almacen
                a datos para que las solicitudes futuras de esos datos se puedan atender con mayor
                rapidez; los datos almacenados en un caché pueden ser el resultado de un cálculo
                anterior o el duplicado de datos almacenados en otro lugar, generalmente, da velocidad
                de acceso más rápido. Se produce un acierto de caché cuando los datos solicitados
                se pueden encontrar en esta, mientras que un error de caché ocurre cuando no están
                dichos datos. La lectura de la caché es más rápido que volver a calcular un resultado
                o leer desde un almacén de datos más lento; por lo tanto, cuantas más solicitudes
                se puedan atender desde la memoria caché, más rápido funcionará el sistema.</p>
              <h4 id="23-manejo-de-la-entradasalida">2.3 Manejo de la entrada/salida</h4>
              <p>En computación, entrada/salida, también abreviado E/S o I/O (del original en
                inglés input/output), es la colección de interfaces que usan las distintas unidades
                funcionales (subsistemas) de un sistema de procesamiento de información para
                comunicarse unas con otras, o las señales (información) enviadas a través de
                esas interfaces. Las entradas son las señales recibidas por la unidad, mientras
                que las salidas son las señales enviadas por ésta.</p>
              <p>El término puede ser usado para describir una acción; &quot;realizar una
                entrada/salida&quot; se refiere a ejecutar una operación de entrada o de salida. Los
                dispositivos de E/S los usa una persona u otro sistema para comunicarse con una
                computadora. De hecho, a los teclados y ratones se los considera dispositivos de
                entrada de una computadora, mientras que los monitores e impresoras son vistos
                como dispositivos de salida de una computadora. Los dispositivos típicos para la
                comunicación entre computadoras realizan las dos operaciones, tanto entrada
                como salida, y entre otros se encuentran los módems y tarjetas de red.</p>
              <h4 id="231-módulos-de-entradasalida">2.3.1 Módulos de entrada/salida</h4>
              <p>En primer termino hablaremos de los dispositivos de entrada, que como su
                nombre lo indica, sirven para introducir datos (información) a la computadora para
                su proceso. Los datos se leen de los dispositivos de entrada y se almacenan en la
                memoria central o interna.</p>
              <p>Los dispositivos de entrada convierten la información en señales eléctricas que se
                almacenan en la memoria central. Los dispositivos de entrada típicos son los
                teclados, otros son: lápices ópticos, palancas de mando (joystick), CD-ROM,
                discos compactos (CD), etc. Hoy en día es muy frecuente que el usuario utilice un
                dispositivo de entrada llamado ratón que mueve un puntero electrónico sobre una
                pantalla que facilita la interacción usuario-máquina.</p>
              <p><img src="http://img.directindustry.es/images_di/projects/images-g/nuevo-modulo-digital-entrada-salida-por-soluciones-ingenieria-extremas-13463-9878724.jpg" alt="Resultado de imagen para modulos de entrada y salida"/></p>
              <h4 id="232-entradasalida-programada">2.3.2 Entrada/salida programada</h4>
              <p>Los dispositivos de Entrada y Salida permiten la comunicación entre la computadora y el
                usuario.</p>
              <h4 id="233-entradasalida-mediante-interrupciones">2.3.3 Entrada/salida mediante interrupciones</h4>
              <p>El problema con E/S programada es que el CPU tiene que esperar un tiempo
                considerable a que el módulo de E/S en cuestión esté preparado para recibir o
                transmitir los datos. El CPU debe estar comprobando continuamente el estado del
                módulo de E/S. Se degrada el desempeño del sistema.</p>
              <p>Una alternativa es que el CPU tras enviar una orden de E/S continue realizando
                algún trabajo útil. El módulo de E/S interrumpirá al CPU para solicitar su servicio
                cuando esté preparado para intercambiar datos. El CPU ejecuta la transferencia
                de datos y después continúa con el procesamiento previo.
                Se pueden distinguir dos tipos: E/S síncrona y E/S asíncrona
                E/S Síncrona: cuando la operación de E/S finaliza, el control es retornado al
                proceso que la generó. La espera por E/S se lleva a cabo por medio de una
                instrucción wait que coloca al CPU en un estado ocioso hasta que ocurre otra
                interrupción. Aquellas máquinas que no tienen esta instrucción utilizan un loop.
                Este loop continua hasta que ocurre una insterrupción transfiriendo el control a
                otra parte del sistema de operación. Sólo se atiende una solicitud de E/S por vez.
                El sistema de operación conoce exactamente que dispositivo está interrumpiendo.
                Esta alternativa excluye procesamiento simultáneo de E/S.</p>
              <p>E/S Asíncrona: retorna al programa usuario sin esperar que la operación de E/S
                finalice. Se necesita una llamada al sistema que le permita al usuario esperar por
                la finalización de E/S (si es requerido). También es necesario llevar un control de
                las distintas solicitudes de E/S. Para ello el sistema de operación utiliza una tabla
                que contiene una entrada por cada dispositivo de E/S (Tabla de Estado de
                Dispositivos).</p>
              <p>La ventaja de este tipo de E/S es el incremento de la eficiencia del sistema.
                Mientras se lleva a cabo E/S, el CPU puede ser usado para procesar o para
                planificar otras E/S. Como la E/S puede ser bastante lenta comparada con la
                velocidad del CPU, el sistema hace un mejor uso de las facilidades.</p>
              <h4 id="234-acceso-directo-a-memoria">2.3.4 Acceso directo a memoria</h4>
              <p>El acceso directo a memoria (DMA, del inglés direct memory access) permite a cierto tipo de
                componentes de una computadora acceder a la memoria del sistema para leer o escribir
                independientemente de la unidad central de procesamiento (CPU) principal. Muchos
                sistemas hardware utilizan DMA, incluyendo controladores de unidades de disco, tarjetas
                gráficas y tarjetas de sonido. DMA es una característica esencial en todos los ordenadores
                modernos, ya que permite a dispositivos de diferentes velocidades comunicarse sin someter a la
                CPU a una carga masiva de interrupciones.
                Una transferencia DMA consiste principalmente en copiar un bloque de memoria de un dispositivo
                a otro. En lugar de que la CPU inicie la transferencia, la transferencia se lleva a cabo por el
                controlador DMA. Un ejemplo típico es mover un bloque de memoria desde una memoria externa a
                una interna más rápida. Tal operación no ocupa al procesador y, por ende, éste puede efectuar
                otras tareas. Las transferencias DMA son esenciales para aumentar el rendimiento
                de aplicaciones que requieran muchos recursos.
                Cabe destacar que aunque no se necesite a la CPU para la transacción de datos, sí se necesita el
                bus del sistema (tanto bus de datos como bus de direcciones), por lo que existen diferentes
                estrategias para regular su uso, permitiendo así que no quede totalmente acaparado por el
                controlador DMA.
                El acceso directo a memoria es simplemente eso, un acceso a memoria que se crea al particionar
                la memoria en bloques del mismo tamaño.</p>
              <h4 id="235-canales-y-procesadores-de-entradasalida">2.3.5 Canales y procesadores de entrada/salida</h4>
              <p>En las entradas y salidas que se ejecutan desde el procesador entran tres
                conceptos que se deben conocer.</p>
              <ul>
                <li>El DMA</li>
                <li>Los Canales</li>
                <li>Y las instrucciones</li>
              </ul>
              <p><strong>DMA</strong></p>
              <p>Con un incremento moderado de la lógica asociada con el periférico se puede
                lograr transferir un bloque de información a o desde la memoria principal sin la
                intervención directa de la UCP. Esto requiere que los periféricos o los
                controladores de E/S sean capaces de generar direcciones de memoria y transferir
                datos a o desde el bus del sistema. La UCP es todavía la responsable de iniciar la
                transferencia de cada bloque. A partir de este punto el controlador de E/S realiza
                toda la operación sin que la UCP tenga que ejecutar ningún otro programa. La
                UCP y el controlador de E/S interaccionan sólo cuando la UCP debe dar el control
                del bus del sistema al controlador de E/S, como respuesta a una petición de este
                último. Este tipo de capacidad es lo que se conoce como Acceso Directo a Memoria (DMA).</p>
              <p><img src="https://arquitcomputadoras.files.wordpress.com/2013/06/piodma.gif" alt="Resultado de imagen para acceso directo a memoria"/></p>
              <p>La mayoría de los computadores de hoy día tienen la posibilidad de interrupción y
                de DMA. Un controlador de DMA posee un control parcial de la operación de E/S.</p>
              <p>La UCP puede liberarse totalmente si se introduce en el computador un
                Procesador de E/S (PE/S) o canal. Análogamente al DMA, el PE/S tiene acceso a
                la memoria principal y puede interrumpir a la UCP, sin embargo puede emplear un
                repertorio de instrucciones diferentes del de la UCP (ya que está orientado a
                operaciones de E/S).</p>
              <p><strong>Canales</strong>
                El canal de E/S es una extensión del concepto de DMA. Un canal de E/S tiene la
                capacidad de ejecutar instrucciones de E/S, lo que da un control total sobre las
                operaciones de E/S.
                Las instrucciones de E/S se almacenan en la memoria principal y serán ejecutadas
                por un procesador de propósito específico en el mismo canal de E/S.</p>
              <h3 id="24-buses">2.4 Buses</h3>
              <p>En arquitectura de computadores, el bus (o canal) es un sistema digital que transfiere datos entre
                los componentes de una computadora o entre computadoras. Está formado por cables o pistas en
                un circuito impreso, dispositivos como resistores y condensadores además de circuitos integrados.</p>
              <p>En los primeros computadores electrónicos, todos los buses eran de tipo paralelo, de manera que
                la comunicación entre las partes del computador se hacía por medio de cintas o muchas pistas en
                el circuito impreso, en los cuales cada conductor tiene una función fija y la conexión es sencilla
                requiriendo únicamente puertos de entrada y de salida para cada dispositivo.</p>
              <p>La tendencia en los últimos años se hacia uso de buses seriales como el USB, Firewire para
                comunicaciones con periféricos reemplazando los buses paralelos, incluyendo el caso como el
                del microprocesador con el chipset en la placa base. Esto a pesar de que el bus serial posee una
                lógica compleja (requiriendo mayor poder de cómputo que el bus paralelo) a cambio de
                velocidades y eficacias mayores.</p>
              <p>Existen diversas especificaciones de que un bus se define en un conjunto de características
                mecánicas como conectores, cables y tarjetas, además de protocolos eléctricos y de señales.</p>
              <p><img src="https://www.areatecnologia.com/informatica/imagenes/cable-bus.jpg" alt="Resultado de imagen para buses computadoras"/></p>
              <h4 id="241-tipos-de-buses">2.4.1 Tipos de buses</h4>
              <p><strong>Bus paralelo</strong>
                Es un bus en el cual los datos son enviados por bytes al mismo tiempo, con la ayuda de
                varias líneas que tienen funciones fijas. La cantidad de datos enviada es bastante grande
                con una frecuencia moderada y es igual al ancho de los datos por la frecuencia de
                funcionamiento. En los computadores ha sido usado de manera intensiva, desde el bus
                del procesador, los buses de discos duros, tarjetas de expansión y de vídeo, hasta las
                impresoras.</p>
              <p><strong>Diagrama de un Bus Backplane como extensión del bus de procesador.</strong>
                El front-side bus de los procesadores Intel es un bus de este tipo y como cualquier bus
                presenta unas funciones en líneas dedicadas:</p>
              <ul>
                <li><p>Las líneas de dirección son las encargadas de indicar la posición de memoria o el
                  dispositivo con el que se desea establecer comunicación.</p>
                </li>
                <li><p>Las líneas de control son las encargadas de enviar señales de arbitraje entre los
                  dispositivos. Entre las más importantes están las líneas de interrupción, DMA y los
                  indicadores de estado.</p>
                </li>
                <li><p>Las líneas de datos transmiten los bits de forma aleatoria de manera que por lo general un
                  bus tiene un ancho que es potencia de 2.</p>
                </li>
              </ul>
              <p>Un bus paralelo tiene conexiones físicas complejas, pero la lógica es sencilla, que lo hace
                útil en sistemas con poco poder de cómputo. En los primeros microcomputadores, el bus
                era simplemente la extensión del bus del procesador y los demás integrados &quot;escuchan&quot;
                la línea de direcciones, en espera de recibir instrucciones. En el PC IBM original, el diseño
                del bus fue determinante a la hora de elegir un procesador con I/O de 8 bits (Intel 8088),
                sobre uno de 16 (el 8086), porque era posible usar hardware diseñado para otros
                procesadores, abaratando el producto.</p>
              <p><strong>Bus serial</strong>
                En este los datos son enviados, bit a bit y se reconstruyen por medio de registros o rutinas
                de software. Está formado por pocos conductores y su ancho de banda depende de la
                frecuencia. Es usado desde hace menos de 10 años en buses para discos duros,
                unidades de estado sólido, tarjetas de expansión y para el bus del procesador.</p>
              <h4 id="242-estructura-de-los-buses">2.4.2 Estructura de los buses</h4>
              <p>Estructura de un bus:</p>
              <ul>
                <li><p>Líneas de datos:</p>
                  <ul>
                    <li>Líneas de dirección</li>
                    <li>Líneas de control</li>
                  </ul>
                </li>
                <li><p>Datos:</p>
                  <ul>
                    <li>Llevan datos y también comandos para los dispositivos de entrada /
                      salida.</li>
                    <li>Su amplitud influye en el rendimiento del bus</li>
                    <li>Relacionado con el tamaño de palabra del sistema</li>
                  </ul>
                </li>
                <li><p>Direcciones:</p>
                  <ul>
                    <li>Llevan direcciones de memoria en acceso a memoria, o permiten
                      seleccionar un dispositivo conectado al bus.</li>
                    <li>Su amplitud determina el espacio de direcciones tanto de memoria como
                      entrada / salida</li>
                  </ul>
                </li>
                <li><p>Control:</p>
                  <ul>
                    <li>Son señales de control de acceso y uso del bus.</li>
                    <li>Arbitraje del bus</li>
                    <li>Sincronización de las comunicaciones</li>
                    <li>Reloj del sistema</li>
                  </ul>
                </li>
              </ul>
              <h4 id="243-jerarquías-de-buses">2.4.3 Jerarquías de buses</h4>
              <p><strong>Jerarquía</strong>
                Tendencia a utilizar múltiples buses debido a que:</p>
              <ul>
                <li>degradación del rendimiento a medida que aumenta el número de
                  dispositivos colgados al bus.</li>
                <li>&quot;Cuello de botella&quot; de las comunicaciones debido a los tiempos de
                  espera para acceder al bus.
                  Por ellos se introducen múltiples buses basando la jerarquía en los requerimientos
                  de comunicación de los dispositivos:</li>
                <li>Bus local: Conecta al procesador con la cache y con algún dispositivo
                  e/s muy rápido.</li>
                <li>Bus del sistema: Conecta al procesador (a través de la cache) con la
                  memoria del sistema y con un segundo nivel de dispositivos de
                  velocidad media.</li>
                <li>Bus de expansión: Se conecta al bus del sistema y hace de interfaz
                  entre este y los dispositivos más lentos</li>
              </ul>
              <h3 id="25-interrupciones">2.5. Interrupciones</h3>
              <p>En el contexto de la informática, una interrupción (del inglés Interrupt Request,
                también conocida como petición de interrupción) es una señal recibida por
                el procesador de un ordenador, indicando que debe &quot;interrumpir&quot; el curso de
                ejecución actual y pasar a ejecutar código específico para tratar esta situación.</p>
              <p>Una interrupción es una suspensión temporal de la ejecución de un proceso, para
                pasar a ejecutar una subrutina de servicio de interrupción, la cual, por lo general,
                no forma parte del programa, sino que pertenece al sistema operativo o al BIOS).
                Una vez finalizada dicha subrutina, se reanuda la ejecución del programa.</p>
              <p>Las interrupciones surgen de la necesidad que tienen los dispositivos
                periféricos de enviar información al procesador principal de un sistema informático.</p>
              <p>La primera técnica que se empleó para esto fue el polling, que consistía en que el
                propio procesador se encargara de sondear los dispositivos periféricos cada cierto
                tiempo para averiguar si tenía pendiente alguna comunicación para él. Este
                método presentaba el inconveniente de ser muy ineficiente, ya que el procesador
                consumía constantemente tiempo y recursos en realizar estas instrucciones de
                sondeo.</p>
              <p>El mecanismo de interrupciones fue la solución que permitió al procesador
                desentenderse de esta problemática, y delegar en el dispositivo periférico la
                responsabilidad de comunicarse con él cuando lo necesitara. El procesador, en
                este caso, no sondea a ningún dispositivo, sino que queda a la espera de que
                estos le avisen (le &quot;interrumpan&quot;) cuando tengan algo que comunicarle (ya sea un
                evento, una transferencia de información, una condición de error, etc.).</p>



              <h1 id="unidad-ii-estructura-y-funcionamiento-de-la-cpu">Unidad II: Estructura y funcionamiento de la CPU</h1>
              <hr/>
              <h2 id="1-organización-del-procesador">1 Organización del procesador</h2>
              <p>Un procesador, incluye tanto registros visibles por el usuario como registros de
                control/estado. Los registros visibles por el usuario pueden ser de uso general o
                tener una utilidad especial, mientras que los registros de control y estado se usan
                para controlar el funcionamiento del procesador, un claro ejemplo es el contador
                de programa.</p>
              <p>Los procesadores utilizan la segmentación de instrucciones para acelerar la
                ejecución. La segmentación de cauce se puede dividir en ciclo de instrucción en
                varias etapas separadas que operan secuencialmente, tales como la captación de
                instrucción, decodificación de instrucción, cálculo de direcciones de operando,
                ejecución de instrucción y estructura del operando resultado.</p>
              <p><img src="http://4.bp.blogspot.com/-L0st5T4U8lw/VU2gLZHc_BI/AAAAAAAAACc/_1aYM28vTvE/s1600/9.png" alt="Resultado de imagen para registros computadoras"/></p>
              <h2 id="2-estructura-de-registros">2 Estructura de registros</h2>
              <p>El Registro está organizado en una estructura jerárquica compuesta por subárboles con
                sus respectivas claves, subclaves y entradas.
                El contenido del Registro puede variar considerablemente de un equipo a otro, en función
                de los dispositivos, servicios y programas instalados en cada equipo.
                Las claves pueden contener subclaves que, a su vez, pueden contener otras subclaves.
                Aunque la mayor parte de la información del Registro se almacena en disco y se
                considera permanente, algunos datos almacenados en claves volátiles se sobrescriben
                cada vez que se inicia el sistema operativo.</p>
              <h3 id="21-registros-visibles-para-el-usuario">2.1 Registros visibles para el usuario</h3>
              <p>Minimizan el acceso entre el microprocesador y cpu, debido a que se encuentran
                dentro del CPU, son manipulables por lenguaje de máquina. Aquí tenemos los 2
                principales:</p>
              <ol>
                <li>Registros de Datos. (Manipulables a bajo nivel).</li>
                <li>Registro de Direcciones (Manipulables a bajo nivel).</li>
                <li>Registro de índice.
                  Sirve para direccionamiento, es similar al “PC”, pero tiene un valor base de
                  autoincremento: Ejemplo: Base 3 ^ 3, 6, 9...n, n+1; que se irá sumando para
                  obtener una dirección más efectiva.</li>
              </ol>
              <h3 id="22-registros-de-control-y-de-estados">2.2 Registros de control y de estados</h3>
              <p>Hay diversos registros del procesador que se emplean para controlar su
                funcionamiento. La mayoría de ellos, en la mayor parte de las máquinas, no son
                visibles por el usuario. Algunos de ellos pueden ser visibles por ciertas
                instrucciones máquina ejecutadas en un modo de controlo de sistema operativo.</p>
              <p>Naturalmente, máquinas diferentes tendrán distintas organizaciones de registros y
                usarán distinta terminología. A continuación se presenta una lista razonablemente
                completa de tipos de registros, con una breve descripción.</p>
              <p>Son esenciales cuatro registros para la ejecución de una instrucción:</p>
              <ul>
                <li>Contador de programa (Program Counter, PC): contiene la dirección
                  de la instrucción a captar.</li>
                <li>Registro de instrucción (lnstruction Register, IR): contiene la
                  instrucción captada más recientemente.</li>
                <li>Registro de dirección de memoria (Memory Address Register, MAR):
                  contiene la dirección de una posición de memoria.</li>
                <li>Registro intermedio de memoria (Memory Buffer Register, MBR):
                  contiene la palabra de datos a escribir en memoria o la palabra leída
                  más recientemente.</li>
              </ul>
              <p>No todos los procesadores tienen registros internos designados como MAR y
                MBR, pero es necesario algún mecanismo de almacenamiento intermedio</p>
              <p>equivalente mediante el cual se dé salida a los bits que van a ser transferidos al
                bus del sistema y se almacenen temporalmente los bits leídos del bus de datos.</p>
              <p>Típicamente, el procesador actualiza PC después de cada captación de
                instrucción de manera que siempre apunta a la siguiente instrucción a ejecutar.
                Una instrucción de bifurcación o salto también modificará el contenido de PC. La
                instrucción captada se carga en IR, donde son analizados el código de operación y
                los campos de operando. Se intercambian datos con la memoria por medio de
                MAR y de MBR. En un sistema con organización de bus, MAR se conecta
                directamente al bus de direcciones, y MBR directamente al bus de datos. Los
                registros visibles por el usuario repetidamente intercambian datos con MBR.</p>
              <p>Los cuatro registros que se acaban de mencionar se usan para la transferencia de
                datos entre el procesador y la memoria. Dentro del procesador, los datos tienen
                que ofrecerse a la ALU para su procesamiento.</p>
              <p>La ALU puede tener acceso directo a MBR y a los registros visibles por el usuario.
                Como alternativa, puede haber registros intennedios adicionales en tomo a la ALU;
                estos registros sirven como registros de entrada y salida de la ALU e intercambian
                datos con MBR y los registros visibles por el usuario.</p>
              <h3 id="23-ejemplos-de-organización-de-registros-de-cpu-reales">2.3 Ejemplos de organización de registros de CPU reales</h3>
              <p>En algún diseño concreto de procesador es posible encontrar otros registros
                relativos a estado y control. Puede existir un puntero a un bloque de memoria que
                contenga información de estado adicional (por ejemplo, bloques de control de
                procesos). En las máquinas que usan interrupciones vectorizadas puede existir un
                registro de vector de interrupción. Si se utiliza una pila para llevar a cabo ciertas
                funciones (por ejemplo, llamada a subrutina), se necesita un puntero de pila del
                sistema. En un sistema de memoria virtual se usa un puntero a la tabla de</p>
              <p>páginas. Por último, pueden emplearse registros para el control de operaciones de
                E/S.</p>
              <p>En el diseño de la organización de los registros de control y estado entran en
                juego varios factores.</p>
              <p>Una cuestión primordial es el soporte del sistema operativo. Algunos tipos de
                información de control son de utilidad específica para el sistema operativo. Si el
                diseñador del procesador posee una comprensión funcional del sistema operativo
                que se va a utilizar, la organización de los registros puede adaptarse hasta cierto
                punto a ese sistema operativo.</p>
              <p>Otra decisión importante en el diseño es la distribución de información de control
                entre registros y memoria. Es frecuente dedicar los primeros (más bajos) pocos
                cientos o miles de palabras de memoria para fines de control. El diseñador debe
                decidir cuánta información de control debiera estar en registros y cuánta en
                memoria. Se presenta el compromiso habitual entre coste y velocidad.</p>
              <h2 id="3-el-ciclo-de-instrucción">3 El ciclo de instrucción</h2>
              <h3 id="31-ciclo-fetch-decode-execute">3.1 Ciclo Fetch-Decode-Execute</h3>
              <p>Un ciclo de instrucción (también llamado ciclo de fetch-and-execute o ciclo
                de fetch-decode-execute en inglés) es el período que tarda la unidad central de
                proceso (CPU) en ejecutar una instrucción delenguaje máquina.</p>
              <p>Comprende una secuencia de acciones determinada que debe llevar a cabo la
                CPU para ejecutar cada instrucción en un programa. Cada instrucción del juego de
                instrucciones de una CPU puede requerir diferente número de ciclos de instrucción
                para su ejecución. Un ciclo de instrucción está formado por uno o más ciclos
                máquina.</p>
              <p>Para que cualquier sistema de proceso de datos basado en microprocesador (por
                ejemplo un ordenador) o microcontrolador (por ejemplo un reproductor de MP3)
                realice una tarea (programa) primero debe buscar cada instrucción en la memoria
                principal y luego ejecutarla.</p>
              <h3 id="32-segmentación-de-instrucciones">3.2 Segmentación de instrucciones</h3>
              <h3 id="33-conjunto-de-instrucciones-características-y-funciones">3.3 Conjunto de instrucciones: Características y funciones</h3>
              <p>La segmentación de instrucciones es similar al uso de una cadena de montaje en
                una fábrica de manufacturación. En las cadenas de montaje, el producto pasa a
                través de varias etapas de producción antes de tener el producto terminado. Cada
                etapa o segmento de la cadena está especializada en un área específica de la
                línea de producción y lleva a cabo siempre la misma actividad. Esta tecnología es
                aplicada en el diseño de procesadores eficientes.</p>
              <p>A estos procesadores se les conoce como pipeline processors. Estos están
                compuestos por una lista de segmentos lineales y secuenciales en donde cada
                segmento lleva a cabo una tarea o un grupo de tareas computacionales. Los datos
                que provienen del exterior se introducen en el sistema para ser procesados. La
                computadora realiza operaciones con los datos que tiene almacenados
                en memoria, produce nuevos datos o información para uso externo.</p>
              <p>Las arquitecturas y los conjuntos de instrucciones se pueden clasificar
                considerando los siguientes aspectos:</p>
              <ul>
                <li><p>Almacenamiento de operandos en la CPU: dónde se ubican los operandos aparte
                  de la memoria.</p>
                </li>
                <li><p>Número de operandos explícitos por instrucción: cuántos operandos se expresan
                  en forma explícita en una instrucción típica. Normalmente son 0, 1, 2 y 3.</p>
                </li>
                <li><p>Posición del operando: ¿Puede cualquier operando estar en memoria?, o deben
                  estar algunos o todos en los registros internos de la CPU. Cómo se especifica la
                  dirección de memoria (modos de direccionamiento disponibles).</p>
                </li>
                <li><p>Operaciones: Qué operaciones están disponibles en el conjunto de instrucciones.</p>
                </li>
                <li><p>Tipo y tamaño de operandos y cómo se especifican.</p>
                </li>
              </ul>
              <h3 id="34-modos-de-direccionamiento-y-formatos">3.4 Modos de direccionamiento y formatos</h3>
              <p>El campo de operación de una instrucción especifica la operación que se debe
                realizar. Esta debe ser ejecutada sobre algunos datos almacenados en registros
                del computador o en palabras de memoria, es decir, sobre los operandos. El modo
                de direccionamiento especifica la forma de interpretar la información contenida en
                cada campo de operando para localizar, en base a esta información, el operando.</p>


              <h1 id="unidad-iii-selección-de-componentes-para-ensamble-de-equipo-de-cómputo">Unidad III: Selección de componentes para ensamble de equipo de cómputo</h1>
              <hr/>
              <h2 id="1-chip-set">1. Chip Set</h2>
              <p>Un chipset (traducido como circuito integrado auxiliar) es el conjunto de circuitos
                integrados diseñados con base a la arquitectura de un procesador (en algunos
                casos, diseñados como parte integral de esa arquitectura), permitiendo que ese
                tipo de procesadores funcionen en una placa base. Sirven de puente de
                comunicación con el resto de componentes de la placa, como son la memoria,
                las tarjetas de expansión, los puertos USB, ratón, teclado, etc.</p>
              <p><img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Intel_ICH7_Southbridge.JPG" alt="Resultado de imagen para chip set"/></p>
              <p>Las placas base modernas suelen incluir dos integrados, denominados puente
                norte y puente sur, y suelen ser los circuitos integrados más grandes después de
                la GPU y el microprocesador. Las últimas placa base carecen de puente norte, ya
                que los procesadores de última generación lo llevan integrado.</p>
              <p>El chipset determina muchas de las características de una placa base y por lo
                general la referencia de la misma está relacionada con la del chipset.</p>
              <p>A diferencia del microcontrolador, el procesador no tiene mayor funcionalidad sin
                el soporte de un chipset: la importancia del mismo ha sido relegada a un segundo
                plano por las estrategias de marketing.</p>
              <h2 id="2-aplicaciones">2 Aplicaciones</h2>
              <p>El Chipset es el que hace posible que la placa base funcione como eje del
                sistema, dando soporte a varios componentes e interconectándolos de forma que
                se comuniquen entre ellos haciendo uso de diversos buses. Es uno de los pocos
                elementos que tiene conexión directa con el procesador, gestiona la mayor parte
                de la información que entra y sale por el bus principal del procesador, del sistema
                de vídeo y muchas veces de la memoria RAM.</p>
              <p>En el caso de los computadores PC, es un esquema de arquitectura abierta que
                establece modularidad: el Chipset debe tener interfaces estándar para los demás
                dispositivos. Esto permite escoger entre varios dispositivos estándar, por ejemplo
                en el caso de los buses de expansión, algunas tarjetas madre pueden tener
                bus PCI-Express y soportar diversos tipos de tarjetas de distintos anchos de bus
                (1x, 8x, 16x).</p>
              <p>En el caso de equipos portátiles o de marca, el chipset puede ser diseñado a la
                medida y aunque no soporte gran variedad de tecnologías, presentará alguna
                interfaz de dispositivo.</p>
              <h2 id="3-ambientes-de-servicio">3. Ambientes de servicio</h2>
              <p>La terminología de los integrados ha cambiado desde que se creó el concepto del
                chipset a principio de los años 1990, pero todavía existe equivalencia haciendo
                algunas aclaraciones:</p>
              <ul>
                <li>El puente norte, northbridge, MCH (memory controller hub) o GMCH (graphic
                  MCH), se usa como puente de enlace entre elmicroprocesador y la memoria.
                  Controla las funciones de acceso hacia y entre el microprocesador, la memoria
                  RAM, el puerto gráficoAGP o el PCI-Express de gráficos, y las comunicaciones
                  con el puente sur. Al principio tenía también el control de PCI, pero esa
                  funcionalidad ha pasado al puente sur.</li>
                <li>El puente sur, southbridge o ICH (input controller hub), controla los dispositivos
                  asociados como son la controladora de discos IDE,
                  puertos USB, FireWire, SATA, RAID, ranuras PCI, ranura AMR, ranura CNR,
                  puertos infrarrojos, disquetera, LAN, PCI-Express 1x y una larga lista de todos
                  los elementos que podamos imaginar integrados en la placa madre. Es el
                  encargado de comunicar el procesador con el resto de los periféricos.</li>
              </ul>
              <p>En la actualidad los principales fabricantes de chipsets son AMD, ATI
                Technologies (comprada en 2006 por AMD), Intel, NVIDIA, Silicon Integrated
                Systems y VIA Technologies.</p>
              <p><img src="https://as00.epimg.net/meristation/imagenes/2018/08/20/noticias/1534741192_757447_1534741222_noticia_normal.jpg" alt="Resultado de imagen para nvidia image"/></p>

              <h1 id="unidad-iv-procesamiento-paralelo">Unidad IV: Procesamiento paralelo</h1>
              <hr/>
              <h2 id="1-aspectos-básicos-de-la-computación-paralela">1 Aspectos básicos de la computación paralela</h2>
              <p>La computación paralela es una forma de cómputo en la que muchas instrucciones se ejecutan
                simultáneamente,^1 operando sobre el principio de que problemas grandes, a menudo se pueden
                dividir en unos más pequeños, que luego son resueltos simultáneamente (en paralelo). Hay varias
                formas diferentes de computación paralela: paralelismo a nivel de bit, paralelismo a nivel de
                instrucción, paralelismo de datos y paralelismo de tareas. El paralelismo se ha empleado durante
                muchos años, sobre todo en la computación de altas prestaciones, pero el interés en ella ha
                crecido últimamente debido a las limitaciones físicas que impiden el aumento de la frecuencia.n.</p>
              <p>Como el consumo de energía —y por consiguiente la generación de calor— de las
                computadoras constituye una preocupación en los últimos años,n. 2^3 la computación en paralelo se
                ha convertido en el paradigma dominante en la arquitectura de computadores, principalmente en
                forma de procesadoresmultinúcleo.
                Las computadoras paralelas pueden clasificarse según el nivel de paralelismo que admite
                su hardware: equipos con procesadores multinúcleo y multi-procesador que tienen múltiples
                elementos de procesamiento dentro de una sola máquina y los clústeres, MPPS y grids que utilizan
                varios equipos para trabajar en la misma tarea. Muchas veces, para acelerar la tareas específicas,
                se utilizan arquitecturas especializadas de computación en paralelo junto a procesadores
                tradicionales.
                Los programas informáticos paralelos son más difíciles de escribir que los secuenciales, porque la
                concurrencia introduce nuevos tipos de errores de software, siendo las condiciones de carrera los
                más comunes. La comunicación y sincronización entre diferentes subtareas son algunos de los
                mayores obstáculos para obtener un buen rendimiento del programa paralelo.
                La máxima aceleración posible de un programa como resultado de la paralelización se conoce
                como la ley de Amdahl.</p>
              <p><img src="https://www.agenciasinc.es/var/ezwebin_site/storage/images/multimedia/videos/en-busca-de-una-computacion-paralela-mas-rapida-eficiente-y-sostenible/3224163-1-esl-MX/En-busca-de-una-computacion-paralela-mas-rapida-eficiente-y-sostenible.jpg" alt="Resultado de imagen para computadora paralela"/></p>
              <h2 id="2-tipos-de-computación-paralela">2 Tipos de computación paralela</h2>
              <p><strong>Paralelismo a nivel de bit</strong></p>
              <p>Desde el advenimiento de la integración a gran escala (VLSI) como tecnología de
                fabricación de chips de computadora en la década de 1970 hasta alrededor de
                1986, la aceleración en la arquitectura de computadores se lograba en gran
                medida duplicando el tamaño de la palabra en la computadora, la cantidad de
                información que el procesador puede manejar por ciclo. 18 El aumento del tamaño
                de la palabra reduce el número de instrucciones que el procesador debe ejecutar
                para realizar una operación en variables cuyos tamaños son mayores que la
                longitud de la palabra. Por ejemplo, cuando un procesador de 8 bits debe sumar
                dos enteros de 16 bits, el procesador primero debe adicionar los 8 bits de orden
                inferior de cada número entero con la instrucción de adición, a continuación,
                añadir los 8 bits de orden superior utilizando la instrucción de adición con acarreo
                que tiene en cuenta el bit de acarreo de la adición de orden inferior, en este caso
                un procesador de 8 bits requiere dos instrucciones para completar una sola
                operación, en donde un procesador de 16 bits necesita una sola instrucción para
                poder completarla.</p>
              <p>Históricamente, los microprocesadores de 4 bits fueron sustituidos por unos de 8
                bits, luego de 16 bits y 32 bits, esta tendencia general llegó a su fin con la
                introducción de procesadores de 64 bits, lo que ha sido un estándar en la
                computación de propósito general durante la última década.</p>
              <p><strong>Paralelismo a nivel de instrucción</strong></p>
              <p>Un pipeline canónico de cinco etapas en una máquina RISC (IF = Pedido de
                Instrucción, ID = Decodificación de instrucción, EX = Ejecutar, MEM = Acceso a la
                memoria, WB = Escritura).</p>
              <p>Un programa de ordenador es, en esencia, una secuencia de instrucciones
                ejecutadas por un procesador. Estas instrucciones pueden reordenarse y
                combinarse en grupos que luego son ejecutadas en paralelo sin cambiar el
                resultado del programa. Esto se conoce como paralelismo a nivel de instrucción.
                Los avances en el paralelismo a nivel de instrucción dominaron la arquitectura de
                computadores desde mediados de 1980 hasta mediados de la década de 1990. 19</p>
              <p>Los procesadores modernos tienen &#39;&#39;pipeline&#39;&#39; de instrucciones de varias etapas.
                Cada etapa en el pipeline corresponde a una acción diferente que el procesador
                realiza en la instrucción correspondiente a la etapa; un procesador con
                un pipeline de N etapas puede tener hasta n instrucciones diferentes en diferentes
                etapas de finalización. El ejemplo canónico de un procesador segmentado es un
                procesador RISC, con cinco etapas: pedir instrucción, decodificar, ejecutar, acceso
                a la memoria y escritura. El procesador Pentium 4 tenía un pipeline de 35
                etapas.</p>
              <p>Un procesador superescalar con pipeline de cinco etapas, capaz de ejecutar dos
                instrucciones por ciclo. Puede tener dos instrucciones en cada etapa delpipeline,
                para un total de hasta 10 instrucciones (se muestra en verde) ejecutadas
                simultáneamente.</p>
              <p>Además del paralelismo a nivel de instrucción del pipelining, algunos procesadores
                pueden ejecutar más de una instrucción a la vez. Estos son conocidos como
                procesadores superescalares. Las instrucciones pueden agruparse juntas sólo si
                no hay dependencia de datos entre ellas. El scoreboarding y elalgoritmo de
                Tomasulo —que es similar a scoreboarding pero hace uso del renombre de
                registros— son dos de las técnicas más comunes para implementar la ejecución
                fuera de orden y la paralelización a nivel de instrucción.</p>
              <h3 id="21-taxonomía-de-las-arquitecturas-paralelas">2.1 Taxonomía de las arquitecturas paralelas</h3>
              <p>El primer paso hacia la paralelización de las arquitecturas de los computadores, se
                da con la aparición de los procesadores o sistemas vectoriales. Los procesadores
                vectoriales extienden el concepto de paralelismo por segmentación al tratamiento
                de grandes cadenas de datos.</p>
              <p>Problemas. Se han propuesto diversas definiciones para arquitecturas paralelas.
                La dificultad en definir con precisión el término está entrelazada con el problema
                de especificar una taxonomía de arquitecturas paralelas. El problema central para
                poder especificar una definición y consiguientemente la taxonomía para las
                modernas arquitecturas paralelas es lograr satisfacer el siguiente conjunto de
                imperativos:</p>
              <ul>
                <li>Excluir las arquitecturas que incorporan solamente mecanismos de paralelismo de
                  bajo nivel y que se han popularizado tanto como característica típica de las
                  modernas computadoras.</li>
                <li>Mantener los elementos útiles de la clasificación de Flynn tales como los flujos de
                  datos e instrucciones.</li>
                <li>Incluir los procesadores vectoriales pipelinizados y otras arquitecturas que
                  intuitivamente ameritan incluirse como arquitecturas paralelas, pero que no se
                  ajustan fácilmente al esquema de Flynn.</li>
              </ul>
              <h3 id="22-arquitectura-de-los-computadores-secuenciales">2.2 Arquitectura de los computadores secuenciales</h3>
              <p>A diferencia de los sistemas combinacionales, en los sistemas secuenciales, los
                valores de las salidas, en un momento dado, no dependen exclusivamente de los
                valores de las entradas en dicho momento, sino también de los valores anteriores.
                El sistema secuencial más simple es el biestable.</p>
              <p>La mayoría de los sistemas secuenciales están gobernados por señales de reloj. A
                éstos se los denomina &quot;síncronos&quot; o &quot;sincrónicos&quot;, a diferencia de los &quot;asíncronos&quot;
                o &quot;asincrónicos&quot; que son aquellos que no son controlados por señales de reloj.</p>
              <p>A continuación se indican los principales sistemas secuenciales que pueden
                encontrarse en forma de circuito integrado o como estructuras en sistemas
                programados:</p>
              <ul>
                <li>Contador</li>
                <li>Registros</li>
              </ul>
              <h4 id="221-taxonomía-de-flynn">2.2.1 Taxonomía de Flynn</h4>
              <p>Probablemente la clasificación más popular de computadores sea la clasificación
                de Flynn. Esta taxonomía de las arquitecturas está basada en la clasificación
                atendiendo al flujo de datos e instrucciones en un sistema. Un flujo de
                instrucciones es el conjunto de instrucciones secuenciales que son ejecutadas por
                un único procesador, y un flujo de datos es el flujo secuencial de datos requeridos
                por el flujo de instrucciones.</p>
              <h4 id="222-organización-del-espacio-de-direcciones-de-memoria">2.2.2 Organización del espacio de direcciones de memoria</h4>
              <p><strong>Organización lógica</strong>
                Los programas a menudo están organizados en módulos, algunos de los cuales
                pueden ser compartidos por diferentes programas, algunos son de sólo-lectura y
                otros contienen datos que se pueden modificar. La gestión de memoria es
                responsable de manejar esta organización lógica, que se contrapone al espacio de
                direcciones físicas lineales. Una forma de lograrlo es mediante la segmentación de
                memoria.</p>
              <p><strong>Organización física</strong></p>
              <p>La memoria suele dividirse en un almacenamiento primario de alta velocidad y uno
                secundario de menor velocidad. La gestión de memoria del sistema operativo se
                ocupa de trasladar la información entre estos dos niveles de memoria</p>
              <h2 id="3-sistemas-de-memoria-compartida-multiprocesadores">3 Sistemas de memoria compartida: Multiprocesadores</h2>
              <p>Cada procesador posee su propia unidad de control ejecuta su propio código
                sobre sus propios datos, puede ejecutar cualquier aplicación (no solo programas
                vectoriales).</p>
              <p><img src="https://1.bp.blogspot.com/-vMfC_rlN0YQ/V5FRbQ9ayHI/AAAAAAAAPpQ/QcJMZMRLHBYdaYWWJug4aFXdpvCqPU2FACLcB/s400/multiprocesador1.jpg" alt="Resultado de imagen para multiprocesadores"/></p>
              <p><strong>Memoria Compartida Centralizada:</strong></p>
              <p>La memoria compartida por todos los procesadores y accesible desde cualquiera.
                Descompuesta en varios módulos para permitir el acceso concurrente de varios
                procesadores
                Cada procesador debe tener un espacio de direccionamiento suficientemente
                amplio como para poder direccionarla completamente.
                Multiprocesador con un sistema de memoria compartida en el cual el tiempo de
                acceso varía dependiendo de la ubicación de la palabra de memoria.
                La memoria compartida se distribuye físicamente por todos los procesadores
                (memorias locales). El conjunto de memorias locales forma el espacio de
                direccionamiento global accesible por todos los procesadores. En los
                multiprocesadores cada procesador suele tener asociada una cache local y ello
                introduce el problema de la coherencia en chache: cualquier modificación local de
                una determinada posición de la memoria compartida se realizara primeramente
                sobre una chache local y ello puede dar lugar a una visión global incoherente de la
                memoria.los elementos que integran un multiprocesador puede estar conectados
                entre sí a través de una estructura</p>
              <p>Jerárquica de buses.los buses digitales son los sistemas de interconexión
                fundamentales adoptados en sistemas comerciales desde estaciones de trabajo a
                minicomputadores, mainframes y multiprocesadores.</p>
              <h3 id="31-redes-de-interconexión-dinámicas-o-indirectas">3.1 Redes de interconexión dinámicas o indirectas</h3>
              <p><strong>Características:</strong>
                Antes de definir las características de las redes de interconexión diremos que se
                llama nodo a cualquiera de los dispositivos que se quiera conectar a la red, tales
                como elementos de proceso, módulos de memoria, procesadores de
                entrada/salida, etc.</p>
              <ul>
                <li><p>Grado de los nodos</p>
                </li>
                <li><p>Diámetro de una red</p>
                </li>
                <li><p>Ancho de bisección</p>
                </li>
                <li><p>Latencia de una red</p>
                </li>
                <li><p>Productividad</p>
                </li>
                <li><p>Escalabilidad</p>
                </li>
                <li><p>Simetría</p>
                </li>
                <li><p>Conectividad</p>
                  <p><strong>Clasificación de Redes de interconexión:</strong>
                    El criterio más importante para la clasificación de las redes de interconexión se
                    basa en la rigidez de los enlaces entre los nodos: a este respecto a las redes
                    pueden clasificarse en estáticas o dinámicas. Una red estática se caracteriza
                    porque su topología queda establecida de forma definitiva y estable cuando se
                    instala un sistema; su única posibilidad de modificación es crecer. Por el contrario,
                    una red dinámica puede variar de topología bien durante el curso de la ejecución o
                    de los procesos o bien entre la ejecución de los mismos.
                    Por otra parte, las redes pueden ser jerárquicas o no, los son si están formadas
                    por una serie de niveles, con diferente número de nodos, dentro de cada uno de
                    los cuales existe simetría. La mayoría de las redes jerárquicas suelen ser
                    estáticas, sin embargo, hay algún tipo de topología dinámica que también puede
                    serlo.</p>
                </li>
              </ul>
              <p><strong>Redes de interconexión dinámicas</strong>
                Las redes de interconexión dinámicas son convenientes en los casos en que se
                desee una red de propósito general ya que son fácilmente reconfigurables.
                También por eso, este tipo de Redes facilitan mucho la escalabilidad. En general,
                las redes dinámicas necesitan de elementos de conexión específicos como
                pueden ser árbitros de bus, conmutadores, etc. Las principales topologías de
                redes dinámicas son las siguientes:</p>
              <ul>
                <li><p>Buses</p>
                </li>
                <li><p>Redes de líneas cruzadas o matriz de conmutación (crossbar)</p>
                </li>
                <li><p>Redes multietapa o MIN (Multistage Interconnection Network)</p>
                </li>
                <li><p>Redes Omega</p>
                </li>
                <li><p>Redes de línea base</p>
                </li>
                <li><p>Redes Mariposa</p>
                </li>
                <li><p>Redes Delta</p>
                </li>
                <li><p>Redes de Closs</p>
                </li>
                <li><p>Redes de Benes</p>
                </li>
              </ul>
              <h4 id="311-redes-de-medio-compartido">3.1.1 Redes de medio compartido</h4>
              <p><strong>Entorno de medios compartidos</strong></p>
              <p>Ocurre cuando varios host tiene acceso al mismo medio. Por ejemplo, si varios PC
                se encuentran conectados al mismo cable físico, a la misma fibra óptica entonces
                se dice que comparten el mismo entorno de medios.</p>
              <p><strong>Entorno extendido de medios compartidos</strong></p>
              <p>Es un tipo especial de entorno de medios compartidos en el que los dispositivos
                de networking pueden ampliar el entorno de modo que pueda incluir accesos
                múltiples o distancias mayores de cableado.</p>
              <p>El vehículo básico que empleamos para acceder a nuestra red es la conexión de
                nuestro ordenador a la misma. Se realiza generalmente mediante cables.
                Dependiendo del cable y de sus características físicas, podremos realizar
                diferentes conexiones.</p>
              <p>La conexión física entre el ordenador y la red se establece siempre a través de un
                puerto. Un conector permite enlazar el medio de transmisión con la circuitería de
                acceso a la red. Para cada sistema de cableado se emplea un puerto distinto y
                algunas veces un dispositivo accesorio</p>
              <p>El cable, que más proyección tiene hoy en día es el de fibra óptica, pero hoy por
                hoy es caro y difícil de instalar. Sin embargo, es recomendable su utilización para
                enlazar redes distantes y para crear enlaces muy rápidos entre servidores o
                interconexión de redes.</p>
              <p>Los tres principales medios de transmisión utilizados en las redes locales son:</p>
              <ul>
                <li><p>par trenzado </p>
                </li>
                <li><p>cable coaxial</p>
                </li>
                <li><p>fibra óptica</p>
                </li>
              </ul>
              <h4 id="312-redes-conmutadas">3.1.2 Redes conmutadas</h4>
              <p>Consiste en un conjunto de nodos interconectados entre si, a través de medios de
                transmisión, formando la mayoría de las veces una topología mallada, donde la
                información se transfiere encaminándola del nodo de origen al nodo destino
                mediante conmutación entre nodos intermedios. Una transmisión de este tipo tiene
                3 fases:</p>
              <ul>
                <li>Establecimiento de la conexión</li>
                <li>Transferencia de la información</li>
                <li>Liberación de la conexión</li>
              </ul>
              <p>La conmutación en un nodo a la conexión física o lógica de un camino de entrada
                al nodo con un camino de salida del nodo con el fin de transferir la información que
                llegue por el primer camino al segundo.la redes conmutadas son las redes de área
                extensa.</p>
              <p>Las redes conmutadas se dividen en:</p>
              <ul>
                <li>Conmutación de paquetes</li>
                <li>Conmutación de circuitos</li>
              </ul>
              <p><strong>La conmutación de paquetes:</strong>
                Es un método de envío de datos en una red de computadoras. Un paquete es un
                grupo de información que consta de dos partes: los datos propiamente dichos y la
                información de control, que indica la ruta a seguir a lo largo de la red hasta el
                destino del paquete. Existe un límite superior para el tamaño de los paquetes; si
                se excede, es necesario dividir el paquete en otros más pequeños.</p>
              <p><strong>Ventajas</strong>:</p>
              <ul>
                <li>Los paquetes forman una cola y se transmiten lo más rápido posible.</li>
                <li>Permiten la conversión en la velocidad de los datos.</li>
                <li>La red puede seguir aceptando datos aunque la transmisión sea lenta.</li>
                <li>Existe la posibilidad de manejar prioridades (si un grupo de información es
                  más importante que los otros, será transmitido antes que dichos otros).</li>
              </ul>
              <p><strong>La conmutación de circuitos:</strong>
                Es un tipo de conexión que realizan los diferentes nodos de una red para lograr un
                camino apropiado para conectar dos usuarios de una red de telecomunicaciones.
                A diferencia de lo que ocurre en la conmutación de paquetes, en este tipo de
                conmutación se establece un canal de comunicaciones dedicado entre dos
                estaciones. Se reservan recursos de transmisión y de conmutación de la red para
                su uso exclusivo en el circuito durante la conexión. Ésta es transparente: una vez
                establecida parece como si los dispositivos estuvieran realmente conectados.</p>
              <p><strong>Ventajas</strong></p>
              <ul>
                <li>El ancho de banda es definido y se mantiene constante durante la
                  comunicación.</li>
                <li>El circuito es fijo, no se pierde tiempo en el encaminamiento de la
                  información.</li>
                <li>La transmisión se realiza en tiempo real, siendo útil para la comunicación
                  de voz y video.</li>
                <li>Si bien existe retardo en el establecimiento de la llamada, el retardo de la
                  transmisión posterior es despreciable; si el tráfico se realiza generalmente
                  entre el mismo par de estaciones puede ser más veloz.</li>
              </ul>
              <h3 id="32-coherencia-de-cache">3.2 Coherencia de cache</h3>
              <p>La coherencia de cache hace referencia a la integridad de los datos almacenados en las caches
                locales de los recursos compartidos. La coherencia de la cache es un caso especial de la coherencia
                de memoria.</p>
              <p><strong>Múltiples caches con recursos comunes.</strong></p>
              <p>Cuando los clientes de un sistema, en particular las CPUs en un multiprocesador, mantienen
                caches de una memoria compartida, los conflictos crecen. Haciendo referencia al dibujo, si el
                cliente de arriba tiene una copia de un bloque de memoria de una lectura previa y el cliente de</p>
              <p>abajo cambia ese bloque, el cliente de arriba podría estar trabajando con datos erróneos, sin tener
                conocimiento de ello. La coherencia de la cache intenta administrar estos conflictos y mantener
                consistencia entre las caches y la memoria.</p>
              <h2 id="4-sistemas-de-memoria-distribuida-multicomputadores">4 Sistemas de memoria distribuida. Multicomputadores:</h2>
              <p><strong>Clusters</strong></p>
              <p>Un cluster es una tipo de arquitectura paralela distribuida que consiste de un
                conjunto de computadores independientes (y bajo coste en principio)
                interconectados operando de forma conjunta como un único recurso
                computacional</p>
              <p>Sin embargo, cada computador puede utilizarse de forma independiente o
                separada.</p>
              <h3 id="41-redes-de-interconexión-estáticas">4.1 Redes de interconexión estáticas</h3>
              <h3 id="42-cluster">4.2 Cluster</h3>
              <p>El término clúster (del inglés cluster, &quot;grupo&quot; o &quot;racimo&quot;) se aplica a los conjuntos o conglomerados
                de computadoras construidos mediante la utilización de hardwares comunes y que se comportan
                como si fuesen una única computadora.</p>
              <p>La tecnología de clústeres ha evolucionado en apoyo de actividades que van desde aplicaciones
                de supercómputo y software de misiones críticas, servidores web y comercio electrónico, hasta
                bases de datos de alto rendimiento, entre otros usos.</p>
              <p><img src="https://www.advancedclustering.com/wp-content/uploads/2017/02/campus-hpc-cluster.jpg" alt="Resultado de imagen para clusters in computer architecture"/></p>
              <p>El cómputo con clústeres surge como resultado de la convergencia de varias tendencias actuales
                que incluyen la disponibilidad de microprocesadores económicos de alto rendimiento y redes de
                alta velocidad, el desarrollo de herramientas de software para cómputo distribuido de alto
                rendimiento, así como la creciente necesidad de potencia computacional para aplicaciones que la
                requieran.</p>
              <p>Simplemente, un clúster es un grupo de múltiples ordenadores unidos mediante una red de alta
                velocidad, de tal forma que el conjunto es visto como un único ordenador, más potente que los
                comunes de escritorio.</p>
              <p>Los clústeres son usualmente empleados para mejorar el rendimiento y/o la disponibilidad por
                encima de la que es provista por un solo computador típicamente siendo más económico que
                computadores individuales de rapidez y disponibilidad comparables.</p>
              <p>De un clúster se espera que presente combinaciones de los siguientes servicios:</p>
              <ol>
                <li>Alto rendimiento</li>
                <li>Alta disponibilidad</li>
                <li>Balanceo de carga</li>
                <li>Escalabilidad</li>
              </ol>
              <h3 id="43-programación-de-clusters">4.3 Programación de clusters</h3>
              <p>Programación paralela: estos cluster están diseñados y optimizados
                para correr programas paralelos. En este caso, los programas tienen que
                ser hechos específicamente para funcionar en forma paralela.
                Típicamente estos programas son modelos que requieren realizar gran
                cantidad de cálculos numéricos. La ventaja de programarlos de esta
                manera y correrlos en un cluster es que se reducen drásticamente los
                tiempos de proceso. En el caso de modelos meteorológicos usados para
                predecir el tiempo es obvia la necesidad de correrlos en tiempo mínimo.
                Cuando se programa un modelo en una plataforma multiprocesadores
                (una máquina con más de un procesador), es necesario usar esquemas
                de programación paralela. Las bibliotecas (MPI) son las que permiten
                paralelización de tareas. En el caso de los cluster SCALI, portar
                programas hechos con bibliotecas MPI es directo gracias al uso de
                bibliotecas SCAMPI.
                Es sumamente importante los sistemas de interconexión utilizados entre
                los nodos en este tipo de clusters. SCI es un standard internacional
                (IEEE1596) para interconexiones de alta velocidad. Dolphin Interconnect
                Solutions fabrica una variedad de productos SCI, entre los cuales se
                encuentran las tarjetas adaptadoras SCI-PCI que SCALI utiliza en sus
                clusters. El performance de estas tarjetas es sorprendente: varios cientos
                de megabytes por segundo y tiempos de latencia inferiores al
                microsegundo en la capa SCI llegando a los límites del bus PCI
                (64bits/66Mhz).</p>
              <p><strong>Usos:</strong></p>
              <ul>
                <li>Análisis Estructural</li>
                <li>Simulaciones de mecánica de fluidos</li>
                <li>Modelos genómicos</li>
                <li>Predicción meteorológica</li>
                <li>Y el estudio de cualquier fenómeno que pueda ser modelado
                  matemáticamente.</li>
              </ul>
              <h3 id="44-consideraciones-sobre-el-rendimiento-de-los-clusters">4.4 Consideraciones sobre el rendimiento de los clusters</h3>
              <p>Un cluster de alto rendimiento es un conjunto de ordenadores que está diseñado
                para dar altas prestaciones en cuanto a capacidad de cálculo. Los motivos para
                utilizar un cluster de alto rendimiento son:</p>
              <ul>
                <li>el tamaño del problema por resolver</li>
                <li>el precio de la máquina necesaria para resolverlo.</li>
              </ul>
              <p>Por medio de un cluster se pueden conseguir capacidades de cálculo superiores a
                las de un ordenador más caro que el costo conjunto de los ordenadores del
                cluster.</p>
              <p>Ejemplo de clusters baratísimos son los que se están realizando en algunas
                universidades con computadoras personales desechados por &quot;anticuados&quot; que
                consiguen competir en capacidad de cálculo con superordenadores carísimos.</p>
              <p>Para garantizar esta capacidad de cálculo, los problemas necesitan ser
                paralelizables, ya que el método con el que los clusters agilizan el procesamiento
                es dividir el problema en problemas más pequeños y calcularlos en los nodos, por
                lo tanto, si el problema no cumple con esta característica, no puede utilizarse el
                cluster para su cálculo.</p>
              <p>Para que un problema sea paralelizable se debe hacer uso
                de bibliotecas especiales como lo es PVM (parallel virtual machine) o MPI
                (Message passage interface), donde la primera es usada especialmente en cluster
                con nodos hetereogéneos (arquitectura del procesador, sistemas operativo, entre
                otras), y pertenecientes a diferentes dominios de red, la segunda biblioteca usada
                para cluster homogéneos.</p>
              <p>Un tipo de software para realizar cluster high performace es OSCAR (Open
                Source Cluster Application Resources) distribuido bajo licencia GPL. Este software
                trabaja sobre el sistema operativo Linux. En Windows se podría utilizar &quot;WCC
                2003&quot; (Windows Computer Cluster).</p>

            </div>
          </div>

          <div className="index">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.4.2/tocbot.css"/>
            <nav className="js-toc toc"/>
          </div>

        </div>
      </Layout>

        // {/*<div className="row">*/}
        // {/*  <div className="col-3 d-none d-lg-block d-print-none">*/}
        // {/*    <nav className="auto-toc sticky-top py-5"></nav>*/}
        // {/*  </div>*/}
        // {/*  <div className="col-6 col-offset-2 main-content">*/}
        // {/*  </div>*/}
        // {/*</div>*/}
    );
  }
}

