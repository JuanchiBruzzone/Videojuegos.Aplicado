# Pasos de Luz — Código del juego v1.1.0

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Cómo usar el código

Copiá solamente el bloque PuzzleScript completo en el editor de PuzzleScript. Incluye las cinco pantallas de pistas y las 16 salas. En la web se ejecuta este mismo programa con el motor oficial.

Flechas o WASD: movimiento. X o Espacio: Pulso. Z: deshacer. R: reiniciar. En las pantallas de pista, Enter, Espacio o el botón permiten continuar.

Objetivo: iluminar todo el piso transitable. La luz no se puede volver a pisar. Pulso disipa todas las Sombras ortogonales vecinas sin mover al jugador ni pintar. El sello abre la compuerta. El viaje A → B pinta ambos extremos y requiere una salida libre y oscura; de lo contrario se cancela el turno completo. El piso negro no se pisa y no cuenta para ganar.

## Progresión

| Nivel | Nombre | Casillas | Sombras | Objetivo de diseño |
| --- | --- | --- | --- | --- |
| 1 | La primera luz | 5 | 0 | Pintar un recorrido breve. |
| 2 | El camino doblado | 5 | 0 | Reconocer el regreso bloqueado y corregir. |
| 3 | Una elección pendiente | 8 | 0 | Elegir el orden en una sala con bifurcaciones. |
| 4 | Algo entre las estrellas | 8 | 1 | Descubrir Pulso en una sala pequeña. |
| 5 | La patrulla | 14 | 1 | Leer el desplazamiento de una patrulla. |
| 6 | Dos ritmos | 18 | 2 | Gestionar dos patrullas y conservar el acceso al piso. |
| 7 | El sello distante | 11 | 0 | Activar un sello alejado sin aislar la compuerta. |
| 8 | Abrir sin encerrarse | 14 | 1 | Combinar recorrido, apertura y una patrulla. |
| 9 | La sala dividida | 22 | 2 | Planificar una sala mayor con dos patrullas y compuerta. |
| 10 | Un viaje de ida | 16 | 0 | Terminar la sala de entrada antes de usar A; recorrer una segunda sala. |
| 11 | Antes de partir | 25 | 0 | Ordenar sello, compuerta y salida de un sector. |
| 12 | Al otro lado | 32 | 2 | Resolver patrullas a ambos lados del salto. |
| 13 | Lo que no despierta | 18 | 0 | Cubrir una sala irregular alrededor del piso negro. |
| 14 | Dos constelaciones | 32 | 1 | Preparar la salida y resolver una patrulla entre huecos. |
| 15 | La penúltima órbita | 41 | 2 | Combinar las cinco reglas en dos sectores. |
| 16 | El último observatorio | 46 | 3 | Resolver dos sectores, tres patrullas y un orden de apertura sin dejar piso aislado. |

La dificultad aumenta dentro de cada bloque. Presentar una regla nueva reduce temporalmente la carga de combinaciones; las salas siguientes la exigen junto a las anteriores. El cierre combina las cinco reglas en dos sectores.

## Comprobaciones

Se encontraron y reprodujeron soluciones para las 16 salas y los otros 15 casos de prototipado. Las pistas, el bloqueo de controles mientras están abiertas, su cierre y el avance de nivel cuentan con pruebas automáticas de interfaz. Las métricas de rutas no equivalen a una medición de dificultad percibida.

## Código completo v1.1.0

