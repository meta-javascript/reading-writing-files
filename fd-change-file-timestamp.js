var fs = require('fs');

fs.open('./example-dir/example.txt', 'w+', function(err, fd) {
  if (err) throw err;

  fs.futimes(fd, Date.now(), Date.now(), function (err) {
    if (err) throw err;
    console.log('Changes the file timestamps.');
  })
})
