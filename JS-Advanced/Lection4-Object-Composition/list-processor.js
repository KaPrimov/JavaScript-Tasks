function processCommands(commands) {
    let cmdProcessor = ( function () {
        let text = [];
        return {
            add: (newText) => text.push(newText),
            remove: (item) => text = text.filter(x => x != item),
            print: () => console.log(text)
        };
    })();
    for (let command of commands) {
        let [cmdName, arg] = command.split(' ');
        cmdProcessor[cmdName](arg);
    }

}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
