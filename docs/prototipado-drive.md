# Pasos de Luz — Prototipado

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Qué quise comprobar

Separé el juego en pruebas cortas para responder las dudas que tenía: cómo pintar el piso, cuándo ganar, cómo impedir el regreso, qué pasa si me encierro y cómo recuperar una casilla ocupada. Después sumé compuertas, teleporter y piso negro, y armé una campaña para combinar esas reglas.

## Pintar y completar el tablero

La primera prueba permite caminar y volver por el piso. Sirve para comprobar que la casilla de llegada cambia de oscura a iluminada. El punto de partida ya está pintado.

La segunda agrega la victoria: completar todo el piso transitable. Background queda como base permanente y Dark representa lo que falta iluminar. El nivel termina cuando no queda Dark.

Mantengo esta regla porque el progreso se ve directamente en el tablero. No hace falta llegar a una salida ni contar el piso negro como una casilla pendiente.

## Bloquear el regreso

En la tercera prueba ya no se puede volver por la luz. Eso hace que el orden importe: un paso puede dejar una parte del tablero sin acceso.

La cuarta conserva el intento cuando el jugador se encierra. Z deshace y R reinicia. Prefiero que se pueda mirar el error y probar otra ruta, en lugar de perder el intento apenas sale mal.

## Sombra y Pulso

Las Sombras patrullan en horizontal con cada paso válido. La luz y los obstáculos les cierran el paso. No se mueven mientras el jugador piensa ni al intentar un paso bloqueado.

Pulso se usa con X o Espacio desde una casilla vecina. Disipa todas las Sombras de arriba, abajo, izquierda y derecha. No mueve al personaje ni pinta: después hay que entrar en el espacio que quedó libre.

El caso de la última casilla comprueba esa diferencia: la Sombra bloquea, Pulso la disipa y el paso siguiente completa la pintura.

## Ambientación

Comparé dungeon y observatorio sobre el mismo tablero. Me quedo con el observatorio porque el recorrido puede leerse como la recuperación de una constelación. La luz cálida destaca sobre el piso azul oscuro.

## Sello y compuerta

Pisar el sello abre la compuerta. Su piso sigue oscuro hasta recorrerlo. Hay una prueba sin Sombras y otra que combina apertura con patrulla.

En las salas más avanzadas alejo el sello para que abrir la puerta no sea automático: también hay que conservar una ruta para llegar a ella.

## Teleporter

Entrar en A lleva a B y pinta ambos extremos. Es un viaje de ida. B tiene que estar libre y oscura; si está ocupada o ya tiene luz, se cancela el turno completo.

La prueba inicial separa dos sectores. Las siguientes agregan compuerta y Sombras para exigir un orden: terminar el primer sector antes de abandonarlo.

## Piso negro

El piso negro no se pisa, no se pinta y no cuenta para ganar. Lo uso para cortar atajos y cambiar los accesos de una sala sin agregar otro control.

Su marca permite distinguirlo del piso azul oscuro, que todavía necesita luz. Las pruebas comprueban el bloqueo y la condición de victoria.

## Progresión

Las 22 salas presentan pintura, Pulso, compuerta, teleporter y piso negro, en ese orden. Después combinan esas reglas. Hay una pista al presentar cada mecánica y un control para deshacer o reiniciar.

Las seis salas nuevas tienen 56 casillas y tres Sombras cada una. Las paredes y los huecos cambian el orden de los recorridos en ambos sectores. Sus soluciones se encontraron y reprodujeron en el motor oficial.

## Cambios por feedback

Diego D señaló que la explicación de Pulso era ambigua y reportó un bloqueo en diagonal en el nivel 4. Vanesa también marcó un bloqueo en esa sala. Cambié su diseño por un pasillo: la Sombra está al lado y hay que usar Pulso antes de avanzar. El mensaje indica X, Espacio y el botón.

Revisé los seis estados posibles de la sala nueva. No hay posiciones diagonales ni encierros. Se comprobaron Pulso, deshacer y reiniciar. La sala siguiente introduce la patrulla en un espacio más abierto.

Para responder al pedido de mayor dificultad, agregué seis salas con bifurcaciones, paredes, huecos y las reglas ya aprendidas. La planilla conserva las palabras de Diego D y Vanesa junto a la respuesta aplicada.

## Sonido y aspecto

Los efectos están en la sección SOUNDS y en las reglas de PuzzleScript. Funcionan al copiar el programa al editor: pasos, Pulso, compuerta, salto, deshacer, reinicio y victoria. Al iniciar y completar una sala se oyen señales tonales breves. El motor oficial no reproduce una pista musical de fondo.

Mejoré los sprites del piso, las Sombras, el personaje y las paredes. La web sigue siendo el cuaderno de prototipado y la vista previa del programa; reproduce los mismos efectos del motor.

## Cierre

La entrega actual, o vertical slice, incluye las 22 salas con sus reglas, pistas, sprites y sonidos. Se comprobaron 37 casos con victoria, contando los estudios anteriores. También pasaron las pruebas de reglas, controles, audio y preparación del sitio.

La revisión final fue interna. No se registró una nueva sesión con jugadores. El feedback queda respondido en la planilla y el Gantt cierra con cero horas restantes.
