var fs = require('fs');

fs.watch('./example-dir/', function (eventType, filename) {
  console.log('eventType: ' + eventType);

  if (filename) {
    console.log('filename:', filename);
  } else {
    console.log('File name is not provided');
  }
})
