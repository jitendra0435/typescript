export{}
var fs = require('fs');
var object = fs.readFileSync("./inventory2.json");
var obj = JSON.parse(object);
var Utility1 = require("../utility");
var readline = Utility1.input();

interface inventory
{
   inventory():any;
   rice:string;
   wheat:string;
   pulses:string;

}
class inventoryR implements inventory
{
    rice:string;
    wheat:string;
    pulses:string
    
    constructor()
    {
        this.rice=obj.rice;
        this.wheat=obj.wheat;
        this.pulses=obj.pulses;
        console.log(obj.rice);
        console.log(obj.wheat);
        console.log(obj.pulses);
    }
    inventory() 
    {
        //console.log(obj);
        console.log("Inventory Report");
        console.log("choose option from below");
        console.log("1: Rice");
        console.log("2: wheat");
        console.log("3: pulses");
        let choice:number= parseInt(readline.question("enter the option "));
        let validationRule = /^\s{1,}$/;
        if (choice == undefined || choice == null || isNaN(choice) || validationRule.test('choice') == true) {
            console.log("Value is undefined");
            return false;
        }
        switch (choice) {
    
            case 1: console.log("enter the name  of rice");
                console.log("1:basmati");
                console.log("2:madhur");
                console.log("3:gokul");
                console.log("4:jasmine");
                let choice1:string= (readline.question("enter the rice name"));

                if (choice1 == undefined || validationRule.test(choice1) == true) {
                    console.log("Value is undefined");
                    return false;
                }
                for (let i = 0; i < obj.rice.length; i++) {
                    if (obj.rice[i].name == choice1) {
                        const weight:number = parseInt(readline.question("enter the weight of rice in kgs"));
                        if (weight == undefined || isNaN(weight) || validationRule.test('weight') == true) {
                            console.log("Value is undefined");
                            return false;
                        }
                        const totalprice:number= obj.rice[i].price * weight;
                        console.log(`totalprice of ${obj.rice[i].name} rice of ${weight} is ${totalprice}`);
                        console.log("Do you want continue shopping press y if not press any key");
                        var ans=readline.question();
                        if(ans=='y')
                        {
                           this.inventory();
                        }
                        console.log("Thank you for shopping");
                    }
                }
            
                break;

            case 2: console.log("enter the type of wheat");
                console.log("enter any options");
                console.log("gold");
                console.log("silvercoin");
                console.log("brownwheat");
                let choice2:number = readline.question("||enter the wheat name||");
                if (choice2 == undefined || !isNaN(choice2) || validationRule.test('choice2') == true) {
                    console.log("Value is undefined");
                    return false;
                }
                for (let i = 0; i < obj.wheat.length; i++) {
                    if (obj.wheat[i].name == choice2) {
                        const weight:number= parseInt(readline.question("enter the weight of wheat in kgs"));
                        if (weight == undefined || isNaN(weight) || validationRule.test('weight') == true) {
                            console.log("Value is undefined");
                            return false;
                        }
                        const totalprice:number = obj.wheat[i].price * weight;
                        console.log(`totalprice of ${obj.wheat[i].name} wheat of ${weight}is ${totalprice}`);

                        console.log("Do you want continue shopping press y if not press any key");
                        var ans=readline.question();
                        if(ans=='y')
                        {
                           this.inventory();
                        }
                        console.log("Thank you for shopping");
                    }
                }
                break;


            case 3: console.log("enter the type of pulses");
                console.log("enter any options");
                console.log("enter  dal");
                console.log("enter lentils");
                console.log("enter  peas");
                let choice3:number= readline.question("enter the type of pulse ");
                if (choice3 == undefined || !isNaN(choice3) || validationRule.test('choice3') == true) {
                    console.log("Value is undefined");
                    return false;
                }
                for (let i = 0; i < obj.pulses.length; i++) {
                    if (obj.pulses[i].name == choice3) {
                        const weight:number = parseInt(readline.question("enter the weight of pulses in kgs"));
                        if (weight == undefined || isNaN(weight) || validationRule.test('weight') == true) {
                            console.log("Value is undefined");
                            return false;
                        }
                        const totalprice:number = obj.rice[i].price * weight;
                        console.log(`totalprice of ${obj.pulses[i].name} pulses of ${weight} is ${totalprice}`);

                        console.log("Do you want continue shopping press y if not press any key");
                        var ans=readline.question();
                        if(ans=='y')
                        {
                           this.inventory();
                        }
                        console.log("Thank you for shopping");
                    }
                    
                }
                break;

            default:
                console.log("wrong input");
                return;


        }

    }
}
var in1 = new inventoryR();
in1.inventory();
module.exports = {
    inventoryR


}
