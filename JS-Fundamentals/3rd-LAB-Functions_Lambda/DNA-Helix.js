function DNA(size) {
    let sequence = 'ATCGTTAGGG';
    let rows = Number(size[0]);
    let currentIndex = 0;

    for (let i = 0; i < rows; i++) {
        let currentRow = i % 4;
        if(currentRow === 0) {
            console.log(`**${sequence[currentIndex++ % sequence.length]}${sequence[currentIndex++ % sequence.length]}**`);
        } else if (currentRow === 1 || currentRow === 3) {
            console.log(`*${sequence[currentIndex++ % sequence.length]}--${sequence[currentIndex++ % sequence.length]}*`);
        } else {
            console.log(`${sequence[currentIndex++ % sequence.length]}----${sequence[currentIndex++ % sequence.length]}`);
        }

    }
}