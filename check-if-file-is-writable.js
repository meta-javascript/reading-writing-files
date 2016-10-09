var fs = require('fs');

fs.access('/tmp/', fs.constants.W_OK, function(err) {
    if (err) throw err;
    console.log('File or directory is writeable!')
})
