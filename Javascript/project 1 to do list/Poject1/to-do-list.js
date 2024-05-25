// For sidebar opening and closing
const sidebar = document.querySelector('.container-1');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Add task popup
document.getElementById("Addtasks").addEventListener("click", function() {
    document.querySelector(".Task").style.display = "flex";
});

document.querySelector(".close1").addEventListener("click", function() {
    document.querySelector(".Task").style.display = "none";
});

// This is for when you click Add task the popup close
document.querySelector(".addclose").addEventListener("click", function() {
    document.querySelector(".Task").style.display = "none";
});

// Setting
document.getElementById("Settings").addEventListener("click", function() {
    document.querySelector(".setting").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".setting").style.display = "none";
});

// For switching Pages
(function($) {
    $('nav li').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('section:nth-of-type(' + $(this).data('rel') + ')').stop().fadeIn(400, 'linear').siblings('section').stop().fadeOut(400, 'linear');
    });
})(jQuery);

// Task counting function
function updateTaskCount() {
    const taskCount = document.querySelectorAll('#tasks .task').length;
    document.getElementById('task-count').innerHTML = `
    <i class="fa fa-check icounter"></i> ${taskCount} Tasks `;
}

// For adding the tasks when clicking the button and deleting
function addTask() {
    const taskInput = document.querySelector('#newtask input');
    if (taskInput.value.length == 0) {
        alert("Enter Task Name!!!!");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <button class="delete">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
                <span id="taskname">
                    ${taskInput.value}
                </span>
            </div>
        `;
        taskInput.value = ''; // Clear input field after adding the task

        // Update task count
        updateTaskCount();

        // Add delete functionality
        var currentTasks = document.querySelectorAll(".delete");
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
                // Update task count
                updateTaskCount();
            }
        }

        // Hide the popup after adding the task
        document.querySelector(".Task").style.display = "none";
    }
}

document.querySelector('#push').onclick = addTask;

// Add event listener for Enter key
const taskInput = document.querySelector('#newtask input');
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// For Today page Overdue collapse
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Add task popup in Today page
document.getElementById("TodayAddtasks").addEventListener("click", function() {
    document.querySelector(".Task").style.display = "flex";
});

document.querySelector(".close1").addEventListener("click", function() {
    document.querySelector(".TodayTask").style.display = "none";
});

// This is for when you click Add task the popup close
document.querySelector(".addclose").addEventListener("click", function() {
    document.querySelector(".TodayTask").style.display = "none";
});