```puzzlescript
title Pasos de Luz - Recorrido de niveles
author Juan Ignacio Bruzzone
homepage github.com/JuanchiBruzzone/Videojuegos.Aplicado
background_color #090d18
text_color #f4dea3

========
OBJECTS
========

Background
#090d18

Dark
#1c2940 #33425e
11111
10001
10001
10001
11111

Light
#f4c974 #72572f
11111
10001
10001
10001
11111

Wall
#131b2b

Player
#ecf8ff #90dcff
..0..
.000.
00100
.111.
1...1

ShadowEast
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1

ShadowWest
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1

Trail
transparent

Pulse
transparent

Trapped
transparent

GateClosed
#e8b998
00000
0.0.0
0.0.0
0.0.0
00000

GateOpen
#9ce7d1
00000
0...0
0...0
0...0
00000

Rune
#9ce7d1
..0..
.0.0.
0...0
.0.0.
..0..

PortalIn
#72dce8
.000.
0...0
0.000
0...0
.000.

PortalOut
#e2b7ff
.000.
0...0
000.0
0...0
.000.

Void
#020305 #10151d
11111
10001
10001
10001
11111

=======
LEGEND
=======

. = Dark
_ = Void
A = PortalIn and Dark
B = PortalOut and Dark
# = Wall
P = Player and Light
S = ShadowEast and Dark
W = ShadowWest and Dark
Shade = ShadowEast or ShadowWest
K = Rune and Dark
G = GateClosed and Dark
Barrier = Wall or Light or GateClosed or Void

=======
SOUNDS
=======

================
COLLISIONLAYERS
================

Background
Dark, Light
Player, Wall, ShadowEast, ShadowWest, GateClosed, Void
GateOpen
Rune
PortalIn, PortalOut
Trail
Pulse
Trapped

======
RULES
======
[ action Player | Shade ] -> [ action Player Pulse | ]
[ action Player ] -> [ Player ]
[ moving Player ] -> [ moving Player Trail ]
[ > Player | Light ] -> [ Player | Light ]
[ > Player | GateClosed ] -> [ Player | GateClosed ]
[ > Player | Void ] -> [ Player | Void ]
[ > Player | Shade ] -> [ Player | Shade ]
[ moving Player ] [ ShadowEast ] -> [ moving Player ] [ right ShadowEast ]
[ moving Player ] [ ShadowWest ] -> [ moving Player ] [ left ShadowWest ]
right [ right ShadowEast | Barrier ] -> [ left ShadowWest | Barrier ]
left [ left ShadowWest | Barrier ] -> [ right ShadowEast | Barrier ]
[ > Shade | Barrier ] -> [ Shade | Barrier ]
[ > Player | | < Shade ] -> [ > Player | | Shade ]
late [ Player Trail ] -> cancel
late [ Trail ] -> [ ]
late [ Pulse ] -> [ ]
late [ Player Dark ] -> [ Player Light ]
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]
late [ Player PortalIn ] [ PortalOut Light ] -> cancel
late [ Player PortalIn ] [ PortalOut Shade ] -> cancel
late [ Player PortalIn ] [ PortalOut Dark no Shade ] -> [ PortalIn ] [ Player PortalOut Dark ]
late [ Player Dark ] -> [ Player Light ]
late [ Player ] -> [ Player Trapped ]
late [ Player | Dark no GateClosed ] -> [ Player no Trapped | Dark no GateClosed ]

==============
WINCONDITIONS
==============

no Dark

=======
LEVELS
=======

message Cada paso despierta una estrella. La luz que dejás atrás guarda memoria: elegí qué querés alcanzar antes de avanzar.

#######
#P....#
#######

#####
#P..#
###.#
###.#
#####

#####
#P..#
#...#
##..#
#####

message Entre las estrellas se mueve algo que no responde a tus pasos de la misma manera. A veces, quedarse cerca y hacer un pulso dice más que avanzar.

#####
#.SP#
#...#
#..##
#####

######
#P..##
#S...#
##...#
#....#
######

#######
#..WSP#
#.....#
#.#...#
#.#...#
#######

message Hay marcas que se responden a la distancia. Tal vez el camino que parece cerrado esté esperando algo de otra parte de la sala.

######
#P..K#
#..G.#
#.#..#
######

######
#.#SP#
#....#
#G..K#
#...##
######

#######
#P....#
#S..G.#
#...#.#
#.WK..#
#..#.##
#######

message Dos anillos, una sola dirección. Antes de dejar una constelación, preguntate qué luz seguiría faltando si ya no pudieras volver.

#########
#P..##.B#
#...#...#
##A.#...#
#########

###########
#P.K##...B#
#....#....#
##...#..#.#
#A.G.######
###########

############
#P....#.#.B#
#S..G.#....#
#..K#.#.W..#
#...#A#...##
############

message Hay fragmentos del observatorio que ya no esperan luz. Su silencio también dibuja el camino: mirá qué accesos quedan a cada lado.

#######
#P....#
#.....#
#..._.#
#..._.#
#######

############
#P._A#....B#
#....#...S.#
#....#._...#
#_...#._...#
############

#############
#P...S#.._.B#
#...G.#.....#
#..K_.#.....#
#..._A#...W.#
#######..._.#
#############

#############
#P._..#.._.B#
#..K..#..W..#
#.....#.....#
#....G#S....#
#A_.S.#..._.#
#############
```

## Pasos de Luz — Versiones y cambios

## v1.1.0 — Recorridos y pistas

- Se rediseñan las 16 salas: dos recorridos iniciales breves, introducciones de mecánicas y desafíos que combinan reglas. El cierre tiene 46 casillas y tres Sombras.
- Las compuertas requieren conservar accesos; el salto A → B obliga a terminar la sala de entrada; el piso negro corta rutas entre sectores.
- Se agregan cinco pantallas de pistas en español antes de pintar, Pulso, sello, teleporter y piso negro. Usan `message` en la fuente de PuzzleScript y una pantalla modal en la web.
- Enter, Espacio y el botón permiten continuar. Cerrar la pista no mueve al jugador ni dispara Pulso. Se puede volver a leerla.
- Los niveles, pistas y objetivos de diseño se mantienen juntos en `web/data/campaign.js`.
- El adaptador distingue mensajes de salas jugables; se conservan la selección de nivel, el avance, deshacer y reiniciar.
- Se separa el progreso guardado de esta versión para que las salas nuevas se puedan completar de nuevo.
- Se conserva el código completo de v1.0.0 y se agrega una exportación Markdown con ambas versiones.
- Se registran los comentarios y ajustes F01–F08 en la planilla de feedback.

