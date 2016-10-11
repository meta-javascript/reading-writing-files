var fs = require('fs');

fs.symlink('./example-dir/example.txt', './example-dir/foo.txt', function(err) {
  if (err) throw err;
  console.log('unlinked');
})
