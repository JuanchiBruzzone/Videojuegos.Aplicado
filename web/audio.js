// Música y efectos originales sintetizados; no descarga archivos ni usa muestras.
export function createAudio({AudioContext, storage} = {}) {
 let context, timer, beat=0, visible=true;
 const musicVoices=new Set();
 const enabled={sound:false,music:false};
 try { Object.assign(enabled,JSON.parse(storage?.getItem('pasos-audio')||'{}')); } catch {}
 const save=()=>{try{storage?.setItem('pasos-audio',JSON.stringify(enabled));}catch{}};
 function unlock(){
  if(!AudioContext)return false;
  try{context??=new AudioContext();if(context.state==='suspended')context.resume().catch(()=>{});return true;}catch{return false;}
 }
 function tone(frequency,delay=0,duration=.18,volume=.04,type='sine',music=false){
  if(!context||context.state!=='running')return;
  const start=context.currentTime+delay,osc=context.createOscillator(),gain=context.createGain();
  osc.type=type;osc.frequency.value=frequency;
  gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(volume,start+.025);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
  osc.connect(gain);gain.connect(context.destination);if(music){musicVoices.add(osc);osc.onended=()=>musicVoices.delete(osc);}osc.start(start);osc.stop(start+duration+.03);
 }
 function phrase(){
  if(!visible||!enabled.music)return;
  const roots=[130.81,110,174.61,146.83],root=roots[beat++%roots.length];
  [1,1.5,2,2.5].forEach((ratio,i)=>tone(root*ratio,i*.72,2.7,.012,'sine',true));
  tone(root/2,0,3.8,.018,'sine',true);
 }
 function syncMusic(){
  clearInterval(timer);timer=undefined;
  for(const voice of musicVoices){try{voice.stop();}catch{}}musicVoices.clear();
  if(visible&&enabled.music&&context){phrase();timer=setInterval(phrase,4000);}
 }
 return {
  enabled,
  available:!!AudioContext,
  unlock(){if((enabled.sound||enabled.music)&&unlock()&&!timer)syncMusic();},
  toggle(kind){
   enabled[kind]=!enabled[kind];
   if(enabled[kind]&&!unlock())enabled[kind]=false;
   save();if(kind==='music')syncMusic();return enabled[kind];
  },
  setVisible(value){visible=value;syncMusic();},
  play(event){
   if(!visible||!enabled.sound||!unlock())return;
   const notes={step:[440],blocked:[146.83],pulse:[523.25,783.99],gate:[329.63,493.88],portal:[392,587.33,880],win:[523.25,659.25,783.99,1046.5],undo:[330,261.63],restart:[261.63,392]};
   (notes[event]||[]).forEach((frequency,i)=>tone(frequency,i*.085,event==='win'?.55:.2,event==='blocked'?.018:.035));
  }
 };
}

export function transitionSound(before,after,direction){
 if(before.objects.join(',')===after.objects.join(','))return 'blocked';
 if(after.won&&!before.won)return 'win';
 if(direction===4)return 'pulse';
 if(before.cells.some(c=>c.names.includes('gateclosed'))&&!after.cells.some(c=>c.names.includes('gateclosed')))return 'gate';
 const player=s=>s.cells.find(c=>c.names.includes('player'));
 const a=player(before),b=player(after);
 if(a&&b&&Math.abs(a.x-b.x)+Math.abs(a.y-b.y)>1)return 'portal';
 return 'step';
}
