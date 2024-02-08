export default function decorate(block) {
    [...block.children].forEach((row) =>{
    const h2=document.createElement('h2');
    block.appendChild(h2);
    const link=document.createElement('a');
    block.appendChild(link)

});}