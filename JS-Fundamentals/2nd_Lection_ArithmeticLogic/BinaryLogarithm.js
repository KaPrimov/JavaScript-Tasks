function binary(numbers) {
    for(let num of numbers){
        console.log(Math.log2(num));
    }

}

binary([1024, 256, 1, 2]);