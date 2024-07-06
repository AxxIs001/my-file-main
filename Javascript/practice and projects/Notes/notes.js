const noteContainer = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
const deleteBtn = document.querySelector(".delete")

function showNodes() {
    noteContainer.innerHTML = localStorage.getItem("notes");
}

showNodes();

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentNode.remove()
        updateStorage();
    } else if (e.target.tagName == "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }

})

//It is for preventing an error, like when there is more lines the 2nd 
//and others will be out of the input-box, so it is for preventing it;

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})