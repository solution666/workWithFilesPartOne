const fs = require('fs');

function fileCreater(file) {
    fs.open(file, 'w', (err) => {
        if (err) throw err;

        console.log('File created!');
    });
}

fileCreater('helloWorld');