let balloon = document.getElementById("balloon");
let size = 200;
let color = "red";

balloon.addEventListener("click", function () {
    size = size + 10;
    if (color == "red") {
        color = "green";
    }
    else if (color == "green") {
        color = "blue";
    }
    else {
        color = "red";
    }
    
    if (size > 420) {
        size = 200;
        color = "red";
    }
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = color;
});

balloon.addEventListener("mouseleave", function () {
    size = size - 5;
    if (size < 200) {
        size = 200;
    }
    if (color == "red") {
        color = "blue";
    }
    else if (color == "blue") {
        color = "green";
    }
    else {
        color = "red";
    }
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = color;
});