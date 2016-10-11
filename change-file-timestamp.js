var fs = require('fs');

fs.utimes('./example-dir/example.txt', Date.now(), Date.now(), function (err) {
  if (err) throw err;
  console.log('Changes the file timestamps.');
})
