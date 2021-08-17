const EventEmitter = require('events')
const door = new EventEmitter()
door.emit("slam") // emitting the event "slam"
door.eventNames()
door.getMaxListeners()
door.listenerCount('open')
door.listeners('open')
door.on('open', () => {
    console.log('Door was opened')
  })
door.removeAllListeners('open')
