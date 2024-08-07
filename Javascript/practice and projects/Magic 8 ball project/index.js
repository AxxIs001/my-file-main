let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now",
    "Cannot predict now	", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];



document.getElementById("askAnything").addEventListener("click", function () {

    let question = prompt("What do you want to know?");
    let result = answers[(Math.floor(Math.random() * answers.length))];
    let imgMagicBall = document.getElementById("imgMagicBall");

    if (question) {
        imgMagicBall.src = "image/answerside.png";
        document.querySelector(".answer").textContent = result;
    }
    else {
        imgMagicBall.src = "image/answerside.png";
        document.querySelector(".answer").innerHTML = '<span class="cannot">Cannot</span><span class="predict-now">predict now!</span>';
    }

    imgMagicBall.classList.add("shake");
    imgMagicBall.addEventListener("animationend", function () {

        imgMagicBall.classList.remove("shake");

    }, { once: true })


})



