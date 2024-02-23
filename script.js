var timer = 60;
var score = 0;
var hitnum = 0;
var h1 = document.querySelector("#h1");
var h11 = document.querySelector("#h11");

function scoreadd(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function scorededuct(){
    score -=10;
    document.querySelector("#scoreval").textContent = score;
}
function newhit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitnum;
}
function bubbles(){
    var clutter = "";

for(var i =1; i<=167;i++){
    var rnum = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rnum}</div>`;

}

document.querySelector(".pbtm").innerHTML=clutter
}
function runtime(){
    var Timer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(timer);
            document.querySelector(".pbtm").innerHTML= `<h1>Game over</h1><br><h1>Your Score: ${score}</h1>`;
            // document.querySelector(".pbtm").style.backgroundColor = "red";
            

        }
    },1000)
}
document.querySelector(".pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitnum){
        scoreadd();
        bubbles();
        newhit();
    }
    else{
        scorededuct();
        bubbles();
    }
    
})

newhit();
runtime();
bubbles();
// scoreadd();
// scoreadd();