
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
//print the stack trace
const function2 = () => console.trace()
const function1 = () => function2()
function1()
//color the output of your text in the console
console.log('\x1b[33m%s\x1b[0m', 'hi!');
//calculate how much time a function takes to run
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
//chalk
const chalk = require('chalk');
console.log(chalk.red('hi!'));
//create a progress bar
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
//getting input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})
//inquire
const inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`);
})






