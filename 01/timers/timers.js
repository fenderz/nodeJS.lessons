const fs = require('fs');

console.log('start'); // 1

// microtask queue: []
// task queue: []

// V8 + libUv
fs.readFile(__filename, (err, content) => {
    console.log('read file'); // 7
});

setImmediate(() => {
    console.log('immediate'); // 6
});

new Promise(resolve => {
    console.log('promise create'); // 2
    resolve('promise then');
}).then(value => console.log(value)); // 5

process.nextTick(() => {
    console.log('nextTick1'); // 4

    process.nextTick(() => {
        console.log('nextTick3'); // 4
    });
});

process.nextTick(() => {
    console.log('nextTick2'); // 4
});

console.log('end'); // 3
