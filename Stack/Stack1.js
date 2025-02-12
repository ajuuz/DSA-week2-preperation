//Stack is a data structure which follows LIFO last in first out principle

//stack also can be implemented using linked list and array and object

//1. Stack using array

class Stack1{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        this.stack.pop();
    }

    display(){
        console.log(this.stack);
    }

    peek(){
        console.log(this.stack[this.stack.length-1])
    }
}

const stack1 = new Stack1();
stack1.push(10)
stack1.push(20)
stack1.push(30)
stack1.push(40)
stack1.push(50)
stack1.push(60)
stack1.pop()
stack1.pop()
stack1.pop()
stack1.push(100)
stack1.pop()
stack1.peek()
stack1.display()