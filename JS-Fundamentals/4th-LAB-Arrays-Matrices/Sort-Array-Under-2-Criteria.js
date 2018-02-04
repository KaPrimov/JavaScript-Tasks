function sortArrays(arr) {
    arr = arr.sort();
    arr = arr.sort((a, b) => a.length - b.length);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}

sortArrays(['alpha', 'beta', 'gamma']);