function subSum(arr, startIndex, endIndex) {
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    if(startIndex < 0) {
        startIndex = 0;
    }

    if(!Array.isArray(arr)){
        return NaN
    }

    let sum=0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(subSum([], 0, 0));