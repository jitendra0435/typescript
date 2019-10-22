
class Queue { 
    constructor() 
    { 
    this.items = [];  
    }
//for entering elemnts into queue
enqueue(element) 
{	
    if(element==undefined||element<0||isNaN(element))
             { 
              console.log("!!please enter correct value!!");
              return null ;
             } 
    this.items.push(element); 
   
} 
//for removing elements from queue
dequeue() 
{ 
	if(this.isEmpty()) 
		return "Underflow"; 
	return this.items.shift(); 
} 

//for checking whether empty or not
isEmpty() 
{ 
	
	return this.items.length == 0; 
} 
//for adding money 
addMoney(money,initialMoney)
{ 
    if(money==undefined||money<=0||isNaN(money))
    { 
     console.log("!!please enter correct value!!");
     return null ;
    }
    initialMoney=initialMoney+money;
    return initialMoney;
}
//for withdrawing money
withdrawMoney(money,initialMoney)
{    
    if(money==undefined||money<0||isNaN(money))
    { 
              console.log("!!please enter correct value!!");
              return null;
    }
    console.log(initialMoney);
    if(money>initialMoney)
    {
        console.log("not enough funds!!!");
        return ;
    }

    {
    
    initialMoney=initialMoney-money;
    return initialMoney;    
    }

}
//for printing queue in reverse
printQueueanagram()
{
    var str = ""; 
    for(var i = this.items.length-1; i >0; i--) 
    { 
        str =str+ this.items[i] +" "; 
    }
    console.log(str);
       
	return str; 

}
//for printing queue 
printQueue() 
{ 
	var str = ""; 
    for(var i = 0; i < this.items.length; i++) 
    { 
        str =str+ this.items[i] +" "; 
    }
    console.log(str);
       
	return str; 
} 

}
module.exports={
    Queue
}