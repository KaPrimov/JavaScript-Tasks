function extractSeq(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    arr = arr.map(Number);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            biggest = arr[i];
            console.log(arr[i]);
        } else {

        }
    }
}