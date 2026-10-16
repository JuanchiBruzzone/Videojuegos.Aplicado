# Completar el tablero

El objetivo es pintar todas las casillas transitables. No hace falta llegar a una salida: gano cuando no queda piso oscuro.

```puzzlescript
no Dark
```

Uso `Dark` para las casillas pendientes. `Background` es la base del tablero y no cambia. El piso negro fijo, que aparece más adelante, no lleva `Dark` y no cuenta para ganar.
