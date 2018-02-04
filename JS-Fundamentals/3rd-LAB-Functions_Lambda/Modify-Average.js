function solved(number) {
    var check = 0;
    function sumDigits(num) {
        let str = num.toString();
        var sum = 0;
        var avg = 0;
        for (var i = 0; i < str.length; i++) {
            sum += parseInt(str.charAt(i), 10);
            avg = sum / str.length
        }
        return avg;
    }
    if (sumDigits(number) > 5 ) {
        console.log(Number(number));

    } else {
        while (sumDigits(number) <= 5){
            number = Number(number);
            number = '' + number + 9;
            number = Number(number);
            check = sumDigits(number);
        }
        if(check > 5){
            console.log(Number(number));

        }
    }

}

solved([322222]);