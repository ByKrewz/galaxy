/* max-h/w = 6 
top = 8-920
right =8-1908
*/

function randomN(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let nb = (window.innerHeight+window.innerWidth)/3;

for(let i=0; i<=nb; i++){
    let star = document.createElement('div');
    let size = randomN(1,4);
    star.classList.add('star');
    star.style.width = size+"px";
    star.style.height = size+"px";
    star.style.top = randomN(0,window.innerHeight)+"px";
    star.style.right = randomN(0,window.innerWidth)+"px";
    document.body.appendChild(star);
}
