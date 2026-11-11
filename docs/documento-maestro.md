# Pasos de Luz — Documento maestro

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado · v1.2.0

Reuní acá el diseño de Pasos de Luz, las reglas, los niveles y lo que me falta probar. Los documentos sueltos y las planillas siguen en la carpeta.

## Índice

1. Concepto y One Pager

2. Pilares

3. Diseño y experiencia

4. Prototipado

5. Scope

6. Catálogo de niveles

7. Planificación y feedback

8. Código y versiones

9. Documentos y enlaces



## 1. Concepto y One Pager

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

Sprites pequeños, luz cálida y piso azul oscuro. El piso negro se distingue como un obstáculo permanente. Los sellos y el teleporter tienen marcas propias. La web incorpora efectos breves para pasos, Pulso, apertura, viaje y victoria, además de música ambiental original. Sonido y música tienen controles independientes y se activan a pedido.

## 2. Pilares





### Pilares comerciales



#### Tiempo



Quiero terminar una campaña que pueda hacer y revisar solo. El plan original es de 12 horas: 11 para niveles y pruebas y una para ajustes. Ahora el juego tiene 22 salas. Antes de seguir agregando cosas, me falta probarlas con otras personas y ajustar lo que no funcione.



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



El juego se juega en el navegador, con teclado o botones. Las reglas corren en el motor oficial de PuzzleScript. La web agrega la presentación, los controles y el audio. Publico los cambios en GitHub Pages.



#### Proceso



Diseño una sala, genero el programa y compruebo que tenga solución en el motor. Después pruebo cómo se entiende, anoto el feedback, hago ajustes y vuelvo a comprobarla. Mantengo el código y los documentos sueltos junto al maestro.



#### Know-how



Ya tengo funcionando el piso, las Sombras, Pulso, compuertas y teleporter. También tengo scripts para generar los niveles y comprobar las soluciones. Me falta aprender de las partidas de otras personas: qué pistas ayudan, dónde se traban y cómo sienten la dificultad.



### Decisiones



Me quedo con el observatorio porque recuperar luz tiene sentido en ese lugar. Aclaré Pulso desde su primera aparición y sumé seis salas avanzadas usando las reglas que ya estaban. El sonido y la música se pueden apagar.

## 3. Diseño y experiencia



### Mecánicas, dinámicas y experiencia



Caminar pinta el piso y bloquea el regreso. Pulso disipa las Sombras vecinas. El sello abre la compuerta y A lleva a B. Las Sombras patrullan con cada paso válido; si intento un movimiento bloqueado, el turno no avanza.



Al combinar estas reglas tengo que cuidar los accesos, decidir qué parte de la sala recorrer primero y terminar un sector antes de saltar al otro. Quiero que esa planificación produzca el momento de entender el puzzle, dentro de un observatorio que recupera su luz.



### Decisiones del jugador



Una bifurcación importa porque después no puedo volver por la luz. El salto también: si dejo piso pendiente del otro lado, ya no puedo alcanzarlo. Frente a una Sombra tengo que acercarme sin cerrar el camino que voy a necesitar.



La luz muestra cuánto avancé y también lo que dejé atrás. El piso negro y los símbolos de los objetos ayudan a distinguir qué puedo hacer en cada casilla.



### Ciclos de juego



En cada turno miro el tablero, elijo un paso o Pulso y reviso qué cambió. Si me encierro, deshago o reinicio para probar otra ruta.



Cuando completo una constelación, el juego confirma el cierre y puedo avanzar. Las primeras salas enseñan una regla; las siguientes la combinan con las anteriores.



### Progresión



1–3: pintar, reconocer el regreso bloqueado y usar Z/R.



4–6: aprender Pulso con una Sombra al lado y después leer las patrullas.



7–9: abrir la compuerta y conservar un camino para recorrerla.



10–12: terminar el primer sector antes de usar A → B.



13–16: rodear el piso negro y combinar todas las reglas. La sala 16 tiene 46 casillas y tres Sombras.



17–22: seis salas de 56 casillas y tres Sombras. Las paredes y los huecos obligan a pensar el recorrido de ambos sectores.



Las pistas, la leyenda y los símbolos orientan al jugador. Al presentar una regla reduzco las combinaciones; después las vuelvo a sumar. Las bifurcaciones permiten equivocarse y entender por qué un recorrido deja piso aislado.



### Vertical slice



Elijo las salas 4, 8 y 14 como muestra: Pulso, compuerta y la combinación de salto con piso negro. Tienen los mismos controles, acabado y audio que el resto del juego.



Se pueden abrir desde el selector. Me falta preparar una versión separada con esas tres salas si se necesita para la entrega, y probar que alguien pueda entenderlas sin que yo le explique el recorrido.



### Qué voy a probar



Quiero ver jugar a alguien que no conozca el proyecto y a alguien acostumbrado a puzzles. Voy a anotar intentos, ayudas, uso de Z/R y dónde se traban o dejan de jugar. Después les voy a preguntar qué entendieron de Pulso, la compuerta, el salto y el piso negro.



También necesito reproducir el bloqueo diagonal del nivel 4 que reportó Diego D. Me falta la secuencia de movimientos para distinguir un encierro del recorrido de un fallo del juego.



Para el audio voy a revisar si se distinguen los eventos y si la música ayuda o distrae. Sonido y música se pueden prender por separado y recuerdan la preferencia.



### Estado actual



Los 37 casos tienen soluciones comprobadas: 22 de campaña y 15 de los estudios. Las pruebas de código también revisan las reglas, las pistas, el avance y los controles. Me falta probar el aprendizaje, la dificultad y el audio con personas.

## 4. Prototipado

### Qué probé

Separé las preguntas del juego en pruebas cortas: pintar el piso, completar el tablero, bloquear el regreso, reconocer un encierro y despejar el paso con Pulso. Después sumé compuertas, teleporter y piso negro fijo, y armé una secuencia de niveles para probar cómo se aprenden.

### Pintar el recorrido

La primera prueba tiene solo al personaje y el piso. Cada casilla que piso pasa de oscura a iluminada; el punto de partida ya está pintado.

late [ Player Dark ] -> [ Player Light ]

En esta prueba puedo volver atrás. Así compruebo el cambio de color antes de agregar la restricción del recorrido.

