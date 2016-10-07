var fs = require('fs');

fs.access('/tmp/', function(err) {
    if (err) throw err;
    console.log('File exists')
})
