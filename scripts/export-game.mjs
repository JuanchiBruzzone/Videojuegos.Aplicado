import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { campaign, GAME_VERSION } from '../web/data/campaign.js';

const code=await readFile('web/prototipos/11-progresion.puzzlescript','utf8');
const verification=JSON.parse(await readFile('web/data/verification.json','utf8'));
if(verification.version!==GAME_VERSION)throw new Error('Primero verificá los niveles de esta versión.');
const results=verification.results.filter(r=>r.id==='11-progresion');
if(results.length!==campaign.length||results.some(r=>!r.verified))throw new Error('Falta verificar la campaña completa.');
const [changes,previous]=await Promise.all([
 readFile('docs/cambios.md','utf8'),readFile('docs/versiones/pasos-de-luz-v1.0.0.md','utf8'),
]);
const table=campaign.map((level,i)=>{
 const r=results.find(r=>r.level===i);
 return `| ${i+1} | ${level.title} | ${r.tiles} | ${r.shadows} | ${level.focus} |`;
}).join('\n');
const current=`# Pasos de Luz — Código del juego v${GAME_VERSION}

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Cómo usar el código

Copiá solamente el bloque PuzzleScript completo en el editor de PuzzleScript. Incluye las cinco pantallas de pistas y las 16 salas. En la web se ejecuta este mismo programa con el motor oficial.

Flechas o WASD: movimiento. X o Espacio: Pulso. Z: deshacer. R: reiniciar. En las pantallas de pista, Enter, Espacio o el botón permiten continuar.

Objetivo: iluminar todo el piso transitable. La luz no se puede volver a pisar. Pulso disipa todas las Sombras ortogonales vecinas sin mover al jugador ni pintar. El sello abre la compuerta. El viaje A → B pinta ambos extremos y requiere una salida libre y oscura; de lo contrario se cancela el turno completo. El piso negro no se pisa y no cuenta para ganar.

## Progresión

| Nivel | Nombre | Casillas | Sombras | Objetivo de diseño |
| --- | --- | --- | --- | --- |
${table}

La dificultad aumenta dentro de cada bloque. Presentar una regla nueva reduce temporalmente la carga de combinaciones; las salas siguientes la exigen junto a las anteriores. El cierre combina las cinco reglas en dos sectores.

## Comprobaciones

Se encontraron y reprodujeron soluciones para las 16 salas y los otros 15 casos de prototipado. Las pistas, el bloqueo de controles mientras están abiertas, su cierre y el avance de nivel cuentan con pruebas automáticas de interfaz. Las métricas de rutas no equivalen a una medición de dificultad percibida.

## Código completo v${GAME_VERSION}

\`\`\`puzzlescript
${code}\`\`\`
`;
await mkdir('docs/versiones',{recursive:true});
await writeFile(`docs/versiones/pasos-de-luz-v${GAME_VERSION}.md`,current);
await writeFile('docs/pasos-de-luz-codigo.md',current+'\n'+changes.replace(/^# /,'## ')+'\n## Código de versiones anteriores\n\n'+previous.replace(/^# /,'### '));
console.log(`Markdown actualizado: v${GAME_VERSION}, campaña y código de v1.0.0 conservado.`);
