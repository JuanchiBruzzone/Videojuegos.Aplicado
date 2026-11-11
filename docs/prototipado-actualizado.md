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

La versión **1.2.0** tiene 22 salas. Conserva los dos recorridos iniciales breves y el cierre original de 46 casillas; agrega seis salas avanzadas de 56 casillas y tres Sombras. La dificultad crece por el orden del recorrido, las rutas que se pueden cerrar y las combinaciones de reglas.

### Pistas entre mecánicas

Antes de presentar pintura, Pulso, sello, teleporter y piso negro aparece una pantalla de texto en español. La pista sugiere qué observar sin dar una secuencia de movimientos. Enter, Espacio o el botón permiten continuar; esa pulsación no mueve al jugador ni usa Pulso. La pista también se puede volver a leer.

Estas pantallas son instrucciones `message` dentro del código de PuzzleScript. La web las muestra antes de la sala correspondiente y conserva la numeración de los 22 niveles.

| Niveles | Qué se aprende | Cómo crece el desafío |
| --- | --- | --- |
| 1–3 | Pintar, no volver y corregir | Dos recorridos breves y una sala donde un desvío puede dejar piso pendiente |
| 4–6 | Sombra y Pulso | Una sala pequeña, una patrulla en una sala mayor y dos patrullas en 18 casillas |
| 7–9 | Sello y compuerta | Activar una marca alejada sin cerrar el acceso a la puerta; después combinar con una y dos patrullas |
| 10–12 | Teleporter A → B | Terminar un sector antes de viajar; después agregar compuerta y patrullas a ambos lados del salto |
| 13–14 | Piso negro fijo | Elegir rutas alrededor de huecos y después resolver dos sectores con una patrulla |
| 15–16 | Todas las reglas | Dos sectores con 41 y 46 casillas; sello, compuerta, viaje de ida, huecos y dos o tres Sombras |
| 17–22 | Planificación avanzada | Seis salas de 56 casillas y tres Sombras; paredes y huecos que alteran el orden de ambos sectores |

Al presentar una regla nueva bajo temporalmente la cantidad de combinaciones. Después vuelvo a exigirla en una sala mayor. Una introducción breve y un cierre exigente cumplen funciones distintas dentro de la progresión.

### Decisiones que importan

- Un desvío puede dejar casillas sin alcanzar, aunque todavía haya movimientos disponibles.
- Despejar una Sombra no pinta su piso; el recorrido todavía tiene que llegar allí.
- Abrir una puerta no garantiza que siga siendo accesible después del recorrido.
- Viajar temprano puede dejar piso pendiente en la sala de entrada. B también inicia un puzzle.
- Los huecos alteran la forma de las rutas y se combinan con el salto en el cierre.

### Comprobación y próximos ajustes

El verificador encuentra una solución de cada sala y la reproduce en el motor oficial. También revisa alternativas de movimiento a lo largo del recorrido encontrado: las salas finales tienen decisiones que impiden completar el tablero y requieren deshacer o reiniciar.

Esto comprueba que los desafíos son resolubles y que existen errores de recorrido. Para ajustar su dificultad percibida queda observar partidas: dónde hace falta una explicación, qué pistas se entienden y cuánto cambia la experiencia entre las últimas salas.

Los comentarios y ajustes de esta versión están registrados en el documento de feedback. El código completo, los cambios y la versión anterior se conservan en el Markdown del juego.

## Pulido y feedback de v1.2.0

Aclaré cómo usar X, Espacio y el botón Pulso, y que sacar una Sombra no pinta su casilla. Diego D había señalado que el mensaje era ambiguo. Me falta reproducir el bloqueo diagonal que reportó; su comentario y el de Vanesa siguen en la planilla.

La web agrega efectos y música originales sintetizados, controles independientes y preferencias guardadas. La música se pausa al ocultar la pestaña. La barra de iluminación y el contador de nivel ayudan a leer el progreso. La respuesta visual al paso y a Pulso respeta movimiento reducido.

Los 37 casos tienen solución comprobada en el motor. Me falta probar el audio y la dificultad con otras personas.
