import test from 'node:test';
import assert from 'node:assert/strict';
import {markdown} from '../web/markdown.js';
test('Research convierte títulos, énfasis y código sin interpretar HTML',()=>{
 const html=markdown('# La Sombra\n\n**Pulso** usa `action`.\n\n<script>alert(1)</script>');
 assert(html.includes('<h1>La Sombra</h1>'));assert(html.includes('<strong>Pulso</strong>'));assert(html.includes('<code>action</code>'));assert(!html.includes('<script>'));
});
test('las comparaciones del prototipado se muestran como tablas',()=>{
 const html=markdown('| Acción | Resultado |\n| --- | --- |\n| Pulso | Se disipa |');assert(html.includes('<table>'));assert(html.includes('<td>Se disipa</td>'));
});
