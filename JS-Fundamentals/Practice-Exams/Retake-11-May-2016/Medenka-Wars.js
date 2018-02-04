function medenkaWars(input) {
    let vitkorDamegeTotal = 0;
    let naskorDamageTotal = 0;

    let vitkorConsecutiveAttacks = 0;
    let naskorConsecutiveAttacks = 0;

    let vitkorPrevDmg = Number.NEGATIVE_INFINITY;
    let naskorPrevDmg = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < input.length; i++) {
        let curentLine = input[i].split(' ');

        let countOfMedenkas = Number(curentLine[0]);
        let typeMedenka = curentLine[1];

        if(typeMedenka === 'white') {
            let medenkaDmg = countOfMedenkas * 60;

            if(medenkaDmg === vitkorPrevDmg) {
                vitkorConsecutiveAttacks++;
            } else {
                vitkorConsecutiveAttacks = 1;
            }

            if(vitkorConsecutiveAttacks === 2) {
                vitkorDamegeTotal += medenkaDmg * 2.75;
                vitkorPrevDmg = medenkaDmg * 2.75;
                vitkorConsecutiveAttacks = 0;
            } else {
                vitkorDamegeTotal += medenkaDmg;
                vitkorPrevDmg = medenkaDmg;
            }
        } else {
            let medenkaDmg = countOfMedenkas * 60;

            if(medenkaDmg === naskorPrevDmg) {
                naskorConsecutiveAttacks++;
            } else {
                naskorConsecutiveAttacks = 1;
            }

            if(naskorConsecutiveAttacks === 5) {
                naskorDamageTotal += medenkaDmg * 4.5;
                naskorPrevDmg = medenkaDmg * 4.5;
                naskorConsecutiveAttacks = 1;
            } else {
                naskorDamageTotal += medenkaDmg;
                naskorPrevDmg = medenkaDmg;
            }
        }
    }
    if(vitkorDamegeTotal > naskorDamageTotal) {
        console.log('Winner - Vitkor');
        console.log('Damage - ' + vitkorDamegeTotal);
    } else {
        console.log('Winner - Naskor');
        console.log('Damage - ' + naskorDamageTotal);
    }
}

medenkaWars([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);