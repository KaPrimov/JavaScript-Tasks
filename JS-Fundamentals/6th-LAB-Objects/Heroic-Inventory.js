function heroData(input) {
    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let currentHeroArgs = input[i].split('/');

        let currentHeroLName = currentHeroArgs[0];
        let currentHeroLevel = Number(currentHeroArgs[1]);
        let currentHeroItems = [];
        if(currentHeroArgs.length > 2){
            currentHeroItems = currentHeroArgs[2].split(', ');
        }

        let hero = {name: currentHeroLName, level: currentHeroLevel, items: currentHeroItems};

        heroes.push(hero)

    }

console.log(JSON.stringify(hero));
}