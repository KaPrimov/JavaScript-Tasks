(function() {

    let obj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function solve(input) {
        if (input == 'report') {
            console.log(input);
            let output = [];
            for (let a in obj) {
                output.push(a + '=' + obj[a])
            }
            return output.join(' ')
        } else {
            let [order,type,quantity] = input.split(' ');

            if (order == 'restock') {
                obj[type] += Number(quantity);
                return 'Success'
            } else {
                if (type == 'apple') {
                    if (obj.carbohydrate >= 1*quantity && obj.flavour >= 2*quantity) {
                        obj.flavour -= 2*quantity;
                        obj.carbohydrate-=1*quantity;
                        return 'Success'
                    } else if (obj.carbohydrate < 2*quantity) {
                        return `Error: not enough carbohydrate in stock`
                    } else {
                        return 'Error: not enough flavour in stock'
                    }
                } else if (type == 'coke') {
                    if (obj.carbohydrate >= 10*quantity && obj.flavour >= 20*quantity) {
                        obj.flavour -= 20*quantity;
                        obj.carbohydrate -= 10*quantity;
                        return 'Success'
                    } else if (obj.carbohydrate < 10*quantity) {
                        return `Error: not enough carbohydrate in stock`
                    } else {
                        return 'Error: not enough flavour in stock'
                    }
                } else if (type == 'burger') {
                    if (obj.carbohydrate >= 5*quantity && obj.flavour >= 3*quantity && obj.fat >= 7*quantity) {
                        obj.flavour -= 3*quantity;
                        obj.carbohydrate -= 5*quantity;
                        obj.fat -= 7*quantity;
                        return 'Success'
                    } else if (obj.carbohydrate < 5*quantity) {
                        return `Error: not enough carbohydrate in stock`
                    } else if (obj.fat < 7*quantity) {
                        return 'Error: not enough fat in stock'
                    } else if (obj.flavour < 3*quantity) {
                        return 'Error: not enough flavour in stock'
                    }
                } else if (type == 'omelet') {
                    if (obj.protein >= 5*quantity && obj.flavour >= 1*quantity && obj.fat >= 1*quantity) {
                        obj.flavour -= 1*quantity;
                        obj.protein -= 5*quantity;
                        obj.fat -= 1*quantity;
                        return 'Success'
                    } else if (obj.protein < 5*quantity) {
                        return `Error: not enough protein in stock`
                    } else if (obj.fat < 1*quantity){
                        return 'Error: not enough fat in stock'
                    } else if (obj.flavour < 1*quantity) {
                        return 'Error: not enough flavour in stock'
                    }
                } else if (type == 'cheverme') {
                    if (obj.protein >= 10*quantity && obj.flavour >= 10*quantity && obj.fat >= 10*quantity && obj.carbohydrate >= 10*quantity) {
                        obj.flavour -= 10*quantity;
                        obj.protein -= 10*quantity;
                        obj.fat -= 10*quantity;
                        obj.carbohydrate -= 10*quantity;
                        return'Success'
                    } else if (obj.protein < 10*quantity) {
                        return `Error: not enough protein in stock`
                    } else if(obj.carbohydrate<10*quantity){
                        return `Error: not enough carbohydrate in stock`
                    } else if (obj.fat < 10*quantity) {
                        return 'Error: not enough fat in stock'
                    } else if (obj.flavour < 10*quantity) {
                        return 'Error: not enough flavour in stock'
                    }
                }
            }
        }
    }
}());

