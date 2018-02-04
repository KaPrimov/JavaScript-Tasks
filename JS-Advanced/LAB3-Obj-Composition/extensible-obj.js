// function createObj(commands) {
//     let obj = {};
//     function extend() {
//         if (Object.getPrototypeOf(commands) === 'function () {}') {
//
//         } else {
//             Object.assign(obj, ...commands);
//             return obj;
//         }
//     }
// }

function solve() {
    let obj = Object.create({});
    obj.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                Object.getPrototypeOf(obj)[prop] = template[prop];
            } else {
                obj[prop] = template[prop];
            }

        }
    };

    return obj;
}