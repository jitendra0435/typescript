var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Utility = require("../utility");
var fs = require("fs");
var obj = fs.readFileSync("clinique.json");
var object = JSON.parse(obj);
var clinique = /** @class */ (function () {
    function clinique() {
        this.appoitment = [];
        this.count = 0;
    }
    clinique.prototype.searchdoctor = function () {
        for (var i = 0; i < object.doctor.length; i++) {
            console.log(object.doctor[i].doctor_name);
        }
        console.log("You are choosing doctor");
        console.log("1:DoctorName");
        console.log("2:Doctor_id");
        console.log("3:doctor_specialization");
        console.log("4:doctor_availability");
        console.log("Enter 5 for Main Menu");
        this.count;
        var options = Utility.inputInt();
        switch (options) {
            case 1:
                console.log("Enter the  doctor_name ");
                var found = false;
                var doctor_fullname = Utility.inputString();
                for (var i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].doctor_name == doctor_fullname) {
                        console.log(object.doctor[i]);
                        found = true;
                    }
                }
                if (found == false)
                    console.log("Record not found");
                break;
            case 2:
                console.log("Enter the  doctor_id ");
                var found = false;
                var doctor_id = Utility.inputInt();
                for (var i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].id == doctor_id) {
                        console.log(object.doctor[i]);
                        found = true;
                    }
                }
                if (found == false)
                    console.log("Record not found");
                break;
            case 3:
                console.log("Enter the  doctor_specialization ");
                var found = false;
                var doctor_specialization = Utility.inputString();
                for (var i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].specialization == doctor_specialization) {
                        console.log(object.doctor[i]);
                        found = true;
                    }
                }
                if (found == false)
                    console.log("Record not found");
                break;
            case 4:
                console.log("Enter AM or PM or BOTH for checking doctor availability");
                var doctor_availability = Utility.inputString().toUpperCase(), bound = 0;
                for (var i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].Availability == doctor_availability) {
                        console.log(object.doctor[i]);
                        bound++;
                    }
                }
                if (bound == 0)
                    console.log("No doctor available at " + doctor_availability);
                break;
            case 5:
                return false;
            default:
                console.log("Invalid choice");
                return;
        }
    };
    clinique.prototype.appointment = function () {
        console.log("Enter the patient name");
        var patient_fullname = Utility.inputString(), bound = 0;
        for (var i = 0; i < object.Patient.length; i++) {
            if (object.Patient[i].patient_name == patient_fullname) {
                console.log(object.Patient[i]);
                bound++;
            }
        }
        if (bound <= 0) {
            console.log("Please enter proper name");
            return;
        }
        console.log("Enter the options");
        console.log("Enter 1 for doctor_name");
        console.log("Enter 2 for Main Menu");
        var options = Utility.inputInt();
        switch (options) {
            case 1:
                for (var i = 0; i < object.doctor.length; i++) {
                    console.log(object.doctor[i].doctor_name + " is a specialist in " + object.doctor[i].specialization);
                    console.log();
                }
                console.log("Enter the  doctor_name ");
                var doctor_fullname = Utility.inputString();
                for (var i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].doctor_name == doctor_fullname) {
                        if (this.appoitment.length <= 4) {
                            this.appoitment.push({ doctor_fullname: doctor_fullname, patient_fullname: patient_fullname });
                            console.log(this.appoitment.length);
                        }
                        else {
                            for (var i_1 = 0; i_1 < this.appoitment.length; i_1++) {
                                if (this.appoitment[i_1].doctor_fullname == doctor_fullname) {
                                    this.count++;
                                }
                                if (this.count <= 4) {
                                    this.appoitment.push({ doctor_fullname: doctor_fullname, patient_fullname: patient_fullname });
                                }
                            }
                        }
                        console.log(this.appoitment);
                        console.log(this.count);
                        if (this.count > 4) {
                            console.log("No appointment can book for " + doctor_fullname + " doctor ||Please try tommorrow");
                        }
                        break;
                    }
                }
            case 2:
                return false;
            default:
                console.log("Invalid choice");
                return;
        }
    };
    return clinique;
}());
var clinique1 = /** @class */ (function (_super) {
    __extends(clinique1, _super);
    function clinique1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    clinique1.prototype.searchpatient = function () {
        console.log("You are choosed Patient for Search:");
        console.log("search according to->");
        console.log("1: patient_name");
        console.log("2: patient_id");
        console.log("3: patient_phone_number");
        console.log("4:Main Menu");
        var options = Utility.inputInt();
        switch (options) {
            case 1:
                console.log("Enter the  patient_name ");
                var patient_fullname = Utility.inputString(), bound = 0;
                for (var i = 0; i < object.Patient.length; i++) {
                    if (object.Patient[i].patient_name == patient_fullname) {
                        console.log(object.Patient[i]);
                        bound++;
                    }
                    if (bound <= 0) {
                        console.log("Please enter proper name");
                        return;
                    }
                }
                break;
            case 2:
                console.log("Enter the  patient_id ");
                var found = false;
                var patient_id = Utility.inputInt();
                for (var i = 0; i < object.Patient.length; i++) {
                    if (object.Patient[i].id == patient_id) {
                        console.log(object.Patient[i]);
                        found = true;
                    }
                }
                if (found == false)
                    console.log("Record not found");
                break;
            case 3:
                console.log("Enter the patient_phone_number ");
                var found = false;
                var patient_mobilenumber = Utility.inputInt();
                for (var i = 0; i < object.Patient.length; i++) {
                    if (object.Patient[i].mobile_number == patient_mobilenumber) {
                        console.log(object.Patient[i]);
                        found = true;
                    }
                }
                if (found == false)
                    console.log("Record not found");
                break;
            case 4:
                return false;
            default:
                console.log("Invalid choice");
                return;
        }
    };
    return clinique1;
}(clinique));
module.exports = {
    clinique1: clinique1
};
