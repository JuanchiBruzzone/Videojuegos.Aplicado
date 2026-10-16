import vm from 'node:vm';
import { readFileSync } from 'node:fs';
export function engine() {
 const element=()=>({style:{},innerHTML:'',textContent:'',getContext(){return null;},setAttribute(){},removeAttribute(){}});
 const context=vm.createContext({console,performance,Uint8Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,ArrayBuffer,Math,Date,JSON,Map,Set,document:{URL:'test://pasos',body:{classList:{contains(){return false;}},addEventListener(){},removeEventListener(){}},createElement:element,getElementById(){return null;}},localStorage:{getItem(){return null;},setItem(){},removeItem(){}},setTimeout,clearTimeout});
 context.window=context;
 vm.runInContext(readFileSync(new URL('../web/vendor/puzzlescript.js',import.meta.url),'utf8'),context);
 return context.PuzzleLab;
}
export const source=id=>readFileSync(new URL(`../web/prototipos/${id}.puzzlescript`,import.meta.url),'utf8');
export const at=(s,name)=>s.cells.filter(c=>c.names.includes(name));
