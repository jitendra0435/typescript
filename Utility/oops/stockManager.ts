
var fs:any = require('fs');
var Utility = require("../utility");
var obj :any= fs.readFileSync("company.json");
var obj1:any = fs.readFileSync("user.json");
var company:any= JSON.parse(obj);
var user:any= JSON.parse(obj1);

interface stock1
{
   totalprice:number;
   valueOf():any;
   buy():any;
   sale():any;
   save():any;
   print():any;
   add?():any;
}
class stockAccount implements stock1
{

    totalprice:number;

    constructor() {
      
        this.totalprice = 0;
    }
  
    valueOf = () => {
        console.log(user);
        for (let i = 0; i < user.stocks.length; i++) {
            this.totalprice += user.stocks[i].shares;
        }
        console.log(this.totalprice);
    }
 
    buy = () => {
        console.log(user);
        console.log(company);
        console.log("Enter share name");
        var company_name:string = Utility.inputString();
        
        if (!company_name == true) {
           
            return;
        }
        console.log("Enter the number of shares");
        var shares:number = Utility.inputInt();
        for (let i = 0; i < company.shares.length; i++) {
            if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                var quantity = shares;
                company.shares[i].shares = company.shares[i].shares - quantity;
                let price = company.shares[i].price;
                user.stocks.push({ company_name, shares, price });

            }
        }
       
    }
    sale = () => {
        
        console.log(company);
        console.log(user);
        console.log("Enter Stock_Name");
        var company_name:string = Utility.inputString();
        
        console.log("Enter Number of Stocks");
        var shares:number= Utility.inputInt();
        for (let i = 0; i < user.stocks.length; i++) {
            if (user.stocks[i].company_name == company_name && user.stocks[i].shares > shares) {
                var quantity = shares;
                user.stocks[i].shares = user.stocks[i].shares - quantity;
            }
        }
        
        for (let i = 0; i < company.shares.length; i++) {
            if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                var quantity = shares;
                company.shares[i].shares = company.shares[i].shares + quantity;
                
            }
        }
    }
    save=()=>
    { 
        fs.writeFileSync("user.json",JSON.stringify(user));
        fs.writeFileSync("company.json",JSON.stringify(company));
        console.log("file is created");
    }
    print=()=>
    {
        console.log(user);
        console.log(company);

    }

}
module.exports={
    stockAccount
}