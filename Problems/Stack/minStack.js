class MinStack{
    constructor(){
        this.stack=[]
        this.minStack=[]
    }

    push(value){
        this.stack.push(value)

        if(this.minStack.length===0 || this.minStack[this.minStack.length-1]>value){
            this.minStack.push(value)
        }
    }


    pop(){
        let removed = this.stack.pop();

        if(this.minStack[this.minStack.length-1]===removed){
            this.minStack.pop();
        }

        return removed;
    }

    getMin(){
        console.log(this.minStack[this.minStack.length-1])
    }
}


const minstack = new MinStack();

minstack.push(40)
minstack.push(50)
minstack.push(60)
minstack.push(20)
minstack.push(30)
minstack.pop()
minstack.pop()
console.log(minstack.stack)
minstack.getMin()