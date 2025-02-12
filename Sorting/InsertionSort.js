// 2. Insertion Sort

// - Another way of sorting in which we virtually divide the array into sorted and unsorted part.
// - Then we compare unsorted element with all sorted element
// - if sorted elements are smaller than the selected element
// - check for the next unsorted element
// - if unsorted element is smaller , shift the larger sorted element to the right
// - insert the selected element at the right index
// - repeat till all the unsorted elements are placed in the right order

const insertionSort = (arr) =>{

    for(let i=1;i<arr.length;i++){
        let numToInsert = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]<numToInsert){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numToInsert;
    }
}

const arr=[1,2,3,4,5,6,7,8,9];
insertionSort(arr);
console.log(arr)