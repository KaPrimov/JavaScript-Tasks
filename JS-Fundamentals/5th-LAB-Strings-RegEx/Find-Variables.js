function captureTheNumber([str]) {
    let pattern = /\b([_])([A-Za-z0-9]*)\b/g;
    let match = pattern.exec(str);
    let result = [];
    while (match) {
        result.push(match[2]);
        match = pattern.exec(str);
    }
    console.log(result.join(','));
}

captureTheNumber(['The _id and _age variables are both integers.']);