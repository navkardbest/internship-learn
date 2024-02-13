if (new Date().getHours() < 10) {
    document.getElementById("demo").innerHTML = "Good Morning!";
} else if (new Date().getHours() < 14) {
    document.getElementById('demo').innerHTML = "Good Afternoon!";
} else {
    document.getElementById('demo').innerHTML = "Good Evening";
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        document.getElementById('demo').innerHTML = day;
        break;
    case 1:
        day = "Monday";
        document.getElementById('demo').innerHTML = day;
        break;
    case 2:
        day = "Tuesday";
        document.getElementById('demo').innerHTML = day;
        break;
    case 3:
        day = "Wednesday";
        document.getElementById('demo').innerHTML = day;
        break;
    case 4:
        day = "Thursday";
        document.getElementById('demo').innerHTML = day;
        break;
    case 5:
        day = "Friday";
        document.getElementById('demo').innerHTML = day;
        break;
    case 6:
        day = "Saturday";
        document.getElementById('demo').innerHTML = day;
        break;
}
