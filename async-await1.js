
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("Hello World !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
