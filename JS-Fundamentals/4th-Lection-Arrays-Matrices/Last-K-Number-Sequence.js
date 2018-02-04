function sumLastKNumbers([n,k]) {
    let seq = [1];
    for (let current = 0; current < n; current++) {
        let sum = 0;
        let start = Math.max(0, current - k);
        let end = current - 1;
        if ( end >= 0) {
            for (let i = start; i <= end; i++) {
                sum += seq[i];
            }
            seq[current] = sum;
        }
    }
    console.log(seq.join(' '));
}

sumLastKNumbers(['8','2']);