let string = "231*+9-";


function postfixCalculator(string){

    let stack=[]

    for(let char of string){
        if(!isNaN(char)){
            stack.push(Number(char))
        }else{
            let a = stack.pop()
            let b = stack.pop()

            if(char==='+') stack.push(a+b)
            else if(char==='-') stack.push(a-b)
            else if(char==='/') stack.push(a/b)
            else stack.push(a*b);
        }
    }

    console.log(stack[0])
}


postfixCalculator(string)