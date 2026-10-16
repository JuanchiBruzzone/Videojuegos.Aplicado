# ¿Cómo se entiende que perdí?

Puedo elegir un camino que deje casillas oscuras sin tener forma de alcanzarlas. Quise que el juego me dejara ver ese error, en lugar de borrarlo con un reinicio automático.

## La prueba

El tablero comprueba si todavía hay oscuridad y si queda una casilla oscura al lado del jugador. Si no queda ninguna, el intento está encerrado.

El nivel se mantiene en pantalla. **Deshacer** vuelve un paso atrás y **Reiniciar** recupera el comienzo. También puedo seguir reiniciando a mano sin una pantalla de derrota aparte.

## Un detalle importante

Una Sombra vecina también ocupa una casilla oscura. Cuando aparece en las etapas siguientes, todavía puedo usar Pulso. Esa situación no debe marcarse como derrota.

## Qué quedó

La victoria se comprueba antes de mostrar un encierro: quedarme sin movimientos justo después de iluminar todo significa que gané.

**Decisión:** mostrar el bloqueo y dejar la recuperación en manos del jugador.
