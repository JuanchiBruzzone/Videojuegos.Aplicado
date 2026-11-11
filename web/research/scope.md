## Elementos fundamentales del juego

Pasos de Luz es un puzzle de recorrido hecho en PuzzleScript. El objetivo es iluminar todo el piso transitable sin volver por la luz. La entrega tiene 22 salas y sus sonidos están incluidos en el código.

## Conjuntos de elementos

Personaje: movimiento en cuatro direcciones y Pulso.

Enemigos: patrullas horizontales, hasta tres Sombras por sala.

Obstáculos: paredes, piso iluminado, piso negro y compuertas.

Presentación: observatorio, sprites, colores y sonidos del motor.

Mecánicas: pintar, bloquear el regreso, disipar Sombras, activar sellos y viajar de A a B.

Niveles: 22 salas, pistas y progresión de las reglas.

## Proceso de producción de cada conjunto

Yo me ocupo del diseño, código, sprites, sonidos y documentos. Uso PuzzleScript, JavaScript, GitHub y Drive.

Para cada elemento definí su función, lo probé por separado y después lo combiné en las salas. Los niveles se generan desde una fuente común y sus soluciones se reproducen en el motor oficial. Los cambios de reglas se vuelven a comprobar en toda la campaña.

La calidad de cierre exige distinguir el piso pendiente, la luz y los obstáculos; que teclado y controles respondan; que deshacer y reiniciar recuperen el estado; y que las salas se puedan completar.

## Etapas e interacciones

Cada paso pinta y bloquea el regreso. Las Sombras avanzan con los pasos válidos; Pulso las disipa desde una casilla vecina sin pintar. El sello abre la compuerta, cuyo piso todavía hay que recorrer. A lleva a B y pinta ambos extremos; si B está ocupada o iluminada, se cancela el turno. El piso negro no se pisa ni cuenta para ganar.

La producción pasó por concepto, pruebas de reglas, diseño de salas, feedback y revisión final. El vertical slice corresponde a la entrega actual con las 22 salas. La web conserva el prototipado y la vista previa.

## Costo en tiempo

Trabajo restante al cierre: **0 horas**. El Gantt queda en cero. El plan anterior se conserva como antecedente y no se presenta como un registro de horas trabajadas.

No se compraron recursos para esta entrega ni se agregaron servicios pagos. Los efectos y las señales tonales se generan con PuzzleScript.
