var fs = require('fs');

fs.symlink('./example-dir/example.txt', './example-dir/foo', function(err) {
  if (err) throw err;
  console.log('symlinked');
})
