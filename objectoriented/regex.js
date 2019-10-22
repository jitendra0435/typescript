
/********************************************************************************************
*Execution    :  default node     cmd> node regex.js.
*
*Purpose      :  to understand regular expression
*
*@description  
*
*@file        : regex.js.
*@overview    : regex module to replace a value and test an regular expression on it.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/** 
 * @description  variable is declared to use to acquire Utility class
 * @var {input} Utility
 */
var Utility = require("../Utility/utility");

/** 
 * @description  variable is declared to use to acquire input function
 * @const {input} readline
 */
var readline=Utility.input();
//regex function
regex = () => {
   /** 
   * @description  variable is declared to use to acquire string class
   * @var {string} string
   */
   let string = `Hello <<name>>, we have your full name as <<full name>> in our system. 
    Your contact number is 91­xxxxxxxxxx.Please let us know in case of any clarification.
    Thank you BridgeLabz,01/01/2016.`
   
   //regex test cases.
   let fullNamePattern = /^[a-z A-Z]{1,40}$/;
   let numberPattern = /^\d{10}$/;
   let datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
   let testregex = /^[a-zA-z]{10}$/;
  
   console.log("enter the name ");
   /** 
 * @description  variable is declared to use to acquire name 
 * @const {string} name
 */
   let name = Utility.inputString();
   if (testregex.test(name) == true || name == false) {
      console.log("enter again");
      return;
   }
   console.log("enter full name");
   /** 
 * @description  variable is declared to use to read full_name
 * @const {string} full_name
 */
   let full_name = Utility.inputString();
   if (fullNamePattern.test(full_name) == false|| full_name == false) {
      console.log("enter again");
      return;
   }
   console.log("enter the phone_number");
   /** 
 * @description  variable is declared to use to read number
 * @const {int} number
 */
   let number = Utility.inputInt();
   if (numberPattern.test(number) == false|| number == false) {
      console.log("enter again");
      return;
   }
   /** 
 * @description  variable is declared to use to read DATE
 * @const {string} date
 */
   let date = readline.question("enter the date");
   if (date == null || date == undefined || datePattern.test(date) == false) {
      console.log("enter again");
      return;
   }
   /** 
 * @description  variable is declared to use to print result
 * @const {string} result
 */
   var result = string.replace("<<name>>", name).replace("<<full name>>", full_name).replace("91­xxxxxxxxxx", number).replace("01/01/2016", date);
   console.log(result);

}
//call regex
regex();



