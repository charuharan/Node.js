const fs = require('fs');

  try {
    const fd = fs.open('/Users/charumathi.hariharan/escape-seq-colors.txt', '-r')
  } catch (err) {
    console.error(err)
  }