# No puedo volver por la luz

Si pudiera volver por cualquier casilla, completar el tablero sería casi automático. Al bloquear el piso pintado, el orden de los pasos pasa a importar.

```puzzlescript
[ > Player | Light ] -> [ Player | Light ]
```

Intentar entrar en una casilla iluminada no cambia el tablero. Compará esta prueba con la primera: ahora un desvío puede dejar una parte sin alcanzar.
