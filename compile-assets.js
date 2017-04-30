var exec = require('child_process').exec;
var watch = require('watch');
const prompt = require('prompt');

function execCmd(cmd, callback) {
    const proc = exec(cmd, function (error, stdout, stderr) {
        if (callback)
            callback(error, stdout, stderr);
    })
    // proc.stdout.on('data', (data) => console.log(data))
    // proc.stderr.on('data', (data) => console.error(data))
}

function compileLess() {
    const cmd = 'lessc css/app.less css/app.css';
    console.log('Compiling Less -> ' + new Date())
    exec(cmd, (err, a, b) => console.log('Less ' + (!err? 'Done' : 'Error ->') + ' ' + a + ' ' + b));
}

function compileTs() {
    const cmd = 'tsc app/app.ts --out main.js --target es5';
    console.log('Compiling Ts -> ' + new Date())
    exec(cmd, (err, a, b) => console.log('Ts ' + (!err? 'Done' : 'Error ->') + ' ' + a + ' ' + b));

}



//Compile on init and watch for changes
// compileLess();
//TSC 1.5.3
// compileTs();

watch.watchTree('./app', {
    // filter: (filename) => /\.ts/.test(filename),
    interval: 1
}, (file) => {
    // console.log(file);
    compileTs();
    // if (typeof f == "object" && prev === null && curr === null) {
    //     // Finished walking the tree
    // } else {
    // }
});

watch.watchTree('./css', {
    filter: (filename) => !/\.css/.test(filename),
    interval: 1
}, (file) => {
    compileLess();
    // if (typeof f == "object" && prev === null && curr === null) {
    // } else {
    // }
});

prompt.start();

// prompt.get(['exit'], function (err, result) {
//     if (err) {
//         return onErr(err);
//     }
//     process.exit()
// });