
var a=5;
var b=10;
var c= a + b;
const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
const x = 1;
const y = 2;
const z = 3;
console.log('My %s has %d years', 'cat', 2);//format pretty phrases by passing variables and a format specifier
console.log(c);
console.log(process.env.USER_ID); // "239482"
console.log(process.env.USER_KEY); // "foobar"
console.log(process.env.NODE_ENV);//"development"
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
);
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
);
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
);
oranges.forEach(fruit => {
  console.count(fruit)
});
apples.forEach(fruit => {
  console.count(fruit)
});
console.countReset('orange');

oranges.forEach(fruit => {
  console.count(fruit)
});
