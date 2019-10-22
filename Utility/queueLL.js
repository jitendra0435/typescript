

class Node{
    constructor(elements)
        {
      this.elements=elements;
      this.next=null;
        }
    }
    class Queue1
    {
        constructor()
        {
            this.front=null;
            this.rear=null;
        }

        addElement(element)
        {
            var node= new Node(element);
            if(this.front==null)
            {
                this.front=node;
                this.rear=node;
            }
            else{
                this.rear.next=node;
                this.rear=node;
            }

        }
        PrintQueue()
        {   
            var current=this.front;
            console.log(current);
            while(current!=null)
            {
                console.log(current.elements);
               current=current.next;
            }
        }
    }
    module.exports={
        Queue1
    }

