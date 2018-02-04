function solve(input){
    var i, currentLine, examPoints, exam,
        bonuses, grade, output = "", counter = 0,
        targetedCourse = input[input.length-1].trim(),
        sumOfGrades = 0;

    for (i = 0; i < input.length-1; i++) {
        currentLine = input[i].split(/\s+/).filter(function(e){return e});
        if(currentLine[1] === targetedCourse){
            counter++;
            sumOfGrades += parseInt(currentLine[2]);
        }

        examPoints = parseInt(currentLine[2]);
        if(examPoints < 100) {
            console.log(`${currentLine[0]} failed at "${currentLine[1]}"`);
            continue;
        }

        exam = examPoints * 0.2;
        bonuses = parseFloat(currentLine[3]);
        grade = (((exam + bonuses) / 80) * 4) + 2;
        if(grade > 6.00) {
            grade = 6.00;
        }

        console.log(`${currentLine[0]}: Exam - "${currentLine[1]}"; Points - ${parseFloat((exam + bonuses).toFixed(2))}; Grade - ${(grade).toFixed(2)}`);
        // console.log(`${currentLine[0]}` +
        //     ': Exam' -  + currentLine[1] +
        //     '; Points - ' + parseFloat((exam + bonuses).toFixed(2)) +
        //     '; Grade - ' + (grade).toFixed(2) );
    }
    console.log('"' + targetedCourse + '"' + ' average points -> ' + parseFloat((sumOfGrades/counter).toFixed(2)));
}

let arr = [
    'Pesho C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced'
];

solve(arr);