### Completar el tablero

El objetivo es pintar todas las casillas transitables. No hace falta llegar a una salida: gano cuando no queda piso oscuro.

no Dark

Uso Dark para las casillas pendientes. Background es la base del tablero y no cambia. El piso negro fijo, que aparece más adelante, no lleva Dark y no cuenta para ganar.

### No puedo volver por la luz

Si pudiera volver por cualquier casilla, completar el tablero sería casi automático. Al bloquear el piso pintado, el orden de los pasos pasa a importar.

[ > Player | Light ] -> [ Player | Light ]

Intentar entrar en una casilla iluminada no cambia el tablero. Compará esta prueba con la primera: ahora un desvío puede dejar una parte sin alcanzar.

### Equivocarse y volver a probar

Un camino puede dejar casillas pendientes sin forma de llegar a ellas. Cuando pasa, el tablero queda visible para revisar el error.

Z deshace el último paso y R reinicia el nivel. También están los botones debajo del juego.

La señal de encierro detecta si falta pintar y no queda una casilla oscura vecina. Una Sombra vecina permite usar Pulso; por eso no la tomo como un cierre del camino.

No hace falta borrar el intento apenas sale mal. Poder mirar y corregir el recorrido forma parte del puzzle.

### La Sombra ocupa el camino

Las Sombras patrullan en horizontal cada vez que doy un paso válido. La luz y las paredes les cierran el paso. No se mueven mientras pienso ni por chocar contra un obstáculo.

Para despejar una casilla, tengo que acercarme y usar Pulso con X, Espacio o el botón. Disipa las Sombras que estén arriba, abajo, a la izquierda o a la derecha. No pinta el piso: después tengo que caminar sobre él.

La primera presentación usa una Sombra. Más adelante aparecen dos y finalmente tres. Cambia la cantidad de posiciones que tengo que mirar, no los controles.

### Un observatorio apagado

Cada nivel representa una constelación que recupera su luz con el recorrido. Las Sombras ocupan los fragmentos que todavía están apagados.

Probé el mismo tablero con dos ambientaciones. El selector cambia entre dungeon y observatorio sin reiniciar la partida, para comparar cómo se lee el escenario.

Me quedo con el observatorio: el recorrido completo tiene sentido como forma de restaurar la constelación.

### El feedback: la última casilla

El feedback señaló una duda: si una Sombra ocupa la última casilla oscura, ¿cómo completo el nivel?

Intento entrar. Qué pasa: La Sombra bloquea el paso.

Uso Pulso desde al lado. Qué pasa: La Sombra desaparece; el piso sigue oscuro.

Entro en la casilla. Qué pasa: Se pinta y completo el nivel.

El primer caso deja solamente esas dos casillas. Los otros prueban el acercamiento en un pasillo y en una sala.

Pulso resuelve el bloqueo sin cambiar el objetivo de pintar todo.

### Un sello abre el paso

Al pisar el sello verde, se abre la compuerta. Queda abierta hasta deshacer o reiniciar. Su piso también hay que pintarlo.

El primer caso permite ver esa relación sin Sombras. El segundo combina la apertura con una patrulla.

late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]

En la progresión, la compuerta aparece después de aprender Pulso. Primero se muestra un sello y una puerta en un camino corto; después hay que decidir cuándo abrirla mientras se despejan las Sombras.

### Entrar por A, salir por B

El teleporter conecta dos partes del tablero. Al pisar A, aparezco en B y quedan pintadas ambas casillas. Funciona en un solo sentido; no usa un botón aparte.

La salida tiene que estar libre y sin pintar. Si está ocupada por una Sombra o ya tiene luz, no puedo entrar en A. El intento no consume el turno.

El primer caso separa el tablero en dos sectores: para seguir hay que usar el teleporter. El segundo suma una compuerta y una Sombra.

En los niveles aparece después de las compuertas. Primero enseño el salto; después lo combino con las decisiones del recorrido. Hay que terminar el sector de entrada antes de dejarlo atrás.

### Piso negro fijo

El piso negro no se puede pisar ni pintar. Tampoco cuenta para completar el nivel. Es distinto del piso azul oscuro, que sí se puede recorrer y todavía espera luz.

La primera sala pone un bloque negro en el centro. Obliga a rodearlo y permite ver que la victoria no exige pintarlo. La siguiente combina ese desvío con el teleporter.

En PuzzleScript uso un objeto separado, Void, en la capa de colisión. No lleva Dark, por lo que queda fuera de la cuenta de casillas pendientes.

La forma del piso pasa a ser otra herramienta para diseñar los niveles: puedo cortar atajos y separar recorridos sin sumar una acción al jugador.

### Aprender jugando

Armé un recorrido de 22 niveles jugables. La dificultad sube al combinar reglas que ya aparecieron. Cada presentación tiene una indicación breve junto al tablero y una situación donde se ve qué cambia.

1–3. Qué aprende el jugador: Pintar, no volver por la luz y corregir un recorrido. Cómo lo presento: Un pasillo, un giro y una sala con varias opciones. Flechas para moverse; Z y R para probar otra vez.

4–6. Qué aprende el jugador: Sombra y Pulso. Cómo lo presento: Una Sombra al lado para probar X, una patrulla y después dos Sombras.

7–9. Qué aprende el jugador: Sello y compuerta. Cómo lo presento: Primero sin enemigos; después con una y dos Sombras.

10–12. Qué aprende el jugador: Teleporter. Cómo lo presento: Dos sectores conectados por A → B; después compuerta y Sombras en la misma sala.

13–14. Qué aprende el jugador: Piso negro fijo. Cómo lo presento: Un bloque que hay que rodear; después un recorrido que termina en un teleporter.

15–16. Qué aprende el jugador: Elegir el orden con todo lo aprendido. Cómo lo presento: Compuerta, teleporter y piso negro, primero con dos Sombras y después con tres.

### Qué tiene que quedar claro

Pintar una casilla cierra el regreso. Un intento bloqueado no cambia el turno.

Pulso disipa las Sombras vecinas, pero todavía hay que pintar su piso.

El sello abre la compuerta; abrirla no pinta la casilla que ocupa.

A lleva a B en un sentido. Conviene terminar el sector antes de salir.

