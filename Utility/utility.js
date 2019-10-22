var readline = require('readline-sync');
var validationRule = /^\s{1,}$/;
module.exports = {
  /** 
 * @description input function is used to read readline  sync
 * @var {} 
 */
  input() {
   
    var readline = require('readline-sync')
    return readline;
    
  },
  inputInt()
  {
    let input=parseInt(readline.question("Input  "));
   
    if (input == undefined || input == null || isNaN(input) || validationRule.test(input) == true) {
      console.log("Value is undefined");
      return false ;
    }
    return input;
   
  },
  inputString()
  {
    let input=(readline.question("Input  "));
    if (input == undefined || input == null || !isNaN(input) || validationRule.test(input) == true) {
      console.log("Value is undefined");
      return false ;
    }
    else
    {

    return input;
    }
  },

  /** 
   * @description Array2d function to create 2D array  
   * @var {number,number} row,col
   */

  Array2d(row, col) {
    var Utility = require('./utility');
    var readline = Utility.input()
    var geek = new Array(row);
    for (let k = 0; k < row; k++) {
      console.log(geek);
    }
    for (let k = 0; k < col; k++) {
      geek[k] = new Array(col);
      console.log(geek[k]);
    }
    console.log("enter the number");
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        geek[i][j] = readline.question(" ");
      }
    }
    console.log("enter the output");
    console.log(geek);
    return geek;
  },

  /** 
   * @description  anagram function isused to check whether both the strings are anagram or not
   * @var {string,string}str,str1
   */
  anagram(str, str1) {
    let a = 0;
    if (str.length != str1.length) {
      console.log(str + " " + " " + str1 + " are not anagram");
      return false;
    }
    else {
      var string1 = str.toLowerCase().split('').sort().join('');
      var string2 = str1.toLowerCase().split('').sort().join('');
      for (var i = 0; i < str.length; i++) {
        if (string1[i] == string2[i]) {
          a++;
        }
        else { }
      }
      if (a == string1.length) {
        console.log(str + " " + " " + str1 + " are anagaram ");
        return true;
      }
      else {
        console.log(str + " " + " " + str1 + " are not anagram");
        return false;
      }

    }
  },

  /** 
   * @description  couponNumberGenerator is used to create a random coupon every new time
   * @var {number}num
   */
  couponNumberGenerator(num) {
    if (isNaN(num)) {
      console.log("enter only  number")
    }
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "s", "i", "j", "k", "l", "m", "n", "o", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var coupon = "";
    if (num > 0) {
      var random = (Math.random() * num);

      while (random > 0) {
        coupon += letters[Math.floor(random % letters.length)];
        random = Math.floor(random / letters.length);
      }
      console.log("Coupon: " + coupon);
    }
    else {
      return false;

    }
    return true;
  },

  /** 
   * @description  harmonic function is used to calculate harmonic values
   * @var {number}str
   */
  harmonic(str) {
    if (isNaN(str)) {
      console.log("enter only  number")
    } var add = 0;
    if (str > 0) {
      for (var i = 1; i <= str; i++) {
        add = add + 1.0 / i;
      }
      console.log(add);
      return true;
    }
    return false;
  },




  /** 
   * @description  Gamble function is used to calculate no of wins and loss
   * @var {number,number,number}goal,stack,n
   */
  Gambler(goal, stack, n) {
    if (stack < 0) {
      return false;
    }
    else {
      var bet = 0;
      let loss = 0;
      let win = 0;
      for (let i = 0; i < n; i++) {
        var cash = stack;
        while (cash > 0 && cash < goal) {
          bet++;
          if (Math.random() < 0.5)
            cash++;
          else
            cash--;
        }
        if (cash == goal)
          win++;
      }
      loss = n - win;
      console.log("no of wins " + win);
      let perwin = (win / n) * 100;
      console.log("no of win percentage " + perwin);
      let perloss = (loss / n) * 100;
      console.log("no of loss percentage " + perloss);
      return true;
    }
  },


  /** 
   * @description  leap year function to check whether the year is leap year or not
   * @var {number} year
   */
  leapYear(year) {
    if (year <= 0) {
      return false;
    }
    else {
      if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) {
        console.log("leap year", year);
      }
      else {
        console.log(year + " is not leap year");
      }
      return true;
    }
  },


  /** 
   * @description  stringrep function to replace a string with another string
   * @var {string,string}string1,string2
   */
  stringrep(string1, string2) {
    if (string2.length <= 3) {
      console.log("enter character more than 3");
      return false;
    }
    else {
      var arr = string1.split(" ");
      var replacedString = string1.replace('<<UserName>>', string2);
      var arrChanged = replacedString.split(" ");
      console.log(arrChanged);
      return true;
    }
  },

  /** 
   * @description  prime function is declared to use to calculate prime number
   * @var {number}prime
   */
  prime(str) {
    if (isNaN(str)) {
      console.log("enter only  number")
    }
    if (str < 0) {
      return -1;
    }
    let add = 0;
    let increment = " ";
    for (var i = 1; i <= str; i++) {
      for (var num = 1; num <= i; num++) {
        if (i % num == 0) {
          add++;
        }
      }
      if (add == 2) {
        add = 0;
        increment = increment + " " + i;
      }
      else {
        add = 0;
      }
    }
    console.log(increment);
    return increment;
  },

  isPrime(str) {
    let count = 0;
    if (str > 0) {
      for (let i = 1; i < 1000; i++) {
        if (str % i == 0) {
          count++;
        }
      }
    }
    if (count == 2) {

      count = 0;

      return true;



    }

  },
  /** 
   * @description  palindrome function is to calculate the palindrome numbers
   * @var {array} array
   */
  palindrome(array) {
    var increment = " ";
    for (let i = 2; i < array.length; i++) {
      var number = array[i];
      var num1 = number;
      var final = 0;
      while (number != 0) {
        let rem = Math.floor(number % 10);
        number = Math.floor(number / 10);
        final = final * 10 + rem;
      }
      if (final == num1) {
        increment = increment + ' ' + num1;
      }
    }
    console.log("palindrome nos are");
    console.log(increment);
  },

  /** 
   * @description  flipcoin function is used to calculate the no of heads and tails
   * @var {number}flip
   */
  flipCoin(flip) {
    if (isNaN(flip)) {
      console.log("enter only  number")
    }
    if (flip <= 0) {
      return false;
    }
    else {
      var tail = 0;
      var head = 0;
      for (var i = 0; i < flip; i++) {
        if (Math.random() > 0.50) {
          tail++;
        }
        else { head++; }
      }
      console.log("no of heads " + head);
      console.log("no of tails " + tail);
      var percentageHead = (head / flip) * 100;
      var percentageTail = (tail / flip) * 100;
      console.log("no of percentage of head " + percentageHead);
      console.log("no of percentage of tail " + percentageTail);
      return true;
    }
  },

  /** 
   * @description  quadratic class is used to calculate the value of roots
   * @var {number,number,number} a,b,c
   */
  quadratic(a, b, c) {
    var delta = Math.abs(b * b - 4 * a * c);

    console.log("delta value is", delta);
    var sqrt = Math.sqrt(delta);
    console.log("sqrt value is", sqrt);
    var root1 = (-b + sqrt / 2 * a);
    var root2 = (-b - sqrt / 2 * a);
    console.log(root1);
    console.log(root2);
    return 1;
  },

  /** 
   * @description  bubbblesort is used to sort an array using bubblesort serach
   * @var {number,array} row,arr
   */
  bubbleSort(row, arr) {
    if (row <= 0) {
      return false;
    }
    else {
      for (let i = 0; i < row - 1; i++) {
        for (var j = 0; j < row - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      console.log(arr);
      return true;

    }

  },

  /** 
   * @description insertionsort function is used to sort an array using insertionsort search
   * @var {number,array} row,arr
   */
  insertionSort(row, arr) {
    if (isNaN(row)) {
      console.log("enter only  number")
    }
    console.log(arr);
    for (var i = 1; i < row; i++) {
      var temp = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
    }
    console.log(arr);
  },

  /** 
   * @description  array1d is used to declare 1D array 
   * @var {number} row
   */

  array1D(row) {
    var Utility = require('./utility');
    var readline = Utility.input()
    let arr = new Array(2);
    console.log("enter the number");
    for (let i = 0; i < row; i++) {
      arr[i] = readline.question("");
    }
    return arr;
  },

  /** 
   * @description  Atm function is used to calculate the fewest notes to return
   * @var {number}amount
   */
  Atm(amount) {
    let arr = ['1', '2', '5', '10', '20', '50', '100', '200', '500', '2000'];
    if (isNaN(amount)) {
      console.log("enter only the  number ")
    }
    else {

    }
    if (amount > 0) {
      for (let i = arr.length - 1; i > 0; i--) {
        if (amount >= arr[i]) {
          sum = Math.floor(amount / arr[i]);
          amount = amount - arr[i] * sum;
          console.log("The notes to be returned" + arr[i] + "*" + sum);
        }
      }
      return true;
    }
    else {
      a++;
      return false;
    }
  },

  /** 
   * @description  temperatureconversion function is declared to use to convert farheniet 
   * into celcius and vice versa
   * @var {number} farheniet
   */
  temperatureConversion(farheniet) {
    if (isNaN(farheniet)) {
      console.log("enter only  number")
    }
    var celcius = (farheniet - 32) * 5 / 9;
    var farhenit = (celcius * 5 / 9) + 32;
    console.log(celcius);
    console.log(farhenit);
  },

  /** 
   * @description Anagram function is used to check both the string are equal or not
   * @var {array,array} str,str1
   */
  Anagram: function (str1, str2) {
    var string = "";
    if (str1.length != str2.length)
      return false;
    else {
      var string1 = [];
      var string2 = [];
      string1 = str1.split('').sort().join('');

      string2 = str2.split('').sort().join('');

      for (var i = 0; i < str1.length; i++) {
        if (string1[i] != string2[i]) {
          return false;
        }
      }

      return true;
    }
  },


  /** 
   * @description  binaryseach function is used to find an element using binary search recursive approach
   * @var {array,number,number,number} arr,x,start,end
   */
  binarysearch: function recursivefunction(arr, x, start, end) {

    if (start > end) {
      console.log(x);
      return false;
    }
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] == x) {

      return true;
    }
    if (arr[mid] > x) {

      return recursivefunction(arr, x, start, mid - 1);

    }
    if (arr[mid] < x) {

      return recursivefunction(arr, x, mid + 1, end);
    }
  },



}
