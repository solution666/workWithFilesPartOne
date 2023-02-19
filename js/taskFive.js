const fs = require('fs');

function fileMover(fileNow, fileMoving) {
    fs.renameSync(fileNow, fileMoving);
}

fileMover('helloWorld', 'forFiles/helloWorld');