const twoSum=(arr,target)=>{

    let obj={};
    for(let i=0;i<arr.length;i++){
        let a = arr[i]
        let b = target - a;
        if(b in obj){
            return [obj[b],i]
        }
        obj[a]=i;
    }
    
}

const arr=[1,2,2,4,5,6,7,8];
console.log(twoSum(arr,5))