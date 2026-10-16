# ¿Iluminar todo alcanza para ganar?

Una puerta de salida me permitía terminar sin darle tanta importancia al resto del tablero. Preferí que el objetivo saliera de la misma mecánica.

## La prueba

Cada casilla transitable empieza con `Dark`. Al pisarla, pasa a `Light`. El nivel se completa cuando ya no queda ninguna oscura.

```puzzlescript
no Dark
```

## Una corrección necesaria

En la primera entrega había escrito `no Background`. Al llevarlo al motor, separé las cosas: `Background` es la base que PuzzleScript necesita en todas las posiciones; `Dark` es el piso que falta recorrer. La condición correcta de esta implementación es **`no Dark`**.

## Qué quedó

Iluminar una casilla menos no alcanza. Iluminar todas termina el nivel, sin buscar una puerta aparte.

**Decisión:** ganar por iluminación total. La casilla inicial ya cuenta como iluminada.
