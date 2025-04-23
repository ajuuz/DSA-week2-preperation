function checkValidParanthesis(string){

    const brackets = {')':'(',']':'[','}':'{'};
    const stack=[]
    for(let char of string){
        if(['(','{','['].includes(char)){
            stack.push(char)
        }else{
            const pop=stack.pop()
            if(brackets[char]!==pop) return false;
        }
    }
    return stack.length===0
}


let string = '[({[]})][('

console.log(checkValidParanthesis(string))