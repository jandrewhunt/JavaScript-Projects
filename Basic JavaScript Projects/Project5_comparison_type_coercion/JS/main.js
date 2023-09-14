document.write("Hello!" + "<BR>");
document.write(typeof "Giraffe" + "<BR>");      // using typeof operator - data type of a variable
document.write(typeof 5 + "<BR>");
document.write(typeof true + "<BR>");
document.write(typeof 2.34343434345 + "<BR>");

document.write("five" + 5  + "<BR>") //type coercion operator
document.write("10" + 5 + "<BR>")
document.write(5 + "10" + "<BR>")
document.write(5 + 5 + "<BR>")

document.write((0/0) + "<BR>"); // returns Not a Number - NaN
document.write(isNaN ('hello') + "<BR>"); // determines NaN or not

document.write(isNaN ("000dd005") + "<BR>");
document.write(isNaN (5) + "<BR>");

document.write((212E3103) + "<BR>"); // infinity returns beyond 1.8E308
document.write((-23E310) + "<BR>");

document.write((10 > 2) + "<BR>"); //using Boolean logic to return true or false
document.write((12 > 14) + "<BR>");

console.log(2 + 2); // console method to display date in the console within the browser
console.log("Hello")
console.log(10 < 10)

document.write((10 == 2) + "<BR>"); // == checks that data on one side equals the data on the other
document.write((10 == (5 + 5)) + "<BR>");

document.write((10 > 2) + "<BR>");

document.write((10 === 2) + "<BR>"); // === checks that the data and the type are the same on both sides 
document.write((12 === 12) + "<BR>");
document.write((10 === "five + five") + "<BR>");
document.write((1.23E4 === "The Big Sleep") + "<BR>");

document.write((10>2 && 9>3) + "<BR>");  //  && returns true if both are true
document.write((10<2 && 9>3) + "<BR>");
document.write((10<2 || 9>3) + "<BR>");  // || returns true if at least one are ture
document.write((10<2 || 2>3) + "<BR>");

function not_Function (){                  // ! determines logic and returns the opposite
    document.getElementById("Not").innerHTML = !(20>10);
}