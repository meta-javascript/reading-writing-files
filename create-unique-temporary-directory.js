var fs = require('fs');

fs.mkdtemp('./example-dir/foo-', (err, folder) => {
  if (err) throw err;
  console.log(folder);
});
