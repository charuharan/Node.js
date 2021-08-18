//console.log(WebAssembly);
/*
Object [WebAssembly] {
  compile: [Function: compile],
  validate: [Function: validate],
  instantiate: [Function: instantiate]
}
*/
// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require('fs');
const wasmBuffer = fs.readFileSync('/path/to/add.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Exported function live under instance.exports
  const add = wasmModule.instance.exports.add;
  const sum = add(5, 6);
  console.log(sum); // Outputs: 11
});
