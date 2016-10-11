var fs = require('fs');

fs.writeFile('./example-dir/example.txt', 'Hello, World!', function(err) {
  if (err) throw err;
  console.log('Saved!');
})
