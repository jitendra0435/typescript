class Deque {
    constructor() {
        this.items = [];
    }
  //for checking element is empty
    isEmpty() {
        return this.items.length==0;
    }
  // for addinng elements at front
    addFront(item) {
        if(item==undefined||item<=0)
        { 
         console.log("!!please enter correct value!!");
         return null ;
        }
        this.items.unshift(item);
    }
  //for adding elements at rear
    addRear(item) {
        if(item==undefined||item<=0||item==null)
        { 
         console.log("!!please enter correct value!!");
         return null ;
        }
        this.items.push(item);
    }
  //for removing elements at front
    removeFront() {
        return this.items.shift();
    }
  // for removing elements at rear
    removeRear() {
        return this.items.pop();
    }
  //for getting size elements
    size() {
        return this.items.length;
    }
    // for printing queue
    printQueue()
    {  
        
        var str=" ";
        for(let i=0;i<this.items.length;i++)
        {
            str+=this.items[i]+" ";
        }
        return str;
    }
}
module.exports={
    Deque
}