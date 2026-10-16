# Abrir un camino cambia el orden

Después del prototipado quise sumar una variación chica: **un sello que abre una compuerta al iluminarse**. La regla principal sigue siendo recorrer todas las casillas sin volver por la luz.

## Qué pruebo

- La compuerta cerrada bloquea el paso.
- Al pisar el sello, su casilla se ilumina y la compuerta queda abierta.
- La compuerta no vuelve a cerrarse. Su piso sigue oscuro hasta que lo piso.
- Deshacer y reiniciar recuperan también el estado del sello y la compuerta.

El primer caso aísla esa relación en un pasillo. El segundo la combina con la Sombra. Los dos tienen un recorrido encontrado y reproducido en el motor oficial.

## Por qué entra en el scope

Me permite trabajar el orden del recorrido sin agregar otro enemigo o un control nuevo. Para esta entrega limito cada nivel a **un sello y una compuerta**; no hay colores, llaves ni circuitos con varios interruptores.

El sello se activa caminando. Pulso sigue dedicado a disipar una Sombra vecina con **X, Espacio o el botón**. No ilumina la casilla de la Sombra: después tengo que entrar para completar el recorrido. Así conservo la respuesta a la devolución del profesor.

## Cómo funciona en PuzzleScript

```puzzlescript
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]
```

La regla busca al jugador sobre el sello y abre la compuerta del tablero. La compuerta cerrada comparte capa de colisión con el jugador; al abrirse pasa a una capa que deja caminar sobre ella.

Esto valida la mecánica en dos pruebas chicas. Todavía falta diseñar y probar los ocho niveles de la versión final.
