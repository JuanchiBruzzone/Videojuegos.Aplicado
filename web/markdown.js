const escape = text => text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function inline(text){return escape(text).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer">$1</a>');}
export function markdown(text){
 const lines=text.replace(/\r/g,'').split('\n');let html='',i=0;
 while(i<lines.length){
  const line=lines[i];if(!line.trim()){i++;continue;}
  if(line.startsWith('```')){const code=[];i++;while(i<lines.length&&!lines[i].startsWith('```'))code.push(lines[i++]);i++;html+='<pre><code>'+escape(code.join('\n'))+'</code></pre>';continue;}
  const heading=line.match(/^(#{1,3}) (.+)$/);if(heading){html+=`<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`;i++;continue;}
  if(line.startsWith('|')&&lines[i+1]?.match(/^\|[\s:|-]+\|$/)){
   const cells=l=>l.split('|').slice(1,-1).map(c=>c.trim());
   html+='<div class="table-wrap"><table><thead><tr>'+cells(line).map(c=>'<th>'+inline(c)+'</th>').join('')+'</tr></thead><tbody>';i+=2;
   while(i<lines.length&&lines[i].startsWith('|')){html+='<tr>'+cells(lines[i++]).map(c=>'<td>'+inline(c)+'</td>').join('')+'</tr>';}
   html+='</tbody></table></div>';continue;
  }
  if(line.startsWith('- ')){html+='<ul>';while(i<lines.length&&lines[i].startsWith('- '))html+='<li>'+inline(lines[i++].slice(2))+'</li>';html+='</ul>';continue;}
  const p=[line];i++;while(i<lines.length&&lines[i].trim()&&!lines[i].match(/^(#|\||- |```)/))p.push(lines[i++]);html+='<p>'+inline(p.join(' '))+'</p>';
 }
 return html;
}
