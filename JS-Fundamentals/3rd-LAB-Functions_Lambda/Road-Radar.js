function solved(input) {
    let speed = Number(input[0]);
    let zone = input[1];
    let limit = getLimit(zone);

    function getLimit(zone) {
        switch (zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case  'city': return 50;
            case 'residential': return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed <= 20) {
                console.log('speeding');
            } else if (overSpeed <= 40) {
                console.log('excessive speeding');
            }
            else {
                console.log('reckless driving');
            }

        }
    }

    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }
}

solved(['200', 'motorway']);
