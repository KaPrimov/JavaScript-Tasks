function solved(arr) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i];
        let answer = arr[i+1];
        xml += `  <question>\n    ${question}\n  </question>\n`;
        xml += `  <answer>\n    ${answer}\n  </answer>\n`
    }
    xml += '</quiz>';
    console.log(xml);
}

solved(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);