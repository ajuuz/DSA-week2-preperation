//1. Check if the string is pallindrome

class Pallindrome{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
       return this.stack.pop();
    }

    display(){
        console.log(this.stack);
    }

    peek(){
        console.log(this.stack[this.stack.length-1])
    }
}


const pallindromeChecker = (string)=>{
    const pallindrome = new Pallindrome();
    let reversed =""

    for(let char of string){
        pallindrome.push(char);
    }

    for(let i=0;i<string.length;i++){
        reversed+=pallindrome.pop()
    }

    return string === reversed;
}

console.log(pallindromeChecker("malayalam"))

// output

//malayalam - true
//table - false