import test from 'node:test';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { engine, source, at } from './engine-helper.mjs';
const ids=['01-luz','02-victoria','03-recorrido','04-encierro','05-sombra','06-contexto','07-feedback'];
const path=[3,3,2,1,1,2,3,3];
for(const id of ids) test(`${id}: compila en el motor oficial`,()=>assert.deepEqual(Array.from(engine().load(source(id)).errors),[]));
test('late ilumina la casilla de llegada y conserva Background en todo el tablero',()=>{
 const e=engine();e.load(source('01-luz'));const s=e.input(3);
 assert.equal(at(s,'dark').length,7);
 assert(at(s,'player')[0].names.includes('light'));
 assert.equal(at(s,'background').length,s.width*s.height);
});
test('el primer experimento permite regresar; el tercero bloquea ese regreso',()=>{
 for(const [id,x] of [['01-luz',1],['03-recorrido',2]]){
  const e=engine();e.load(source(id));e.input(3);assert.equal(at(e.input(1),'player')[0].x,x);
 }
});
test('la victoria ocurre al iluminar todo, sin exigir una salida',()=>{
 const e=engine();e.load(source('02-victoria'));for(const d of path)e.input(d);
 const s=e.snapshot();assert.equal(at(s,'dark').length,0);assert(s.won);
});
test('un recorrido puede encerrar al jugador y se recupera deshaciendo o reiniciando',()=>{
 const e=engine();e.load(source('04-encierro'));
 for(const d of [3,2,3,0])e.input(d);
 const s=e.snapshot();assert(at(s,'player')[0].names.includes('trapped'));assert.equal(at(s,'dark').length,4);assert(!s.won);
 assert(!at(e.undo(),'player')[0].names.includes('trapped'));
 e.restart();assert.equal(at(e.snapshot(),'dark').length,8);
 e.input(3);e.undo();assert.equal(at(e.snapshot(),'player')[0].x,1);
});
test('feedback: entrar en la Sombra no ilumina su casilla; Pulso la disipa y permite ganar',()=>{
 const e=engine();e.load(source('07-feedback'));
 assert.equal(at(e.input(3),'dark').length,1);
 let s=e.input(4);assert.equal(at(s,'shadoweast').length+at(s,'shadowwest').length,0);
 assert.equal(at(s,'dark').length,1);assert(!s.won);
 s=e.input(3);assert.equal(at(s,'dark').length,0);assert(s.won);
});
test('el Pulso no elimina sombras lejanas y no ilumina casillas a distancia',()=>{
 const e=engine();e.load(source('05-sombra'));const before=e.snapshot();const s=e.input(4);
 assert.equal(at(s,'shadoweast').length,1);assert.deepEqual(s.objects,before.objects);
});
test('la Sombra se mueve por oscuridad; golpear una pared no le regala un turno',()=>{
 const e=engine();e.load(source('05-sombra'));const before=e.snapshot();assert.deepEqual(e.input(0).objects,before.objects);
 const s=e.input(3);assert.equal(at(s,'shadoweast')[0].x,4);
 for(const c of s.cells.filter(c=>c.names.some(n=>n.startsWith('shadow'))))assert(c.names.includes('dark'));
});
test('en el pasillo, la Sombra no provoca una colisión simultánea que impida acercarse',()=>{
 const e=engine();e.load(source('05-sombra'));for(const d of [3,3,3,4,3])e.input(d);assert(e.snapshot().won);
});
test('compuerta: bloquea antes del sello y abrirla no ilumina su piso',()=>{
 const e=engine();const code=source('08-compuertas').replace(/(LEVELS\n=======\n\n)[\s\S]*/, '$1#####\n#PG.#\n#..K#\n#####\n');
 let s=e.load(code);assert.deepEqual(Array.from(s.errors),[]);
 const before=s.objects;s=e.input(3);assert.deepEqual(s.objects,before);
 for(const d of [2,3])e.input(d);
 s=e.input(3);assert.equal(at(s,'gateclosed').length,0);assert.equal(at(s,'gateopen').length,1);
 assert(at(s,'gateopen')[0].names.includes('dark'));assert(at(s,'rune')[0].names.includes('light'));assert(!s.won);
 s=e.undo();assert.equal(at(s,'gateclosed').length,1);assert(at(s,'rune')[0].names.includes('dark'));
 for(const d of [3,0,1])e.input(d);assert(e.snapshot().won);
 s=e.restart();assert.equal(at(s,'gateclosed').length,1);assert.equal(at(s,'gateopen').length,0);
});
test('sellos y compuertas: todos los casos combinados compilan y admiten victoria',()=>{
 const e=engine();const code=source('08-compuertas');assert.deepEqual(Array.from(e.load(code).errors),[]);
 const solutions=JSON.parse(readFileSync(new URL('../web/data/verification.json',import.meta.url),'utf8')).results.filter(r=>r.id==='08-compuertas');
 assert.equal(solutions.length,2);
 for(const result of solutions){e.load(code,result.level);for(const input of result.inputs)e.input(input);assert(e.snapshot().won);assert.equal(at(e.snapshot(),'dark').length,0);}
});
test('teleporter: pinta A y B, conserva el viaje al deshacer y permite completar ambos sectores',()=>{
 const e=engine();e.load(source('09-teleporter'));e.input(3);const before=e.snapshot();const s=e.input(3);
 assert.deepEqual(Array.from(s.errors),[]);assert.equal(at(s,'player')[0].x,5);
 assert(at(s,'portalin')[0].names.includes('light'));assert(at(s,'portalout')[0].names.includes('light'));
 assert.equal(at(s,'dark').length,2);assert.deepEqual(e.undo().objects,before.objects);
 e.input(3);e.input(3);assert(e.input(3).won);
 assert.equal(at(e.restart(),'player')[0].x,1);
});
test('teleporter: una salida ocupada o pintada cancela el paso y la patrulla',()=>{
 const code=source('09-teleporter');
 for(const [extra,board] of [['','#######\n#PA#BS#\n#######'],['C = PortalOut and Light\n','#######\n#PA#C.#\n#######']]){
  const fixture=code.replace('A = PortalIn and Dark',extra+'A = PortalIn and Dark').replace(/(LEVELS\n=======\n\n)[\s\S]*/,'$1'+board+'\n');
  const e=engine(),s=e.load(fixture);assert.deepEqual(Array.from(s.errors),[]);assert.deepEqual(e.input(3).objects,s.objects);
 }
});
test('el piso negro bloquea el paso y queda fuera de la cuenta de pintura',()=>{
 const e=engine(),s=e.load(source('10-piso-negro'));assert.equal(at(s,'void').length,1);assert.equal(at(s,'dark').length,7);
 e.input(3);const before=e.snapshot();assert.deepEqual(e.input(2).objects,before.objects);assert(!at(e.snapshot(),'void')[0].names.includes('dark'));
});
test('Pulso disipa todas las Sombras vecinas sin pintar sus casillas',()=>{
 const fixture=source('11-progresion').replace(/(LEVELS\n=======\n\n)[\s\S]*/,'$1#####\n#.S.#\n#SP.#\n#####\n');
 const e=engine(),s=e.load(fixture);assert.deepEqual(Array.from(s.errors),[]);assert.deepEqual(e.input(0).objects,s.objects);
 const cleared=e.input(4);assert.equal(at(cleared,'shadoweast').length+at(cleared,'shadowwest').length,0);assert.equal(at(cleared,'dark').length,at(s,'dark').length);
});
test('la progresión tiene 16 salas; introduce reglas y llega a tres Sombras sin perder soluciones',()=>{
 const e=engine(),code=source('11-progresion');assert.equal(e.load(code).levels,16);
 assert.equal(at(e.load(code,0),'shadoweast').length,0);assert.equal(at(e.load(code,3),'shadoweast').length,1);
 assert.equal(at(e.load(code,5),'shadoweast').length,2);assert.equal(at(e.load(code,6),'rune').length,1);
 assert.equal(at(e.load(code,9),'portalin').length,1);assert.equal(at(e.load(code,12),'void').length,1);
 const last=e.load(code,15);assert.equal(at(last,'shadoweast').length+at(last,'shadowwest').length,3);
 const results=JSON.parse(readFileSync(new URL('../web/data/verification.json',import.meta.url),'utf8')).results;
 const campaign=results.filter(r=>r.id==='11-progresion');assert.equal(campaign.length,16);
 for(const result of results.filter(r=>['09-teleporter','10-piso-negro','11-progresion'].includes(r.id))){e.load(source(result.id),result.level);for(const d of result.inputs)e.input(d);assert(e.snapshot().won);assert.equal(at(e.snapshot(),'dark').length,0);}
});
