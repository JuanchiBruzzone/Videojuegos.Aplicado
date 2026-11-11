// Fuente única de niveles, pistas y objetivos de diseño.
export const GAME_VERSION = '1.2.1';
export const campaign = [
  {
    "title": "La primera luz",
    "hint": "Flechas o WASD para avanzar. Mirá qué queda detrás.",
    "intro": "Cada paso despierta una estrella. La luz que dejás atrás guarda memoria: elegí qué querés alcanzar antes de avanzar.",
    "focus": "Pintar un recorrido breve.",
    "board": "#######\n#P....#\n#######"
  },
  {
    "title": "El camino doblado",
    "hint": "Z deshace y R reinicia. Podés corregir mientras pensás el recorrido.",
    "intro": "",
    "focus": "Reconocer el regreso bloqueado y corregir.",
    "board": "#####\n#P..#\n###.#\n###.#\n#####"
  },
  {
    "title": "Una elección pendiente",
    "hint": "Un desvío corto puede dejar mucho por hacer.",
    "intro": "",
    "focus": "Elegir el orden en una sala con bifurcaciones.",
    "board": "#####\n#P..#\n#...#\n##..#\n#####"
  },
  {
    "title": "Algo entre las estrellas",
    "hint": "Usá X, Espacio o Pulso junto a la Sombra. Después entrá en la casilla que despejaste.",
    "intro": "La Sombra ocupa una casilla que todavía necesita luz. Desde una casilla de al lado, usá X, Espacio o el botón Pulso para disiparla. Pulso no te mueve ni pinta: después entrá en su casilla.",
    "focus": "Usar Pulso antes de avanzar, en un pasillo sin diagonales.",
    "board": "#######\n#PS...#\n#######"
  },
  {
    "title": "La patrulla",
    "hint": "El camino también cambia para quien te espera.",
    "intro": "",
    "focus": "Leer el desplazamiento de una patrulla.",
    "board": "######\n#P..##\n#S...#\n##...#\n#....#\n######"
  },
  {
    "title": "Dos ritmos",
    "hint": "Dos posiciones, un mismo recorrido.",
    "intro": "",
    "focus": "Gestionar dos patrullas y conservar el acceso al piso.",
    "board": "#######\n#..WSP#\n#.....#\n#.#...#\n#.#...#\n#######"
  },
  {
    "title": "El sello distante",
    "hint": "Lo que abre un camino no siempre está junto a él.",
    "intro": "Hay marcas que se responden a la distancia. Tal vez el camino que parece cerrado esté esperando algo de otra parte de la sala.",
    "focus": "Activar un sello alejado sin aislar la compuerta.",
    "board": "######\n#P..K#\n#..G.#\n#.#..#\n######"
  },
  {
    "title": "Abrir sin encerrarse",
    "hint": "Una puerta abierta todavía puede quedar lejos.",
    "intro": "",
    "focus": "Combinar recorrido, apertura y una patrulla.",
    "board": "######\n#.#SP#\n#....#\n#G..K#\n#...##\n######"
  },
  {
    "title": "La sala dividida",
    "hint": "Revisá qué parte del tablero estás dejando atrás.",
    "intro": "",
    "focus": "Planificar una sala mayor con dos patrullas y compuerta.",
    "board": "#######\n#P....#\n#S..G.#\n#...#.#\n#.WK..#\n#..#.##\n#######"
  },
  {
    "title": "Un viaje de ida",
    "hint": "Antes de cruzar, mirá lo que todavía está a oscuras.",
    "intro": "Dos anillos, una sola dirección. Antes de dejar una constelación, preguntate qué luz seguiría faltando si ya no pudieras volver.",
    "focus": "Terminar la sala de entrada antes de usar A; recorrer una segunda sala.",
    "board": "#########\n#P..##.B#\n#...#...#\n##A.#...#\n#########"
  },
  {
    "title": "Antes de partir",
    "hint": "Abrir el paso y partir son decisiones distintas.",
    "intro": "",
    "focus": "Ordenar sello, compuerta y salida de un sector.",
    "board": "###########\n#P.K##...B#\n#....#....#\n##...#..#.#\n#A.G.######\n###########"
  },
  {
    "title": "Al otro lado",
    "hint": "Pensá también en el primer paso después del salto.",
    "intro": "",
    "focus": "Resolver patrullas a ambos lados del salto.",
    "board": "############\n#P....#.#.B#\n#S..G.#....#\n#..K#.#.W..#\n#...#A#...##\n############"
  },
  {
    "title": "Lo que no despierta",
    "hint": "Buscá el borde del recorrido entre los huecos.",
    "intro": "Hay fragmentos del observatorio que ya no esperan luz. Su silencio también dibuja el camino: mirá qué accesos quedan a cada lado.",
    "focus": "Cubrir una sala irregular alrededor del piso negro.",
    "board": "#######\n#P....#\n#.....#\n#..._.#\n#..._.#\n#######"
  },
  {
    "title": "Dos constelaciones",
    "hint": "No todos los desvíos vuelven al mismo lugar.",
    "intro": "",
    "focus": "Preparar la salida y resolver una patrulla entre huecos.",
    "board": "############\n#P._A#....B#\n#....#...S.#\n#....#._...#\n#_...#._...#\n############"
  },
  {
    "title": "La penúltima órbita",
    "hint": "No dejes una deuda de luz al cambiar de sector.",
    "intro": "",
    "focus": "Combinar las cinco reglas en dos sectores.",
    "board": "#############\n#P...S#.._.B#\n#...G.#.....#\n#..K_.#.....#\n#..._A#...W.#\n#######..._.#\n#############"
  },
  {
    "title": "El último observatorio",
    "hint": "Mirá la sala completa antes de encender la primera casilla.",
    "intro": "",
    "focus": "Resolver dos sectores, tres patrullas y un orden de apertura sin dejar piso aislado.",
    "board": "#############\n#P._..#.._.B#\n#..K..#..W..#\n#.....#.....#\n#....G#S....#\n#A_.S.#..._.#\n#############"
  },
  {
    "title": "La órbita quebrada",
    "hint": "Abrir el paso no decide por qué lado conviene cruzarlo.",
    "intro": "",
    "focus": "Conservar acceso al sello y recorrer los dos lados de la compuerta.",
    "board": "#############\n#P....#....B#\n#.K...#.W...#\n#_..G.#.._..#\n#..#..#..S..#\n#...S.#...#.#\n#A....#.....#\n#############"
},
  {
    "title": "El sello del sur",
    "hint": "Antes del sello, mirá qué acceso necesitás conservar.",
    "intro": "",
    "focus": "Resolver un sector irregular antes de viajar, sin aislar la puerta.",
    "board": "#############\n#P....#.W..B#\n#.....#...#.#\n#.._..#.....#\n#.S...#.....#\n#G.K..#.....#\n#A._..#..S.##\n#############"
},
  {
    "title": "Ecos del vacío",
    "hint": "Los huecos dividen el espacio aunque todavía puedas ver el otro lado.",
    "intro": "",
    "focus": "Ordenar rodeos alrededor de paredes y piso negro en dos sectores.",
    "board": "#############\n#P....#..._B#\n#..#..#..._.#\n#..#K.#....W#\n#.....#.....#\n#.....#.S...#\n#A..GS#.....#\n#############"
},
  {
    "title": "La tercera vigilia",
    "hint": "Tres patrullas pueden exigir tres momentos distintos.",
    "intro": "",
    "focus": "Elegir el momento de Pulso para tres patrullas en un recorrido extenso.",
    "board": "#############\n#P.S..#....B#\n#.....#.._..#\n#..K#.#.....#\n#._...#W..S.#\n#..G..#.....#\n#A....#...#.#\n#############"
},
  {
    "title": "Entre dos cielos",
    "hint": "El último paso de un sector prepara el primero del siguiente.",
    "intro": "",
    "focus": "Preparar la salida de A y el recorrido que comienza en B.",
    "board": "#############\n#P....#....B#\n#....S#._...#\n#..K..#.#...#\n#.....#....##\n#...G.#..S._#\n#A....#....W#\n#############"
},
  {
    "title": "La constelación imposible",
    "hint": "Nada se mueve mientras pensás. Revisá los dos cielos antes de empezar.",
    "intro": "",
    "focus": "Integrar las cinco reglas en una sala avanzada con bifurcaciones.",
    "board": "#############\n#PS.K.#....B#\n#..#..#.W#..#\n#.G...#.....#\n#.....#.....#\n#.....#.....#\n#A_...#._..S#\n#############"
}
];
