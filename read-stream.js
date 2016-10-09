var fs = require('fs');

fs.open('./example-dir/example.txt', 'w+', function(err, fd) {
if (err) throw err;
})
)
