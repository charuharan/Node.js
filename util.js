const util = require('util');

async function fn() {
    return 'hello world';
  }
  const callbackFunction = util.callbackify(fn);
  
  callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
  });
const debuglog = util.debuglog('foo');
  
debuglog('hello from foo [%d]', 123);
util.format('%s:%s', 'foo', 'bar', 'baz');
// Returns: 'foo:bar baz'