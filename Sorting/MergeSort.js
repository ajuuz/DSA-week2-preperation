
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