El piso negro es un obstáculo permanente, no una casilla pendiente.

### Qué falta probar con jugadores

Las 22 salas tienen solución comprobada en PuzzleScript. Ya tengo comentarios de Diego D y Vanesa. Me falta una prueba completa de esta versión para revisar cómo se aprende y cómo se siente la dificultad.

Voy a mirar dónde alguien necesita una explicación, si descubre Pulso en su primera aparición y si entiende A → B antes de encontrarlo junto a una Sombra. Si un nivel confunde, cambio su disposición o su indicación antes de aumentar la dificultad.

Me falta reproducir el bloqueo diagonal del nivel 4 y ver jugar las salas nuevas. Voy a anotar intentos, ayudas y dónde se traban.

### El tramo avanzado y el pulido

17–22. Agregué seis salas de 56 casillas y tres Sombras. Combinan compuerta, salto y piso negro, con paredes que cambian las rutas. Todas tienen solución. Me falta ver cómo las resuelven otras personas.

La primera presentación de Pulso ahora dice la tecla y qué cambia: usar X, Espacio o el botón desde una casilla vecina disipa la Sombra; después hay que entrar para pintar. Ajusté la ambigüedad señalada en el feedback de Diego D sin mostrar un recorrido.

La web tiene efectos originales sintetizados de paso, bloqueo, Pulso, apertura, salto, deshacer, reinicio y victoria, más una secuencia musical ambiental. Sonido y música se activan por separado y recuerdan su preferencia. La música se detiene con la pestaña oculta. Si no hay soporte de audio, el juego conserva sus controles.

Agregué una barra de iluminación, el número de nivel y una respuesta visual breve al movimiento y a Pulso. Las animaciones respetan la preferencia de movimiento reducido.

En v1.2.0 comprobé 37 casos con victoria: las 22 salas y 15 casos de los estudios. Las versiones anteriores del código se conservan.

## 5. Scope

### Elementos fundamentales del juego

Pasos de Luz es un puzzle de recorrido hecho en PuzzleScript. El jugador pinta el piso al caminar y completa el nivel cuando no quedan casillas transitables sin iluminar.

La versión prevista tiene 22 niveles, un personaje, Sombras, sellos con compuertas, un teleporter de entrada y salida por sala y piso negro fijo. Las salas iniciales presentan los elementos por separado y las siguientes los combinan.

### Conjuntos de elementos

Personaje jugable. Elementos: Personaje, movimiento en cuatro direcciones y Pulso.

Enemigos. Elementos: Sombras con patrulla horizontal; hasta tres por nivel.

Obstáculos. Elementos: Piso iluminado, paredes, piso negro fijo y compuertas cerradas.

Background. Elementos: Observatorio, piso, sprites, colores, efectos de sonido y música ambiental opcional.

Mecánicas. Elementos: Pintar, bloquear el regreso, disipar Sombras, activar sellos, abrir compuertas y viajar de A a B.

Niveles. Elementos: 22 salas, su orden, las indicaciones de juego y la dificultad.

### Proceso de producción de cada conjunto

Personaje. Pasos para terminarlo: Revisar movimiento, Pulso y controles. Criterio de cierre: Teclado y botones responden igual; deshacer recupera la posición.

Enemigos. Pasos para terminarlo: Probar patrulla, colisiones y Pulso con una, dos y tres Sombras. Criterio de cierre: No ocupan luz ni obstáculos y se pueden disipar desde una casilla vecina.

Obstáculos. Pasos para terminarlo: Revisar las casillas bloqueadas y la relación sello–compuerta. Criterio de cierre: El piso negro no cuenta para ganar; la compuerta abre al activar el sello.

Background. Pasos para terminarlo: Unificar sprites y paleta; revisar contraste y efectos breves. Criterio de cierre: Piso pendiente, luz, piso negro y objetos se distinguen sin depender del texto.

Mecánicas. Pasos para terminarlo: Comprobar las reglas juntas, los estados del teleporter, la victoria y el reinicio. Criterio de cierre: La partida conserva sus reglas al combinar elementos y al deshacer.

Niveles. Pasos para terminarlo: Bocetar recorridos, jugarlos, ordenar la dificultad, probar con otra persona y ajustar. Criterio de cierre: Las 22 salas tienen solución y las reglas se entienden antes de combinarlas.

### Etapas e interacciones

La producción parte de las reglas ya implementadas. Primero reviso sus combinaciones; después trabajo sobre los recorridos y el orden de los niveles. Las pruebas con jugadores guían los ajustes de dificultad. Al final reviso la campaña completa y publico la versión corregida.

Personaje y piso: cada paso pinta una casilla y bloquea el regreso. El piso negro permanece bloqueado y no se incluye en la condición de victoria.

Personaje y enemigos: las Sombras ocupan piso pendiente y avanzan con cada paso válido. Pulso despeja las casillas vecinas sin pintarlas.

Sello y compuerta: pisar el sello abre la puerta. La casilla de la compuerta sigue pendiente hasta recorrerla.

Teleporter y recorrido: entrar en A lleva a B y pinta ambos extremos. La salida debe estar libre y sin iluminar.

Recuperación: deshacer y reiniciar recuperan también las Sombras, la luz y las compuertas.

El diseño de niveles depende de que estas interacciones funcionen. Una corrección de reglas obliga a volver a jugar las salas que las usan.

### Costo en tiempo

El plan original suma 12 horas: 11 para niveles y pruebas y una para ajustes. Ahora el juego tiene 22 salas y audio. Me falta probar el aprendizaje y hacer los ajustes que salgan de esas partidas. Las horas son estimadas.

Revisar recorridos y ordenar las 22 salas. Tiempo: 3 h.

Jugar variantes y corregir soluciones, atajos y encierros. Tiempo: 5 h.

Probar el aprendizaje con otra persona y ajustar dificultad e indicaciones. Tiempo: 3 h.

Ajustes del personaje y controles. Tiempo: 5 min.

Ajustes de enemigos y Pulso. Tiempo: 10 min.

Ajustes de obstáculos. Tiempo: 10 min.

Background, sprites y sonido. Tiempo: 15 min.

Comprobar estados de las mecánicas. Tiempo: 10 min.

