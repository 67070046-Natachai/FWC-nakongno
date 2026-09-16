let left = document.getElementById("left");
let operator = document.getElementById("operator");
let right = document.getElementById("right");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", function() {

    let num1 = Number(left.value);
    let num2 = Number(right.value);
    let op = operator.value;
    let result;

    if (left.value === "" || right.value === "" ||
        !Number.isInteger(num1) || !Number.isInteger(num2) ||
        num1 < 0 || num2 < 0) {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && num2 === 0) {
        alert("It’s over 9000!");
        return;
    }

    if (op === "+") {
        result = num1 + num2;
    }
    else if (op === "-") {
        result = num1 - num2;
    }
    else if (op === "*") {
        result = num1 * num2;
    }
    else if (op === "/") {
        result = num1 / num2;
    }
    else if (op === "%") {
        result = num1 % num2;
    }
    console.log(result)
    alert(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);