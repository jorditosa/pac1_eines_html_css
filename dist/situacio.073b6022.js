const i=document.querySelectorAll(".categories__nav--item"),e=document.querySelectorAll(".categories__item");function c(c){!function(e){i.forEach((i=>{i.classList.remove("active-link"),e.target.classList.add("active-link")}))}(c),e.forEach((i=>{i.classList.add("item-visible"),i.classList.remove("item-hidden")})),e.forEach((i=>{const e=i.dataset.img,s=c.target.dataset.btn;"all"===s?(i.classList.add("item-visible"),i.classList.remove("item-hidden")):e!==s&&(i.classList.remove("item-visible"),i.classList.add("item-hidden"))}))}i.forEach((i=>{i.addEventListener("click",c)}));document.querySelectorAll(".presentacio__list--item img").forEach((i=>{i.addEventListener("click",(()=>{i.parentNode.classList.toggle("active")}))}));const s=document.querySelector(".situacio__clima");function t(i){document.querySelector(".sk-circle").remove();const{main:{temp:e,humidity:c}}=i,t=parseInt(e-273.15,10),a=document.createElement("P");a.innerHTML=`\n  <span> Temperatura </span>\n  ${t} &#8451\n  `,a.classList.add("situacio__clima--temp");const d=document.createElement("P");d.innerHTML=`\n  <span> Humitat </span>\n  ${c} %\n  `,d.classList.add("situacio__clima--hum"),s.appendChild(a),s.appendChild(d)}function a(){!function(){const i=document.createElement("DIV");i.classList.add("sk-circle"),i.innerHTML='\n  <div class="sk-circle1 sk-child"></div>\n  <div class="sk-circle2 sk-child"></div>\n  <div class="sk-circle3 sk-child"></div>\n  <div class="sk-circle4 sk-child"></div>\n  <div class="sk-circle5 sk-child"></div>\n  <div class="sk-circle6 sk-child"></div>\n  <div class="sk-circle7 sk-child"></div>\n  <div class="sk-circle8 sk-child"></div>\n  <div class="sk-circle9 sk-child"></div>\n  <div class="sk-circle10 sk-child"></div>\n  <div class="sk-circle11 sk-child"></div>\n  <div class="sk-circle12 sk-child"></div>\n  ',s.appendChild(i)}(),fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.13485610158371&lon=1.5912090609255012&appid=0edec620b2d050e580ca05a552394cb3").then((i=>i.json())).then((i=>t(i)))}window.onload=()=>{a()};
//# sourceMappingURL=situacio.073b6022.js.map
