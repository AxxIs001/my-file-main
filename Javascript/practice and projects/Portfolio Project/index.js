
const port = document.getElementById("portfolio");
if (port) {
    port.addEventListener("click", function () {
        window.location.reload();
    });
}


window.onscroll = function () {
    if (window.scrollY > 600) {
        navbarColor();
    }
    else {
        resetNavbarColor()
    }
};



function navbarColor() {
    const topnav = document.getElementById("topnav");
    topnav.style.backgroundColor = "#ffffff";
    topnav.style.height = "80px";
    topnav.style.transition = "1s";

    document.querySelectorAll(".topnav a").forEach(function (link) {
        link.style = "color: #007bff";

    })
    const homeLink = document.querySelector(".navbar .home");
    if (homeLink) {
        homeLink.style.textDecorationColor = "#007bff";
        homeLink.style.color = "#007bff";
    }
}


function resetNavbarColor() {
    const topnav = document.getElementById("topnav");
    topnav.style.backgroundColor = "#00000088";
    topnav.style.height = "70px";
    topnav.style.transition = "0.5s";

    document.querySelectorAll(".topnav a").forEach(function (link) {
        link.style = "color: #ffffff";
    })
    const homeLink = document.querySelectorAll(".navbar .home");
    if (homeLink) {
        homeLink.style.textDecorationColor = "#ffffff";
        homeLink.style.color = "#ffffff";
    }

}



document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".imProgrammer");
    const text = ["Web Developer", "Frontend Developer"];

    let index = 0;
    let arrayIndex = 0;
    let showing = true;

    function showLetterByLetter() {
        let key = text[arrayIndex];

        if (showing) {
            if (index < key.length) {
                element.textContent += key.charAt(index);
                index++;
                setTimeout(showLetterByLetter, 100); // Adjust the delay (in milliseconds) as needed
            } else {
                showing = false;
                setTimeout(showLetterByLetter, 2000); // Wait 2 seconds before starting to disappear
            }
        } else {
            if (index > 0) {
                element.textContent = element.textContent.slice(0, -1);
                index--;
                setTimeout(showLetterByLetter, 20); // Adjust the delay (in milliseconds) as needed
            } else {
                showing = true;
                arrayIndex = (arrayIndex + 1) % text.length; // Move to the next text, loop back to the first one
                setTimeout(showLetterByLetter, 200);
            }
        }
    }

    showLetterByLetter();
});
