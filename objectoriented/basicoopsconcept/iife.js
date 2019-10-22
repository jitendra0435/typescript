//iife example
(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
    })();



//High order functions
    const arr1 = [1, 2, 3];
    const arr2 = arr1.map(function(item) {
      return item * 2;
    });
    console.log(arr2);

//Hoisting example
    (()=>{
    x=8;
    var x;
    console.log(x);
    })();