const pictures = ["img/rock.png", "img/paper.jpg", "img/scissors.png"];
let yourScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissor");


//        Rock
rock.addEventListener("click", () => {
    let randomImg = pictures[Math.floor(Math.random() * pictures.length)];
    document.getElementById("computer-choice").src = randomImg;
    document.getElementById("your-choice").src = pictures[0];


    if (randomImg == "img/rock.png") {
        document.querySelector(".title p").innerHTML = "Draw";
        document.querySelector(".title p").style.color = "black";
    }
    else if (randomImg == "img/paper.jpg") {
        document.querySelector(".title p").innerHTML = "You Lost";
        document.querySelector(".title p").style.color = "red";
        computerScore++;
        document.querySelector(".computer-score p").innerHTML = `You: ${computerScore}`
    }
    else if (randomImg == "img/scissors.png") {
        document.querySelector(".title p").innerHTML = "You Won";
        document.querySelector(".title p").style.color = "green";
        yourScore++;
        document.querySelector(".your-score p").innerHTML = `You: ${yourScore}`
    }
    checkWinner()
});



//         Paper
paper.addEventListener("click", () => {
    let randomImg = pictures[Math.floor(Math.random() * pictures.length)];
    document.getElementById("computer-choice").src = randomImg;
    document.getElementById("your-choice").src = pictures[1];


    if (randomImg == "img/rock.png") {
        document.querySelector(".title p").innerHTML = "You Won";
        document.querySelector(".title p").style.color = "green";
        yourScore++;
        document.querySelector(".your-score p").innerHTML = `You: ${yourScore}`;
    }
    else if (randomImg == "img/paper.jpg") {
        document.querySelector(".title p").innerHTML = "Draw";
        document.querySelector(".title p").style.color = "black";
    }
    else if (randomImg == "img/scissors.png") {
        document.querySelector(".title p").innerHTML = "You Lost";
        document.querySelector(".title p").style.color = "red";
        computerScore++;
        document.querySelector(".computer-score p").innerHTML = `You: ${computerScore}`
    }
    checkWinner()
});


//        Scissors
scissors.addEventListener("click", () => {
    let randomImg = pictures[Math.floor(Math.random() * pictures.length)];
    document.getElementById("computer-choice").src = randomImg;
    document.getElementById("your-choice").src = pictures[2];


    if (randomImg == "img/rock.png") {
        document.querySelector(".title p").innerHTML = "You Lost";
        document.querySelector(".title p").style.color = "red";
        computerScore++;
        document.querySelector(".computer-score p").innerHTML = `You: ${computerScore}`;
    }
    else if (randomImg == "img/paper.jpg") {
        document.querySelector(".title p").innerHTML = "You Won";
        document.querySelector(".title p").style.color = "green";
        yourScore++;
        document.querySelector(".your-score p").innerHTML = `You: ${yourScore}`
    }
    else if (randomImg == "img/scissors.png") {
        document.querySelector(".title p").innerHTML = "Draw";
        document.querySelector(".title p").style.color = "black";
    }
    checkWinner()
});


function checkWinner() {
    if (yourScore > computerScore) {
        document.querySelector(".gameButtons h1").innerHTML = "You are Winning!";
        document.querySelector(".gameButtons h1").style.color = "green";
    }
    else if (yourScore < computerScore) {
        document.querySelector(".gameButtons h1").innerHTML = "You are Losing!";
        document.querySelector(".gameButtons h1").style.color = "red";
    } else {
        document.querySelector(".gameButtons h1").innerHTML = "It is Draw!";
        document.querySelector(".gameButtons h1").style.color = "black";
    }

}