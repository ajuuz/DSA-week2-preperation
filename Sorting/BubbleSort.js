// There are different types of Sorting Algorithm
//that inlcudes

//1 . Bubble Sort

// Its an sorting algorithm in which adjascent elements are swapped if they are in wrong position , and repeat the loop;
// until there is no swapping occurs


const bubbleSort = (arr)=>{
    let swapped;
   do{
    swapped=false;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
            swapped=true;
        }
    }
   }while(swapped)
}

const arr = [9,8,7,6,5,4,3,2,1,2]
bubbleSort(arr);
console.log(arr)

// time complexity - quadratic O(n^2)