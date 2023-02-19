const fs = require('fs');

function fileAppender(file) {
    fs.appendFile(file, 'Change my mind...', (err) => {
        if (err) throw err;
        console.log('Data has been added!');
    });
}

fileAppender('helloWorld');