
let useseq = [];
let gameseq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let colors = ["red", "blue", "green", "yellow"];

// Start game using keyboard OR mobile touch
function startGame() {
    if (!started) {
        started = true;
        levelup();
    }
}

document.addEventListener("keydown", startGame);

// Mobile and desktop start: tap the instruction heading
h2.addEventListener("click", startGame);

function flash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    useseq = [];
    level++;

    h2.innerText = `Level ${level}`;

    let randomnum = Math.floor(Math.random() * 4);
    let randomcolor = colors[randomnum];
    let btn = document.querySelector(`.${randomcolor}`);

    gameseq.push(randomcolor);
    flash(btn);
}

function checkAns(idx) {
    if (useseq[idx] === gameseq[idx]) {
        if (useseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML =
            `Game Over, your score is level ${level}.<br>Tap or press any key to restart`;

        document.body.style.backgroundColor = "red";

        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 200);

        reset();
    }
}

function btnpress() {
    if (!started) return;

    let btn = this;

    userflash(btn);

    let usercolor = btn.getAttribute("id");
    useseq.push(usercolor);

    checkAns(useseq.length - 1);
}

let buttons = document.querySelectorAll(".btn");

for (let button of buttons) {
    button.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    level = 0;
    gameseq = [];
    useseq = [];
}
