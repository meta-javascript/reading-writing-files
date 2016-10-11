var fs = require('fs');

fs.open('./example-dir/example.txt', 'w+', function(err, fd) {
  if (err) throw err;
  console.log('fd', fd)
  fs.write(fd, 'date to append in write', function (err, written, string) {
    if (err) throw err;
    console.log(written, string);
  })
})
