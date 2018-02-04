function* random(seed) {
    while (true){
        seed = Math.pow(seed, 2)%(38573449);
        let answer = seed%100;
        yield answer;
    }

}

let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}