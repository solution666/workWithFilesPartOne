const fs = require('fs');

function fileReader(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;

        console.log(data);
    });
}

fileReader('helloWorld');