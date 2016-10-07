var fs = require('fs')

fs.rmdir('/tmp/example-dir', function(err) {
    if (err) throw err;
    console.log('removed');
})
