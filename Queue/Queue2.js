//2. Queue using Linked List

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue2{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    dequeue(){
        if(this.getSize()===1){
            this.tail=null;
        }
        this.head = this.head.next;
        this.size--;
    }

    display(){
        if(this.isEmpty()) return console.log("Queue is empty");

        let curr=this.head;
        let QueueValues=""
        while(curr){
            QueueValues+=`${curr.value} `
            curr = curr.next;
        }
        return console.log(QueueValues);
    }

    peek(){
        if(this.isEmpty()) return console.log("Queue is empty");
        return console.log(this.tail.value)
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
}

const queue2 = new Queue2();

queue2.enqueue(10)
queue2.enqueue(20)
queue2.enqueue(30)
queue2.enqueue(40)
queue2.dequeue()
queue2.dequeue()
queue2.peek()
queue2.display()