const fs = require('fs');

module.exports = class Storage {
    
    constructor() {
        this.storage = new Map();
    }    
    put(key, value) {
        if (typeof key !== 'string') {
            throw new Error('The key is not a string');
        }
    
        if (this.storage.has(key)) {
            throw new Error('The key exists in the storage');
        }
        this.storage.set(key, value);
    }

    get(key) {
        if (typeof key !== 'string') {
            throw new Error('The key is not a string');
        }
    
        if (!(this.storage.has(key))) {
            throw new Error('The key does not exist in the storage');
        }
        return this.storage.get(key);
    }

    getAll() {
        return this.storage.entries();
    }

    update(key, value) {
        if (typeof key !== 'string') {
            throw new Error('The key is not a string');
        }
    
        if (!(this.storage.has(key))) {
            throw new Error('The key does not exist in the storage');
        }
        this.storage.set(key, value);
    }

    delete(key) {
        if (typeof key !== 'string') {
            throw new Error('The key is not a string');
        }
    
        if (!(this.storage.has(key))) {
            throw new Error('The key does not exist in the storage');
        }
        this.storage.delete(key);
    }

    clear() {
        this.storage.clear();
    }

    save() {
        fs.writeFileSync('./storage.json', this._strMapToJson(this.storage));
    }

    load() {
        this.storage = this._jsonToStrMap(fs.readFileSync('./storage.json'));
    }

    _mapToJson(map) {
        return JSON.stringify([...map]);
    }
    _jsonToMap(jsonStr) {
        return new Map(JSON.parse(jsonStr));
    }

    _strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k,v] of strMap) {
            // We don’t escape the key '__proto__'
            // which can cause problems on older engines
            obj[k] = v;
        }
        return obj;
    }
    _objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }

    _strMapToJson(strMap) {
        return JSON.stringify(this._strMapToObj(strMap));
    }
    _jsonToStrMap(jsonStr) {
        return this._objToStrMap(JSON.parse(jsonStr));
    }
}
