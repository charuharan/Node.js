
/*const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')*/
//consume a readable stream directly
/*readableStream.on('readable', () => {
    console.log(readableStream.read())
  })
writableStream.write('hey!\n')
writableStream.end()*/
const { Transform } = require('stream')//transform stream
const TransformStream = new Transform();
TransformStream._transform = (chunk, encoding, callback) => {
    console.log(chunk.toString().toUpperCase());
    callback();
  }
process.stdin.pipe(TransformStream);
  