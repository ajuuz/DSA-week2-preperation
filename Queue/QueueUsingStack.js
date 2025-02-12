// Here i am going to implement Queue using stack data structure.



class QueueUsingStack{

    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        if(this.stack2.length===0){
            if(this.stack1.length===0){
                return console.log("queue is empty")
            }

            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    display(){
        console.log([...this.stack2.reverse(),...this.stack1])
    }
}

const queueUsingStack = new QueueUsingStack()

queueUsingStack.enqueue(10)
queueUsingStack.enqueue(20)
queueUsingStack.enqueue(30)
queueUsingStack.dequeue()
queueUsingStack.enqueue(40)
queueUsingStack.display()