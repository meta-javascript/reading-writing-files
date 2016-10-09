var fs = require('fs');

fs.access('/tmp/', fs.constants.X_OK, function(err) {
    if (err) throw err;
    console.log('File or directory can be excuted!')
})
