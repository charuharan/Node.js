
const fs = require('fs')

fs.readFile('C:\Users\charumathi.hariharan\escape-seq-colors.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

/*const fs = require('fs')

try {
  const data = fs.readFileSync('C:\Users\charumathi.hariharan\escape-seq-colors.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}*/
