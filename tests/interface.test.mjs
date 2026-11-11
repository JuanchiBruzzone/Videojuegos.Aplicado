import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { engine } from './engine-helper.mjs';
import { stages } from '../web/data/stages.js';
import { createAudio, transitionSound } from '../web/audio.js';
import { markdown } from '../web/markdown.js';

// Ejecuta los eventos de la interfaz y el motor real sin depender de un navegador.
async function interfaceAt(levelIndex){
 const nodes=new Map(),listeners=new Map(),storage=new Map();
 let document;
 function node(id){
  if(nodes.has(id))return nodes.get(id);
  const handlers=new Map();
  const element={id,hidden:false,disabled:false,open:false,dataset:{},tagName:'DIV',textContent:'',innerHTML:'',
   classList:{toggle(){}},setAttribute(name,value){this[name]=value;},
   querySelectorAll(){return [];},getContext(){return {};},getBoundingClientRect(){return {width:0,height:0};},
   focus(){document.activeElement=this;},addEventListener(name,fn){handlers.set(name,fn);},
   showModal(){this.open=true;},close(){if(this.open){this.open=false;handlers.get('close')?.();}},
   click(){this.onclick?.();}};
  nodes.set(id,element);return element;
 }
 document={documentElement:{dataset:{appearance:'light'}},getElementById:node,
  querySelector:node,querySelectorAll(){return [];}};
 const game=engine();
 const context={document,stages,markdown,createAudio,transitionSound,PuzzleLab:game,console,
  location:{hash:`#prototipado/11-progresion/juego/${levelIndex}`},
  localStorage:{getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)},
  matchMedia:()=>({matches:false,addEventListener(){}}),
  requestAnimationFrame(){},ResizeObserver:class{observe(){}},
  fetch:async url=>{
   const text=readFileSync(new URL(`../web/${url.replace(/^\.\//,'').split('?')[0]}`,import.meta.url),'utf8');
   return {ok:true,text:async()=>text,json:async()=>JSON.parse(text)};
  }};
 context.window={addEventListener:(name,fn)=>listeners.set(name,fn),scrollTo(){}};
 vm.runInNewContext(readFileSync(new URL('../web/app.js',import.meta.url),'utf8').replace(/^import .*;\n/gm,''),context);
 await new Promise(resolve=>setImmediate(resolve));
 const key=value=>listeners.get('keydown')({key:value,target:node('board'),preventDefault(){},repeat:false});
 return {node,game,key,document,context,listeners,storage};
}

test('la pista bloquea los pasos; Enter la cierra y devuelve el foco al tablero',async()=>{
 const ui=await interfaceAt(0),before=ui.game.snapshot().objects.join(',');
 assert(ui.node('intro-screen').open);
 assert(ui.node('intro-text').textContent.includes('Cada paso'));
 ui.key('ArrowRight');assert.equal(ui.game.snapshot().objects.join(','),before);
 ui.key('Enter');assert(!ui.node('intro-screen').open);
 assert.equal(ui.document.activeElement.id,'board');
 assert.equal(ui.game.snapshot().objects.join(','),before);
 ui.key('ArrowRight');assert.notEqual(ui.game.snapshot().objects.join(','),before);
 ui.node('restart').click();assert(!ui.node('intro-screen').open);
 ui.node('hint-toggle').click();assert(ui.node('intro-screen').open);
});

test('Espacio cierra la presentación de Pulso sin dispararlo y la siguiente pulsación funciona',async()=>{
 const ui=await interfaceAt(3),before=ui.game.snapshot().objects.join(',');
 assert(ui.node('intro-screen').open);
 ui.key(' ');assert(!ui.node('intro-screen').open);
 assert.equal(ui.game.snapshot().objects.join(','),before);
 ui.key(' ');assert.notEqual(ui.game.snapshot().objects.join(','),before);
 assert.equal(ui.game.snapshot().cells.filter(c=>c.names.includes('shadoweast')).length,0);
});

test('cada presentación aparece al llegar desde el nivel previo y conserva sus pistas al recargar',async()=>{
 for(const index of [3,6,9,12]){
  const ui=await interfaceAt(index-1);
  const result=JSON.parse(readFileSync(new URL('../web/data/verification.json',import.meta.url),'utf8')).results.find(r=>r.id==='11-progresion'&&r.level===index-1);
  ui.key('Enter');
  for(const d of result.inputs)ui.key(['ArrowUp','ArrowLeft','ArrowDown','ArrowRight','x'][d]);
  assert(ui.game.snapshot().won);assert(!ui.node('next-level').hidden);
  ui.node('next-level').click();ui.listeners.get('hashchange')();
  await new Promise(resolve=>setImmediate(resolve));
  assert(ui.node('intro-screen').open);
  assert.equal(ui.node('intro-title').textContent,stages.at(-1).levels[index]);
 }
});
