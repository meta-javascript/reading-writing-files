var fs = require('fs')

fs.mkdir('/tmp/example-dir', function (err) {
  if (err) throw err;
  console.log('created');
})
