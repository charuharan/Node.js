const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
/*eventEmitter.on('start', () => {
    console.log('started')
  })
eventEmitter.emit('start')*/

//passing an argument
/*eventEmitter.on('start', number => {
    console.log(`started ${number}`)
  })
  
eventEmitter.emit('start', 23)*/
  
//passing multiple arguments to emit
eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
  })
  
  eventEmitter.emit('start', 1, 100)
  