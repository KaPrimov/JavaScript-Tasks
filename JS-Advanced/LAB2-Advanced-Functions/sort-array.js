function sortArray(inputArray, sortArg) {

    let ascending = function (a, b) {
        return a - b;
    };

    let descending = function (a, b) {
        return b - a;
    };

    let sortingMethod = {
        'asc': ascending,
        'desc': descending
    };

    return inputArray.sort(sortingMethod[sortArg])
}