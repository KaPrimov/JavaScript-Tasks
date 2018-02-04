function result() {

    let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);

        if(!summary[type]) {
            summary[type] = 1
        } else {
            summary[type] ++
        }
    }

    //console.log(summary);
    let sortedArr = [];

    for(let currentType in summary) {
        sortedArr.push([currentType, summary[currentType]]);
    }

    sortedArr = sortedArr.sort((a,b) => [b][0][1] - [a][0][1]);

    for (let [key, val] of sortedArr) {
        console.log(`${key} = ${val}`);
    }
}

result('cat', 42, function () { console.log('Hello world!'); }, 4, 'sad');