function engineeringCompany(sales) {
    let modelsAndQuantityProduced = new Map();
    for (let sale of sales) {
        let dataSale = sale.split(/\s*\|\s*/);
        let manufacturer = dataSale[0];
        let model = dataSale[1];
        let quantity = Number(dataSale[2]);
        if (!modelsAndQuantityProduced.has(manufacturer)) {
            modelsAndQuantityProduced.set(manufacturer, new Map());
        }

        let oldSales = modelsAndQuantityProduced.get(manufacturer).get(model);
        if (oldSales) {
            quantity += oldSales;
        }
        modelsAndQuantityProduced.get(manufacturer).set(model, quantity);

    }
    for (let [key, mapValues] of modelsAndQuantityProduced){
        console.log(key);
        for (let [key, value] of mapValues){
            console.log(`###${key} -> ${value} `);
        }

    }
}

