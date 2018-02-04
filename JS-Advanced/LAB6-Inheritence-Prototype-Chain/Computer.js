
class Keyboard {
    constructor(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = responseTime;
    }
}

class Monitor {
    constructor(manufacturer, width, height) {
        this.manufacturer = manufacturer;
        this.width = width;
        this.height = height;
    }
}

class Battery {
    constructor(manufacturer, expectedLife) {
        this.manufacturer = manufacturer;
        this.expectedLife = expectedLife;
    }
}

class Computer {
    constructor(manufacturer, processorsSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new Error
        }
        this.manufacturer = manufacturer;
        this.processorSpeed = processorsSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}

class Laptop extends Computer{
    constructor(manufacturer, processorsSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorsSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this.battery = battery
    }

    get battery() {
        return this._battery;
    }

    set battery(battery) {
        if (battery.constructor.name !== 'Battery') {
            throw new TypeError
        }
        this._battery = battery
    }
}

class Desktop extends Computer{
    constructor(manufacturer, processorsSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorsSpeed, ram, hardDiskSpace);
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    get keyboard(){
        return this._keyboard;
    }
    set keyboard(keyboard) {
        if(keyboard.constructor.name !== 'Keyboard') {
            throw new TypeError;
        }
        this._keyboard = keyboard;
    }

    get monitor(){
        return this._monitor;
    }
    set monitor(monitor) {
        if(monitor.constructor.name !== 'Monitor') {
            throw new TypeError;
        }
        this._monitor = monitor;
    }
}

// let keyboard = new Keyboard('Logitech',70);
// let monitor = new Monitor('Benq',28,18);
// let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
// console.log(desktop);

let bat = new Battery('JAR', 4)
let comp = new Laptop('JAR', 2, 12, 1, 2.1, 'Silver', bat );
console.log(comp._battery.manufacturer);