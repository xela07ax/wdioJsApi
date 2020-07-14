const repl = require('repl');

const replServer = repl.start({prompt: '> '});

replServer.defineCommand('q', {
});

replServer.defineCommand('w', () => {
    console.log('Goodbye!');
    console.log(this.help);
    //this.close();
    process.exit(0);
});
