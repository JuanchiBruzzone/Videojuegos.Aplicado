import { cp, mkdir, readdir } from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for (const file of await readdir('web')) await cp(`web/${file}`,`dist/${file}`,{recursive:true});
console.log('Sitio preparado en dist/');