Revisar e integrar la publicación. Tiempo: 10 min.

Total estimado. Tiempo: 12 h.

Las pruebas y correcciones están incluidas en las once horas de niveles. Yo me ocupo del diseño, código, documentos y audio. Uso PuzzleScript, JavaScript, GitHub Pages y Drive. No tengo previsto comprar recursos ni servicios para esta versión. Me falta probarla con otras personas y ajustar lo necesario.

## 6. Catálogo de niveles

Las primeras 16 salas presentan y combinan reglas. Las seis últimas amplían la planificación con 56 casillas y tres Sombras cada una. El catálogo se acompaña de las soluciones reproducidas en el archivo de verificación.



| Nivel | Sala | Casillas | Objetivo de diseño |
| --- | --- | --- | --- |
| 1 | La primera luz | 5 | Pintar un recorrido breve. |
| 2 | El camino doblado | 5 | Reconocer el regreso bloqueado y corregir. |
| 3 | Una elección pendiente | 8 | Elegir el orden en una sala con bifurcaciones. |
| 4 | Algo entre las estrellas | 8 | Descubrir Pulso en una sala pequeña. |
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



## 7. Planificación y feedback

El Gantt mantiene el plan original de 12 horas. Son horas estimadas, no un registro de cuánto trabajé.

01 · Revisar movimiento y controles: 5 minutos planificados.

02 · Revisar Sombras y Pulso: 10 minutos planificados.

03 · Revisar compuerta y piso negro: 10 minutos planificados.

04 · Ajustar sprites, contraste y sonido: 15 minutos planificados.

05 · Comprobar teleporter y estados: 10 minutos planificados.

06 · Revisar recorridos y ordenar 22 salas: 180 minutos planificados.

07 · Crear variantes y corregir recorridos: 120 minutos planificados.

08 · Probar soluciones, atajos y encierros: 180 minutos planificados.

09 · Probar aprendizaje con otra persona: 120 minutos planificados.

10 · Aplicar feedback a niveles e indicaciones: 60 minutos planificados.

11 · Revisar e integrar publicación: 10 minutos planificados.

La planilla tiene dos hojas: Feedback y Objetivos de testeo. Agregué audio, música, las salas nuevas y la revisión del bloqueo diagonal.

### Mi autoevaluación — Juan Ignacio

En mi revisión anoté lo que quería mejorar del inicio, las pistas y los recorridos. Después sumé el audio, las seis salas nuevas y la documentación. Esas filas están a mi nombre, Juan Ignacio.

### Comentarios de Diego D y Vanesa

Diego D señaló que la presentación del nivel 4 era demasiado ambigua para descubrir X. Hice explícitos el control, la vecindad y la diferencia entre despejar y pintar. Falta confirmar con una nueva partida si el cambio resuelve su dificultad.

Diego D pidió mayor dificultad, quizá usando paredes o más niveles. La versión agrega seis salas con bifurcaciones, obstáculos y combinaciones conocidas. Falta validar la dificultad percibida.

Vanesa marcó un bloqueo en el nivel 4 sin descripción adicional. Diego D describió un estado diagonal frente a una Sombra que impide avanzar o atacarla. Se conservan los reportes y se pide una secuencia reproducible antes de cerrar el caso. El motor permite deshacer y reiniciar; una solución ganadora no descarta ese reporte.

### Qué reviso primero

Primero necesito reproducir el bloqueo del nivel 4. Después voy a revisar si se entiende Pulso, cómo se sienten las salas nuevas y si el audio acompaña sin molestar.

## 8. Código y versiones

Se incluye el código actual y el archivo de versiones. Los bloques son PuzzleScript; los efectos y la música de la web están en web/audio.js y no forman parte de esos bloques. El catálogo completo de las versiones anteriores se conserva en los archivos sueltos.





### Cómo usar el código



Copiá solamente el bloque PuzzleScript completo en el editor de PuzzleScript. Incluye las cinco pantallas de pistas y las 22 salas. En la web se ejecuta este mismo programa con el motor oficial.



Flechas o WASD: movimiento. X o Espacio: Pulso. Z: deshacer. R: reiniciar. En las pantallas de pista, Enter, Espacio o el botón permiten continuar. La web agrega efectos y música originales sintetizados con Web Audio, con controles independientes y preferencias guardadas. El audio se activa a pedido y no cambia las reglas. Esa capa de audio pertenece a la web y no al bloque PuzzleScript.



Objetivo: iluminar todo el piso transitable. La luz no se puede volver a pisar. Pulso disipa todas las Sombras ortogonales vecinas sin mover al jugador ni pintar. El sello abre la compuerta. El viaje A → B pinta ambos extremos y requiere una salida libre y oscura; de lo contrario se cancela el turno completo. El piso negro no se pisa y no cuenta para ganar.



### Progresión





La dificultad aumenta dentro de cada bloque. Presentar una regla nueva reduce temporalmente la carga de combinaciones; las salas siguientes la exigen junto a las anteriores. El tramo avanzado agrega seis salas que combinan las cinco reglas en dos sectores.



### Comprobaciones



Se encontraron y reprodujeron soluciones para las 22 salas y los otros 15 casos de prototipado. Las pistas, el bloqueo de controles mientras están abiertas, su cierre y el avance de nivel cuentan con pruebas automáticas de interfaz. Las métricas de rutas no equivalen a una medición de dificultad percibida.



### Código completo v1.2.0



```puzzlescript
title Pasos de Luz - Recorrido de niveles
author Juan Ignacio Bruzzone
homepage github.com/JuanchiBruzzone/Videojuegos.Aplicado
background_color #090d18
text_color #f4dea3
```



```puzzlescript
========
OBJECTS
========
```



```puzzlescript
Background
#090d18
```



```puzzlescript
Dark
#1c2940 #33425e
11111
10001
10001
10001
11111
```



```puzzlescript
Light
#f4c974 #72572f
11111
10001
10001
10001
11111
```



```puzzlescript
Wall
#131b2b
```



```puzzlescript
Player
#ecf8ff #90dcff
..0..
.000.
00100
.111.
1...1
```



```puzzlescript
ShadowEast
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1
```



```puzzlescript
ShadowWest
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1
```



```puzzlescript
Trail
transparent
```



