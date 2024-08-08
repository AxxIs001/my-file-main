let buttons = document.querySelectorAll(".container button");
let click = 0;
let winCountX = 0;
let winCountO = 0;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];


buttons.forEach((btn, index) => {
    btn.addEventListener("click", function () {

        if (btn.textContent === "") {
            btn.textContent = click % 2 === 0 ? "X" : "O";
            click++;
            winCheck()
        }
    });
});


function winCheck() {

    const board = Array.from(buttons).map(btn => btn.textContent);

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        if (board[a] === "X" && board[b] === "X" && board[c] === "X") {
            alert("Player 1 won");
            winCountX++;
            document.getElementById("plr1").textContent = `Score: ${winCountX}`;
            disableButtons()
            return;
        }
        else if (board[a] === "O" && board[b] === "O" && board[c] === "O") {
            alert("Player 2 won");
            winCountO++;
            document.getElementById("plr2").textContent = `Score: ${winCountO}`;
            disableButtons()
            return;
        }

    }

    if (click == 9) {
        alert("Draw");
    }

}

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;

    })
    alert("Reset the Game to play again!");
}

function reset() {
    buttons.forEach(btn => {
        btn.textContent = "";
        btn.disabled = false;
    });
    click = 0;
}

function resetScores() {
    document.getElementById("plr1").textContent = `Score: ${winCountX = 0}`;
    document.getElementById("plr2").textContent = `Score: ${winCountO = 0}`;

}








