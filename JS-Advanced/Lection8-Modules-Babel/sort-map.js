function mapSort() {
    let map = arguments[0];
    if (arguments.length === 1) {
        return new Map([...map.entries()].sort());
    } else {
        let arr = [];
        let sortFn = arguments[1];
        for (let entry of map) {
            arr.push(entry)
        }
        arr.sort(sortFn);

        let sorted = new Map(arr);
        return sorted
    }

}