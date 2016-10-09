var fs = require('fs');

fs.chmod('/tmp/example.js', '755', function (err) {
  if (err) throw err
  console.log('Permissions changed.')
})