```puzzlescript
Pulse
transparent
```



```puzzlescript
Trapped
transparent
```



```puzzlescript
GateClosed
#e8b998
00000
0.0.0
0.0.0
0.0.0
00000
```



```puzzlescript
GateOpen
#9ce7d1
00000
0...0
0...0
0...0
00000
```



```puzzlescript
Rune
#9ce7d1
..0..
.0.0.
0...0
.0.0.
..0..
```



```puzzlescript
PortalIn
#72dce8
.000.
0...0
0.000
0...0
.000.
```



```puzzlescript
PortalOut
#e2b7ff
.000.
0...0
000.0
0...0
.000.
```



```puzzlescript
Void
#020305 #10151d
11111
10001
10001
10001
11111
```



```puzzlescript
=======
LEGEND
=======
```



```puzzlescript
. = Dark
_ = Void
A = PortalIn and Dark
B = PortalOut and Dark
P = Player and Light
S = ShadowEast and Dark
W = ShadowWest and Dark
Shade = ShadowEast or ShadowWest
K = Rune and Dark
G = GateClosed and Dark
Barrier = Wall or Light or GateClosed or Void
```



```puzzlescript
=======
SOUNDS
=======
```



```puzzlescript
================
COLLISIONLAYERS
================
```



```puzzlescript
Background
Dark, Light
Player, Wall, ShadowEast, ShadowWest, GateClosed, Void
GateOpen
Rune
PortalIn, PortalOut
Trail
Pulse
Trapped
```



```puzzlescript
======
RULES
======
[ action Player | Shade ] -> [ action Player Pulse | ]
[ action Player ] -> [ Player ]
[ moving Player ] -> [ moving Player Trail ]
[ > Player | Light ] -> [ Player | Light ]
[ > Player | GateClosed ] -> [ Player | GateClosed ]
[ > Player | Void ] -> [ Player | Void ]
[ > Player | Shade ] -> [ Player | Shade ]
[ moving Player ] [ ShadowEast ] -> [ moving Player ] [ right ShadowEast ]
[ moving Player ] [ ShadowWest ] -> [ moving Player ] [ left ShadowWest ]
right [ right ShadowEast | Barrier ] -> [ left ShadowWest | Barrier ]
left [ left ShadowWest | Barrier ] -> [ right ShadowEast | Barrier ]
[ > Shade | Barrier ] -> [ Shade | Barrier ]
[ > Player | | < Shade ] -> [ > Player | | Shade ]
late [ Player Trail ] -> cancel
late [ Trail ] -> [ ]
late [ Pulse ] -> [ ]
late [ Player Dark ] -> [ Player Light ]
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]
late [ Player PortalIn ] [ PortalOut Light ] -> cancel
late [ Player PortalIn ] [ PortalOut Shade ] -> cancel
late [ Player PortalIn ] [ PortalOut Dark no Shade ] -> [ PortalIn ] [ Player PortalOut Dark ]
late [ Player Dark ] -> [ Player Light ]
late [ Player ] -> [ Player Trapped ]
late [ Player | Dark no GateClosed ] -> [ Player no Trapped | Dark no GateClosed ]
```



```puzzlescript
==============
WINCONDITIONS
==============
```



```puzzlescript
no Dark
```



```puzzlescript
=======
LEVELS
=======
```



```puzzlescript
message Cada paso despierta una estrella. La luz que dejás atrás guarda memoria: elegí qué querés alcanzar antes de avanzar.
```



```puzzlescript
#######
#P....#
#######
```



```puzzlescript
#####
#P..#
###.#
###.#
#####
```



```puzzlescript
#####
#P..#
#...#
##..#
#####
```



```puzzlescript
message La Sombra ocupa una casilla que todavía necesita luz. Desde una casilla de al lado, usá X, Espacio o el botón Pulso para disiparla. Pulso no te mueve ni pinta: después entrá en su casilla.
```



```puzzlescript
#####
#.SP#
#...#
#..##
#####
```



```puzzlescript
######
#P..##
#S...#
##...#
#....#
######
```



```puzzlescript
#######
#..WSP#
#.....#
#.#...#
#.#...#
#######
```



```puzzlescript
message Hay marcas que se responden a la distancia. Tal vez el camino que parece cerrado esté esperando algo de otra parte de la sala.
```



```puzzlescript
######
#P..K#
#..G.#
#.#..#
######
```



```puzzlescript
######
#.#SP#
#....#
#G..K#
#...##
######
```



```puzzlescript
#######
#P....#
#S..G.#
#...#.#
#.WK..#
#..#.##
#######
```



```puzzlescript
message Dos anillos, una sola dirección. Antes de dejar una constelación, preguntate qué luz seguiría faltando si ya no pudieras volver.
```



```puzzlescript
#########
#P..##.B#
#...#...#
##A.#...#
#########
```



```puzzlescript
###########
#P.K##...B#
#....#....#
##...#..#.#
#A.G.######
###########
```



```puzzlescript
############
#P....#.#.B#
#S..G.#....#
#..K#.#.W..#
#...#A#...##
############
```



```puzzlescript
message Hay fragmentos del observatorio que ya no esperan luz. Su silencio también dibuja el camino: mirá qué accesos quedan a cada lado.
```



```puzzlescript
#######
#P....#
#.....#
#..._.#
#..._.#
#######
```



```puzzlescript
############
#P._A#....B#
#....#...S.#
#....#._...#
#_...#._...#
############
```



```puzzlescript
#############
#P...S#.._.B#
#...G.#.....#
#..K_.#.....#
#..._A#...W.#
#######..._.#
#############
```



```puzzlescript
#############
#P._..#.._.B#
#..K..#..W..#
#.....#.....#
#....G#S....#
#A_.S.#..._.#
#############
```



```puzzlescript
#############
#P....#....B#
#.K...#.W...#
#_..G.#.._..#
#..#..#..S..#
#...S.#...#.#
#A....#.....#
#############
```



```puzzlescript
#############
#P....#.W..B#
#.....#...#.#
#.._..#.....#
#.S...#.....#
#G.K..#.....#
#A._..#..S.##
#############
```



```puzzlescript
#############
#P....#..._B#
#..#..#..._.#
#..#K.#....W#
#.....#.....#
#.....#.S...#
#A..GS#.....#
#############
```



