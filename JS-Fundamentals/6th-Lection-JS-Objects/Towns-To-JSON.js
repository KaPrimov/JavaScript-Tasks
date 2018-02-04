function parseTownsToJSON(arr) {
    let townsArr = [];
    for (let town of arr.slice(1)) {
        let[empty, name, latitude, longitude] =  town.split(/\s*\|\s*/);
        let townObj =  { Town: name, Latitude:Number(latitude), Longitude: Number(longitude) };
        townsArr.push(townObj);

    }
    console.log(JSON.stringify(townsArr));
}

parseTownsToJSON(['|Town|Lat|Lng|', '|Sofia |42|23|'])
