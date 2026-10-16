# ¿Y si la última casilla tiene una Sombra?

La devolución del profesor dejó una duda muy concreta: si tengo que iluminar todo, ¿cómo gano cuando la Sombra ocupa el último espacio?

La entrega recibió **100**, pero esa interacción todavía necesitaba una explicación clara y una prueba que se pudiera jugar.

## La prueba más corta

Dejé dos casillas: el jugador empieza sobre una iluminada y la Sombra ocupa la única oscura.

| Acción | Resultado |
| --- | --- |
| Intentar avanzar | La Sombra bloquea el paso; la casilla sigue oscura |
| Usar Pulso | La Sombra desaparece; el piso todavía está oscuro |
| Avanzar otra vez | El jugador ilumina la última casilla y gana |

## La respuesta

**Sí, puedo recuperar ese espacio y completar el nivel.** Antes tengo que disipar la Sombra desde una casilla vecina. No necesito volver a pasar por luz, moverla a una casilla que ya no existe ni dejar una parte del tablero sin iluminar.

El segundo caso prueba cómo acercarme mientras la Sombra patrulla. El tercero lleva la misma regla a una sala completa.

## Qué comprobé

Las tres soluciones se encontraron y se reprodujeron en el motor que usa el sitio. También se comprueba que un Pulso lejano no quite la Sombra y que chocar contra una pared no le dé un turno extra.

**Decisión:** cerrar el prototipado con Pulso como forma de despejar la Sombra. El comportamiento está implementado; el ajuste de dificultad queda para el trabajo de scope y niveles.
