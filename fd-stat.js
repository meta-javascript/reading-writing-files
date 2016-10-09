var fs = require('fs');

fs.open('./example-dir/example.txt', 'w+', function(err, fd) {
  if (err) throw err;

  fs.fstat(fd, function (err, stats) {
    if (err) throw err;
    console.log(stats);
  })
})
