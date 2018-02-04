function juice(input) {
    let quantityJuice = {};
    let bottles = {};
    for(let i = 0; i <input.length; i++) {
        let littersJuice = input[i].split(' => ');
        let fruit = littersJuice[0];
        let quantity = Number(littersJuice[1]);
        if(quantityJuice[fruit] == undefined) {
            quantityJuice[fruit] = quantity
        } else {
            quantityJuice[fruit] += quantity
        }
        if (quantityJuice[fruit] / 1000 >= 1 ) {
            if(bottles[fruit] == undefined) {
                bottles[fruit] = Math.floor(quantityJuice[fruit] / 1000);
                quantityJuice[fruit] = quantityJuice[fruit] % 1000
            } else {
                bottles[fruit] += Math.floor(quantityJuice[fruit] / 1000)
                quantityJuice[fruit] = quantityJuice[fruit] % 1000
            }
        }
    }

    for (let obj in bottles) {
        console.log(`${obj} => ${bottles[obj]}`);
    }
}

juice([ 'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549' ]);