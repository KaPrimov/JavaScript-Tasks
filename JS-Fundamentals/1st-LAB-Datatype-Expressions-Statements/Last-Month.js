function lastMonth([day, month, year]) {
    let date = new Date(year, month - 1, 0).getDate();
    console.log(date);
}

lastMonth(['13','12','2004']);