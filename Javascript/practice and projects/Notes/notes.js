const noteContainer = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
const deleteBtn = document.querySelector(".delete")

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
});