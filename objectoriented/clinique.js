var Utility = require("../Utility/utility");
var fs = require("fs");
var readline = Utility.input();
var obj = fs.readFileSync("clinique.json");
var object = JSON.parse(obj);
var src = require("../Utility/oops/clinique");
var clinique12 = new src.clinique1();
var i = 0;
var operation = /** @class */ (function () {
    function operation() {
    }
    operation.prototype.op = function () {
        while (true) {
            console.log("Welcome to the clinique managment");
            console.log("Enter your choice");
            console.log("1:Doctors");
            console.log("2:Patients");
            console.log("3:Appointment");
            console.log("4:Exit");
            var choice = Utility.inputInt();
            switch (choice) {
                case 1:
                    clinique12.searchdoctor();
                    break;
                case 2:
                    clinique12.searchpatient();
                    break;
                case 3:
                    clinique12.appointment();
                    break;
                case 4:
                    false;
                    return;
                default:
                    console.log("Invalid choice");
                    break;
                    ;
            }
        }
    };
    return operation;
}());
var ob = new operation();
ob.op();
