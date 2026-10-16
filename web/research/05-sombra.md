# ¿Qué aporta la Sombra?

Quería sumar una presión pequeña, sin convertir el juego en una persecución. La Sombra comparte el mismo recurso que el jugador intenta completar: las casillas oscuras.

## Cómo funciona esta versión

- La Sombra patrulla en horizontal después de un movimiento válido del jugador.
- Rebota al encontrar una pared o una casilla iluminada. Si no tiene lugar, se queda donde está.
- No puede ocupar luz ni entrar en el jugador.
- Intentar entrar directamente en su casilla bloquea el movimiento.
- **Pulso** disipa una Sombra que esté al lado: arriba, abajo, izquierda o derecha.

El Pulso no mueve al jugador ni ilumina a distancia. Primero despejo la Sombra; después camino hasta su casilla.

## Qué cambió

La entrega anterior explicaba dónde podía estar la Sombra, pero dejaba sin resolver cómo recuperar el espacio que ocupaba. El Pulso cierra esa parte de la regla.

No hay una cuenta regresiva ni ataques en tiempo real. Puedo mirar el tablero y decidir cuándo acercarme.

**Decisión:** mantener una patrulla simple y una forma explícita de disiparla. La dificultad de esta versión está en el recorrido, no en los reflejos.
