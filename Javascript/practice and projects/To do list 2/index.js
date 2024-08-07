let addBtn = document.getElementById("btn");
let count = document.getElementById("task-count");
let myUl = document.getElementById("myUL");


//Count tasks
function updateTaskCount() {
    let listItems = document.querySelectorAll(".list li");
    let totalTasks = listItems.length;
    count.innerHTML = `Tasks now: ${totalTasks}`;
}



// Adding task by clicking to button
addBtn.addEventListener("click", function () {
    let inputTask = document.getElementById("myInput").value;

    if (inputTask != "") {
        let list = document.createElement("li");
        let node = document.createTextNode(inputTask);
        list.appendChild(node);

        // Create the delete button
        let deleteBtn = document.createElement("img");
        deleteBtn.src = "img/3405244.png";
        deleteBtn.alt = "Delete";
        deleteBtn.style.cursor = "pointer";

        // Add event listener to delete button
        deleteBtn.addEventListener("click", function () {
            list.remove();
            updateTaskCount();
        })
        // Append the delete button to the list item
        list.appendChild(deleteBtn);

        myUl.appendChild(list);



        //Line through, if done or not
        list.addEventListener("click", function () {

            if (list.style.textDecoration === "line-through") {

                list.style.textDecoration = "none";
            }
            else {
                list.style.textDecoration = "line-through";
            }
        });

        //count update
        updateTaskCount()


    }
    else {
        alert("You haven't give the task!")
    }
    //To clear input box
    document.getElementById("myInput").value = "";
});

