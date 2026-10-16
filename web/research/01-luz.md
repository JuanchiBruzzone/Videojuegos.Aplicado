# Pintar el recorrido

La primera prueba tiene solo al personaje y el piso. Cada casilla que piso pasa de oscura a iluminada; el punto de partida ya está pintado.

```puzzlescript
late [ Player Dark ] -> [ Player Light ]
```

En esta prueba puedo volver atrás. Así compruebo el cambio de color antes de agregar la restricción del recorrido.
