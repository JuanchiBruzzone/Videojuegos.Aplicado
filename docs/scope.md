## Qué juego voy a terminar

Pasos de Luz va a ser un juego de puzzles por turnos, hecho en PuzzleScript y ambientado en un observatorio abandonado. Cada sala representa una constelación apagada. Al caminar ilumino el piso, pero ya no puedo volver a pisarlo: tengo que encontrar un recorrido que cubra todo sin encerrarme.

Para esta versión propongo **ocho niveles cortos hechos a mano**, un personaje, una Sombra y una variación nueva: sellos que abren compuertas. Quiero que la dificultad salga de combinar estas reglas, sin sumar sistemas que no lleguen a desarrollarse bien.

Los ocho estudios de la web son pruebas de preproducción. **No son los ocho niveles de la campaña**: esos todavía hay que diseñarlos, ordenarlos y probarlos.

## Elementos fundamentales

| Conjunto | Qué incluye | Límite de esta versión |
| --- | --- | --- |
| Personaje jugable | Movimiento en cuatro direcciones, Pulso y respuesta visual | Un personaje, sin atributos ni inventario |
| Enemigo | Sombra que ocupa oscuridad y patrulla en horizontal por turnos | Un tipo; como máximo una por nivel |
| Obstáculos | Paredes, piso iluminado y compuerta cerrada | Un sello y una compuerta como máximo por nivel |
| Escenario y arte | Piso oscuro, luz, paredes, sello, compuerta y observatorio | Un ambiente y un juego de sprites reutilizable |
| Mecánicas | Iluminar al pisar, bloquear el regreso, disipar Sombra, abrir compuerta y completar el tablero | Reglas deterministas, sin tiempo real |
| Niveles | Ocho salas con dificultad progresiva | Tableros chicos, con solución comprobada |
| Sonido | Señales de paso, Pulso, apertura y victoria | Efectos breves; sin música original |
| Interfaz y entrega | Instrucciones, selección de nivel, deshacer, reiniciar, cierre y web | Una campaña lineal, sin cuentas ni servicios externos |

## La Sombra y la devolución del profesor

La duda era cómo completar el tablero si la Sombra ocupa la última casilla oscura. La solución queda dentro de las reglas del juego: **Pulso disipa una Sombra vecina sin moverme ni iluminar el piso**. Después puedo entrar en esa casilla y ganar.

La Sombra se mueve en horizontal después de un movimiento válido. No avanza por tiempo real ni atraviesa luz, paredes o compuertas cerradas. Pulso se usa con X, Espacio o el botón de la web; no agrega un recurso que se pueda agotar y dejar la partida sin salida.

Esto ya tiene un caso mínimo jugable, además de pruebas en un pasillo y una sala. Para la campaña falta comprobar que la regla se entienda sin tener que leer el research.

## La ampliación: sellos y compuertas

Al pisar un sello, ilumino su casilla y abro la compuerta de la sala. Queda abierta hasta deshacer o reiniciar. **Abrirla no ilumina su piso**: también tengo que recorrerlo para ganar.

Elegí esta variación porque cambia el orden del recorrido y usa el mismo movimiento. Ya está probada por separado y junto a la Sombra en PuzzleScript. No voy a agregar varios colores, puertas que vuelvan a cerrarse ni cadenas de interruptores en esta versión.

## Cómo voy a producir cada conjunto

Las horas son una estimación del **trabajo que falta**, para una sola persona, reutilizando el motor, las reglas y la web actuales. Incluyen ajustes y pruebas por conjunto. La revisión final de la campaña se calcula por separado.

| Conjunto | Proceso de producción | Cuándo lo doy por terminado | Horas |
| --- | --- | --- | --- |
| Personaje | Ajustar sprite → revisar controles → comprobar movimiento, Pulso y recuperación | Se distingue del piso y responde igual con teclado y botones | 1,5 |
| Sombra y Pulso | Revisar patrulla → combinar con obstáculos → comprobar cercanía y última casilla | No atraviesa obstáculos y siempre se puede despejar desde una casilla vecina | 2 |
| Obstáculos | Ajustar sello y compuerta → revisar colisiones → probar deshacer y reiniciar | El cambio se entiende, permanece abierto y se restaura correctamente | 2,5 |
| Escenario y arte | Elegir paleta → dibujar sprites → revisar contraste y escala | Todos los estados se distinguen y mantienen el observatorio | 2 |
| Reglas centrales | Consolidar fuentes → revisar luz, bloqueo, encierro y victoria → probar combinaciones | La victoria exige iluminar todo y un bloqueo no altera el turno | 3 |
| Ocho niveles | Bocetar → encontrar solución → jugar → ajustar → ordenar dificultad | Ocho salas distintas, resolubles y sin exigir una explicación externa | 6 |
| Sonido | Elegir efectos → asignar eventos → ajustar volumen → probar | Cada evento tiene una señal corta que no tapa a las otras | 1,5 |
| Interfaz y entrega | Integrar campaña → escribir instrucciones y cierre → revisar web y fuentes | Puedo empezar, avanzar, volver a intentar y terminar el juego publicado | 2,5 |
| Revisión final | Recorrer campaña → revisar teclado y celular → corregir fallos → repetir casos afectados | Las ocho soluciones funcionan y no quedan errores que impidan jugar | 3 |
| **Trabajo previsto** | | | **24** |
| **Margen para imprevistos** | Correcciones, niveles que haya que rehacer o ajustes de integración | 25 % adicional sobre el trabajo previsto | **6** |
| **Total reservado** | | | **30** |

