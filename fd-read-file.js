var fs = require('fs');
var buf = new Buffer(1024);

fs.open('./example-dir/example.txt', 'r+', function(err, fd) {
  if (err) throw err;
  console.log('fd', fd)
  fs.read(fd, buf, 0, buf.length, 0, function (err, bytesRead, buffer) {
    if (err) throw err;
    console.log(bytesRead, buffer);
    console.log(buf.slice(0, bytesRead).toString())
  })
})
