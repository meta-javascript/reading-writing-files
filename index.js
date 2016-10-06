const fs = require('fs');

/**
 * Create a file named example.txt and it return file descriptor
 */
fs.open('./example.txt', 'w', function (err, fd) {
  if (err) throw err;
  else {
    console.log('File has been created successfully!')
    /**
     * Write 'Hello World in file'
     */
    fs.write(fd, )
  }
})

/*
Get file info
{ dev: 2051, ID of device containing file.
  mode: 33204, File type and mode
  nlink: 1,
  uid: 1000,
  gid: 1000,
  rdev: 0,
  blksize: 4096,
  ino: 1453385, inode number
  size: 0,
  blocks: 0,
  atime: 2016-09-29T18:11:08.103Z,
  mtime: 2016-09-29T18:11:08.103Z,
  ctime: 2016-09-29T18:11:08.103Z,
  birthtime: 2016-09-29T18:11:08.103Z }
 */
fs.stat('./example.txt', function(err, stats) {
    if (err) throw err;
    console.log(stats);
})

// /**
//  * Rename File
//  * Take two arguments, old path and new path
//  * callback does not need arguments other than catching errors
//  */
// fs.rename('./example.txt', './foo.txt', function (err) {
//   if (err) throw err;
// })
