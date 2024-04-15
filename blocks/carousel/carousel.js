import { fetchPlaceholders } from "../../scripts/aem.js";

function updateActiveSlide(e){
    const t=e.closest(".carousel"),l=parseInt(e.dataset.slideIndex,10);
    t.dataset.activeSlide=l;t.querySelectorAll(".carousel-slide").forEach(((e,t)=>{
        e.setAttribute("aria-hidden",t!==l),e.querySelectorAll("a").forEach((e=>{t!==l?e.setAttribute("tabindex","-1"):e.removeAttribute("tabindex")}))}));
        document.querySelectorAll(".carousel-slide-content").forEach((e=>{if(!(e.textContent.trim().length>0||e.children.length>0)){e.classList.add("empty");
        const t=e.nextElementSibling;
        t.classList.contains("carousel-slide-image")&&t.classList.add("empty")}}));t.querySelectorAll(".carousel-slide-indicator").forEach(((e,t)=>{t!==l?e.querySelector("button").removeAttribute("disabled"):e.querySelector("button").setAttribute("disabled","true")}))
    }

function showSlide(e,t=0){
    const l=e.querySelectorAll(".carousel-slide");
    let s=t<0?l.length-1:t;t>=l.length&&(s=0);
    const r=l[s];
    r.querySelectorAll("a").forEach((e=>e.removeAttribute("tabindex"))),e.querySelector(".carousel-slides").scrollTo({top:0,left:r.offsetLeft,behavior:"smooth"})}

function bindEvents(e){
    const t=e.querySelector(".carousel-slide-indicators");
    if(!t)return;
    t.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(t=>{const l=t.currentTarget.parentElement;showSlide(e,parseInt(l.dataset.targetSlide,10))}))})),e.querySelector(".slide-prev").addEventListener("click",(()=>{showSlide(e,parseInt(e.dataset.activeSlide,10)-1)})),e.querySelector(".slide-next").addEventListener("click",(()=>{showSlide(e,parseInt(e.dataset.activeSlide,10)+1)}));const l=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&updateActiveSlide(e.target)}))}),{threshold:.5});e.querySelectorAll(".carousel-slide").forEach((e=>{l.observe(e)}))}

function createSlide(e,t,l){const s=document.createElement("li");s.dataset.slideIndex=t,s.setAttribute("id",`carousel-${l}-slide-${t}`),s.classList.add("carousel-slide"),e.querySelectorAll(":scope > div").forEach(((e,t)=>{e.classList.add("carousel-slide-"+(0===t?"image":"content")),s.append(e)}));const r=s.querySelector("h1, h2, h3, h4, h5, h6");
    return r&&s.setAttribute("aria-labelledby",r.getAttribute("id")),s}
    let carouselId=0;
    export default async

function decorate(e){
    carouselId+=1,e.setAttribute("id",`carousel-${carouselId}`);
    const t=e.querySelectorAll(":scope > div"),l=t.length<2,s=await fetchPlaceholders();
    e.setAttribute("role","region"),e.setAttribute("aria-roledescription",s.carousel||"Carousel");
    const r=document.createElement("div");
    r.classList.add("carousel-slides-container");
    const a=document.createElement("ul");
    let o;
    if(a.classList.add("carousel-slides"),e.prepend(a),!l){
        const t=document.createElement("nav");t.setAttribute("aria-label",s.carouselSlideControls||"Carousel Slide Controls"),o=document.createElement("ol"),o.classList.add("carousel-slide-indicators"),t.append(o),e.append(t);
        const l=document.createElement("div");l.classList.add("carousel-navigation-buttons"),l.innerHTML=`\n      <button type="button" class= "slide-prev" aria-label="${s.previousSlide||"Previous Slide"}"></button>\n      <button type="button" class="slide-next" aria-label="${s.nextSlide||"Next Slide"}"></button>\n    `,r.append(l)}
        t.forEach(((e,l)=>{const r=createSlide(e,l,carouselId);
        if(a.append(r),o){const e=document.createElement("li");
        e.classList.add("carousel-slide-indicator"),e.dataset.targetSlide=l,e.innerHTML=`<button type="button"><span>${s.showSlide||"Show Slide"} ${l+1} ${s.of||"of"} ${t.length}</span></button>`,o.append(e)}e.remove()})),r.append(a),e.prepend(r),l||bindEvents(e)}