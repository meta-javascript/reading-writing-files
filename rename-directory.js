var fs = require('fs')

fs.rename('/tmp/example-dir', function(err) {
    if (err) throw err;
    console.log('renamed');
})
