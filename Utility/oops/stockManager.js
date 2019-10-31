var fs = require('fs');
var Utility = require("../utility");
var obj = fs.readFileSync("company.json");
var obj1 = fs.readFileSync("user.json");
var company = JSON.parse(obj);
var user = JSON.parse(obj1);
var stockAccount = /** @class */ (function () {
    function stockAccount() {
        var _this = this;
        this.valueOf = function () {
            console.log(user);
            for (var i = 0; i < user.stocks.length; i++) {
                _this.totalprice += user.stocks[i].shares;
            }
            console.log(_this.totalprice);
        };
        this.buy = function () {
            console.log(user);
            console.log(company);
            console.log("Enter share name");
            var company_name = Utility.inputString();
            if (!company_name == true) {
                return;
            }
            console.log("Enter the number of shares");
            var shares = Utility.inputInt();
            if (shares == false) {
                return;
            }
            for (var i = 0; i < company.shares.length; i++) {
                if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                    var quantity = shares;
                    company.shares[i].shares = company.shares[i].shares - quantity;
                    var price = company.shares[i].price;
                    user.stocks.push({ company_name: company_name, shares: shares, price: price });
                }
            }
        };
        this.sale = function () {
            console.log(company);
            console.log(user);
            console.log("Enter Stock_Name");
            var company_name = Utility.inputString();
            if (company_name == false) {
                return;
            }
            console.log("Enter Number of Stocks");
            var shares = Utility.inputInt();
            if (shares == false) {
                return;
            }
            for (var i = 0; i < user.stocks.length; i++) {
                if (user.stocks[i].company_name == company_name && user.stocks[i].shares > shares) {
                    var quantity = shares;
                    user.stocks[i].shares = user.stocks[i].shares - quantity;
                }
            }
            for (var i = 0; i < company.shares.length; i++) {
                if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                    var quantity = shares;
                    company.shares[i].shares = company.shares[i].shares + quantity;
                }
            }
        };
        this.save = function () {
            fs.writeFileSync("user.json", JSON.stringify(user));
            fs.writeFileSync("company.json", JSON.stringify(company));
            console.log("file is created");
        };
        this.print = function () {
            console.log(user);
            console.log(company);
        };
        this.totalprice = 0;
    }
    return stockAccount;
}());
module.exports = {
    stockAccount: stockAccount
};
