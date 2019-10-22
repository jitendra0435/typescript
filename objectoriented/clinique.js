


var Utility = require("../Utility/utility");

var fs = require("fs");
var readline = Utility.input();
var obj = fs.readFileSync("clinique.json");
var object = JSON.parse(obj);
var src = require("../Utility/oops/clinique");
var clinique = new src.clinique();
    i = 0;
     
while (i == 0) {
    console.log("Enter the choice");
    console.log("Enter 1 for Doctors");
    console.log("Enter 2 for Patient");
    console.log("Enter 3 for Appointment");
    console.log("Enter 4 for Exit")
    let choice = Utility.inputInt();
    switch (choice) {
        case 1: clinique.searchdoctor();
            break;
        case 2: clinique.searchpatient();
            break;
        case 3: clinique.appointment();
            break;
        case 4: i++;
            break;
        default: return;

    }
}