```puzzlescript
#############
#P.S..#....B#
#.....#.._..#
#..K#.#.....#
#._...#W..S.#
#..G..#.....#
#A....#...#.#
#############
```



```puzzlescript
#############
#P....#....B#
#....S#._...#
#..K..#.#...#
#.....#....##
#...G.#..S._#
#A....#....W#
#############
```



```puzzlescript
#############
#PS.K.#....B#
#..#..#.W#..#
#.G...#.....#
#.....#.....#
#.....#.....#
#A_...#._..S#
#############
```



### Pasos de Luz — Versiones y cambios



### v1.2.0 — Audio y tramo avanzado



Campaña de 22 salas: se conservan las primeras 16 y se agregan seis de 56 casillas con tres Sombras, paredes, huecos, compuerta y salto A → B.

Efectos y música ambiental originales sintetizados en la web. Controles independientes, preferencias guardadas, activación a pedido y pausa de música con pestaña oculta.

Primera presentación de Pulso explícita: teclas, cercanía y diferencia entre disipar y pintar, a partir del feedback de ambigüedad.

Barra de iluminación, número de nivel, estilos de controles y respuesta visual breve que respeta movimiento reducido.

Pilares, documento maestro con índice y revisión contra los diez PDF adjuntos. Originales sueltos conservados.

Autoevaluación de Juan Ignacio y objetivos ampliados en la planilla nativa; comentarios externos conservados. Estilos de Feedback, Objetivos de testeo, Gantt y Elementos.

37 casos con solución encontrada y reproducida; pruebas de reglas, interfaz y audio; build. La dificultad percibida y el audio requieren validación con personas. El reporte diagonal del nivel 4 queda en revisión.



### v1.1.0 — Recorridos y pistas



Se rediseñan las 16 salas: dos recorridos iniciales breves, introducciones de mecánicas y desafíos que combinan reglas. El cierre tiene 46 casillas y tres Sombras.

Las compuertas requieren conservar accesos; el salto A → B obliga a terminar la sala de entrada; el piso negro corta rutas entre sectores.

Se agregan cinco pantallas de pistas en español antes de pintar, Pulso, sello, teleporter y piso negro. Usan message en la fuente de PuzzleScript y una pantalla modal en la web.

Enter, Espacio y el botón permiten continuar. Cerrar la pista no mueve al jugador ni dispara Pulso. Se puede volver a leerla.

Los niveles, pistas y objetivos de diseño se mantienen juntos en web/data/campaign.js.

El adaptador distingue mensajes de salas jugables; se conservan la selección de nivel, el avance, deshacer y reiniciar.

Se separa el progreso guardado de esta versión para que las salas nuevas se puedan completar de nuevo.

Se conserva el código completo de v1.0.0 y se agrega una exportación Markdown con ambas versiones.

Se registran los comentarios y ajustes F01–F08 en la planilla de feedback.



Validación: búsqueda y reproducción de los 31 casos en el motor oficial, pruebas de reglas e interfaz y build del sitio. Las métricas de rutas describen opciones del tablero; el ajuste de dificultad percibida requiere observar partidas.



### v1.0.0 — Versión de partida



Once estudios de prototipado y una campaña de 16 niveles con pintura, Sombra/Pulso, sello/compuerta, teleporter A → B y piso negro. Indicaciones junto al tablero, controles de deshacer y reiniciar, selector de nivel y avance al completar una sala.



Se conserva la fuente completa en docs/versiones/pasos-de-luz-v1.0.0.md.



### Código de versiones anteriores



### Pasos de Luz — Código del juego v1.1.0





### Cómo usar el código



Copiá solamente el bloque PuzzleScript completo en el editor de PuzzleScript. Incluye las cinco pantallas de pistas y las 16 salas. En la web se ejecuta este mismo programa con el motor oficial.



Flechas o WASD: movimiento. X o Espacio: Pulso. Z: deshacer. R: reiniciar. En las pantallas de pista, Enter, Espacio o el botón permiten continuar.



Objetivo: iluminar todo el piso transitable. La luz no se puede volver a pisar. Pulso disipa todas las Sombras ortogonales vecinas sin mover al jugador ni pintar. El sello abre la compuerta. El viaje A → B pinta ambos extremos y requiere una salida libre y oscura; de lo contrario se cancela el turno completo. El piso negro no se pisa y no cuenta para ganar.



### Progresión





La dificultad aumenta dentro de cada bloque. Presentar una regla nueva reduce temporalmente la carga de combinaciones; las salas siguientes la exigen junto a las anteriores. El cierre combina las cinco reglas en dos sectores.



### Comprobaciones



Se encontraron y reprodujeron soluciones para las 16 salas y los otros 15 casos de prototipado. Las pistas, el bloqueo de controles mientras están abiertas, su cierre y el avance de nivel cuentan con pruebas automáticas de interfaz. Las métricas de rutas no equivalen a una medición de dificultad percibida.



### Código completo v1.1.0



```puzzlescript
title Pasos de Luz - Recorrido de niveles
author Juan Ignacio Bruzzone
homepage github.com/JuanchiBruzzone/Videojuegos.Aplicado
background_color #090d18
text_color #f4dea3
```



```puzzlescript
========
OBJECTS
========
```



```puzzlescript
Background
#090d18
```



```puzzlescript
Dark
#1c2940 #33425e
11111
10001
10001
10001
11111
```



```puzzlescript
Light
#f4c974 #72572f
11111
10001
10001
10001
11111
```



```puzzlescript
Wall
#131b2b
```



```puzzlescript
Player
#ecf8ff #90dcff
..0..
.000.
00100
.111.
1...1
```



```puzzlescript
ShadowEast
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1
```



```puzzlescript
ShadowWest
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1
```



```puzzlescript
Trail
transparent
```



```puzzlescript
Pulse
transparent
```



```puzzlescript
Trapped
transparent
```



```puzzlescript
GateClosed
#e8b998
00000
0.0.0
0.0.0
0.0.0
00000
```



```puzzlescript
GateOpen
#9ce7d1
00000
0...0
0...0
0...0
00000
```



```puzzlescript
Rune
#9ce7d1
..0..
.0.0.
0...0
.0.0.
..0..
```



