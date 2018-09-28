var math = 0;
var result = document.querySelector("h1");

document.getElementById("add").addEventListener("click", sumNums);
document.getElementById("subtract").addEventListener("click", subtractNums);

function sumNums() {
    var number;
    number = parseFloat(document.getElementById("input").value);
    math += number;
    result.textContent = `${math}`;
    if (math < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}

function subtractNums() {
    var number;
    number = parseFloat(document.getElementById("input").value);
    math -= number;
    result.textContent = `${math}`;
    if (math < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}