function calendar([day, month, year])
{
    month--;
    let html = '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    //console.log(markedDate);

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        daysInMonth[1] = 29;
    }

    //previous month:
    let week = 0;
    let firstDayOfTheMonth = new Date(year, month, 1);
    let dayOfTheWeek = firstDayOfTheMonth.getDay();
    let firstDayPrevMonth = daysInMonth[(month-1 + 12) % 12 ] - dayOfTheWeek;
    if (dayOfTheWeek > 0)
        html += '  <tr>';
    for (let i=1; i<=dayOfTheWeek; i++) {
        html += '<td class="prev-month">' + (firstDayPrevMonth + i) + '</td>';
        week++;
    }

    //current month
    let daysToWrite = daysInMonth[month];
    for (let i = 1; i <= daysToWrite; i++) {
        if (week == 0){
            html += '  <tr>';
        }
        if (day == i){
            html += '<td class="today">' + i + '</td>';
        }
        else {
            html+= '<td>' + i + '</td>';
        }
        week++;
        if (week == 7) {
            html += '</tr>\n';
            week=0;
        }
    }

    for (let i=1; week!=0; i++) {
        html += '<td class="next-month">' + i + '</td>';
        week++;
        if (week == 7) {
            html += '</tr>\n';
            week = 0;
        }
    }

    html += '</table>';
    return html;
}

calendar(['4', '9', '2016']);