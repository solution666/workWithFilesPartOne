const fs = require('fs');

function fileDeleter(file) {
    try {
        fs.unlinkSync(file);
        console.log('File deleted successfully!');
    }
    catch (err) {
        console.log(`File not found! ${err}`);
    }    
}

fileDeleter('helloWorld');