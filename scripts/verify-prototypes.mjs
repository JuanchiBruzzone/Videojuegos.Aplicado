import { writeFile, mkdir } from 'node:fs/promises';
import { engine, source, at } from '../tests/engine-helper.mjs';
const ids=['02-victoria','03-recorrido','04-encierro','05-sombra','06-contexto','07-feedback'];
const labels=['↑','←','↓','→','Pulso'];
const results=[];
for(const id of ids){
 const e=engine();const count=e.load(source(id)).levels;
 for(let level=0;level<count;level++){
  const first=e.load(source(id),level),queue=[{objects:first.objects,path:[]}],visited=new Set([first.objects.join(',')]);let found=null;
  for(let i=0;i<queue.length&&i<30000&&!found;i++){
   for(const direction of [0,1,2,3,4]){
    e.restore(queue[i].objects);const s=e.input(direction),path=[...queue[i].path,direction];
    if(s.won){found=path;break;}
    const key=s.objects.join(',');if(!visited.has(key)){visited.add(key);queue.push({objects:s.objects,path});}
   }
  }
  if(!found)throw new Error(`Sin solución verificada: ${id}, nivel ${level}`);
  e.load(source(id),level);for(const d of found)e.input(d);
  if(!e.snapshot().won||at(e.snapshot(),'dark').length)throw new Error('La reproducción de la solución falló.');
  results.push({id,level,inputs:found,solution:found.map(d=>labels[d]).join(' '),states:visited.size,verified:true});
 }
}
await mkdir('web/data',{recursive:true});
await writeFile('web/data/verification.json',JSON.stringify({engine:'PuzzleScript oficial',method:'Búsqueda de recorridos y reproducción de cada solución en el mismo motor del sitio.',results},null,2)+'\n');
console.log(`${results.length} niveles con solución encontrada y reproducida.`);
