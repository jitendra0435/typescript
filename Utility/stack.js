class Node
{
     constructor(data)
     {
         this.data=data;
         this.next=null;
     }
}
class Stack
{
    constructor()
    {
        this.top=null;
    }
 //for pushing elements into queue
    push(data)
    {
        if(data==undefined||data<0||isNaN(data))
        { 
         console.log("!!please enter correct value!!");
         return ;
        }
        
        let node=new Node(data);
        if(this.top)
        {
          node.next=this.top;
          this.top=node;
        }
        else
        {
         this.top=node;
        }

    }
    //for poping elements out of stack
    pop()

    { 
         if(this.top)
        {

        let itempop=this.top;
        this.top=this.top.next;
        
        return itempop.data;
        }
        else
        {
         console.log("stack is empty");
         
        }
    }
    //for printing the stack
    showdata()
    {
        while(this.top!=null)
        {
            let temp=this.top;
            console.log(temp.data);
            this.top=this.top.next;
        }
    }
}
module.exports={
    Stack
}