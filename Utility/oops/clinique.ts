var Utility = require("../utility");
var fs = require("fs");
var obj = fs.readFileSync("clinique.json");
var object = JSON.parse(obj);

class clinique 
{
    appoitment:any[];
    count:any;
    constructor() 
    {
        this.appoitment = [];
        this.count = 0;
    }
    searchdoctor() {
        console.log("List of doctors:");
        for(let i=0;i<object.doctor.length;i++)
        {
         console.log(object.doctor[i].doctor_name);
        }
        console.log("You are choosing doctor");
        console.log("1:DoctorName");
        console.log("2:Doctor_id");
        console.log("3:doctor_specialization");
        console.log("4:doctor_availability");
        console.log("Enter 5 for Main Menu");
        //this.count
        let options:number = Utility.inputInt();
        switch (options) {
            case 1:
                console.log("Enter the  doctor_name ");
                var found:boolean=false;
                var doctor_fullname:string = Utility.inputString();
                for (let i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].doctor_name == doctor_fullname) {
                        console.log(object.doctor[i]);
                        found=true;
                    }
                }
                if(found==false)
                 console.log("Record not found");
                break;
            case 2:
                console.log("Enter the  doctor_id ");
                var found:boolean=false;
                var doctor_id:number = Utility.inputInt();
                for (let i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].id == doctor_id) {
                        console.log(object.doctor[i]);
                        found=true;
                    }
                }
                if(found==false)
                 console.log("Record not found");
                break;

            case 3:
                console.log("Enter the  doctor_specialization ");
                var found:boolean=false;
                var doctor_specialization:string = Utility.inputString();
                for (let i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].specialization == doctor_specialization) {
                        console.log(object.doctor[i]);
                        found=true;
                    }
                }
                if(found==false)
                 console.log("Record not found");
                break;

            case 4:
                console.log(`Enter AM or PM or BOTH for checking doctor availability`);
                var doctor_availability :string= Utility.inputString().toUpperCase(), bound = 0;
                for (let i = 0; i < object.doctor.length; i++) {

                    if (object.doctor[i].Availability == doctor_availability) {
                        console.log(object.doctor[i]);
                        bound++;
                    }
                }
                if (bound == 0)
                    console.log(`No doctor available at ${doctor_availability}`);
                break;
            case 5:
                return false;
            default: console.log("Invalid choice");
                return;
        }

    }
    
    
    appointment() {
        console.log("Enter the patient name");
        var patient_fullname:string= Utility.inputString(), bound = 0;
        for (let i = 0; i < object.Patient.length; i++) {
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
        let options:number= Utility.inputInt();

        switch (options) {
            case 1:
                for (let i = 0; i < object.doctor.length; i++) {
                    console.log(`${object.doctor[i].doctor_name} is a specialist in ${object.doctor[i].specialization}`);
                    console.log();
                }
                console.log("Enter the  doctor_name ");
                var doctor_fullname:string = Utility.inputString();
                for (let i = 0; i < object.doctor.length; i++) {
                    if (object.doctor[i].doctor_name == doctor_fullname) {

                        if (this.appoitment.length <= 4) {
                            this.appoitment.push({ doctor_fullname, patient_fullname });
                            console.log(this.appoitment.length);
                        }
                        else {
                            for (let i = 0; i < this.appoitment.length; i++) {
                                if (this.appoitment[i].doctor_fullname == doctor_fullname)
                                 {
                                    this.count++;

                                 }
                            
                            if (this.count <= 4) {
                                this.appoitment.push({ doctor_fullname, patient_fullname });
                            }}
                        }
                        console.log(this.appoitment);
                        console.log(this.count);
                        if (this.count > 4) {
                            console.log(`No appointment can book for ${doctor_fullname} doctor ||Please try tommorrow`);
                        }
                        break;
                    }
                }
            case 2:
                return false;


            default: console.log("Invalid choice");
                return;
            }
    }  }


    class clinique1 extends clinique
    {
        searchpatient() {
        console.log("You are choosed Patient for Search:");
        console.log("search according to->")
        console.log("1: patient_name");
        console.log("2: patient_id");
        console.log("3: patient_phone_number");
        console.log("4:Main Menu");

        let options:number = Utility.inputInt();
        switch (options) {
            case 1:
                console.log("Enter the  patient_name ");
                var patient_fullname:string = Utility.inputString(),bound=0;
                for (let i = 0; i < object.Patient.length; i++)
                {
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
                var found:boolean=false;
                var patient_id:number = Utility.inputInt();
                for (let i = 0; i < object.Patient.length; i++) {
                    if (object.Patient[i].id == patient_id) {
                        console.log(object.Patient[i]);
                        found=true;
                    }
                }
                if(found==false)
                 console.log("Record not found");
                break;

            case 3:
                console.log("Enter the patient_phone_number ");
                var found=false;
                var patient_mobilenumber:number = Utility.inputInt();
                for (let i = 0; i < object.Patient.length; i++) {
                    if (object.Patient[i].mobile_number == patient_mobilenumber) {
                        console.log(object.Patient[i]);
                        found=true;
                    }
                }
                if(found==false)
                 console.log("Record not found");
                break;
            case 4:
                return false;
            default: console.log("Invalid choice");
                return;

        }
    }
}
module.exports = {
    clinique1
}
