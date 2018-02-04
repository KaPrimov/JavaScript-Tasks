function carFactory(obj) {
    let volume = 0;
    let power = 0;
    let type = obj.carriage;
    let wheels = [];
    let carToPrint = {};
    if(obj.wheelsize % 2 === 0) {
        for (let i = 0; i < 4; i++) {
           wheels.push(obj.wheelsize - 1);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            wheels.push(obj.wheelsize);
        }
    }

    if(obj.power <= 90) {
        volume = 1800;
        power = 90;
    } else if (obj.power <= 120) {
        volume = 2400;
        power = 120;
    } else {
        volume = 3500;
        power = 200;
    }
    carToPrint.model = obj.model;
    carToPrint.engine = { power: power, volume: volume};
    carToPrint.carriage = { type: obj.carriage, color: obj.color };
    carToPrint.wheels = wheels;

    return carToPrint
}


let car = { model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 }
    ;


console.log(carFactory(car));
