
//Detecting button press
let numberAllButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberAllButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let btnInnerHTNL = this.innerHTML;

        clickSound(btnInnerHTNL)
        buttonAnimatin(btnInnerHTNL)
    })
}

//play sound by pressing key on the Keyboard
document.addEventListener("keypress", function (event) {
    clickSound(event.key);
    buttonAnimatin(event.key);
})


function clickSound(key) {

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log(btn);
    }
}

function buttonAnimatin(currentKey) {

    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100)

}




/*

function tom1Sound() {
    let tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
}
function tom2Sound() {
    let tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
}

function tom3Sound() {
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
}

function tom4Sound() {
    let tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
}

function snareSound() {
    let snare = new Audio("sounds/snare.mp3");
    snare.play();
}

function crashSound() {
    let crash = new Audio("sounds/crash.mp3");
    crash.play();
}

function kickBassSound() {
    let kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
}


// Make sound by clicking the key in keyboard


document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            tom1Sound();
            break;
        case "a":
            tom2Sound();
            break;
        case "s":
            tom3Sound();
            break;
        case "d":
            tom4Sound();
            break;
        case "j":
            snareSound();
            break;
        case "k":
            crashSound();
            break;
        case "l":
            kickBassSound();
            break;
        default:
            console.log("Key not mapped to any sound.");
    }
})
*/

