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

function levelup(){
    level++;
    h2.innerText = `Level ${level}`;
   
}
