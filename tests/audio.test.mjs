import test from 'node:test';
import assert from 'node:assert/strict';
import {engine,source,at} from './engine-helper.mjs';

test('los efectos están en PuzzleScript y se disparan por sus reglas',()=>{
 const e=engine(),code=source('11-progresion');
 let s=e.load(code,3);assert(s.sounds.includes(153003));
 s=e.input(4);assert(s.sounds.includes(573003));assert.equal(at(s,'shadoweast').length,0);
 s=e.undo();assert(s.sounds.includes(273006));assert.equal(at(s,'shadoweast').length,1);
 s=e.restart();assert.deepEqual(Array.from(s.sounds),[373006]);
 s=e.input(0);assert(s.sounds.includes(473006));
});

test('compuerta, salto y victoria suenan desde el programa exportable',()=>{
 const e=engine();e.load(source('08-compuertas'));let s=e.input(3);assert(s.sounds.includes(773000));
 e.load(source('09-teleporter'));e.input(3);s=e.input(3);assert(s.sounds.includes(673005));
 e.input(3);s=e.input(3);assert(s.won);assert(s.sounds.includes(563003));
});
