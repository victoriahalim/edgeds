import{decorateMain}from"../../scripts/scripts.js";
import{loadBlocks}from"../../scripts/aem.js";

export async function loadFragment(t){if(t&&t.startsWith("/")){
    const e=await fetch(`${t}.plain.html`);
    if(e.ok){const o=document.createElement("main");o.innerHTML=await e.text();const r=(e,r)=>{o.querySelectorAll(`${e}[${r}^="./media_"]`).forEach((e=>{e[r]=new URL(e.getAttribute(r),new URL(t,window.location)).href}))};
    return r("img","src"),r("source","srcset"),decorateMain(o),await loadBlocks(o),o}}
    return null}

export default async function decorate(t){const e=t.querySelector("a"),o=e?e.getAttribute("href"):t.textContent.trim(),r=await loadFragment(o);
if(r){const e=r.querySelector(":scope .section");e&&(t.closest(".section").classList.add(...e.classList),t.closest(".fragment").replaceWith(...r.childNodes))}}