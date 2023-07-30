var fs = require('fs')
var zlib = require('zlib')


fs.createReadStream('./test.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./Ziped_file/test.txt.gz'));


console.log('File compressed..!!');