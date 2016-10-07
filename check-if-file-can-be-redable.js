var fs = require('fs');

// console.log(fs.constants);
//
// fs.access('/tmp/example.txt', fs.constants.R_OK, function(err) {
//     if (err) throw err;
//     console.log('File is readable!')
// })

fs.access('/etc/passwd', fs.constants.R_OK | fs.constants.W_OK, (err) => {
  console.log(err ? 'no access!' : 'can read/write');
});
