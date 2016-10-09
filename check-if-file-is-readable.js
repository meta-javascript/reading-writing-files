var fs = require('fs');

fs.access('/tmp/example.txt', fs.constants.R_OK, function(err) {
    if (err) throw err;
    console.log('File or directory is readable!')
})
