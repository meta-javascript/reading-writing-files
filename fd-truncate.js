var fs = require('fs');

fs.open('./example-dir/examp.txt', 'w+', function(err, fd) {
  if (err) throw err;

  fs.ftruncate(fd, 2,function (err) {
    if (err) throw err;
    console.log('Truncated.')
  })
})
