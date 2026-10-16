import { mkdir, writeFile } from 'node:fs/promises';
const base = `author Juan Ignacio Bruzzone
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

=======
LEGEND
=======

. = Dark
# = Wall
P = Player and Light
S = ShadowEast and Dark
W = ShadowWest and Dark
Shade = ShadowEast or ShadowWest
Barrier = Wall or Light

=======
SOUNDS
=======

================
COLLISIONLAYERS
================

Background
Dark, Light
Player, Wall, ShadowEast, ShadowWest
Trail
Pulse
Trapped

======
RULES
======
`;
const pulse = `[ action Player | Shade ] -> [ Player Pulse | ]
[ action Player ] -> [ Player ]
`;
const block = `[ > Player | Light ] -> [ Player | Light ]
`;
const shadow = `[ > Player | Shade ] -> [ Player | Shade ]
[ moving Player ] [ ShadowEast ] -> [ moving Player ] [ right ShadowEast ]
[ moving Player ] [ ShadowWest ] -> [ moving Player ] [ left ShadowWest ]
right [ right ShadowEast | Barrier ] -> [ left ShadowWest | Barrier ]
left [ left ShadowWest | Barrier ] -> [ right ShadowEast | Barrier ]
[ > Shade | Barrier ] -> [ Shade | Barrier ]
[ > Player | | < Shade ] -> [ > Player | | Shade ]
`;
const trapped = `late [ Player ] -> [ Player Trapped ]
late [ Player | Dark ] -> [ Player no Trapped | Dark ]
`;
const board = `#####
#P..#
#...#
#...#
#####`;
const shadeBoard = `#####
#P.S#
#...#
#...#
#####`;
const finalTile = `#####
#PS##
#####`;
const corridor = `#######
#P.S..#
#######`;
export const specifications = [
 {id:'01-luz',name:'Una casilla cambia',blocked:false,win:false,trap:false,shade:false,boards:[board]},
 {id:'02-victoria',name:'Iluminar para ganar',blocked:false,win:true,trap:false,shade:false,boards:[board]},
 {id:'03-recorrido',name:'El camino no vuelve',blocked:true,win:true,trap:false,shade:false,boards:[board]},
 {id:'04-encierro',name:'Cuando me encierro',blocked:true,win:true,trap:true,shade:false,boards:[board]},
 {id:'05-sombra',name:'La Sombra y el Pulso',blocked:true,win:true,trap:true,shade:true,boards:[corridor,shadeBoard]},
 {id:'06-contexto',name:'Del dungeon al observatorio',blocked:true,win:true,trap:true,shade:true,boards:[shadeBoard]},
 {id:'08-compuertas',name:'Sellos y compuertas',blocked:true,win:true,trap:true,shade:true,gate:true,boards:[`#######\n#PKG..#\n#######`,`#####\n#P.S#\n#..G#\n#K..#\n#####`]},
 {id:'07-feedback',name:'La última casilla',blocked:true,win:true,trap:true,shade:true,boards:[finalTile,corridor,shadeBoard]},
];
await mkdir('web/prototipos',{recursive:true});
for (const s of specifications) {
 let rules = s.shade ? pulse : '[ action Player ] -> [ Player ]\n';
 rules += '[ moving Player ] -> [ moving Player Trail ]\n';
 if (s.blocked) rules += block;
 if (s.gate) rules += '[ > Player | GateClosed ] -> [ Player | GateClosed ]\n';
 if (s.shade) rules += shadow;
 rules += `late [ Player Trail ] -> cancel
late [ Trail ] -> [ ]
late [ Pulse ] -> [ ]
late [ Player Dark ] -> [ Player Light ]
`;
 if(s.gate) rules += 'late [ Player Rune ] [ GateClosed ] -> [ Player Rune ] [ GateOpen ]\n';
 if(s.trap) rules += s.gate?trapped.replaceAll('| Dark ]','| Dark no GateClosed ]'):trapped;
 const source = `title Pasos de Luz - ${s.name}\n`+(s.gate?base.replace('=======\nLEGEND',`GateClosed\n#e8b998\n00000\n0.0.0\n0.0.0\n0.0.0\n00000\n\nGateOpen\n#9ce7d1\n00000\n0...0\n0...0\n0...0\n00000\n\nRune\n#9ce7d1\n..0..\n.0.0.\n0...0\n.0.0.\n..0..\n\n=======\nLEGEND`).replace('Barrier = Wall or Light','K = Rune and Dark\nG = GateClosed and Dark\nBarrier = Wall or Light or GateClosed').replace('Player, Wall, ShadowEast, ShadowWest','Player, Wall, ShadowEast, ShadowWest, GateClosed\nGateOpen\nRune'):base)+rules+`\n==============\nWINCONDITIONS\n==============\n\n${s.win?'no Dark':''}\n\n=======\nLEVELS\n=======\n\n`+s.boards.join('\n\n')+'\n';
 await writeFile(`web/prototipos/${s.id}.puzzlescript`,source);
}
console.log('Ocho prototipos de PuzzleScript generados.');
