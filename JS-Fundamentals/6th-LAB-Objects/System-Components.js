function components(input) {
    let systemAndComponents = new Map(); //key: systemName, value: componentName;
    let componentsAndSubComponents = new Map(); //key: components value: subComponents
    for (let i=0; i<input.length; i++) {
        let sysComponents = input[i].split(/\s*\|\s*/);
        let systemName = sysComponents[0];
        let componentName = sysComponents[1];
        let subComponentName = sysComponents[2];

        if (!systemAndComponents.has(systemName)) {
            systemAndComponents.set(systemName, new Map());
            systemAndComponents.get(systemName).set(componentName, []);
            systemAndComponents.get(systemName).get(componentName).push(subComponentName);
        } else if (!systemAndComponents.get(systemName).has(componentName)){
            systemAndComponents.get(systemName).set(componentName, []);
            systemAndComponents.get(systemName).get(componentName).push(subComponentName);
        } else {
            systemAndComponents.get(systemName).get(componentName).push(subComponentName);
        }

    }

    let sortedMap = [...systemAndComponents].sort((a,b) => {
        "use strict";
        let result = b[1].size - a[1].size;
        if (result == 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    });


    for (let [key, value] of sortedMap) {
        console.log(key);
        let sortedComponents = [...value].sort((a, b) => b[1].length - a[1].length);
        for (let [k,v] of sortedComponents) {
            console.log(`|||${k}`);
            for (let subcomp of v) {
                console.log(`||||||${subcomp}`)
            }
        }

    }
}
components([ 'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security' ]);