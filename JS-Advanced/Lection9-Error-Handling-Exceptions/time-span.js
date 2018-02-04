class TimeSpan{
    constructor(hours, minutes, seconds) {
        if(!Number.isInteger(hours)) {
            throw new RangeError('Invalid hours: ' + hours)
        }
        if(!Number.isInteger(minutes)) {
            throw new RangeError('Invalid minutes: ' + minutes)
        }
        if(!Number.isInteger(seconds)) {
            throw new RangeError('Invalid seconds: ' + seconds)
        }
        this.seconds = seconds + 60*minutes + 60*60*hours;
    }
    toString() {
        let secondsTotal = this.seconds;
        let secondsToPrint = secondsTotal%60;
        secondsToPrint = ('0' + secondsToPrint).slice(-2);
        let minutesToPrint = Math.trunc((secondsTotal / 60) % 60);
        minutesToPrint = ('0' + minutesToPrint).slice(-2);
        let hoursToPrint = Math.trunc((secondsTotal/60)/60);
        return `${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`
    }
}

console.log('' + new TimeSpan(7, 8, 5));
console.log('' + new TimeSpan(12, 76, -5));