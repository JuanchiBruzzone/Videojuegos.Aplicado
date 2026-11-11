# Pasos de Luz

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado · Documento maestro · v1.2.1

## Índice

- [1. Concepto](#1-concepto)
- [2. Pilares](#2-pilares)
- [3. Diseño y entrega](#3-diseño-y-entrega)
- [4. Prototipado](#4-prototipado)
- [5. Scope](#5-scope)
- [6. Niveles](#6-niveles)
- [7. Cierre](#7-cierre)
- [8. Documentos](#8-documentos)

## 1. Concepto



### High Concept

Un juego de puzzles por turnos en el que recorro un observatorio apagado y pinto el piso al caminar. Las casillas iluminadas ya no permiten volver, así que tengo que elegir un recorrido que cubra toda la sala. Las Sombras, las compuertas, el teleporter y el piso negro cambian cómo llego a los espacios que faltan.

### Hook

Cada paso da luz y te cierra un camino.

### Unique Selling Points

El camino se cierra a medida que lo completo: pintar también cambia por dónde puedo avanzar.

Las Sombras se mueven con mis pasos. Puedo pensar sin apuro y despejarlas con Pulso desde una casilla vecina.

Sellos, compuertas y teleporter conectan sectores; el piso negro corta atajos. Los niveles presentan estas reglas de a poco y después las combinan.

### Tema

Un observatorio abandonado, de noche. Cada sala representa una constelación apagada.

### Premisa

Restaurar la luz exige elegir qué caminos dejar atrás.

### Narrativa

El personaje recorre las salas para recuperar las constelaciones del observatorio. Las Sombras ocupan los lugares que siguen apagados. La historia se cuenta a través del recorrido y de las salas que vuelven a iluminarse.

### Estética

Sprites pequeños, luz cálida y piso azul oscuro. El piso negro, los sellos y el teleporter tienen marcas propias. Los sonidos están incluidos en PuzzleScript: pasos, Pulso, apertura, salto y victoria, con señales tonales breves al iniciar y completar una sala.





## 2. Pilares



### Pilares comerciales

#### Tiempo

La entrega está cerrada con 22 salas. El Gantt queda con cero horas restantes. Priorizo una campaña que pueda revisar y mantener solo.

#### Inversión

Uso las herramientas que ya tengo: PuzzleScript, JavaScript, GitHub Pages y Drive. Para esta versión no tengo previsto comprar música, sprites ni servicios. La inversión principal es mi tiempo.

#### Riesgo

Que un nivel tenga solución no quiere decir que se entienda o sea divertido. Para reducir ese riesgo, pruebo las reglas por separado, compruebo los recorridos y tomo el feedback. También necesito frenar el crecimiento del juego para poder revisar lo que ya hice.

### Pilares de diseño

#### Objetivo

Iluminar todo el piso que se puede recorrer. Cada paso pinta una casilla y cierra el regreso. Al completar la sala, la constelación recupera su luz y puedo pasar a la siguiente.

#### Experiencia

Busco que el jugador observe, pruebe y descubra el recorrido sin apuro. Me interesa que pueda entender dónde se equivocó y tener ganas de probar otra idea. Por eso no hay reloj y se puede deshacer o reiniciar.

#### Límites

Un jugador, movimiento en cuatro direcciones y el tablero a la vista. Mantengo cinco reglas, hasta tres Sombras, un sello con su compuerta y un salto A → B por sala. La dificultad viene de cómo se combinan y de la forma del piso.

### Pilares de desarrollo

#### Plataforma

El juego está hecho en PuzzleScript oficial y se puede copiar completo al editor. Los sonidos y los sprites forman parte de ese programa. La web conserva los estudios y permite probar el resultado.

#### Proceso

Diseño una sala, genero el programa y compruebo que tenga solución en el motor. Después pruebo cómo se entiende, anoto el feedback, hago ajustes y vuelvo a comprobarla. Mantengo el código y los documentos sueltos junto al maestro.

#### Know-how

Tengo funcionando el piso, las Sombras, Pulso, compuertas, teleporter y sonidos. Los scripts generan el programa y comprueban las soluciones. La revisión de cierre es interna; el feedback recibido de Diego D y Vanesa queda registrado en la planilla.

### Decisiones

Me quedo con el observatorio porque recuperar luz tiene sentido en ese lugar. Aclaré Pulso desde su primera aparición y sumé seis salas avanzadas usando las reglas que ya estaban. El motor reproduce efectos y señales tonales breves al iniciar y completar una sala. No lleva una pista musical de fondo.


## 3. Diseño y entrega


### Mecánicas, dinámicas y experiencia

Caminar pinta el piso y bloquea el regreso. Pulso disipa las Sombras vecinas. El sello abre la compuerta y A lleva a B. Las patrullas se mueven con los pasos válidos. Un intento bloqueado no adelanta el turno.

Estas reglas me obligan a cuidar los accesos y decidir qué parte de la sala recorrer primero. Busco que el jugador descubra el camino sin apuro y vea cómo el observatorio recupera su luz.

### Ciclos de juego

En cada turno miro el tablero, elijo paso o Pulso y reviso qué cambió. Si me encierro, deshago o reinicio. Al completar una constelación, el juego confirma el cierre y puedo seguir a la próxima sala.

### Progresión

1–3: pintar, reconocer el regreso bloqueado y usar Z/R.

4–6: aprender Pulso y después leer las patrullas. La sala 4 es un pasillo: primero hay que despejar la Sombra que está al lado.

7–9: abrir la compuerta y conservar un camino para recorrerla.

10–12: terminar el primer sector antes de usar A → B.

13–16: rodear el piso negro y combinar todas las reglas.

17–22: seis salas de 56 casillas y tres Sombras. Las paredes y los huecos cambian el recorrido de ambos sectores.

### Vertical slice

El vertical slice es la entrega actual del proyecto: las 22 salas, sus pistas, las reglas, los sprites y los sonidos incluidos en el programa de PuzzleScript. La web permite recorrer los estudios del prototipado y probar esa misma campaña.

### Sonido

Los efectos se declaran en SOUNDS y se disparan desde las reglas y los eventos del motor. Se oyen pasos, Pulso, apertura, salto, reinicio, deshacer y victoria. Al iniciar y completar una sala hay señales tonales breves.

PuzzleScript oficial no reproduce una pista musical de fondo. El juego no depende del audio que se había agregado a la web: esa capa se retiró.

### Revisión final

Se encontraron y reprodujeron soluciones para los 37 casos: 22 salas y 15 casos de los estudios. Las pruebas revisan movimiento, Pulso, puertas, salto, victoria, recuperación y sonidos.

Para responder al feedback del nivel 4, cambié la sala por un pasillo que impide quedar en diagonal con la Sombra. Revisé sus seis estados posibles: no hay encierros y se puede completar. También se comprobaron Z y R.

El Gantt queda en cero y los comentarios recibidos tienen una respuesta en la planilla. La revisión de cierre fue interna; no se registró una nueva sesión con jugadores.


## 4. Prototipado



### Qué quise comprobar

Separé el juego en pruebas cortas para responder las dudas que tenía: cómo pintar el piso, cuándo ganar, cómo impedir el regreso, qué pasa si me encierro y cómo recuperar una casilla ocupada. Después sumé compuertas, teleporter y piso negro, y armé una campaña para combinar esas reglas.

### Pintar y completar el tablero

La primera prueba permite caminar y volver por el piso. Sirve para comprobar que la casilla de llegada cambia de oscura a iluminada. El punto de partida ya está pintado.

La segunda agrega la victoria: completar todo el piso transitable. Background queda como base permanente y Dark representa lo que falta iluminar. El nivel termina cuando no queda Dark.

Mantengo esta regla porque el progreso se ve directamente en el tablero. No hace falta llegar a una salida ni contar el piso negro como una casilla pendiente.

### Bloquear el regreso

En la tercera prueba ya no se puede volver por la luz. Eso hace que el orden importe: un paso puede dejar una parte del tablero sin acceso.

La cuarta conserva el intento cuando el jugador se encierra. Z deshace y R reinicia. Prefiero que se pueda mirar el error y probar otra ruta, en lugar de perder el intento apenas sale mal.

### Sombra y Pulso

Las Sombras patrullan en horizontal con cada paso válido. La luz y los obstáculos les cierran el paso. No se mueven mientras el jugador piensa ni al intentar un paso bloqueado.

Pulso se usa con X o Espacio desde una casilla vecina. Disipa todas las Sombras de arriba, abajo, izquierda y derecha. No mueve al personaje ni pinta: después hay que entrar en el espacio que quedó libre.

El caso de la última casilla comprueba esa diferencia: la Sombra bloquea, Pulso la disipa y el paso siguiente completa la pintura.

### Ambientación

Comparé dungeon y observatorio sobre el mismo tablero. Me quedo con el observatorio porque el recorrido puede leerse como la recuperación de una constelación. La luz cálida destaca sobre el piso azul oscuro.

### Sello y compuerta

Pisar el sello abre la compuerta. Su piso sigue oscuro hasta recorrerlo. Hay una prueba sin Sombras y otra que combina apertura con patrulla.

En las salas más avanzadas alejo el sello para que abrir la puerta no sea automático: también hay que conservar una ruta para llegar a ella.

### Teleporter

Entrar en A lleva a B y pinta ambos extremos. Es un viaje de ida. B tiene que estar libre y oscura; si está ocupada o ya tiene luz, se cancela el turno completo.

La prueba inicial separa dos sectores. Las siguientes agregan compuerta y Sombras para exigir un orden: terminar el primer sector antes de abandonarlo.

### Piso negro

El piso negro no se pisa, no se pinta y no cuenta para ganar. Lo uso para cortar atajos y cambiar los accesos de una sala sin agregar otro control.

Su marca permite distinguirlo del piso azul oscuro, que todavía necesita luz. Las pruebas comprueban el bloqueo y la condición de victoria.

### Progresión

Las 22 salas presentan pintura, Pulso, compuerta, teleporter y piso negro, en ese orden. Después combinan esas reglas. Hay una pista al presentar cada mecánica y un control para deshacer o reiniciar.

Las seis salas nuevas tienen 56 casillas y tres Sombras cada una. Las paredes y los huecos cambian el orden de los recorridos en ambos sectores. Sus soluciones se encontraron y reprodujeron en el motor oficial.

### Cambios por feedback

Diego D señaló que la explicación de Pulso era ambigua y reportó un bloqueo en diagonal en el nivel 4. Vanesa también marcó un bloqueo en esa sala. Cambié su diseño por un pasillo: la Sombra está al lado y hay que usar Pulso antes de avanzar. El mensaje indica X, Espacio y el botón.

Revisé los seis estados posibles de la sala nueva. No hay posiciones diagonales ni encierros. Se comprobaron Pulso, deshacer y reiniciar. La sala siguiente introduce la patrulla en un espacio más abierto.

Para responder al pedido de mayor dificultad, agregué seis salas con bifurcaciones, paredes, huecos y las reglas ya aprendidas. La planilla conserva las palabras de Diego D y Vanesa junto a la respuesta aplicada.

### Sonido y aspecto

Los efectos están en la sección SOUNDS y en las reglas de PuzzleScript. Funcionan al copiar el programa al editor: pasos, Pulso, compuerta, salto, deshacer, reinicio y victoria. Al iniciar y completar una sala se oyen señales tonales breves. El motor oficial no reproduce una pista musical de fondo.

Mejoré los sprites del piso, las Sombras, el personaje y las paredes. La web sigue siendo el cuaderno de prototipado y la vista previa del programa; reproduce los mismos efectos del motor.

### Cierre

La entrega actual, o vertical slice, incluye las 22 salas con sus reglas, pistas, sprites y sonidos. Se comprobaron 37 casos con victoria, contando los estudios anteriores. También pasaron las pruebas de reglas, controles, audio y preparación del sitio.

La revisión final fue interna. No se registró una nueva sesión con jugadores. El feedback queda respondido en la planilla y el Gantt cierra con cero horas restantes.


## 5. Scope



### Elementos fundamentales del juego

Pasos de Luz es un puzzle de recorrido hecho en PuzzleScript. El objetivo es iluminar todo el piso transitable sin volver por la luz. La entrega tiene 22 salas y sus sonidos están incluidos en el código.

### Conjuntos de elementos

Personaje: movimiento en cuatro direcciones y Pulso.

Enemigos: patrullas horizontales, hasta tres Sombras por sala.

Obstáculos: paredes, piso iluminado, piso negro y compuertas.

Presentación: observatorio, sprites, colores y sonidos del motor.

Mecánicas: pintar, bloquear el regreso, disipar Sombras, activar sellos y viajar de A a B.

Niveles: 22 salas, pistas y progresión de las reglas.

### Proceso de producción de cada conjunto

Yo me ocupo del diseño, código, sprites, sonidos y documentos. Uso PuzzleScript, JavaScript, GitHub y Drive.

Para cada elemento definí su función, lo probé por separado y después lo combiné en las salas. Los niveles se generan desde una fuente común y sus soluciones se reproducen en el motor oficial. Los cambios de reglas se vuelven a comprobar en toda la campaña.

La calidad de cierre exige distinguir el piso pendiente, la luz y los obstáculos; que teclado y controles respondan; que deshacer y reiniciar recuperen el estado; y que las salas se puedan completar.

### Etapas e interacciones

Cada paso pinta y bloquea el regreso. Las Sombras avanzan con los pasos válidos; Pulso las disipa desde una casilla vecina sin pintar. El sello abre la compuerta, cuyo piso todavía hay que recorrer. A lleva a B y pinta ambos extremos; si B está ocupada o iluminada, se cancela el turno. El piso negro no se pisa ni cuenta para ganar.

La producción pasó por concepto, pruebas de reglas, diseño de salas, feedback y revisión final. El vertical slice corresponde a la entrega actual con las 22 salas. La web conserva el prototipado y la vista previa.

### Costo en tiempo

Trabajo restante al cierre: **0 horas**. El Gantt queda en cero. El plan anterior se conserva como antecedente y no se presenta como un registro de horas trabajadas.

No se compraron recursos para esta entrega ni se agregaron servicios pagos. Los efectos y las señales tonales se generan con PuzzleScript.


## 6. Niveles

La campaña tiene 22 salas. Las primeras presentan las reglas y las seis últimas combinan recorridos más largos, tres Sombras y obstáculos.

| Nivel | Sala | Casillas | Qué propone |
| --- | --- | --- | --- |
| 1 | La primera luz | 5 | Pintar un recorrido breve. |
| 2 | El camino doblado | 5 | Reconocer el regreso bloqueado y corregir. |
| 3 | Una elección pendiente | 8 | Elegir el orden en una sala con bifurcaciones. |
| 4 | Algo entre las estrellas | 5 | Usar Pulso antes de avanzar, en un pasillo sin diagonales. |
| 5 | La patrulla | 14 | Leer el desplazamiento de una patrulla. |
| 6 | Dos ritmos | 18 | Gestionar dos patrullas y conservar el acceso al piso. |
| 7 | El sello distante | 11 | Activar un sello alejado sin aislar la compuerta. |
| 8 | Abrir sin encerrarse | 14 | Combinar recorrido, apertura y una patrulla. |
| 9 | La sala dividida | 22 | Planificar una sala mayor con dos patrullas y compuerta. |
| 10 | Un viaje de ida | 16 | Terminar la sala de entrada antes de usar A; recorrer una segunda sala. |
| 11 | Antes de partir | 25 | Ordenar sello, compuerta y salida de un sector. |
| 12 | Al otro lado | 32 | Resolver patrullas a ambos lados del salto. |
| 13 | Lo que no despierta | 18 | Cubrir una sala irregular alrededor del piso negro. |
| 14 | Dos constelaciones | 32 | Preparar la salida y resolver una patrulla entre huecos. |
| 15 | La penúltima órbita | 41 | Combinar las cinco reglas en dos sectores. |
| 16 | El último observatorio | 46 | Resolver dos sectores, tres patrullas y un orden de apertura sin dejar piso aislado. |
| 17 | La órbita quebrada | 56 | Conservar acceso al sello y recorrer los dos lados de la compuerta. |
| 18 | El sello del sur | 56 | Resolver un sector irregular antes de viajar, sin aislar la puerta. |
| 19 | Ecos del vacío | 56 | Ordenar rodeos alrededor de paredes y piso negro en dos sectores. |
| 20 | La tercera vigilia | 56 | Elegir el momento de Pulso para tres patrullas en un recorrido extenso. |
| 21 | Entre dos cielos | 56 | Preparar la salida de A y el recorrido que comienza en B. |
| 22 | La constelación imposible | 56 | Integrar las cinco reglas en una sala avanzada con bifurcaciones. |

## 7. Cierre

La entrega está cerrada. El Gantt queda con cero horas restantes y los comentarios recibidos tienen una respuesta en la planilla. Se conservan las palabras originales de Diego D y Vanesa.

Se encontraron y reprodujeron soluciones para 37 casos: 22 salas y 15 estudios anteriores. Las pruebas incluyen las reglas, los controles y los sonidos del programa de PuzzleScript. La revisión final fue interna; no se registró una nueva sesión con jugadores.

## 8. Documentos

El código vigente está en su archivo aparte. Este documento reúne el diseño y no incluye bloques de código. Las versiones anteriores se conservan como Markdown en la carpeta old_versions.

[Código vigente](https://drive.google.com/file/d/1Kee4OBa8TfaSdSPQ6vLZVS0SlfVZGiu_/view)

[Versiones anteriores](https://drive.google.com/drive/folders/11pzil68oWgVsZO9GP-ajJk5fHBN6ggSB)

[Pilares](https://docs.google.com/document/d/1Hg0jER3_Hf34ljvmlYqT8F1PNk0URcP_ieJv-WbjKZw)

[One Pager](https://docs.google.com/document/d/1rtd6J7tHhZZ-yf-wx6YpbYO2Lm6kz8gFf53_4XbRBko)

[Prototipado](https://docs.google.com/document/d/1VO9SVkcgFooPpxBt5TRtI9nicg-g1jH6EgNndaxM03c)

[Scope](https://docs.google.com/document/d/12ipp_OEbfiu44vDaXs30RaV3pqQidQ-FUhxg5mEtUYQ)

[Feedback](https://docs.google.com/spreadsheets/d/1t--fFLI9ZQ5oaVTt8CZsZMpleBgPVXPXw7JNlcznKWs/edit)

[Gantt](https://docs.google.com/spreadsheets/d/19ap1aBHbOc_YoAgADywLEHryXbitf_iOpP0NDtCuGGs/edit)
