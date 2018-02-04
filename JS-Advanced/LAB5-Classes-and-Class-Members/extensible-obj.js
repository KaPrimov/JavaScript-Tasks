let Extensible = (function () {
    let ID = 0;

    return class Extensible {
        constructor() {
            this.id = ID++;
        }

        extend(otherObj) {
            for (let prop in otherObj) {
                if (typeof otherObj[prop] == 'function') {
                    Extensible.prototype[prop] = otherObj[prop];
                } else {
                    this[prop] = otherObj[prop];
                }
            }

        }
    }
})();