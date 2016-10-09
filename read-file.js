var fs = require('fs');

// readFile either take filename or file disscriptor
fs.readFile('./example-dir/example.txt', (err, data) => {
  if (err) throw err;
  // data is raw buffer and has to convert to string to see conent.
  console.log(data.slice(0, data.length).toString())
});
