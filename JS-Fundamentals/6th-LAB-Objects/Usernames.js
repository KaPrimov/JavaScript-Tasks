function usernames(input) {

    let setNames = new Set();
    for (let name of input) {
        setNames.add(name);
    }
    let arrNames = Array.from(setNames);
    arrNames = (arrNames.sort(function (a, b)   {
        if (a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }));

    for (let i = 0; i < arrNames.length; i++) {
        if (arrNames[i] != ' '){
            console.log(arrNames[i]);
        }

    }
}

usernames([ 'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']);