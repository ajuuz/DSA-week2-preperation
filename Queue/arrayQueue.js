// Queue is a data structure which follows FIFO first in first out

//Queue can be implemented using Array and Linked List and object

//1  Queue Using Array;

class Queue1{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.unshift(value);
    }

    dequeue(){
        this.queue.pop()
    }

    display(){
        console.log(this.queue)
    }

    peek(){
        console.log(this.queue[0])
    }
}

const queue1 = new Queue1();
queue1.enqueue(10)
queue1.enqueue(20)
queue1.enqueue(30)
queue1.enqueue(40)
queue1.enqueue(50)
queue1.dequeue()
queue1.dequeue()
queue1.dequeue()
queue1.dequeue()
queue1.dequeue()
queue1.dequeue()
queue1.display()