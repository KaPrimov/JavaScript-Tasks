function rotate(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    while(rotations --) {
        let temp = arr.pop();
        arr.unshift(temp)
    }
    console.log(arr.join(' '));
}

rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);