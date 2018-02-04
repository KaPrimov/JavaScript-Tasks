function calendar([day, month, year]) {

    month--;
    let content = $('#content');
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        daysInMonth[1] = 29;
    }

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let monthCaption = monthNames[Number(month)];
    let table = $('<table></table>');
    let caption = $('<caption></caption>');
    caption.text(monthCaption + ' ' + year);
    table.append(caption);
    let tbody = $('<tbody></tbody>');
    table.append(tbody);

    let trMonth = $('<tr></tr>');

    for (let i = 0; i < 7; i++) {
        let textVal;
        let thMonth = $('<th></th>');
        if(i === 0) {
            textVal = 'Mon';
            thMonth.text(textVal);
            trMonth.append(thMonth);
        } else if (i === 1){
            textVal = 'Tue';
            thMonth.text(textVal);
            trMonth.append(thMonth);
        } else if (i === 2){
            textVal = 'Wed';
            thMonth.text(textVal);
            trMonth.append(thMonth);
        } else if (i === 3){
            textVal = 'Thu';
            thMonth.text(textVal);
            trMonth.append(thMonth);
        } else if (i === 4){
            textVal = 'Fri';
            thMonth.text(textVal);
            trMonth.append(thMonth);
        } else if (i === 5){
            textVal = 'Sat';
            thMonth.text(textVal);
            trMonth.append(thMonth);
        } else if (i === 6){
            textVal = 'Sun';
            thMonth.text(textVal);
            trMonth.append(thMonth);
        }

    }
    table.append(trMonth);
    content.append(table);

    let firstDayOfTheMonth = new Date(year, month, 1);
    let dayOfTheWeek = firstDayOfTheMonth.getDay();
    let previousDays = [6, 0, 1, 2, 3, 4, 5];
    let emptyTdsToCreate = previousDays[dayOfTheWeek];
    let trFirstWeek = $('<tr></tr>');
    let dayToStartFrom = 1;
    let week = 0;
    console.log(dayOfTheWeek);
    if(dayOfTheWeek != 1) {
        for (let i = 0; i < emptyTdsToCreate; i++) {
            let td = $('<td></td>');
            trFirstWeek.append(td);
            week++;
        }

        if(week < 7 && week != 2) {
            for (let j = 1; j <= 7 - emptyTdsToCreate; j++) {
                let td = $('<td></td>').text(j);
                trFirstWeek.append(td);
                week++;
                dayToStartFrom++;
                if (week === 7) {
                    week = 0;
                    break
                }
            }
        }

        tbody.append(trFirstWeek)
    }


    let daysToWrite = daysInMonth[month];
    let tr = $('<tr></tr>');
    for (let i = dayToStartFrom; i <= daysToWrite; i++) {
       if (week === 0) {
           tr = $('<tr></tr>');
       }
       if (day === i) {
           let td = $('<td class="today"></td>').text(i);
           tr.append(td);
           week++;
       } else {
           let td = $('<td></td>').text(i);
           tr.append(td);
           week++;
       }
       if (week === 7) {
           tbody.append(tr);
           week=0
       }

    }
    for (let i=1; week!=0; i++) {
        let td = $('<td></td>');
        tr.append(td);
        week++;
        if (week == 7) {
            tbody.append(tr);
            week = 0;
        }
    }

}