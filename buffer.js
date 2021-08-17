const buf = Buffer.from('Hey!')
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
console.log(buf.toString())
console.log(buf.length)
for (const item of buf) {
    console.log(item) //72 101 121 33
  }

  