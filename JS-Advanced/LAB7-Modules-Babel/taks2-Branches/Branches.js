class Branch {
    constructor(id, branchName, companyName) {
        this.id = id;
        this.branchName = branchName;
        this.companyName = companyName;
        this._employees = [];
    }
    get employees() {
        return this._employees
    }
    hire(employee) {

            this._employees.push(employee);

    }
    toString() {
        let answer = '';
        answer += `@ ${this.companyName}, ${this.branchName}, ${this.id}\n`;
        answer += 'Employed:\n';
        if (this._employees.length != 0) {
            for (let i = 0; i < this._employees.length; i++) {
                if (i !== this._employees.length - 1) {
                    answer += `** ${this._employees[i]}\n`
                } else {
                    answer += `** ${this._employees[i]}`
                }
            }
        }
        else {
            answer+='None...'
        }
        return answer;
    }
}

module.exports = { Branch };