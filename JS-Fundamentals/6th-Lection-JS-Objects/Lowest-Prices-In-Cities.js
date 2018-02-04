function lowestPrices(sales) {
    let mapProducts = new Map();
    let pricesByTowns = new Map();
    for (let sale of sales) {
        let [town, product, price] = sale.split(/\s*\|\s*/);
        if (!mapProducts.has(product)) {
            mapProducts.set(product, new Map());
        }
        mapProducts.get(product).set(town, price);
    }

    let arraySales = Array.from(mapProducts);
    for (let i = 0; i < arraySales.length; i++) {
        let product = arraySales[i][0];
        let bestCity ='';
        let bestPrice = Number.MAX_SAFE_INTEGER;
        let citySales = Array.from(arraySales[i][1]);
        for (let j = 0; j < citySales.length; j++) {
            let currentPrice = Number(citySales[j][1]);
            if(bestPrice > currentPrice) {
                bestPrice = currentPrice;
                bestCity = citySales[j][0];
            }
        }
        console.log(`${product} -> ${bestPrice} (${bestCity})`);
    }
}

lowestPrices(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 10000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);