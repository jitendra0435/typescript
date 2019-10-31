var Utility = require("../Utility/utility");
var src = require("../Utility/oops/stockManager");
var i = 0;
var stock = new src.stockAccount();
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.oprations = function () {
        while (true) {
            console.log("Welcome:Stock Report");
            console.log("enter choice from below");
            console.log("1: valueOf");
            console.log("2: Buy the share");
            console.log("3: sale");
            console.log("4: Save");
            console.log("5: Print");
            console.log("6: Exit");
            var choice = Utility.inputInt();
            switch (choice) {
                case 1:
                    stock.valueOf();
                    break;
                case 2:
                    stock.buy();
                    break;
                case 3:
                    stock.sale();
                    break;
                case 4:
                    stock.save();
                    break;
                case 5:
                    stock.print();
                    break;
                case 6:
                    false;
                    return;
                default:
                    console.log("Invalid choice");
                    break;
            }
        }
    };
    return Manager;
}());
var op1 = new Manager();
op1.oprations();
