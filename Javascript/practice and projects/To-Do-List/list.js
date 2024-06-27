const textBox = document.querySelector(".task input");
const addBtn = document.querySelector(".task button");
const taskCount = document.getElementById("task-count");
const ul = document.getElementById("myUL");
const doneCount = document.getElementById("done");



function updateTaskCount() {
    const count = document.querySelectorAll("#myUL li");
    taskCount.textContent = `Tasks now: ${count.length}`;
}


function addTask(task) {

    if (task != "") {
        let tasks = document.querySelectorAll("#myUL li");

        // IF you have a task with the same name it will alert you (but i don't think i need this)
        for (let i = 0; i < tasks.length; i++) {
            let taskText = tasks[i].textContent.replace("\u00d7", "");
            if (taskText === task) {
                alert("You already have this task!");
                textBox.value = "";
                return;
            }
        }

        var li = document.createElement("li");
        li.className = "myListItem";

        var taskText = document.createTextNode(task);
        li.appendChild(taskText);


        // CheckBox
        // var checkbox = document.createElement("input");
        // checkbox.type = "checkbox";
        var checkbox = document.createElement("span");
        checkbox.innerHTML = "\u00d7";

        // Deleting when Check Box is Checked
        /* checkbox.addEventListener("change", function() {
            if (this.checked) {
                li.remove();
                updateTaskCount(); // Update the task count when a task is removed
            }
        });
*/
        li.appendChild(checkbox);
        document.getElementById("myUL").appendChild(li);



        updateTaskCount(); // Update the task count after a task is added
    } else {
        alert("Write the Task name!!!");
    }

    // clear text input
    textBox.value = "";
    updateTaskCount();
    saveData();
}

ul.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();


    }
    updateTaskCount();
    saveData();

}, false);


addBtn.addEventListener("click", () => {
    addTask(textBox.value);
});

// for Saving data in Chrome
function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
    ul.innerHTML = localStorage.getItem("data");
    updateTaskCount();
}
// showTask();