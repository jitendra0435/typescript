class Stack { 
    constructor() 
    { 
    this.items = [];  
    }
    //for pushing elements into queue
    push(element) 
    {  
        if(element==undefined||element<0)
        { 
         console.log("!!please enter correct value!!");
         return null;
        }  
    this.items.push(element);    
    } 
     //for poping elements out of stack
    pop() 
    { 
    
    return this.items.pop(); 
    } 
    //for checking empty string
    isEmpty() 
    { 
    if(this.items.length == 0 )
    {
    return true;
    }
    }

    //for printing the stack
    printStack() 
    { 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
    str += this.items[i] + " "; 
    return str; 
    
    } 
}
    module.exports={
    Stack
     }