// 3. Quick Sort

//Its a type of sorting algorithm in which - 
// - first we select a pivot element . in this example the last element
// - iterate the array and push elements lesser than the pivot element to the left array
// - greater elements to right array
// - if the left and right array has more than 1 element then . split the array recursively until touching the base case
// - concatinate the arrays with the pivot element in the each recursion levels


const QuickSort = (arr) =>{
    if(arr.length<2) return arr;

    let pivot = arr[arr.length-1];
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)];
}

const arr=[9,6,5,8,7,2,4];
console.log(QuickSort(arr));
