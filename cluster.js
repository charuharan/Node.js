/*const worker = cluster.fork();
worker.on('exit', (code, signal) => {
  if (signal) {
    console.log(`worker was killed by signal: ${signal}`);
  } else if (code !== 0) {
    console.log(`worker exited with error code: ${code}`);
  } else {
    console.log('worker success!');
  }
});
//disconnect
cluster.on('disconnect', (worker) => {
    console.log(`The worker #${worker.id} has disconnected`);
  });

//listen
cluster.on('listening', (worker, address) => {
console.log(
    `A worker is now connected to ${address.address}:${address.port}`);
});

//event online
cluster.on('online', (worker) => {
    console.log('Yay, the worker responded after it was forked');
  });*/

const cluster = require('cluster');

if (cluster.isMaster) {
    console.log('I am master');
    cluster.fork();
    cluster.fork();
} else if (cluster.isWorker) {
    console.log(`I am worker #${cluster.worker.id}`);
}
  