// Here we are going to implement Stack Using Queue

class StackUsingQueue{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
       if(this.isEmpty()) return console.log("no element found");

       while(this.queue1.length > 1){
        this.queue2.push(this.queue1.shift())
       }

       let popped = this.queue1.pop();
       [this.queue1,this.queue2]=[this.queue2,this.queue1];
       return popped;
    }

    display(){
        console.log(this.queue1)
    }


    isEmpty(){
        return this.queue1.length===0
    }
}

const stackUsingQueue = new StackUsingQueue();

stackUsingQueue.push(10)
stackUsingQueue.push(20)
stackUsingQueue.push(30)
stackUsingQueue.push(40)
stackUsingQueue.pop()

stackUsingQueue.display()