var fs = require('fs');

fs.open('./example-dir/example.txt', 'w+', function(err, fd) {
  if (err) throw err;

  fs.fchmod(fd, '755', function(err) {
      if (err) throw err;
      console.log('Permissions changed.')
  })
})
