var fs = require('fs');

fs.chown('/tmp/example.txt', 1001, 1001, function (err) {
  if (err) throw err;
  console.log('Chnaged owner of file.');
})
