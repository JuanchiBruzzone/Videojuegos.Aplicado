import {stages} from './data/stages.js';
import {markdown} from './markdown.js';
const $=id=>document.getElementById(id);
let selected=stages.at(-1), view='juego', section='prototipado', levelIndex=0, theme='observatory';
let boardState=null, actions=0, sourceText='', initialShadows=0, sequence=0, verification={results:[]}, completed=new Set();
try{completed=new Set(JSON.parse(localStorage.getItem('pasos-completed')||'[]'));}catch{}
function applyAppearance(value){
 document.documentElement.dataset.appearance=value;
 document.querySelectorAll('button[data-appearance]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.appearance===value)));
 document.querySelector('meta[name="theme-color"]').content=value==='dark'?'#151c1a':'#f7f5ef';
}
const systemAppearance=matchMedia('(prefers-color-scheme: dark)');
applyAppearance(document.documentElement.dataset.appearance||(systemAppearance.matches?'dark':'light'));
document.querySelectorAll('button[data-appearance]').forEach(button=>button.onclick=()=>{
 const value=button.dataset.appearance;applyAppearance(value);try{localStorage.setItem('pasos-appearance',value);}catch{}
});
systemAppearance.addEventListener('change',event=>{try{if(localStorage.getItem('pasos-appearance'))return;}catch{}applyAppearance(event.matches?'dark':'light');});
const canvas=$('board'),ctx=canvas.getContext('2d');
document.querySelector('.skip').onclick=e=>{e.preventDefault();$('content').focus();};
const same=(a,b)=>a.objects.join(',')===b.objects.join(',');
const count=name=>boardState?.cells.filter(c=>c.names.includes(name)).length||0;
function route(){location.hash=[section,selected.id,view,levelIndex].join('/');}
function renderNav(){
 $('stage-nav').innerHTML=stages.map((s,i)=>`<button class="stage-link ${s.id===selected.id?'active':''} ${completed.has(s.id)?'done':''}" data-stage="${s.id}" ${s.id===selected.id?'aria-current="step"':''}><span class="number">${String(i+1).padStart(2,'0')}</span><span><span class="stage-name">${s.title}</span><small>${s.short}</small></span></button>`).join('');
 $('completed-count').textContent=`${completed.size} / ${stages.length}`;
 $('stage-nav').querySelectorAll('button').forEach(button=>button.onclick=()=>{selected=stages.find(s=>s.id===button.dataset.stage);levelIndex=0;route();});
}
function setMode(){
 $('prototype-section').hidden=section!=='prototipado';$('scope-section').hidden=section!=='scope';
 document.querySelector('.sidebar').hidden=section==='scope';document.querySelector('.workspace').classList.toggle('scope-active',section==='scope');
 document.querySelectorAll('[data-section]').forEach(b=>{b.classList.toggle('active',b.dataset.section===section);b.setAttribute('aria-pressed',String(b.dataset.section===section));});
 document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===view);b.setAttribute('aria-pressed',String(b.dataset.view===view));});
 $('research').hidden=view!=='research';$('study-layout').classList.toggle('research-mode',view==='research');
 $('question-card').hidden=view==='research';
 requestAnimationFrame(draw);
}
async function fetchText(url){const r=await fetch(url);if(!r.ok)throw new Error('No pude cargar este prototipo. Probá recargar la página.');return r.text();}
async function loadStage(){
 const ticket=++sequence;
 renderNav();setMode();
 $('eyebrow').textContent=`ESTUDIO ${String(stages.indexOf(selected)+1).padStart(2,'0')} / ${selected.tag}`;
 $('stage-title').textContent=selected.title;$('stage-description').textContent=selected.description;
 $('question-label').textContent=selected.feedback?'LA DEVOLUCIÓN DEL PROFESOR':'LA PREGUNTA';
 $('question-title').textContent=selected.question;
 $('question-explanation').textContent=selected.feedback?'Si la Sombra ocupa el último espacio oscuro, tiene que existir una forma clara de despejarlo y terminar el nivel.':'Esta etapa aísla una duda del diseño. La explicación y el prototipo se pueden ver juntos en Research.';
 $('goal').textContent=selected.goal;
 $('level-select').innerHTML=selected.levels.map((label,i)=>`<option value="${i}">${String(i+1).padStart(2,'0')} · ${label}</option>`).join('');
 $('level-select').value=String(levelIndex);
 $('pulse').hidden=!selected.shadow;$('shadow-legend').hidden=!selected.shadow;
 $('theme-toggle').hidden=!selected.compare;$('gate-legend').hidden=!selected.gate;
 theme=selected.theme;
 document.querySelectorAll('[data-theme]').forEach(b=>b.classList.toggle('active',b.dataset.theme===theme));
 $('solution').hidden=true;$('solution-toggle').setAttribute('aria-expanded','false');
 $('status-title').textContent='Preparando el tablero…';
 boardState=null;
 try{
  const [code,research]=await Promise.all([fetchText(`./prototipos/${selected.id}.puzzlescript`),fetchText(`./research/${selected.research}`)]);
  if(ticket!==sequence)return;
  sourceText=code;$('source-code').textContent=code;$('download-source').href=`./prototipos/${selected.id}.puzzlescript`;
  $('research').innerHTML=markdown(research);
  boardState=PuzzleLab.load(code,levelIndex);initialShadows=count('shadoweast')+count('shadowwest');actions=0;update();
 }catch(error){if(ticket!==sequence)return;$('status-title').textContent=error.message;$('engine-state').textContent='No se pudo cargar la demo';$('board-message').textContent='No pude preparar el tablero. Recargá para volver a intentar.';$('board-message').hidden=false;}
}
function update(){
 if(!boardState)return;
 const dark=count('dark'),lit=count('light'),player=boardState.cells.find(c=>c.names.includes('player'));
 const trapped=!boardState.won&&player?.names.includes('trapped');
 const shadows=count('shadoweast')+count('shadowwest');
 $('pulse').hidden=!initialShadows;$('shadow-legend').hidden=!initialShadows;
 $('status-title').textContent=boardState.won?'Constelación completa':trapped?'Este camino quedó cerrado':initialShadows&&!shadows?'La Sombra se disipó':'El recorrido sigue';
 $('status-count').textContent=`${lit} / ${lit+dark} iluminadas`;
 $('turn-count').textContent=`${actions} ${actions===1?'acción':'acciones'}`;
 $('status-dot').classList.toggle('warn',trapped);
 $('board-message').hidden=!boardState.won&&!trapped;
 $('board-message').classList.toggle('trapped',trapped);
 $('board-message').textContent=boardState.won?'✧ Toda la luz está de vuelta.': 'Todavía falta luz. Podés deshacer o reiniciar.';
 $('pulse').disabled=boardState.won||!shadows;
 $('undo').disabled=boardState.undo===0;
 $('board-world').textContent=(theme==='observatory'?'OBSERVATORIO · CONSTELACIÓN ':'DUNGEON · SALA ')+String(levelIndex+1).padStart(2,'0');
 canvas.setAttribute('aria-label',`Tablero: ${lit} de ${lit+dark} casillas iluminadas. ${shadows?'Hay una Sombra. ':''}${boardState.won?'Nivel completado.':trapped?'El jugador está encerrado.':'Usá flechas para moverte.'}`);
 canvas.dataset.darkRemaining=String(dark);canvas.dataset.won=String(boardState.won);canvas.dataset.player=player?`${player.x},${player.y}`:'';
 $('engine-state').textContent='Motor oficial de PuzzleScript';
 if(boardState.won&&!completed.has(selected.id)){completed.add(selected.id);try{localStorage.setItem('pasos-completed',JSON.stringify([...completed]));}catch{}renderNav();}
 draw();
}
function input(direction){
 if(!boardState||section!=='prototipado'||boardState.won)return;
 const before=boardState;boardState=PuzzleLab.input(direction);if(!same(before,boardState))actions++;update();
}
function draw(){
 const rect=canvas.getBoundingClientRect();if(rect.width<1||!boardState)return;
 const w=rect.width,h=rect.height,dpr=Math.min(devicePixelRatio||1,2);
 canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
 const obs=theme==='observatory';const bg=ctx.createRadialGradient(w*.5,h*.45,10,w*.5,h*.5,w*.65);bg.addColorStop(0,obs?'#19243b':'#292723');bg.addColorStop(1,obs?'#0a101c':'#111619');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
 for(let i=0;i<67;i++){const x=((i*137.31+29)%997)/997*w,y=((i*71.17+19)%541)/541*h;ctx.fillStyle=`rgba(${obs?'158,178,213':'188,167,133'},${i%7===0?.3:.1})`;ctx.beginPath();ctx.arc(x,y,i%11===0?1.1:.55,0,Math.PI*2);ctx.fill();}
 ctx.strokeStyle=obs?'#7289ae0d':'#b69c6c0c';ctx.lineWidth=1;
 for(let x=20;x<w;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}for(let y=20;y<h;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
 const playable=boardState.cells.filter(c=>!c.names.includes('wall'));
 const minX=Math.min(...playable.map(c=>c.x)),maxX=Math.max(...playable.map(c=>c.x)),minY=Math.min(...playable.map(c=>c.y)),maxY=Math.max(...playable.map(c=>c.y));
 const columns=maxX-minX+1,rows=maxY-minY+1;
 const size=Math.min(83,(w-80)/Math.max(columns,2.6),(h-98)/Math.max(rows,2.5));
 const ox=(w-columns*size)/2-minX*size,oy=(h-rows*size)/2-minY*size-6;
 const round=(x,y,width,height,r)=>{ctx.beginPath();ctx.roundRect(x,y,width,height,r);};
 for(const cell of playable){
  const x=ox+cell.x*size+4,y=oy+cell.y*size+4,s=size-8,lit=cell.names.includes('light');
  if(lit){const glow=ctx.createRadialGradient(x+s/2,y+s/2,0,x+s/2,y+s/2,size);glow.addColorStop(0,'#eac57d21');glow.addColorStop(1,'#eac57d00');ctx.fillStyle=glow;ctx.fillRect(x-size/2,y-size/2,size*2,size*2);}
  round(x,y+6,s,s,6);ctx.fillStyle=lit?'#655139':obs?'#111b2c':'#20221f';ctx.fill();
  round(x,y,s,s,6);const tile=ctx.createLinearGradient(x,y,x+s,y+s);tile.addColorStop(0,lit?'#e7c88d':obs?'#293952':'#49483d');tile.addColorStop(1,lit?'#9c8054':obs?'#19273e':'#292e2c');ctx.fillStyle=tile;ctx.fill();ctx.strokeStyle=lit?'#ffe5ad99':obs?'#55668155':'#786e5455';ctx.lineWidth=1;ctx.stroke();
  round(x+6,y+6,s-12,s-12,3);ctx.strokeStyle=lit?'#ffedbf33':'#9ab4dd13';ctx.stroke();
  ctx.fillStyle=lit?'#ffedb3':obs?'#697fa2':'#868372';ctx.beginPath();ctx.arc(x+s/2,y+s/2,lit?2.3:1.8,0,Math.PI*2);ctx.fill();
  if(obs&&lit){ctx.strokeStyle='#ffebbb44';ctx.beginPath();ctx.moveTo(x+s/2-7,y+s/2);ctx.lineTo(x+s/2+7,y+s/2);ctx.moveTo(x+s/2,y+s/2-7);ctx.lineTo(x+s/2,y+s/2+7);ctx.stroke();}
  const cx=x+s/2,cy=y+s/2;
  if(cell.names.includes('rune')){ctx.strokeStyle='#9ce7d1';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(cx,cy-14);ctx.lineTo(cx+12,cy);ctx.lineTo(cx,cy+14);ctx.lineTo(cx-12,cy);ctx.closePath();ctx.stroke();}
  if(cell.names.includes('gateclosed')||cell.names.includes('gateopen')){const closed=cell.names.includes('gateclosed');ctx.strokeStyle=closed?'#e8b998':'#9ce7d1';ctx.lineWidth=3;ctx.strokeRect(x+9,y+8,s-18,s-16);if(closed){for(let t=-1;t<=1;t++){ctx.beginPath();ctx.moveTo(cx+t*9,y+10);ctx.lineTo(cx+t*9,y+s-10);ctx.stroke();}}}
  if(cell.names.some(n=>n.startsWith('shadow'))){
   ctx.shadowColor='#a284ff';ctx.shadowBlur=22;ctx.fillStyle='#8d73bf';ctx.beginPath();ctx.moveTo(cx,cy-17);ctx.bezierCurveTo(cx+15,cy-13,cx+17,cy+8,cx+12,cy+18);ctx.lineTo(cx+5,cy+12);ctx.lineTo(cx,cy+19);ctx.lineTo(cx-6,cy+12);ctx.lineTo(cx-13,cy+18);ctx.bezierCurveTo(cx-17,cy+7,cx-14,cy-13,cx,cy-17);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#dfd2ff';ctx.fillRect(cx-7,cy-3,4,4);ctx.fillRect(cx+3,cy-3,4,4);
  }
  if(cell.names.includes('player')){
   ctx.fillStyle='#101d3077';ctx.beginPath();ctx.ellipse(cx,cy+19,15,5,0,0,Math.PI*2);ctx.fill();
   ctx.shadowColor='#d5f0ff';ctx.shadowBlur=12;ctx.fillStyle='#b8dbea';ctx.beginPath();ctx.moveTo(cx,cy-14);ctx.lineTo(cx+11,cy+16);ctx.lineTo(cx-11,cy+16);ctx.closePath();ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#eef8ff';ctx.beginPath();ctx.arc(cx,cy-14,7,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#f2f9ff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx+13,cy-2);ctx.lineTo(cx+13,cy+19);ctx.stroke();ctx.fillStyle='#ffe2a3';ctx.shadowColor='#ffe2a3';ctx.shadowBlur=10;ctx.fillRect(cx+10,cy,6,8);ctx.shadowBlur=0;
  }
 }
}
function solution(){
 const found=verification.results.find(r=>r.id===selected.id&&r.level===levelIndex);
 $('solution').textContent=found?`Un recorrido comprobado: ${found.solution}`:'En esta primera prueba podés recorrer y volver atrás libremente. Todavía no hay una condición de victoria.';
 $('solution').hidden=!$('solution').hidden;$('solution-toggle').setAttribute('aria-expanded',String(!$('solution').hidden));
}
document.querySelectorAll('[data-input]').forEach(b=>b.onclick=()=>input(Number(b.dataset.input)));
document.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>{section=b.dataset.section;route();});
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{view=b.dataset.view;route();});
document.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{theme=b.dataset.theme;document.querySelectorAll('[data-theme]').forEach(x=>x.classList.toggle('active',x===b));update();});
$('undo').onclick=()=>{if(boardState){boardState=PuzzleLab.undo();actions=Math.max(0,actions-1);update();}};
$('restart').onclick=()=>{if(boardState){boardState=PuzzleLab.restart();actions=0;update();}};
$('level-select').onchange=e=>{levelIndex=Number(e.target.value);route();};
$('solution-toggle').onclick=solution;
$('open-research').onclick=()=>{view='research';route();};
$('back-prototypes').onclick=()=>{section='prototipado';route();};
window.addEventListener('keydown',e=>{
 if(e.altKey||e.metaKey||e.ctrlKey||['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)||section!=='prototipado')return;
 if(view==='research'&&e.target!==canvas)return;
 if(e.key===' '&&e.target.tagName==='BUTTON')return;
 const keys={ArrowUp:0,w:0,W:0,ArrowLeft:1,a:1,A:1,ArrowDown:2,s:2,S:2,ArrowRight:3,d:3,D:3,' ':4,x:4,X:4};
 if(e.key in keys){e.preventDefault();if(!e.repeat)input(keys[e.key]);}
 if(e.key.toLowerCase()==='r')$('restart').click();if(e.key.toLowerCase()==='z')$('undo').click();
});
let previousKey='';
function readRoute(){
 const parts=location.hash.slice(1).split('/');section=parts[0]==='scope'?'scope':'prototipado';selected=stages.find(s=>s.id===parts[1])||stages.at(-1);view=parts[2]==='research'?'research':'juego';
 const candidate=Number(parts[3]);levelIndex=Number.isInteger(candidate)&&candidate>=0&&candidate<selected.levels.length?candidate:0;
 const key=`${selected.id}/${levelIndex}`;
 if(key!==previousKey){previousKey=key;loadStage();}else{setMode();renderNav();}
}
window.addEventListener('hashchange',readRoute);new ResizeObserver(draw).observe(canvas);
fetch('./data/verification.json').then(r=>r.ok?r.json():Promise.reject()).then(data=>verification=data).catch(()=>{});
fetch('./research/scope.md').then(r=>{if(!r.ok)throw new Error();return r.text();}).then(text=>{$('scope-content').innerHTML=markdown(text);}).catch(()=>{$('scope-content').textContent='No pude cargar el scope. Recargá la página para volver a intentar.';});
fetch('./data/scope.json').then(r=>r.json()).then(data=>{if(data.documentUrl){$('scope-drive').href=data.documentUrl;$('scope-drive').hidden=false;}}).catch(()=>{});
readRoute();
