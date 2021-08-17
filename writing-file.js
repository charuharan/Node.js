const fs = require('fs')

const content = 'Some content!'

fs.writeFile('C:\Users\charumathi.hariharan\escape-seq-colors.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

/*
const fs = require('fs')

const content = 'Some content!'

try {
  const data = fs.writeFileSync('C:\Users\charumathi.hariharan\escape-seq-colors.txt', content)
  //file written successfully
} catch (err) {
  console.error(err)
}*/
