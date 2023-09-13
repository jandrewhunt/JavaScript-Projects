function my_Dictionary() {          //naming function   
    var Baseball_Positions = {      //assigning value to a variable
        P1: "Pitcher",              //creating KVP dictionary
        P2: "Catcher",
        P3: "First Base",
        P4: "Second Base",
        P5: "Third Base",
        P6: "Shortstop",
        P7: "Left Field",
        P8: "Center Field",
        P9: "Right Field",
    };
    delete Baseball_Positions.P2;   // using delete operator
    document.getElementById("Dictionary").innerHTML = Baseball_Positions.P2; //Putting the values of the variables into
}                                                                            //the HTML elementFromPoint by id
                                                                             //"undefined" because that key was deleted