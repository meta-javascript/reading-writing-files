var fs = require('fs');

fs.realpath('./example-dir', function (err, resolvedPath) {
  if (err) throw err;

  console.log(resolvedPath);
})
