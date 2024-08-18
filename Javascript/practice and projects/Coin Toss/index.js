const coins = ["img/head.png", "img/tail.png"];
let flipCoin = document.querySelector(".flip");
let resetScore = document.querySelector(".reset");
let coinImage = document.getElementById("coin-flip");

let countHead = 0;
let countTail = 0;

flipCoin.addEventListener("click", () => {

    coinImage.classList.add("flip-animation");

    let randomize = coins[Math.floor(Math.random() * coins.length)];
    coinImage.src = randomize;

    setTimeout(() => {
        coinImage.classList.remove("flip-animation");
        if (randomize === "img/head.png") {
            countHead++;
            document.getElementById("head-score").innerHTML = `Head: ${countHead}`;
        } else if (randomize === "img/tail.png") {
            countTail++;
            document.getElementById("tail-score").innerHTML = `Tail: ${countTail}`;
        }
    }, 1500);
});

resetScore.addEventListener("click", () => {
    countHead = 0;
    countTail = 0;
    document.getElementById("head-score").innerHTML = `Head: ${countHead}`;
    document.getElementById("tail-score").innerHTML = `Tail: ${countTail}`;
});
