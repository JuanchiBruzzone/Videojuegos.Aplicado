# Aprender jugando

La versión **1.1.0** tiene 16 salas. Empieza con dos recorridos de cinco casillas y llega a un cierre de 46 casillas con tres Sombras. La dificultad crece por el orden del recorrido, las rutas que se pueden cerrar y las combinaciones de reglas.

## Pistas entre mecánicas

Antes de presentar pintura, Pulso, sello, teleporter y piso negro aparece una pantalla de texto en español. La pista sugiere qué observar sin dar una secuencia de movimientos. Enter, Espacio o el botón permiten continuar; esa pulsación no mueve al jugador ni usa Pulso. La pista también se puede volver a leer.

Estas pantallas son instrucciones `message` dentro del código de PuzzleScript. La web las muestra antes de la sala correspondiente y conserva la numeración de los 16 niveles.

| Niveles | Qué se aprende | Cómo crece el desafío |
| --- | --- | --- |
| 1–3 | Pintar, no volver y corregir | Dos recorridos breves y una sala donde un desvío puede dejar piso pendiente |
| 4–6 | Sombra y Pulso | Una sala pequeña, una patrulla en una sala mayor y dos patrullas en 18 casillas |
| 7–9 | Sello y compuerta | Activar una marca alejada sin cerrar el acceso a la puerta; después combinar con una y dos patrullas |
| 10–12 | Teleporter A → B | Terminar un sector antes de viajar; después agregar compuerta y patrullas a ambos lados del salto |
| 13–14 | Piso negro fijo | Elegir rutas alrededor de huecos y después resolver dos sectores con una patrulla |
| 15–16 | Todas las reglas | Dos sectores con 41 y 46 casillas; sello, compuerta, viaje de ida, huecos y dos o tres Sombras |

Al presentar una regla nueva bajo temporalmente la cantidad de combinaciones. Después vuelvo a exigirla en una sala mayor. Una introducción breve y un cierre exigente cumplen funciones distintas dentro de la progresión.

## Decisiones que importan

- Un desvío puede dejar casillas sin alcanzar, aunque todavía haya movimientos disponibles.
- Despejar una Sombra no pinta su piso; el recorrido todavía tiene que llegar allí.
- Abrir una puerta no garantiza que siga siendo accesible después del recorrido.
- Viajar temprano puede dejar piso pendiente en la sala de entrada. B también inicia un puzzle.
- Los huecos alteran la forma de las rutas y se combinan con el salto en el cierre.

## Comprobación y próximos ajustes

El verificador encuentra una solución de cada sala y la reproduce en el motor oficial. También revisa alternativas de movimiento a lo largo del recorrido encontrado: las salas finales tienen decisiones que impiden completar el tablero y requieren deshacer o reiniciar.

Esto comprueba que los desafíos son resolubles y que existen errores de recorrido. Para ajustar su dificultad percibida queda observar partidas: dónde hace falta una explicación, qué pistas se entienden y cuánto cambia la experiencia entre las últimas salas.

Los comentarios y ajustes de esta versión están registrados en el documento de feedback. El código completo, los cambios y la versión anterior se conservan en el Markdown del juego.
