let Record =
    (function () {
    let id = -1;

    return class Record {
        constructor(temp, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temp;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        toString() {
            let weatherStatus = '';
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                weatherStatus = 'Stormy'
            } else {

                weatherStatus = 'Not stormy';
            }

            let answer = `Reading ID: ${id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${weatherStatus}`;
            return answer;
        }
    }
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());

