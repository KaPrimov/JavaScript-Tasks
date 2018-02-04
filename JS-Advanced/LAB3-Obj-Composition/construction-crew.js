function result(obj) {
        if(obj.handsShaking === true) {
            let alcoholToIntake = obj.weight * obj.experience * 0.1;
            obj.bloodAlcoholLevel += alcoholToIntake;
            obj.handsShaking = false;
            return obj
        }
        return obj
}


console.log(result({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));

// result(({ weight: 80,
//     experience: 1,
//     bloodAlcoholLevel: 0,
//     handsShaking: true }
// ));