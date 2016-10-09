var fs = require('fs');

fs.link('./example-dir/example.txt', './example-dir/foo.txt',  function (err) {
  if (err) throw err;
  console.log('Made new name for file.');
})
