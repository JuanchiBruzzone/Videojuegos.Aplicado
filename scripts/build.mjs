import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await cp('web','dist/web',{recursive:true});
await cp('index.html','dist/index.html');
await writeFile('dist/.nojekyll','');
console.log('Sitio preparado en dist/; la web conserva /web/index.html.');
