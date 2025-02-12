//2. Check if the balanced paranthesis

class Paranthesis{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
       return this.stack.pop();
    }

    isEmpty(){
        return this.stack.length===0
    }

}

const checkBalancedParanthesis=(string)=>{
    const paranthesis = new Paranthesis()
    let brackets={")":"(" , "}":"{" , "]":"["}
    for(let i=0;i<string.length;i++){
        if(["{","(","["].includes(string[i])){
            paranthesis.push(string[i]);
        }else{
            if(paranthesis.isEmpty()){
                return false;
            }else{
                if(brackets[string[i]]!==paranthesis.pop()){
                    return false;
                }
            }
        }
    }
    return paranthesis.isEmpty()

}

console.log(checkBalancedParanthesis("[{{}}]"))
