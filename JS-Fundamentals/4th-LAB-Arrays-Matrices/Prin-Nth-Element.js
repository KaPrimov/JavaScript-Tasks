function solve(arr) {
    let n = Number(arr[arr.length - 1]);
    arr.pop();

    for (let i = 0; i <= arr.length - 1; i+=n) {
        console.log(arr[i]);
    }
}

solve(['5', '20', '31', '4', '20', '2']);