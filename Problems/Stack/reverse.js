class ReverseStack{
    constructor(){
        this.stack=[];
    }

    reverse(string){
        let reverseString='';

        for(let char of string){
            this.push(char)
        }

        while(this.stack.length){
            reverseString+=`${this.pop()}`
        }

        console.log(reverseString)
    }


    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }
  
   
}


const reverseStack =new ReverseStack()

reverseStack.reverse('ajmal');