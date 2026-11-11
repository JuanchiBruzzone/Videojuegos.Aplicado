# Diseño y cierre

## Mecánicas, dinámicas y experiencia

Caminar pinta el piso y bloquea el regreso. Pulso disipa las Sombras vecinas. El sello abre la compuerta y A lleva a B. Las patrullas se mueven con los pasos válidos. Un intento bloqueado no adelanta el turno.

Estas reglas me obligan a cuidar los accesos y decidir qué parte de la sala recorrer primero. Busco que el jugador descubra el camino sin apuro y vea cómo el observatorio recupera su luz.

## Ciclos de juego

En cada turno miro el tablero, elijo paso o Pulso y reviso qué cambió. Si me encierro, deshago o reinicio. Al completar una constelación, el juego confirma el cierre y puedo seguir a la próxima sala.

## Progresión

1–3: pintar, reconocer el regreso bloqueado y usar Z/R.

4–6: aprender Pulso y después leer las patrullas. La sala 4 es un pasillo: primero hay que despejar la Sombra que está al lado.

7–9: abrir la compuerta y conservar un camino para recorrerla.

10–12: terminar el primer sector antes de usar A → B.

13–16: rodear el piso negro y combinar todas las reglas.

17–22: seis salas de 56 casillas y tres Sombras. Las paredes y los huecos cambian el recorrido de ambos sectores.

## Vertical slice

El vertical slice es la entrega actual del proyecto: las 22 salas, sus pistas, las reglas, los sprites y los sonidos incluidos en el programa de PuzzleScript. La web permite recorrer los estudios del prototipado y probar esa misma campaña.

## Sonido

Los efectos se declaran en SOUNDS y se disparan desde las reglas y los eventos del motor. Se oyen pasos, Pulso, apertura, salto, reinicio, deshacer y victoria. Al iniciar y completar una sala hay señales tonales breves.

PuzzleScript oficial no reproduce una pista musical de fondo. El juego no depende del audio que se había agregado a la web: esa capa se retiró.

## Revisión final

Se encontraron y reprodujeron soluciones para los 37 casos: 22 salas y 15 casos de los estudios. Las pruebas revisan movimiento, Pulso, puertas, salto, victoria, recuperación y sonidos.

Para responder al feedback del nivel 4, cambié la sala por un pasillo que impide quedar en diagonal con la Sombra. Revisé sus seis estados posibles: no hay encierros y se puede completar. También se comprobaron Z y R.

El Gantt queda en cero y los comentarios recibidos tienen una respuesta en la planilla. La revisión de cierre fue interna; no se registró una nueva sesión con jugadores.
