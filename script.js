const { exec, spawn } = require('child_process');

const fs = require('fs');
var spawnFile = () => {
    try {
        //*********filename should be in current root directory */
        let filename = 'event.png';
        exec(filename, function (err, data) {
            console.log(err)
        });
    } catch (err) {
        console.log('err', err)
    }

}
let idx = 0;
var checkFile = () => {
    const file = 'laranuxt.png';
    fs.watch(file, (event, filename) => {
        if (filename) {
            if (idx == 0) {
                spawnFile();
            }
            console.log("file spwan watched");
            idx++;
        }
    });
}
checkFile();
spawnFile();
console.log('localhost is running...')