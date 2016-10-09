var fs = require('fs');

fs.open('./example-dir/example.txt', 'w+', function(err, fd) {
  if (err) throw err;

  fs.fchown(fd, 1001, 1001, function (err) {
    if (err) throw err;
    console.log('Chnaged owner of file.');
  })
})
