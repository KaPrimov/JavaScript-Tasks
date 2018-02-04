function capitalizeWords(str) {
    let splittedStr = str[0].toLowerCase().split(' ');
    for (let i = 0; i < splittedStr.length; i++) {
        splittedStr[i] = splittedStr[i].charAt(0).toUpperCase() + splittedStr[i].substring(1);
    }
    return splittedStr.join(' ')
}