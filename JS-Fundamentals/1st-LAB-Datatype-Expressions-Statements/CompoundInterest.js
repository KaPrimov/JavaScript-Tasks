function compoundInterest([principalSum, interesRate, frequency, timespan]) {
    [principalSum, interesRate, frequency, timespan] =
        [principalSum, interesRate, frequency, timespan].map(Number);

    interesRate /= 100;
    let compoundingPeriod = 12 / frequency;
    let interest = principalSum*Math.pow(1+interesRate/compoundingPeriod, compoundingPeriod*timespan);
    let print = interest .toFixed(2);
    console.log(print);

}


compoundInterest(['10000', '5', '12', '25']);