```puzzlescript
PortalIn
#72dce8
.000.
0...0
0.000
0...0
.000.
```



```puzzlescript
PortalOut
#e2b7ff
.000.
0...0
000.0
0...0
.000.
```



```puzzlescript
Void
#020305 #10151d
11111
10001
10001
10001
11111
```



```puzzlescript
=======
LEGEND
=======
```



```puzzlescript
. = Dark
_ = Void
A = PortalIn and Dark
B = PortalOut and Dark
P = Player and Light
S = ShadowEast and Dark
W = ShadowWest and Dark
Shade = ShadowEast or ShadowWest
K = Rune and Dark
G = GateClosed and Dark
Barrier = Wall or Light or GateClosed or Void
```



```puzzlescript
=======
SOUNDS
=======
```



```puzzlescript
================
COLLISIONLAYERS
================
```



```puzzlescript
Background
Dark, Light
Player, Wall, ShadowEast, ShadowWest, GateClosed, Void
GateOpen
Rune
PortalIn, PortalOut
Trail
Pulse
Trapped
```



```puzzlescript
======
RULES
======
[ action Player | Shade ] -> [ action Player Pulse | ]
[ action Player ] -> [ Player ]
[ moving Player ] -> [ moving Player Trail ]
[ > Player | Light ] -> [ Player | Light ]
[ > Player | GateClosed ] -> [ Player | GateClosed ]
[ > Player | Void ] -> [ Player | Void ]
[ > Player | Shade ] -> [ Player | Shade ]
[ moving Player ] [ ShadowEast ] -> [ moving Player ] [ right ShadowEast ]
[ moving Player ] [ ShadowWest ] -> [ moving Player ] [ left ShadowWest ]
right [ right ShadowEast | Barrier ] -> [ left ShadowWest | Barrier ]
left [ left ShadowWest | Barrier ] -> [ right ShadowEast | Barrier ]
[ > Shade | Barrier ] -> [ Shade | Barrier ]
[ > Player | | < Shade ] -> [ > Player | | Shade ]
late [ Player Trail ] -> cancel
late [ Trail ] -> [ ]
late [ Pulse ] -> [ ]
late [ Player Dark ] -> [ Player Light ]
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]
late [ Player PortalIn ] [ PortalOut Light ] -> cancel
late [ Player PortalIn ] [ PortalOut Shade ] -> cancel
late [ Player PortalIn ] [ PortalOut Dark no Shade ] -> [ PortalIn ] [ Player PortalOut Dark ]
late [ Player Dark ] -> [ Player Light ]
late [ Player ] -> [ Player Trapped ]
late [ Player | Dark no GateClosed ] -> [ Player no Trapped | Dark no GateClosed ]
```



```puzzlescript
==============
WINCONDITIONS
==============
```



```puzzlescript
no Dark
```



```puzzlescript
=======
LEVELS
=======
```



```puzzlescript
message Cada paso despierta una estrella. La luz que dejás atrás guarda memoria: elegí qué querés alcanzar antes de avanzar.
```



```puzzlescript
#######
#P....#
#######
```



```puzzlescript
#####
#P..#
###.#
###.#
#####
```



```puzzlescript
#####
#P..#
#...#
##..#
#####
```



```puzzlescript
message Entre las estrellas se mueve algo que no responde a tus pasos de la misma manera. A veces, quedarse cerca y hacer un pulso dice más que avanzar.
```



```puzzlescript
#####
#.SP#
#...#
#..##
#####
```



```puzzlescript
######
#P..##
#S...#
##...#
#....#
######
```



```puzzlescript
#######
#..WSP#
#.....#
#.#...#
#.#...#
#######
```



```puzzlescript
message Hay marcas que se responden a la distancia. Tal vez el camino que parece cerrado esté esperando algo de otra parte de la sala.
```



```puzzlescript
######
#P..K#
#..G.#
#.#..#
######
```



```puzzlescript
######
#.#SP#
#....#
#G..K#
#...##
######
```



```puzzlescript
#######
#P....#
#S..G.#
#...#.#
#.WK..#
#..#.##
#######
```



```puzzlescript
message Dos anillos, una sola dirección. Antes de dejar una constelación, preguntate qué luz seguiría faltando si ya no pudieras volver.
```



```puzzlescript
#########
#P..##.B#
#...#...#
##A.#...#
#########
```



```puzzlescript
###########
#P.K##...B#
#....#....#
##...#..#.#
#A.G.######
###########
```



```puzzlescript
############
#P....#.#.B#
#S..G.#....#
#..K#.#.W..#
#...#A#...##
############
```



```puzzlescript
message Hay fragmentos del observatorio que ya no esperan luz. Su silencio también dibuja el camino: mirá qué accesos quedan a cada lado.
```



```puzzlescript
#######
#P....#
#.....#
#..._.#
#..._.#
#######
```



```puzzlescript
############
#P._A#....B#
#....#...S.#
#....#._...#
#_...#._...#
############
```



```puzzlescript
#############
#P...S#.._.B#
#...G.#.....#
#..K_.#.....#
#..._A#...W.#
#######..._.#
#############
```



```puzzlescript
#############
#P._..#.._.B#
#..K..#..W..#
#.....#.....#
#....G#S....#
#A_.S.#..._.#
#############
```



### Pasos de Luz — v1.0.0



Versión de partida: 16 niveles, indicaciones junto al tablero y las cinco mecánicas actuales.



### Código completo



```puzzlescript
title Pasos de Luz - Recorrido de niveles
author Juan Ignacio Bruzzone
homepage github.com/JuanchiBruzzone/Videojuegos.Aplicado
background_color #090d18
text_color #f4dea3
```



```puzzlescript
========
OBJECTS
========
```



```puzzlescript
Background
#090d18
```



```puzzlescript
Dark
#1c2940 #33425e
11111
10001
10001
10001
11111
```



```puzzlescript
Light
#f4c974 #72572f
11111
10001
10001
10001
11111
```



```puzzlescript
Wall
#131b2b
```



```puzzlescript
Player
#ecf8ff #90dcff
..0..
.000.
00100
.111.
1...1
```



```puzzlescript
ShadowEast
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1
```



