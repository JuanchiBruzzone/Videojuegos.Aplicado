# ¿Una casilla puede cambiar al pisarla?

Arranqué con un tablero chico: jugador, piso oscuro y piso iluminado. Quería ver el cambio sin mezclar todavía enemigos ni recorridos difíciles.

## Lo que probé

El punto de partida ya está iluminado. Cada vez que me muevo, primero cambia la posición del jugador y después se ilumina el piso de llegada.

```puzzlescript
late [ Player Dark ] -> [ Player Light ]
```

Separé el piso del jugador en capas distintas. Así pueden estar en la misma casilla. En esta versión dejé permitido volver hacia atrás, para mirar solamente el cambio de estado.

## Qué quedó

El recorrido deja una marca visible y el jugador puede seguir parado sobre ella. La prueba corre con el motor oficial de PuzzleScript; el tablero de la derecha muestra ese resultado.

**Decisión:** mantener el cambio después del movimiento y probar qué pasa cuando esa marca también afecta el camino.
