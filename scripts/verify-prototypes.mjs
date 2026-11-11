import { writeFile, mkdir } from 'node:fs/promises';
import { engine, source, at } from '../tests/engine-helper.mjs';
import { GAME_VERSION } from '../web/data/campaign.js';
import { solveLevel, reachableFloor } from './solve-level.mjs';
const ids=['02-victoria','03-recorrido','04-encierro','05-sombra','06-contexto','07-feedback','08-compuertas','09-teleporter','10-piso-negro','11-progresion'];
const labels=['↑','←','↓','→','Pulso'];
const results=[];
for(const id of ids){
 const e=engine();const count=e.load(source(id)).levels;
 for(let level=0;level<count;level++){
  const first=e.load(source(id),level),{inputs:found,states}=solveLevel(e,first);
  if(!found)throw new Error(`Sin solución verificada: ${id}, nivel ${level}`);
  e.load(source(id),level);let routeChoices=0,immediateTraps=0,losingChoices=0;
  for(const d of found){
   const before=e.snapshot();let choices=0;
   for(const direction of d===4?[]:[0,1,2,3]){
    e.restore(before.objects);const next=e.input(direction);
    if(next.objects.join(',')!==before.objects.join(',')){
     choices++;
     if(!next.won&&!reachableFloor(next))immediateTraps++;
     if(direction!==d&&!solveLevel(e,next).inputs)losingChoices++;
    }
   }
   if(choices>1)routeChoices++;
   e.restore(before.objects);e.input(d);
  }
  if(!e.snapshot().won||at(e.snapshot(),'dark').length)throw new Error('La reproducción de la solución falló.');
  results.push({id,level,inputs:found,solution:found.map(d=>labels[d]).join(' '),states,tiles:at(first,'dark').length+1,shadows:at(first,'shadoweast').length+at(first,'shadowwest').length,routeChoices,immediateTraps,losingChoices,verified:true});
 }
}
await mkdir('web/data',{recursive:true});
await writeFile('web/data/verification.json',JSON.stringify({engine:'PuzzleScript oficial',version:GAME_VERSION,method:'Búsqueda con descarte de piso aislado y reproducción de cada solución en el mismo motor del sitio. Las métricas describen el recorrido encontrado; no miden dificultad percibida por personas.',results},null,2)+'\n');
console.log(`${results.length} niveles con solución encontrada y reproducida.`);
