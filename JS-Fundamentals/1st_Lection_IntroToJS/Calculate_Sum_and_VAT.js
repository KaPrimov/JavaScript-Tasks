function sumVAT(arr) {
    let sum = 0;
    for(let num of arr){
        sum += Number(num)
    }

    console.log ("sum = " + sum);
    console.log("VAT = " + sum*0.20);
    console.log("total = " + sum * 1.20)
}

sumVAT(['1.20','2.60','3.50']);
