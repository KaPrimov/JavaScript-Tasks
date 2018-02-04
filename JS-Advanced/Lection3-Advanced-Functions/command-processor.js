function solved(commands) {
    let cmdProcessor = ( function () {
        let text = '';
        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        };
    })();
    for (let command of commands) {
        let [cmdName, arg] = command.split(' ');
        cmdProcessor[cmdName](arg);
    }

}
