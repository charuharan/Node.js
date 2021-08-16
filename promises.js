let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})
const checkIfItsDone = () => {
    isItDoneYet
      .then(ok => {
        console.log(ok)
      })
      .catch(err => {
        console.error(err)
      })
  }

/*<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Promise</h2>

<p id="demo"></p>

<script>
function myDisplayer(val) {
  document.getElementById("demo").innerHTML = val;
}
let x = false;
let myPromise = new Promise(function(myResolve, myReject) {
  

// some code (try to change x to 5)

  if (x) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
</script>*/