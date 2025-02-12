//5. selection sort 

//this sorting algorithm focus on repeatedly finding the smallest value and swapping it with the current value

const SelectionSort=(arr)=>{
    for(let i=0;i<arr.length-1;i++)
    {
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }

        if(minIndex!=i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
}

const arr=[9,8,6,7,4,5,3,1,2];

SelectionSort(arr)
console.log(arr)