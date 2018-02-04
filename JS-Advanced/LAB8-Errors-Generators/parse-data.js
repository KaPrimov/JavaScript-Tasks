function makeCandy(arr) {
    let arrCandies = [];
    class Candy{
        constructor(topping,arrFillings,spice,trueCandy) {
            if(spice == '') {
                spice = null
            }
            this.topping = topping;
            if (arrFillings[0] === '') {
                arrFillings = null
            } else {
                arrFillings = arrFillings.join(',')
            }
            this.filling = arrFillings;
            this.spice = spice;
            if(trueCandy === false) {
                throw TypeError
            }
            this.trueCandy = trueCandy
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let trueCandy = true;
        let currentIngredients = arr[i].split(':');
        if(currentIngredients.length !== 3) {
            continue
        }
        let topping = currentIngredients[0];
        let fillings = currentIngredients[1].split(',');
        let spice = currentIngredients[2];


        if(topping !== 'milk chocolate' && topping !== 'white chocolate' && topping !== 'dark chocolate') {
            trueCandy = false;
        }
        let numFillings = 0;
        for (let j = 0; j < fillings.length; j++) {
            if(fillings[j] !== 'hazelnut' && fillings[j] !== 'caramel' && fillings[j] !== 'strawberry'
                && fillings[j] !== 'blueberry' && fillings[j] !== 'yogurt' && fillings[j] !== 'fudge' && fillings[j] !== '') {
                trueCandy = false;
            } else {
                numFillings ++;
            }
            if(numFillings > 3) {
                trueCandy = false;
            }
        }

        if(spice === 'poison' || spice === 'asbestos') {
            trueCandy = false
        }

        try {
            let verifiedCandy = new Candy(topping, fillings, spice, trueCandy);
            arrCandies.push(verifiedCandy);
        } catch(ex) {

        }
    }

    return arrCandies
}

console.log(makeCandy([
        'milk chocolate:hazelnut,caramel:pumpkin',
        'dark chocolate::chips',
        'white chocolate::poison',  // invalid
        'white chocolate:fudge:',
        'frosting:yogurt:frosting', // invalid
        'dark chocolate:blueberry:rock crystals'
    ]));