```puzzlescript
ShadowWest
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1
```



```puzzlescript
Trail
transparent
```



```puzzlescript
Pulse
transparent
```



```puzzlescript
Trapped
transparent
```



```puzzlescript
GateClosed
#e8b998
00000
0.0.0
0.0.0
0.0.0
00000
```



```puzzlescript
GateOpen
#9ce7d1
00000
0...0
0...0
0...0
00000
```



```puzzlescript
Rune
#9ce7d1
..0..
.0.0.
0...0
.0.0.
..0..
```



```puzzlescript
PortalIn
#72dce8
.000.
0...0
0.000
0...0
.000.
```



```puzzlescript
PortalOut
#e2b7ff
.000.
0...0
000.0
0...0
.000.
```



```puzzlescript
Void
#020305 #10151d
11111
10001
10001
10001
11111
```



```puzzlescript
=======
LEGEND
=======
```



```puzzlescript
. = Dark
_ = Void
A = PortalIn and Dark
B = PortalOut and Dark
P = Player and Light
S = ShadowEast and Dark
W = ShadowWest and Dark
Shade = ShadowEast or ShadowWest
K = Rune and Dark
G = GateClosed and Dark
Barrier = Wall or Light or GateClosed or Void
```



```puzzlescript
=======
SOUNDS
=======
```



```puzzlescript
================
COLLISIONLAYERS
================
```



```puzzlescript
Background
Dark, Light
Player, Wall, ShadowEast, ShadowWest, GateClosed, Void
GateOpen
Rune
PortalIn, PortalOut
Trail
Pulse
Trapped
```



```puzzlescript
======
RULES
======
[ action Player | Shade ] -> [ action Player Pulse | ]
[ action Player ] -> [ Player ]
[ moving Player ] -> [ moving Player Trail ]
[ > Player | Light ] -> [ Player | Light ]
[ > Player | GateClosed ] -> [ Player | GateClosed ]
[ > Player | Void ] -> [ Player | Void ]
[ > Player | Shade ] -> [ Player | Shade ]
[ moving Player ] [ ShadowEast ] -> [ moving Player ] [ right ShadowEast ]
[ moving Player ] [ ShadowWest ] -> [ moving Player ] [ left ShadowWest ]
right [ right ShadowEast | Barrier ] -> [ left ShadowWest | Barrier ]
left [ left ShadowWest | Barrier ] -> [ right ShadowEast | Barrier ]
[ > Shade | Barrier ] -> [ Shade | Barrier ]
[ > Player | | < Shade ] -> [ > Player | | Shade ]
late [ Player Trail ] -> cancel
late [ Trail ] -> [ ]
late [ Pulse ] -> [ ]
late [ Player Dark ] -> [ Player Light ]
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]
late [ Player PortalIn ] [ PortalOut Light ] -> cancel
late [ Player PortalIn ] [ PortalOut Shade ] -> cancel
late [ Player PortalIn ] [ PortalOut Dark no Shade ] -> [ PortalIn ] [ Player PortalOut Dark ]
late [ Player Dark ] -> [ Player Light ]
late [ Player ] -> [ Player Trapped ]
late [ Player | Dark no GateClosed ] -> [ Player no Trapped | Dark no GateClosed ]
```



```puzzlescript
==============
WINCONDITIONS
==============
```



```puzzlescript
no Dark
```



```puzzlescript
=======
LEVELS
=======
```



```puzzlescript
#######
#P....#
#######
```



```puzzlescript
#####
#P..#
###.#
###.#
#####
```



```puzzlescript
#####
#P..#
#...#
#...#
#####
```



```puzzlescript
#####
#PS##
#####
```



```puzzlescript
#######
#P.S..#
#######
```



```puzzlescript
########
#PS.S..#
########
```



```puzzlescript
#######
#PKG..#
#######
```



```puzzlescript
#####
#P.S#
#..G#
#K..#
#####
```



```puzzlescript
######
#P..S#
#...G#
#KS..#
######
```



```puzzlescript
#########
#P.A#B..#
#########
```



```puzzlescript
##########
#PKGA#B..#
##########
```



```puzzlescript
###########
#PKGA#BS.S#
###########
```



```puzzlescript
#####
#P..#
#._.#
#...#
#####
```



```puzzlescript
#########
#P..#B..#
#A_.#####
#...#####
#########
```



```puzzlescript
#########
#PKG#B.S#
#A_.#####
#S..#####
#########
```



```puzzlescript
##########
#PKG#BS.S#
#A_.######
#S..######
##########
```



## 9. Documentos y enlaces

[Carpeta del proyecto](https://drive.google.com/drive/folders/1rVpBfMZ6sYb2JhB2VF0uTCmDs0YGkdHq)

[One Pager](https://docs.google.com/document/d/1rtd6J7tHhZZ-yf-wx6YpbYO2Lm6kz8gFf53_4XbRBko)

[Prototipado](https://docs.google.com/document/d/1VO9SVkcgFooPpxBt5TRtI9nicg-g1jH6EgNndaxM03c)

[Scope](https://docs.google.com/document/d/12ipp_OEbfiu44vDaXs30RaV3pqQidQ-FUhxg5mEtUYQ)

[Pilares](https://docs.google.com/document/d/1Hg0jER3_Hf34ljvmlYqT8F1PNk0URcP_ieJv-WbjKZw/edit?usp=drivesdk)

[Gantt](https://docs.google.com/spreadsheets/d/19ap1aBHbOc_YoAgADywLEHryXbitf_iOpP0NDtCuGGs/edit)

[Feedback](https://docs.google.com/spreadsheets/d/1t--fFLI9ZQ5oaVTt8CZsZMpleBgPVXPXw7JNlcznKWs/edit)

[Código y versiones](https://drive.google.com/file/d/1Kee4OBa8TfaSdSPQ6vLZVS0SlfVZGiu_/view?usp=drivesdk)

[Juego publicado](https://juanchibruzzone.github.io/Videojuegos.Aplicado/web/index.html)

[Repositorio](https://github.com/JuanchiBruzzone/Videojuegos.Aplicado)

Los ejercicios anteriores y sus fuentes quedan separados de Pasos de Luz. Algunos adjuntos no se pudieron recuperar; el inventario de migración indica cuáles.
