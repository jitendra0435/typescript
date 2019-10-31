var Utility = require("../../Utility/utility");
var readline = Utility.input();
var fs = require('fs');
var obj = fs.readFileSync("./inventory.json");
var object = JSON.parse(obj);
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.inventory1 = function () {
            console.log(object);
            console.log("Welcome to Inventory Managment");
            console.log("Choose->");
            console.log("1: Add");
            console.log("2: Delete");
            var choice = parseInt(readline.question("Enter your choice "));
            var validationRule = /^\s{1,}$/;
            if (choice == undefined || choice == null || isNaN(choice) || validationRule.test(choice) == true) {
                console.log("Value is undefined");
                return false;
            }
            switch (choice) {
                case 1:
                    console.log("Choose->:what you add");
                    console.log("1: Rice");
                    console.log("2: Wheat");
                    console.log("3: Pulses");
                    var choice1 = parseInt(readline.question("Enter the option "));
                    if (choice1 == undefined || choice1 == null || isNaN(choice1) || validationRule.test(choice1) == true) {
                        console.log("Value is undefined");
                        return false;
                    }
                    switch (choice1) {
                        case 1:
                            var name = readline.question("Enter the name of rice product to add");
                            // if (name == undefined || name == null || ! validationRule.test(name) == true) {
                            //   console.log("Value is undefined");
                            //   return false;
                            //}
                            var weight = parseInt(readline.question("Enter the weight of " + name));
                            if (weight == undefined || weight == null || isNaN(weight) || validationRule.test(weight) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            var price = parseInt(readline.question("Enter the price of " + name));
                            if (price == undefined || price == null || isNaN(price) || validationRule.test(price) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            object.rice.push({ name: name, weight: weight, price: price });
                            console.log(object);
                            break;
                        case 2:
                            var name = readline.question("Enter the name of wheat product you want to add");
                            if (name == undefined || name == null || validationRule.test(name) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            var weight = parseInt(readline.question("Enter the weight of " + name));
                            if (weight == undefined || weight == null || isNaN(weight) || validationRule.test(weight) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            var price = parseInt(readline.question("Enter the price of " + name));
                            if (price == undefined || price == null || isNaN(price) || validationRule.test(price) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            object.wheat.push({ name: name, weight: weight, price: price });
                            console.log(object);
                            break;
                        case 3:
                            var name = readline.question("Enter the name of wheat product you want to add");
                            if (name == undefined || name == null || validationRule.test(name) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            var weight = parseInt(readline.question("Enter the weight of " + name));
                            if (weight == undefined || weight == null || isNaN(weight) || validationRule.test(weight) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            var price = parseInt(readline.question("Enter the price of " + name));
                            if (price == undefined || price == null || isNaN(price) || validationRule.test(price) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            object.pulses.push({ name: name, weight: weight, price: price });
                            console.log(object);
                            break;
                        default:
                            console.log("Invalid choice");
                            return;
                    }
                    break;
                case 2:
                    console.log("enter the options given down to delete");
                    console.log("1: Rice");
                    console.log("2: Wheat");
                    console.log("3: Pulses");
                    var choice2 = parseInt(readline.question("Enter the option "));
                    if (choice2 == undefined || choice2 == null || isNaN(choice2) || validationRule.test(choice2) == true) {
                        console.log("Value is undefined");
                        return false;
                    }
                    switch (choice2) {
                        case 1:
                            var name = readline.question("Enter the name of rice product to delete");
                            if (name == undefined || name == null || validationRule.test(name) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            for (var i = 0; i < object.rice.length; i++) {
                                if (object.rice[i].name == name) {
                                    delete object.rice[i];
                                }
                            }
                            console.log(object);
                            break;
                        case 2:
                            var name = readline.question("Enter the name of wheat product you want to delete");
                            if (name == undefined || name == null || validationRule.test(name) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            for (var i = 0; i < object.wheat.length; i++) {
                                if (object.wheat[i].name == name) {
                                    delete object.wheat[i];
                                }
                            }
                            console.log(object);
                            break;
                        case 3:
                            var name = readline.question("Enter the name of pulses product you want to delete");
                            if (name == undefined || name == null || validationRule.test(name) == true) {
                                console.log("Value is undefined");
                                return false;
                            }
                            for (var i = 0; i < object.wheat.length; i++) {
                                if (object.pulses[i].name == name) {
                                    delete object.pulses[i];
                                }
                            }
                            console.log(object);
                            break;
                        default:
                            console.log("Invalid choice");
                            return;
                    }
            }
            fs.writeFileSync("inventory2.json", JSON.stringify(object));
        };
    }
    return Inventory;
}());
module.exports = {
    Inventory: Inventory
};
