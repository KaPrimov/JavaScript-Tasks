let resultss = (function () {
    return result = {
        add: function ([x1, y1], [x2, y2]) {
            console.log(`[${x1 + x2}, ${y1+y2}]`);
        },
        multiply: function ([x1, y1], multiplier) {
            console.log(`[${x1 * multiplier}, ${y1*multiplier}]`);
        },
        length: function ([x1, y1]) {
            console.log(Math.sqrt(x1 * x1 + y1 * y1));
        },
        dot: function ([x1, y1], [x2, y2]) {
            console.log(x1 * x2 + y1 * y2);
        },
        cross: function ([x1, y1], [x2, y2]) {
            console.log(x1 * y2 - x2 * y1);
        }
    };
})();


    resultss.add([2, 1], [2, 1])
