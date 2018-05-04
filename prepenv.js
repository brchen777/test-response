
(() => {
    const config = require('json-cfg').trunk;
    const env = { conf: null };

    function streamOut(stream, msg, newLine = true) {
        return stream.write(`${msg}${newLine ? '\n' : ''}`);
    }

    function stdOut(msg, newLine = true) {
        return streamOut(process.stdout, msg, newLine);
    }

    function stdErr(msg, newLine = true) {
        return streamOut(process.stderr, msg, newLine);
    }

    // Load conf
    if (!env.conf) {
        stdOut('No config file assigned! Using default...'.red);
        env.conf = `${__dirname}\\config.default.json`;
    }

    stdOut(`${'Loading config file `'.green}${env.conf.yellow}${'`...'.green}`);
    config.load(env.conf);
    env.workingRoot = __dirname;
    config.conf.runtime = env;

    global.STDOUT = stdOut;
    global.STDERR = stdErr;
    global.STREAM_OUT = streamOut;
})();
