function evenPos(arr) {
    return  arr.filter((x, i) => i%2 == 0).join(' ')
}