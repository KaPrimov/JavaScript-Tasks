function catalogue(input) {
    input.sort();
    let productAlphabetically = new Map();
    for (let i = 0; i < input.length; i++) {
        let productsAndPrices = input[i].split(' : ');
        let product = productsAndPrices[0];
        let price = Number(productsAndPrices[1]);
        let letter = product[0].toUpperCase();

        if(!productAlphabetically.has(letter)) {
            productAlphabetically.set(letter, new Map())
        }
        productAlphabetically.get(letter).set(product, price)


    }
    for (let [key, mapValues] of productAlphabetically){
        console.log(key);
        for (let [key, value] of mapValues){
            console.log(`  ${key}: ${value} `);
        }

    }

}

catalogue([ 'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10' ]);