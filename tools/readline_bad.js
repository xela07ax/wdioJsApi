const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (str === "x") {
        process.exit(0)
    }
    if (str === "q") {
        process.exit(0)
    }
    console.log(str)
    console.log(key)
})