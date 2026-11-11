# Pasos de Luz — Código del juego v1.2.1

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Cómo usar el código

Copiá solamente el bloque PuzzleScript completo en el editor de PuzzleScript. Incluye las cinco pantallas de pistas y las 22 salas. En la web se ejecuta este mismo programa con el motor oficial.

Flechas o WASD: movimiento. X o Espacio: Pulso. Z: deshacer. R: reiniciar. En las pantallas de pista, Enter, Espacio o el botón permiten continuar. Los sonidos están incluidos en SOUNDS y en las reglas: pasos, Pulso, compuerta, salto, deshacer, reinicio y victoria. Al comenzar y completar una sala se oyen señales tonales breves del motor. El programa no usa archivos de audio externos ni música de fondo.

Objetivo: iluminar todo el piso transitable. La luz no se puede volver a pisar. Pulso disipa todas las Sombras ortogonales vecinas sin mover al jugador ni pintar. El sello abre la compuerta. El viaje A → B pinta ambos extremos y requiere una salida libre y oscura; de lo contrario se cancela el turno completo. El piso negro no se pisa y no cuenta para ganar.

## Progresión

| Nivel | Nombre | Casillas | Sombras | Objetivo de diseño |
| --- | --- | --- | --- | --- |
| 1 | La primera luz | 5 | 0 | Pintar un recorrido breve. |
| 2 | El camino doblado | 5 | 0 | Reconocer el regreso bloqueado y corregir. |
| 3 | Una elección pendiente | 8 | 0 | Elegir el orden en una sala con bifurcaciones. |
| 4 | Algo entre las estrellas | 5 | 1 | Usar Pulso antes de avanzar, en un pasillo sin diagonales. |
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
| 17 | La órbita quebrada | 56 | 3 | Conservar acceso al sello y recorrer los dos lados de la compuerta. |
| 18 | El sello del sur | 56 | 3 | Resolver un sector irregular antes de viajar, sin aislar la puerta. |
| 19 | Ecos del vacío | 56 | 3 | Ordenar rodeos alrededor de paredes y piso negro en dos sectores. |
| 20 | La tercera vigilia | 56 | 3 | Elegir el momento de Pulso para tres patrullas en un recorrido extenso. |
| 21 | Entre dos cielos | 56 | 3 | Preparar la salida de A y el recorrido que comienza en B. |
| 22 | La constelación imposible | 56 | 3 | Integrar las cinco reglas en una sala avanzada con bifurcaciones. |

La dificultad aumenta dentro de cada bloque. Presentar una regla nueva reduce temporalmente la carga de combinaciones; las salas siguientes la exigen junto a las anteriores. El tramo avanzado agrega seis salas que combinan las cinco reglas en dos sectores.

## Comprobaciones

Se encontraron y reprodujeron soluciones para las 22 salas y los otros 15 casos de prototipado. Las pistas, el bloqueo de controles mientras están abiertas, su cierre y el avance de nivel cuentan con pruebas automáticas de interfaz. Las métricas de rutas no equivalen a una medición de dificultad percibida.

## Código completo v1.2.1

```puzzlescript
title Pasos de Luz
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
#1c2940 #33425e #718aac
11111
10001
10201
10001
11111

Light
#f4c974 #72572f #fff0ba
11111
10201
12221
10201
11111

Wall
#131b2b #202c40
11111
10001
10001
10001
11111

Player
#ecf8ff #90dcff #f4c974
..0..
.000.
00102
.1112
1...1

ShadowEast
#a38aff #432b72 #ede3ff
..0..
.010.
01210
01110
1.1.1

ShadowWest
#a38aff #432b72 #ede3ff
..0..
.010.
01210
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

( Sonidos del juego: funcionan al copiar este programa en PuzzleScript. )
Player Move 173007
Cancel 473006
Undo 273006
Restart 373006
StartLevel 153003
EndLevel 563003
EndGame 653000
ShowMessage 873006
CloseMessage 973006
Sfx0 573003
Sfx1 673005
Sfx2 773000

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
[ action Player | Shade ] -> [ action Player Pulse | ] sfx0
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
late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ] sfx2
late [ Player PortalIn ] [ PortalOut Light ] -> cancel
late [ Player PortalIn ] [ PortalOut Shade ] -> cancel
late [ Player PortalIn ] [ PortalOut Dark no Shade ] -> [ PortalIn ] [ Player PortalOut Dark ] sfx1
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

message La Sombra ocupa una casilla que todavía necesita luz. Desde una casilla de al lado, usá X, Espacio o el botón Pulso para disiparla. Pulso no te mueve ni pinta: después entrá en su casilla.

#######
#PS...#
#######

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

#############
#P....#....B#
#.K...#.W...#
#_..G.#.._..#
#..#..#..S..#
#...S.#...#.#
#A....#.....#
#############

#############
#P....#.W..B#
#.....#...#.#
#.._..#.....#
#.S...#.....#
#G.K..#.....#
#A._..#..S.##
#############

#############
#P....#..._B#
#..#..#..._.#
#..#K.#....W#
#.....#.....#
#.....#.S...#
#A..GS#.....#
#############

#############
#P.S..#....B#
#.....#.._..#
#..K#.#.....#
#._...#W..S.#
#..G..#.....#
#A....#...#.#
#############

#############
#P....#....B#
#....S#._...#
#..K..#.#...#
#.....#....##
#...G.#..S._#
#A....#....W#
#############

#############
#PS.K.#....B#
#..#..#.W#..#
#.G...#.....#
#.....#.....#
#.....#.....#
#A_...#._..S#
#############
```
