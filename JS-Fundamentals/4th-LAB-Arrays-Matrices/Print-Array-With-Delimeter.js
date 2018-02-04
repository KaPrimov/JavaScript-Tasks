function printArray(arr) {
    let del = arr[arr.length-1];
    arr.pop();
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            res += arr[i];
        } else {
          res += del + arr[i];
        }
    }
    console.log(res);
}