// Descarta recorridos que separan piso pendiente del jugador. Las patrullas
// y las compuertas se resuelven con el motor, no con una copia de sus reglas.
export function reachableFloor(snapshot) {
 const key=c=>`${c.x},${c.y}`;
 const player=snapshot.cells.find(c=>c.names.includes('player'));
 const floor=new Map(snapshot.cells.filter(c=>c.names.includes('dark')||c===player).map(c=>[key(c),c]));
 const exit=snapshot.cells.find(c=>c.names.includes('portalout')&&c.names.includes('dark'));
 const seen=new Set([key(player)]),queue=[player];
 for(let i=0;i<queue.length;i++){
  const cell=queue[i],neighbors=[[cell.x,cell.y-1],[cell.x-1,cell.y],[cell.x,cell.y+1],[cell.x+1,cell.y]].map(([x,y])=>floor.get(`${x},${y}`)).filter(Boolean);
  if(cell.names.includes('portalin')&&exit)neighbors.push(exit);
  for(const next of neighbors)if(!seen.has(key(next))){seen.add(key(next));queue.push(next);}
 }
 return seen.size===floor.size;
}

export function solveLevel(engine,first,{limit=100000}={}) {
 const visited=new Set();let expanded=0;
 function visit(snapshot,path){
  if(snapshot.won)return path;
  const key=snapshot.objects.join(',');
  if(visited.has(key)||!reachableFloor(snapshot))return null;
  visited.add(key);expanded++;
  if(expanded>limit)throw new Error(`La búsqueda superó ${limit} estados.`);
  for(const direction of [0,1,2,3,4]){
   engine.restore(snapshot.objects);const next=engine.input(direction);
   if(next.objects.join(',')===key)continue;
   const solution=visit(next,[...path,direction]);
   if(solution)return solution;
  }
  return null;
 }
 const inputs=visit(first,[]);
 return {inputs,states:expanded};
}
