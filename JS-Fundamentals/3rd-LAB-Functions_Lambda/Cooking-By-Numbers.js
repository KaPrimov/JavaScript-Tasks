function cooking(arr) {
    let number = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let action = arr[i];
        if (action === 'chop') {
            number /= 2;
        }
        else if (action === 'dice') {
            number = Math.sqrt(number);
        }
        else if (action === 'spice') {
            number += 1;
        }
        else if (action === 'bake') {
            number = number * 3;
        }
        else if (action === 'fillet') {
            number = number - 0.2 * number;
        }
        console.log(number);
    }
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);