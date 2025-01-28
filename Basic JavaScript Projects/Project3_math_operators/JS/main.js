




function addition_Function () {                                     //Defining a function and naming it
    var A = 2 + 2;                                                  //Defining a variable including an operator
    document.getElementById("Math_1").innerHTML = " 2 + 2 = " + A   //Putting the values of the variables into
}                                                                   //the HTML elementFromPoint by id

function subtraction_Function () {                                  // Same
    var S = 5 - 2;
    document.getElementById("Math_2").innerHTML = " 5 - 2 = " + S
}

function division() {                                               // Same
    var D = 48 / 6;
    document.getElementById("Math_3").innerHTML = " 48 / 6 = " + D
}

function multiply() {                                               // Same
    var M = 48 * 6;
    document.getElementById("Math_9").innerHTML = " 48 * 6 = " + M
}

// Modulus Operator //
function remainders() {                                             // Same
    var R = 25 % 6;
    document.getElementById("Math_4").innerHTML = "When you divide 25 by 6 you have a remainder of " + R
}

// negation operator returns the opposite of something // 
// is there an actual function occuring here? //
function negation_Operator () {
    var X = 10;
    document.getElementById("Math_5").innerHTML = "So, 10 returns " + -X
}

function increment_Operator () {
    var I = 10;
    I++;
    document.getElementById("Math_6").innerHTML = I
}

function decrement_Operator () {
    var DD = 10;
    DD--;
    document.getElementById("Math_7").innerHTML = DD
}
// math.random //
window.alert(Math.random() * 100)       // window will display when website opens and displays a number between 0 and 100

// round to nearest integer //
function rounding () {
    var NI = 4.567;
    document.getElementById("Math_8").innerHTML = Math.round (NI) + " - Phew!"
}

// multiple operations //
function multiple_operators () {
    var mult_ops = (1+2) * 10 / 2 -5;
    document.getElementById("Math_10").innerHTML = "1 plus 2, multiplied by 10, divided by 2, and then subtracted by 5 equals " + mult_ops;
}