## Etapas e interacciones

Primero cierro las reglas y sus estados. Después preparo una sala que combine luz, Sombra, sello y compuerta: esa sala me permite revisar las interacciones antes de producir la campaña. Con esa base estable hago los niveles, integro su progresión y reviso el juego completo.

- **Personaje y piso:** moverme a oscuridad deja luz; intentar volver a una casilla iluminada no me mueve ni le da un turno a la Sombra.
- **Personaje y Sombra:** la entrada directa queda bloqueada. Pulso despeja la casilla vecina, pero todavía hay que caminar sobre ella.
- **Personaje y sello:** pisarlo ilumina el piso y abre la compuerta en ese turno.
- **Compuerta y recorrido:** cerrada bloquea al jugador y a la Sombra; abierta conserva oscuridad pendiente hasta que la recorro.
- **Deshacer y reiniciar:** recuperan al jugador, la luz, la Sombra y la compuerta como un mismo estado.
- **Victoria y encierro:** si no queda oscuridad, gano. Si todavía falta y no tengo un movimiento o un Pulso útil, el tablero permite revisar el error y volver a intentar.

La dependencia principal es **reglas → sala integrada → niveles → campaña → revisión final**. Arte y sonido se apoyan en esos estados. Como trabajo solo, no cuento esas tareas como si las hicieran varias personas al mismo tiempo.

## Orden de producción y dificultad

| Bloque | Trabajo | Horas |
| --- | --- | --- |
| 1 | Reglas centrales y enemigo con Pulso | 5 |
| 2 | Personaje, obstáculos y primer ajuste de arte | 5 |
| 3 | Terminar arte y producir las primeras cuatro salas | 5 |
| 4 | Producir las otras cuatro salas, sumar sonido e integrar el comienzo de la campaña | 5 |
| 5 | Terminar integración y revisar la campaña completa | 4 |
| Reserva | Corregir los problemas que aparezcan | 6 |

La progresión prevista es: dos salas de recorrido e iluminación, dos con Sombra y Pulso, dos que presentan sello y compuerta, y dos que combinan las reglas. Cada nivel introduce una decisión clara antes de pedir una combinación más difícil.

Las **30 horas son horas de trabajo**, no una promesa de terminar en cierta cantidad de días. El cierre del **18 de octubre de 2026 a las 23:58** corresponde a esta entrega de scope; la consigna no fija aquí la fecha de entrega del juego terminado.

## Qué queda afuera y qué recorto primero

No incluyo combate, multijugador, generación procedural, nuevos tipos de enemigos, inventario, varios ambientes ni una historia con escenas. La narrativa se sostiene con el observatorio, los nombres de las salas y un cierre breve.

Si el trabajo supera la reserva, primero reduzco detalles de arte y efectos. Después simplifico el diseño de las salas más difíciles, manteniendo ocho niveles y las reglas ya probadas. Si la compuerta exige más de lo estimado, la retiro de la campaña antes de sumar otra mecánica: la base sigue siendo luz, recorrido y Sombra. Ese cambio quedaría registrado como una revisión del scope.

## Qué está resuelto y qué falta

Ya puedo jugar los cambios de luz, el bloqueo del regreso, la victoria, el encierro, la Sombra con Pulso y los dos casos de compuertas. El verificador encuentra y reproduce once soluciones en el motor oficial. La primera prueba es libre y no tiene victoria.

Todavía falta convertir esas pruebas en una campaña: crear los ocho niveles finales, unificar los sprites, sumar sonido, cerrar las instrucciones y probar con alguien que no conozca las reglas. No cuento esas pruebas con personas como realizadas.

Doy por terminado el juego cuando puedo recorrer las ocho salas desde el inicio hasta el cierre, se entiende cómo resolver la última casilla con Sombra, deshacer y reiniciar conservan todos los estados y la versión publicada se puede jugar con teclado y con los controles de la web.
