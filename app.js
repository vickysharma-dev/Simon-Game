let useseq=[];
let gameseq=[];

let started=false;
let level=0;

let h2 = document.querySelector("h2");
let colors = ["red","blue","green","yellow"];

document.addEventListener("keypress", function() {
    if(started==false){
        started=true;
        levelup();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    useseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randomnum = Math.floor(Math.random()*4);
    let randomcolor = colors[randomnum];
    let btn = document.querySelector(`.${randomcolor}`);

    gameseq.push(randomcolor);
    flash(btn);
}

function checkAns(idx){

    if(useseq[idx] === gameseq[idx]){
        if(useseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    } 
    else{
        h2.innerHTML = `Game Over, your score is level ${level}.<br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){ document.querySelector("body").style.backgroundColor = "black"}, 200);
        reset();
    }    
}

function btnpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    useseq.push(usercolor);
    checkAns(useseq.length-1);
}


let buttons = document.querySelectorAll(".btn");
for(let button of buttons){
    button.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    level = 0;
    gameseq =[];
    useseq = [];
}
