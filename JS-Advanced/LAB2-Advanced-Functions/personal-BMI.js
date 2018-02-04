(function result() {
        for (let i = 0; i < arguments.length; i+=4) {
            let BMI = Math.round(arguments[i + 2] / Math.pow((arguments[i + 3] / 100),2));
            let status = '';

            let obj = {
                name: arguments[i],
                personalInfo: {
                    age: arguments[i +1],
                    weight: arguments[i + 2],
                    height: arguments[i + 3]
                }
            };
            console.log(obj);
            if (BMI < 18.5) {
                status = 'underweight'
            } else if (BMI < 25) {
                status = 'normal'
            } else if (BMI < 30) {
                status = 'overweight'
            } else {
                status = 'obese'
            }
            console.log("BMI: " + BMI);
            console.log(`status: '${status}'`);

            if (status === 'obese') {
                console.log("recommendation: 'admission required' ");
            }

        }
    })();



result('Peter', 9, 57, 137);
//console.log(chart);