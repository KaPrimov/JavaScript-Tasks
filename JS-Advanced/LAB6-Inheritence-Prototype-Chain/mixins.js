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



function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        };
        this.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        };
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)

        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer
        };

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3;
        };
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}



// computerQualityMixin.call(Computer.prototype);
// let bat = new Battery('JAR', 4)
// let comp = new Laptop('JAR', 4, 12, 1, 2.1, 'Silver', bat );
// console.log(comp.isRoomy());
