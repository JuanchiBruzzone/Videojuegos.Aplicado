import test from 'node:test';
import assert from 'node:assert/strict';
import {createAudio,transitionSound} from '../web/audio.js';
import {engine,source} from './engine-helper.mjs';
test('audio opcional: no crea un contexto al abrir y falla sin afectar el juego',()=>{
 let created=0;const saved=new Map();
 const audio=createAudio({AudioContext:class{constructor(){created++;throw Error('No disponible');}},storage:{getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)}});
 assert.equal(created,0);audio.play('win');assert.equal(created,0);
 assert.equal(audio.toggle('sound'),false);assert.equal(created,1);
 const unavailable=createAudio();assert.equal(unavailable.available,false);assert.equal(unavailable.toggle('music'),false);
});
test('sonido distingue un turno cancelado, Pulso y victoria usando el motor real',()=>{
 const e=engine();let before=e.load(source('07-feedback'));let after=e.input(0);
 assert.equal(transitionSound(before,after,0),'blocked');
 before=after;after=e.input(4);assert.equal(transitionSound(before,after,4),'pulse');
 before=after;after=e.input(3);assert.equal(transitionSound(before,after,3),'win');
});
test('sonido y música guardan preferencias separadas y la música se corta al ocultar la pestaña',()=>{
 const voices=[],saved=new Map();let contexts=0;
 class AudioContext{
  constructor(){contexts++;this.state='running';this.currentTime=0;this.destination={};}
  createOscillator(){const v={frequency:{},connect(){},start(){},stop(){this.stops=(this.stops||0)+1;}};voices.push(v);return v;}
  createGain(){return {gain:{setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){}};}
 }
 const storage={getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)};
 const a=createAudio({AudioContext,storage});
 try{
  assert.equal(contexts,0);a.toggle('sound');a.play('step');assert.equal(voices.length,1);
  a.toggle('music');const music=voices.slice(1);assert.equal(music.length,5);
  a.setVisible(false);assert(music.every(v=>v.stops===2));
  a.setVisible(true);assert.equal(voices.length,11);
  a.toggle('music');assert(a.enabled.sound);assert(!a.enabled.music);
  const restored=createAudio({AudioContext,storage});assert(restored.enabled.sound);assert(!restored.enabled.music);assert.equal(contexts,1);
 }finally{a.setVisible(false);}
});
