var fs = require('fs');

fs.truncate('./example-dir/example.txt', 2, function(err) {
  if (err) throw err;
  console.log('Truncated.')
})
