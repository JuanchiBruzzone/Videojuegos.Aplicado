# ¿Qué pasa si puedo volver atrás?

En la primera versión podía recorrer cualquier casilla iluminada. El cambio se veía bien, pero equivocarme casi no tenía consecuencias: siempre podía volver y corregir.

## Las dos versiones

| Prueba | Qué permite | Qué cambia |
| --- | --- | --- |
| Movimiento y luz | Volver por el piso iluminado | Sirve para comprobar el cambio visual |
| Un solo recorrido | Entrar únicamente en piso oscuro | Cada paso cierra una opción |

## La regla que mantuve

```puzzlescript
[ > Player | Light ] -> [ Player | Light ]
```

Si intento entrar en una casilla iluminada, el movimiento se detiene. Como sigo en el mismo lugar, el turno completo se cancela. Tampoco cambia el resto del tablero.

## Qué quedó

Ahora tengo que pensar el recorrido antes de ocupar espacios que voy a necesitar después.

**Decisión:** conservar el bloqueo. Las etapas anteriores siguen disponibles para comparar la diferencia.
