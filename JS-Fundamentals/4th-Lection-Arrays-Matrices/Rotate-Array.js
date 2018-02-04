function rotate(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    for(let i = 1; i <= rotations; i++) {
        let temp = arr.pop();
        arr.unshift(temp)
    }
    return (arr.join(' '));
}

rotate(['4', '1']);