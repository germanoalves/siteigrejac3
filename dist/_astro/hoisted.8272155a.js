import"./Layout.astro_astro_type_script_index_0_lang.5e40571e.js";const g="/_astro/bookmark.5a7475b8.png",b="/_astro/worship.c6b96c9e.png",h="/_astro/calendar.8125c703.png";async function v(){try{(await(await fetch("https://igreja.natuspixel.com.br/svr/wp-json/wp/v2/posts?categories=4")).json()).forEach(a=>{const p=document.querySelector("#lista_agenda"),e=document.createElement("div");e.classList.add("flex","flex-col","relative","bg-white","border-r-1","border-l-1","border-b-2","border-solid","border-gray-300","p-3","mb-4","sm:mb-0","rounded-lg","shadow-xl","dark:bg-gray-500");const r=document.createElement("div");r.classList.add("flex","flex-row","flex-grow");const d=document.createElement("div");d.classList.add("absolute","top-0","right-0","transform","text-white","bg-gray-200","rounded-bl-lg","rounded-tr-lg","px-3","py-1","-rotate-180","dark:bg-gray-600"),d.innerHTML=`<img src="${g}" width='20' height='20'>`,e.appendChild(d);const n=document.createElement("div");n.classList.add("text-lg","font-semibold","text-gray-700","uppercase","font-rubbik","mt-6","dark:text-white"),n.textContent=a.title.rendered;const t=document.createElement("div");t.classList.add("mt-2","b-0","mb-6","text-gray-500","dark:text-gray-800"),t.innerHTML=a.content.rendered,r.appendChild(t);const o=a.acf.data_evento.split("-"),m=`${o[2]}-${o[1]}-${o[0]}`,s=document.createElement("div");s.classList.add("h-full","mb-6","border-t-2","border-gray-100","border-solid","dark:border-gray-600"),s.innerHTML=`<div class="flex flex-row items-center"><img src="${h}" class="w-4 h-4 mr-1" /><span class='font-bold text-gray-500 dark:text-gray-800 mr-1'>Data Evento: </span> <span class='text-gray-500 dark:text-white'>${m}</span></div>`;const c=document.createElement("div");c.classList.add("max-w-xs","h-full","p-0","mt-auto","rounded-lg","overflow-visible");const i=document.createElement("img");i.src=b,i.alt="Agenda Image",e.appendChild(n),e.appendChild(t),e.appendChild(s),c.appendChild(i),e.appendChild(c),e.appendChild(r),p.appendChild(e)})}catch(l){console.error("Erro ao buscar dados:",l)}}document.addEventListener("DOMContentLoaded",()=>{v()});