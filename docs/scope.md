## Elementos fundamentales del juego

Pasos de Luz es un puzzle de recorrido hecho en PuzzleScript. El jugador pinta el piso al caminar y completa el nivel cuando no quedan casillas transitables sin iluminar.

La versión prevista tiene **22 niveles**, un personaje, Sombras, sellos con compuertas, un teleporter de entrada y salida por sala y piso negro fijo. Las salas iniciales presentan los elementos por separado y las siguientes los combinan.

## Conjuntos de elementos

| Conjunto | Elementos |
| --- | --- |
| Personaje jugable | Personaje, movimiento en cuatro direcciones y Pulso |
| Enemigos | Sombras con patrulla horizontal; hasta tres por nivel |
| Obstáculos | Piso iluminado, paredes, piso negro fijo y compuertas cerradas |
| Background | Observatorio, piso, sprites, colores, efectos y música ambiental opcional |
| Mecánicas | Pintar, bloquear el regreso, disipar Sombras, activar sellos, abrir compuertas y viajar de A a B |
| Niveles | 22 salas, su orden, las indicaciones de juego y la dificultad |

## Proceso de producción de cada conjunto

| Conjunto | Pasos para terminarlo | Criterio de cierre |
| --- | --- | --- |
| Personaje | Revisar movimiento, Pulso y controles | Teclado y botones responden igual; deshacer recupera la posición |
| Enemigos | Probar patrulla, colisiones y Pulso con una, dos y tres Sombras | No ocupan luz ni obstáculos y se pueden disipar desde una casilla vecina |
| Obstáculos | Revisar las casillas bloqueadas y la relación sello–compuerta | El piso negro no cuenta para ganar; la compuerta abre al activar el sello |
| Background | Unificar sprites y paleta; revisar contraste y efectos breves | Piso pendiente, luz, piso negro y objetos se distinguen sin depender del texto |
| Mecánicas | Comprobar las reglas juntas, los estados del teleporter, la victoria y el reinicio | La partida conserva sus reglas al combinar elementos y al deshacer |
| Niveles | Bocetar recorridos, jugarlos, ordenar la dificultad, probar con otra persona y ajustar | Las 22 salas tienen solución y las reglas se entienden antes de combinarlas |

## Etapas e interacciones

La producción parte de las reglas ya implementadas. Primero reviso sus combinaciones; después trabajo sobre los recorridos y el orden de los niveles. Las pruebas con jugadores guían los ajustes de dificultad. Al final reviso la campaña completa y publico la versión corregida.

- **Personaje y piso:** cada paso pinta una casilla y bloquea el regreso. El piso negro permanece bloqueado y no se incluye en la condición de victoria.
- **Personaje y enemigos:** las Sombras ocupan piso pendiente y avanzan con cada paso válido. Pulso despeja las casillas vecinas sin pintarlas.
- **Sello y compuerta:** pisar el sello abre la puerta. La casilla de la compuerta sigue pendiente hasta recorrerla.
- **Teleporter y recorrido:** entrar en A lleva a B y pinta ambos extremos. La salida debe estar libre y sin iluminar.
- **Recuperación:** deshacer y reiniciar recuperan también las Sombras, la luz y las compuertas.

El diseño de niveles depende de que estas interacciones funcionen. Una corrección de reglas obliga a volver a jugar las salas que las usan.

## Costo en tiempo

El plan original suma **12 horas**: **11 para niveles y pruebas** y **una para ajustes**. Ahora el juego tiene 22 salas y audio. Me falta probar el aprendizaje y hacer los ajustes que salgan de esas partidas. Las horas son estimadas.

| Trabajo | Tiempo |
| --- | --- |
| Revisar recorridos y ordenar las 22 salas | 3 h |
| Jugar variantes y corregir soluciones, atajos y encierros | 5 h |
| Probar el aprendizaje con otra persona y ajustar dificultad e indicaciones | 3 h |
| Ajustes del personaje y controles | 5 min |
| Ajustes de enemigos y Pulso | 10 min |
| Ajustes de obstáculos | 10 min |
| Background, sprites y sonido | 15 min |
| Comprobar estados de las mecánicas | 10 min |
| Revisar e integrar la publicación | 10 min |
| **Total estimado** | **12 h** |

Las pruebas y correcciones de niveles ya están incluidas en esas once horas. Es una estimación para terminar esta versión, no un registro de horas trabajadas.

Yo me ocupo del diseño, código, documentos y audio. Uso PuzzleScript, JavaScript, GitHub Pages y Drive. No tengo previsto comprar recursos ni servicios para esta versión. Me falta probarla con otras personas y ajustar lo necesario.
