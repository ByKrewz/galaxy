/* max-h/w = 6 
top = 8-920
right =8-1908
*/

function randomN(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i=0; i<=1000; i++){
    let star = document.createElement('div');
    let size = randomN(1,4);
    star.classList.add('star');
    star.style.width = size+"px";
    star.style.height = size+"px";
    star.style.top = randomN(0,932)+"px";
    star.style.right = randomN(0,1920)+"px";
    document.body.appendChild(star);
}