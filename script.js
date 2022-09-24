/* max-h/w = 6 
top = 8-920
right =8-1908

animation: move4 2s infinite;
*/

function randomL(items){
return items[Math.floor(Math.random()*items.length)];
}

function randomN(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomF(min, max, decimals) {
    return (Math.random() * (max - min) + min).toFixed(decimals);
}



let nb = (window.innerHeight+window.innerWidth)/2.5;
const anims = ["move1","move2","move3","move4","move5","move6","move7","move8"];

for(let i=0; i<=nb; i++){
    let star = document.createElement('div');
    let size = randomN(1,4);
    star.classList.add('star');
    star.style.width = size+"px";
    star.style.height = size+"px";
    star.style.top = randomN(0,window.innerHeight)+"px";
    star.style.right = randomN(0,window.innerWidth)+"px";
    star.style.animation = randomL(anims)+" "+randomF(2,4,2)+"s "+"infinite ease-in-out";

    document.body.appendChild(star);
}
