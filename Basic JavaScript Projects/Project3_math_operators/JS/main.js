function addNumbers() {
    document.getElementById("Math").innerHTML = 9 + 3;
}

function subtractNumbers() {
  document.getElementById("Math").innerHTML = 10 - 4;
}

function multiplyNumbers() {
    document.getElementById("Math").innerHTML = 6 * 8;
}

function divideNumbers() {
    document.getElementById("Math").innerHTML = 48 / 6;
}

function more_Math() { 
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = (1 + 2) * 10 / 2 -5;
}

function Modulus_Operator() {
  var modulus = 25 % 6;
  document.getElementById("Math").innerHTML = (25 % 6);
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function Increment_Operator() {
    var X = 5;
    X++;
    document.getElementById("Math").innerHTML = X;
}

function Decrement_Operator() {
    var X = 5.25;
    X--;
    document.getElementById("Math").innerHTML = X;
}

function Math_Random() {
    var x = Math.random();
    x*100;
    document.getElementById("Math").innerHTML = x;
}

function Math_Object() {
    var X = Math.round(5.2);
    x = 5.2
    document.getElementById("Math").innerHTML = X;
}