Validación: búsqueda y reproducción de los 31 casos en el motor oficial, pruebas de reglas e interfaz y build del sitio. Las métricas de rutas describen opciones del tablero; el ajuste de dificultad percibida requiere observar partidas.

## v1.0.0 — Versión de partida

Once estudios de prototipado y una campaña de 16 niveles con pintura, Sombra/Pulso, sello/compuerta, teleporter A → B y piso negro. Indicaciones junto al tablero, controles de deshacer y reiniciar, selector de nivel y avance al completar una sala.

Se conserva la fuente completa en `docs/versiones/pasos-de-luz-v1.0.0.md`.

## Código de versiones anteriores

### Pasos de Luz — v1.0.0

Versión de partida: 16 niveles, indicaciones junto al tablero y las cinco mecánicas actuales.

## Código completo

```puzzlescript
title Pasos de Luz - Recorrido de niveles
author Juan Ignacio Bruzzone
homepage github.com/JuanchiBruzzone/Videojuegos.Aplicado
background_color #090d18
text_color #f4dea3

========
OBJECTS
========

Background
#090d18

Dark
#1c2940 #33425e
11111
10001
10001
10001
11111

Light
#f4c974 #72572f
11111
10001
10001
10001
11111

Wall
#131b2b

Player
#ecf8ff #90dcff
..0..
.000.
00100
.111.
1...1

ShadowEast
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1

ShadowWest
#a38aff #432b72
..0..
.010.
01110
01110
1.1.1

Trail
transparent

Pulse
transparent

Trapped
transparent

GateClosed
#e8b998
00000
0.0.0
0.0.0
0.0.0
00000

GateOpen
#9ce7d1
00000
0...0
0...0
0...0
00000

Rune
#9ce7d1
..0..
.0.0.
0...0
.0.0.
..0..

PortalIn
#72dce8
.000.
0...0
0.000
0...0
.000.

PortalOut
#e2b7ff
.000.
0...0
000.0
0...0
.000.

Void
#020305 #10151d
11111
10001
10001
10001
11111

=======
LEGEND
=======

. = Dark
_ = Void
A = PortalIn and Dark
B = PortalOut and Dark
# = Wall
P = Player and Light
S = ShadowEast and Dark
W = ShadowWest and Dark
Shade = ShadowEast or ShadowWest
K = Rune and Dark
G = GateClosed and Dark
Barrier = Wall or Light or GateClosed or Void

=======
SOUNDS
=======

================
COLLISIONLAYERS
================

Background
Dark, Light
Player, Wall, ShadowEast, ShadowWest, GateClosed, Void
GateOpen
Rune
PortalIn, PortalOut
Trail
Pulse
Trapped

======
RULES
======
[ action Player | Shade ] -> [ action Player Pulse | ]
[ action Player ] -> [ Player ]
[ moving Player ] -> [ moving Player Trail ]
[ > Player | Light ] -> [ Player | Light ]
[ > Player | GateClosed ] -> [ Player | GateClosed ]
[ > Player | Void ] -> [ Player | Void ]
[ > Player | Shade ] -> [ Player | Shade ]
[ moving Player ] [ ShadowEast ] -> [ moving Player ] [ right ShadowEast ]
[ moving Player ] [ ShadowWest ] -> [ moving Player ] [ left ShadowWest ]
right [ right ShadowEast | Barrier ] -> [ left ShadowWest | Barrier ]
left [ left ShadowWest | Barrier ] -> [ right ShadowEast | Barrier ]
[ > Shade | Barrier ] -> [ Shade | Barrier ]
[ > Player | | < Shade ] -> [ > Player | | Shade ]
late [ Player Trail ] -> cancel
late [ Trail ] -> [ ]
late [ Pulse ] -> [ ]
late [ Player Dark ] -> [ Player Light ]
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]
late [ Player PortalIn ] [ PortalOut Light ] -> cancel
late [ Player PortalIn ] [ PortalOut Shade ] -> cancel
late [ Player PortalIn ] [ PortalOut Dark no Shade ] -> [ PortalIn ] [ Player PortalOut Dark ]
late [ Player Dark ] -> [ Player Light ]
late [ Player ] -> [ Player Trapped ]
late [ Player | Dark no GateClosed ] -> [ Player no Trapped | Dark no GateClosed ]

==============
WINCONDITIONS
==============

no Dark

=======
LEVELS
=======

#######
#P....#
#######

#####
#P..#
###.#
###.#
#####

#####
#P..#
#...#
#...#
#####

#####
#PS##
#####

#######
#P.S..#
#######

########
#PS.S..#
########

#######
#PKG..#
#######

#####
#P.S#
#..G#
#K..#
#####

######
#P..S#
#...G#
#KS..#
######

#########
#P.A#B..#
#########

##########
#PKGA#B..#
##########

###########
#PKGA#BS.S#
###########

#####
#P..#
#._.#
#...#
#####

#########
#P..#B..#
#A_.#####
#...#####
#########

#########
#PKG#B.S#
#A_.#####
#S..#####
#########

##########
#PKG#BS.S#
#A_.######
#S..######
##########
```
