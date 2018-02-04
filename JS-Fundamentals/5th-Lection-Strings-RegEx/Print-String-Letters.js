function printLetters(str) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    for (let i = 0; i < str.length; i++) {
        console.log(`str[${i}] -> ${str[i]}`);
    }

}