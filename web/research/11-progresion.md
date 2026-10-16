# Aprender jugando

Armé un recorrido de **16 niveles jugables**. La dificultad sube al combinar reglas que ya aparecieron. Cada presentación tiene una indicación breve junto al tablero y una situación donde se ve qué cambia.

| Niveles | Qué aprende el jugador | Cómo lo presento |
| --- | --- | --- |
| 1–3 | Pintar, no volver por la luz y corregir un recorrido | Un pasillo, un giro y una sala con varias opciones. Flechas para moverse; Z y R para probar otra vez |
| 4–6 | Sombra y Pulso | Una Sombra al lado para probar X, una patrulla y después dos Sombras |
| 7–9 | Sello y compuerta | Primero sin enemigos; después con una y dos Sombras |
| 10–12 | Teleporter | Dos sectores conectados por A → B; después compuerta y Sombras en la misma sala |
| 13–14 | Piso negro fijo | Un bloque que hay que rodear; después un recorrido que termina en un teleporter |
| 15–16 | Elegir el orden con todo lo aprendido | Compuerta, teleporter y piso negro, primero con dos Sombras y después con tres |

## Qué tiene que quedar claro

- Pintar una casilla cierra el regreso. Un intento bloqueado no cambia el turno.
- Pulso disipa las Sombras vecinas, pero todavía hay que pintar su piso.
- El sello abre la compuerta; abrirla no pinta la casilla que ocupa.
- A lleva a B en un sentido. Conviene terminar el sector antes de salir.
- El piso negro es un obstáculo permanente, no una casilla pendiente.

## Qué falta probar con jugadores

Los 16 niveles tienen un recorrido encontrado y reproducido en PuzzleScript. Eso comprueba que se pueden completar, pero todavía falta ver si enseñan bien.

Voy a mirar dónde alguien necesita una explicación, si descubre Pulso en su primera aparición y si entiende A → B antes de encontrarlo junto a una Sombra. Si un nivel confunde, cambio su disposición o su indicación antes de aumentar la dificultad.

El mayor trabajo pendiente es ese: jugar, ajustar recorridos y volver a probarlos. El código de las reglas ya está funcionando.
