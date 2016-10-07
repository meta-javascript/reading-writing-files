var fs = require('fs');

fs.readdir('/tmp/', function (err, files) {
  if (err) throw err;

  // files argument is an array of file names.
  files.forEach(function (file) {
    console.log(file);
  })
})
