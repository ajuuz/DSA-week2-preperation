//2 Stack using Linked List


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack2{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(value){
        const node = new Node(value);
        if(!this.isEmpty()){
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    pop(){
        if(this.isEmpty()){
            return console.log("stack is empty");
        }

        this.head = this.head.next;
        this.size--;
    }

    peek(){
        if(this.isEmpty()) return console.log("stack is empty")

        return console.log(this.head.value);
    }

    display(){

        if(this.isEmpty()) return console.log("stack is empty")
        
        let curr = this.head;
        let stackValues =""
        while(curr){
            stackValues+=`${curr.value} `
            curr = curr.next;
        }
        return console.log(stackValues)
    }

    isEmpty(){
        return this.size === 0 
    }

    getSize(){
        return this.size;
    }
}

const stack2 = new Stack2();

stack2.push(10)
stack2.push(20)
stack2.push(30)
stack2.push(40)
stack2.push(50)
stack2.pop()
stack2.pop()
stack2.peek()
stack2.display()