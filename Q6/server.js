var fs = require('fs')
var unzip = require('zlib')


fs.createReadStream('../Q5/Ziped_file/test.txt.gz')
    .pipe(unzip.createGunzip())
    .pipe(fs.createWriteStream('./Unziped_file/test.txt'));


console.log('File Decompressed..!!');