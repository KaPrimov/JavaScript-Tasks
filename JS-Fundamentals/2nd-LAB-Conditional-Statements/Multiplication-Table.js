function multiplicationTable([n]){
    let size = Number(n);
    let tableOpen = '  <tr><th>x</th>';
    let tableInside = '  <tr>';
    console.log('<table border=\'1\'>');

    for (let i = 1; i <= n; i++) {
        tableOpen += `<th>${i}</th>`
    }
    console.log(tableOpen + '</tr>');

    for (let col = 1; col <= size; col++) {
        let tableInside = `  <tr><th>${col}</th>`;
        for (let row = 1; row <= size; row++) {
            tableInside += `><td>${col*row}</td>`
        }
        console.log(tableInside + '</tr>');
    }
    console.log(`</table>`);
}

multiplicationTable(['5']);