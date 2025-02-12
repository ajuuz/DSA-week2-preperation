//4. Merge Sort

// Its an Sorting method in which . a whole array is divided into subarrays. and it repeats until it reaches to arrays with length 1;
// by checking the first element of the both corresponding left and right arrays . the smallest one will be shifted and pushed to a new sorted array
// repeating the algorithm result a whole sorted array



const MergeSort = (arr)=>{
    if(arr.length<2) return arr;

    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);

    return Merge(MergeSort(leftArr),MergeSort(rightArr))
}

const Merge=(leftArr,rightArr)=>{

    const sortedArr=[];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]>rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr,...leftArr,...rightArr]
}



console.log(MergeSort([9,8,7,6,5,4,3,2]))


//O(nlogn) - time complexity