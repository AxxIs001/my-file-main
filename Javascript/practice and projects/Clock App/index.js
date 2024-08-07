// function for giving a zero when it is less than 10
setInterval(function () {
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // The time (hour, minute, sec)
    const d = new Date();
    let hours = addZero(d.getHours());
    let munutes = addZero(d.getMinutes());
    let seconds = addZero(d.getSeconds());

    //Changing html by id to the hour value 
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = munutes;
    document.getElementById("second").innerHTML = seconds;
}, 1000);