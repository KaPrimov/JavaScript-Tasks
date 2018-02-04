function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    var started = false;
    let check = 0;
    //let timer = setInterval(step, 1000);
    startBtn.on('click', function (event) {
        started = false;
        if (!started && check < 1){
            let timer = setInterval(step, 1000);
            console.log(started);
            check++;
            stopBtn.on('click', function (event) {
                started = true;
                clearInterval(timer);
                console.log(started);
                check = 0;
            });
        }

    });

    function step() {

        let hours = $('#hours');
        let minutes = $('#minutes');
        let seconds = $('#seconds');

        let hoursVal = Number(hours.text());
        let minutesVal = Number(minutes.text());
        let secondsVal = Number(seconds.text());

        secondsVal++;
        seconds.text(secondsVal.pad());

        if (secondsVal === 60) {
            secondsVal = 0;
            seconds.text(secondsVal.pad());
            minutesVal++;
            minutes.text(minutesVal.pad());
            if(minutesVal === 60) {
                minutesVal = 0;
                minutes.text(minutesVal.pad());
                hoursVal ++;
                hours.text(hoursVal.pad());
            }
        }
    }
    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }
}