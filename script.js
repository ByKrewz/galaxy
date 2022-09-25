//------------------------------Def des fonctions------------------------------
function randomL(items){
    return items[Math.floor(Math.random()*items.length)];
    }
    
function randomN(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomF(min, max, decimals) {
    return (Math.random() * (max - min) + min).toFixed(decimals);
}

function pourcentage(val, p){
    return val*(p/100);
}

//------------------------------Génération du background------------------------------

const minX=pourcentage(window.innerWidth, 10);
const maxX = pourcentage(window.innerWidth, 90);


let nb = (window.innerHeight+window.innerWidth)/2.5;
const anims = ["move1","move2","move3","move4","move5","move6","move7","move8"];

for(let i=0; i<=nb; i++){
    let star = document.createElement('div');
    let size = randomN(1,4);
    star.classList.add('star');
    star.style.width = size+"px";
    star.style.height = size+"px";
    star.style.top = randomN(10,window.innerHeight-10)+"px";
    star.style.right = randomN(minX, maxX)+"px";
    star.style.animation = randomL(anims)+" "+randomF(2,4,2)+"s "+"infinite ease-in-out";

    document.body.appendChild(star);
}

//------------------------------Déplacements de la fusée/collisions mur------------------------------

const rocket = document.getElementById("spaceship");

let speed = 20;

let rocketX = rocket.getBoundingClientRect().right; 
console.log(rocketX);

const walldimL=document.getElementById('left').getBoundingClientRect();
const walldimR=document.getElementById('right').getBoundingClientRect();

document.addEventListener('keydown', (e)=>{
    let rocketInfo = rocket.getBoundingClientRect();
    if(e.key === "ArrowRight"){
        if(rocketInfo.x+rocketInfo.width+speed>walldimR.x){
            return;
        }else{
            rocket.style.right = rocketX-speed+"px";
            rocketX-=speed;
        }
    }
    else if(e.key === "ArrowLeft"){
        if(rocketInfo.x-speed<walldimL.x+walldimL.width){
            return;
        }else{
            rocket.style.right = rocketX+speed+"px";
            rocketX+=speed;
        }
    }
})
