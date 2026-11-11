# Diseño y pruebas

## Mecánicas, dinámicas y experiencia

Caminar pinta el piso y bloquea el regreso. Pulso disipa las Sombras vecinas. El sello abre la compuerta y A lleva a B. Las Sombras patrullan con cada paso válido; si intento un movimiento bloqueado, el turno no avanza.

Al combinar estas reglas tengo que cuidar los accesos, decidir qué parte de la sala recorrer primero y terminar un sector antes de saltar al otro. Quiero que esa planificación produzca el momento de entender el puzzle, dentro de un observatorio que recupera su luz.

## Decisiones del jugador

Una bifurcación importa porque después no puedo volver por la luz. El salto también: si dejo piso pendiente del otro lado, ya no puedo alcanzarlo. Frente a una Sombra tengo que acercarme sin cerrar el camino que voy a necesitar.

La luz muestra cuánto avancé y también lo que dejé atrás. El piso negro y los símbolos de los objetos ayudan a distinguir qué puedo hacer en cada casilla.

## Ciclos de juego

En cada turno miro el tablero, elijo un paso o Pulso y reviso qué cambió. Si me encierro, deshago o reinicio para probar otra ruta.

Cuando completo una constelación, el juego confirma el cierre y puedo avanzar. Las primeras salas enseñan una regla; las siguientes la combinan con las anteriores.

## Progresión

1–3: pintar, reconocer el regreso bloqueado y usar Z/R.

4–6: aprender Pulso con una Sombra al lado y después leer las patrullas.

7–9: abrir la compuerta y conservar un camino para recorrerla.

10–12: terminar el primer sector antes de usar A → B.

13–16: rodear el piso negro y combinar todas las reglas. La sala 16 tiene 46 casillas y tres Sombras.

17–22: seis salas de 56 casillas y tres Sombras. Las paredes y los huecos obligan a pensar el recorrido de ambos sectores.

Las pistas, la leyenda y los símbolos orientan al jugador. Al presentar una regla reduzco las combinaciones; después las vuelvo a sumar. Las bifurcaciones permiten equivocarse y entender por qué un recorrido deja piso aislado.

## Vertical slice

Elijo las salas 4, 8 y 14 como muestra: Pulso, compuerta y la combinación de salto con piso negro. Tienen los mismos controles, acabado y audio que el resto del juego.

Se pueden abrir desde el selector. Me falta preparar una versión separada con esas tres salas si se necesita para la entrega, y probar que alguien pueda entenderlas sin que yo le explique el recorrido.

## Qué voy a probar

Quiero ver jugar a alguien que no conozca el proyecto y a alguien acostumbrado a puzzles. Voy a anotar intentos, ayudas, uso de Z/R y dónde se traban o dejan de jugar. Después les voy a preguntar qué entendieron de Pulso, la compuerta, el salto y el piso negro.

También necesito reproducir el bloqueo diagonal del nivel 4 que reportó Diego D. Me falta la secuencia de movimientos para distinguir un encierro del recorrido de un fallo del juego.

Para el audio voy a revisar si se distinguen los eventos y si la música ayuda o distrae. Sonido y música se pueden prender por separado y recuerdan la preferencia.

## Estado actual

Los 37 casos tienen soluciones comprobadas: 22 de campaña y 15 de los estudios. Las pruebas de código también revisan las reglas, las pistas, el avance y los controles. Me falta probar el aprendizaje, la dificultad y el audio con personas.
