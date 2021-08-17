const path = require('path')
//path.basename
require('path').basename('/test/something') //something
require('path').basename('/test/something.txt') //something.txt
require('path').basename('/test/something.txt', '.txt') //something
//path.dirname
require('path').dirname('/test/something') // /test
require('path').dirname('/test/something/file.txt') // /test/something
//path.extname
require('path').extname('/test/something') // ''
require('path').extname('/test/something/file.txt') // '.txt'
//path.format
require('path').format({ dir: 'C:\\Users\\charumathi.hariharan', base: 'escape-seq-colors.txt' }) //  'C:\\Users\\charumathi.hariharan\\escape-seq-colors.txt'
//path.isAbsolute
require('path').isAbsolute('/test/something') // true
require('path').isAbsolute('./test/something') // false
