
var imgArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


function random() {

    let randomize = imgArray[Math.floor(Math.random() * imgArray.length)]

    return randomize;

}


function winnerDice() {

    let player1 = random();
    let player2 = random();


    document.querySelector(".img1").setAttribute("src", player1);
    document.querySelector(".img2").setAttribute("src", player2);


    let player1Value = imgArray.indexOf(player1);
    let player2Value = imgArray.indexOf(player2);

    if (player1Value > player2Value) {
        return document.querySelector("h1").textContent = "Player 1 wins";
    }
    else if (player1Value < player2Value) {
        return document.querySelector("h1").textContent = "Player 2 wins";
    }
    else {
        return document.querySelector("h1").textContent = "Draw";
    }

}

winnerDice()




