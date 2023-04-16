function add() {
    let firstValue= Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue + secondValue;
    document.getElementById("result").innerHTML = result;
}

function subtract() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue - secondValue;
    document.getElementById("result").innerHTML = result;
}

function multiply() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue * secondValue;
    document.getElementById("result").innerHTML = result;
}

function divide() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue / secondValue;
    document.getElementById("result").innerHTML = result;
}