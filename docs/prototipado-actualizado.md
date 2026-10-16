# Pasos de Luz — Prototipado

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Qué probé

Separé las preguntas del juego en pruebas cortas: pintar el piso, completar el tablero, bloquear el regreso, reconocer un encierro y despejar el paso con Pulso. Después sumé compuertas, teleporter y piso negro fijo, y armé una secuencia de niveles para probar cómo se aprenden.

## Pintar el recorrido

La primera prueba tiene solo al personaje y el piso. Cada casilla que piso pasa de oscura a iluminada; el punto de partida ya está pintado.

```puzzlescript
late [ Player Dark ] -> [ Player Light ]
```

En esta prueba puedo volver atrás. Así compruebo el cambio de color antes de agregar la restricción del recorrido.

## Completar el tablero

El objetivo es pintar todas las casillas transitables. No hace falta llegar a una salida: gano cuando no queda piso oscuro.

```puzzlescript
no Dark
```

Uso `Dark` para las casillas pendientes. `Background` es la base del tablero y no cambia. El piso negro fijo, que aparece más adelante, no lleva `Dark` y no cuenta para ganar.

## No puedo volver por la luz

Si pudiera volver por cualquier casilla, completar el tablero sería casi automático. Al bloquear el piso pintado, el orden de los pasos pasa a importar.

```puzzlescript
[ > Player | Light ] -> [ Player | Light ]
```

Intentar entrar en una casilla iluminada no cambia el tablero. Compará esta prueba con la primera: ahora un desvío puede dejar una parte sin alcanzar.

## Equivocarse y volver a probar

Un camino puede dejar casillas pendientes sin forma de llegar a ellas. Cuando pasa, el tablero queda visible para revisar el error.

**Z** deshace el último paso y **R** reinicia el nivel. También están los botones debajo del juego.

La señal de encierro detecta si falta pintar y no queda una casilla oscura vecina. Una Sombra vecina permite usar Pulso; por eso no la tomo como un cierre del camino.

No hace falta borrar el intento apenas sale mal. Poder mirar y corregir el recorrido forma parte del puzzle.

## La Sombra ocupa el camino

Las Sombras patrullan en horizontal cada vez que doy un paso válido. La luz y las paredes les cierran el paso. No se mueven mientras pienso ni por chocar contra un obstáculo.

Para despejar una casilla, tengo que acercarme y usar **Pulso con X, Espacio o el botón**. Disipa las Sombras que estén arriba, abajo, a la izquierda o a la derecha. No pinta el piso: después tengo que caminar sobre él.

La primera presentación usa una Sombra. Más adelante aparecen dos y finalmente tres. Cambia la cantidad de posiciones que tengo que mirar, no los controles.

## Un observatorio apagado

Cada nivel representa una constelación que recupera su luz con el recorrido. Las Sombras ocupan los fragmentos que todavía están apagados.

Probé el mismo tablero con dos ambientaciones. El selector cambia entre dungeon y observatorio sin reiniciar la partida, para comparar cómo se lee el escenario.

Me quedo con el observatorio: el recorrido completo tiene sentido como forma de restaurar la constelación.

## El feedback: la última casilla

El feedback señaló una duda: si una Sombra ocupa la última casilla oscura, ¿cómo completo el nivel?

| Acción | Qué pasa |
| --- | --- |
| Intento entrar | La Sombra bloquea el paso |
| Uso Pulso desde al lado | La Sombra desaparece; el piso sigue oscuro |
| Entro en la casilla | Se pinta y completo el nivel |

El primer caso deja solamente esas dos casillas. Los otros prueban el acercamiento en un pasillo y en una sala.

Pulso resuelve el bloqueo sin cambiar el objetivo de pintar todo.

## Un sello abre el paso

Al pisar el sello verde, se abre la compuerta. Queda abierta hasta deshacer o reiniciar. Su piso también hay que pintarlo.

El primer caso permite ver esa relación sin Sombras. El segundo combina la apertura con una patrulla.

```puzzlescript
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]
```

En la progresión, la compuerta aparece después de aprender Pulso. Primero se muestra un sello y una puerta en un camino corto; después hay que decidir cuándo abrirla mientras se despejan las Sombras.

## Entrar por A, salir por B

El teleporter conecta dos partes del tablero. Al pisar **A**, aparezco en **B** y quedan pintadas ambas casillas. Funciona en un solo sentido; no usa un botón aparte.

La salida tiene que estar libre y sin pintar. Si está ocupada por una Sombra o ya tiene luz, no puedo entrar en A. El intento no consume el turno.

El primer caso separa el tablero en dos sectores: para seguir hay que usar el teleporter. El segundo suma una compuerta y una Sombra.

En los niveles aparece después de las compuertas. Primero enseño el salto; después lo combino con las decisiones del recorrido. Hay que terminar el sector de entrada antes de dejarlo atrás.

## Piso negro fijo

El piso negro no se puede pisar ni pintar. Tampoco cuenta para completar el nivel. Es distinto del piso azul oscuro, que sí se puede recorrer y todavía espera luz.

La primera sala pone un bloque negro en el centro. Obliga a rodearlo y permite ver que la victoria no exige pintarlo. La siguiente combina ese desvío con el teleporter.

En PuzzleScript uso un objeto separado, `Void`, en la capa de colisión. No lleva `Dark`, por lo que queda fuera de la cuenta de casillas pendientes.

La forma del piso pasa a ser otra herramienta para diseñar los niveles: puedo cortar atajos y separar recorridos sin sumar una acción al jugador.

## Aprender jugando

Armé un recorrido de **16 niveles jugables**. La dificultad sube al combinar reglas que ya aparecieron. Cada presentación tiene una indicación breve junto al tablero y una situación donde se ve qué cambia.

| Niveles | Qué aprende el jugador | Cómo lo presento |
| --- | --- | --- |
| 1–3 | Pintar, no volver por la luz y corregir un recorrido | Un pasillo, un giro y una sala con varias opciones. Flechas para moverse; Z y R para probar otra vez |
| 4–6 | Sombra y Pulso | Una Sombra al lado para probar X, una patrulla y después dos Sombras |
| 7–9 | Sello y compuerta | Primero sin enemigos; después con una y dos Sombras |
| 10–12 | Teleporter | Dos sectores conectados por A → B; después compuerta y Sombras en la misma sala |
| 13–14 | Piso negro fijo | Un bloque que hay que rodear; después un recorrido que termina en un teleporter |
| 15–16 | Elegir el orden con todo lo aprendido | Compuerta, teleporter y piso negro, primero con dos Sombras y después con tres |

### Qué tiene que quedar claro

- Pintar una casilla cierra el regreso. Un intento bloqueado no cambia el turno.
- Pulso disipa las Sombras vecinas, pero todavía hay que pintar su piso.
- El sello abre la compuerta; abrirla no pinta la casilla que ocupa.
- A lleva a B en un sentido. Conviene terminar el sector antes de salir.
- El piso negro es un obstáculo permanente, no una casilla pendiente.

### Qué falta probar con jugadores

Los 16 niveles tienen un recorrido encontrado y reproducido en PuzzleScript. Eso comprueba que se pueden completar, pero todavía falta ver si enseñan bien.

Voy a mirar dónde alguien necesita una explicación, si descubre Pulso en su primera aparición y si entiende A → B antes de encontrarlo junto a una Sombra. Si un nivel confunde, cambio su disposición o su indicación antes de aumentar la dificultad.

El mayor trabajo pendiente es ese: jugar, ajustar recorridos y volver a probarlos. El código de las reglas ya está funcionando.
