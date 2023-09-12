function My_First_Function () {                                     //Defining a function and naming it
    var sentence = "This is what happens when you click good!";     //Defining a variable and giivng it a string value
    sentence += " You clicked really good.";                        //Defining a variable and giivng it a string value and using += operator
    document.getElementById("Concatenate").innerHTML = sentence;
}