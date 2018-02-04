function kitodar(input) {
    let gold = 0;
    let silver = 0;
    let diamonds = 0;
    for (let i = 0; i < input.length; i++) {
        let mine = '';
        let preciousMetals = [];
        let typeOfMetal = '';
        let quantity = 0;
        [mine, preciousMetals] = input[i].split(/\s+-\s+/);
        [typeOfMetal, quantity] = preciousMetals.split(/\s+:\s+/);

        quantity = Number(quantity);

        if(typeOfMetal.toLowerCase() === 'gold') {
            gold += quantity
        } else if (typeOfMetal.toLowerCase() === 'silver') {
            silver += quantity
        } else if(typeOfMetal.toLowerCase() === 'diamonds') {
            diamonds += quantity;
        }
    }
    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamonds}`);
}

let arr =[ [ 'mine bobovDol - gold : 10',
    'mine medenRudnik - silver : 22',
    'mine chernoMore - shrimps : 24',
    'gold:50' ] ];

kitodar(arr);