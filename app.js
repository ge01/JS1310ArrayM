/****************************************************
*            Converting Arrays to Strings           *
****************************************************/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("to-string").innerHTML = fruits.toString();

document.getElementById("fruits").innerHTML = fruits;

/****************************************************
*                 The join() method                 *
****************************************************/
document.getElementById("join").innerHTML =
fruits.join(" * ");

document.getElementById("join1").innerHTML =
fruits.join(" - ");

/****************************************************
*                Popping and Pushing                *
****************************************************/
document.getElementById("pop-function").innerHTML = fruits;

function popFunction() {
  fruits.pop();
  document.getElementById("pop-function").innerHTML = fruits;
}

document.getElementById("pop-function1").innerHTML = fruits;

function popFunction1() {
  document.getElementById("pop-function1").innerHTML = fruits.pop();
}

function pushFunction() {
  fruits.push("Kiwi");
  document.getElementById("push-function").innerHTML = fruits;
}

/****************************************************
*                 Shifting Elements                 *
****************************************************/
document.getElementById("my-shift").innerHTML = fruits;

function myShift() {
  fruits.shift();
  document.getElementById("my-shift").innerHTML = fruits;
}

document.getElementById("unshift-function").innerHTML = fruits;

function unshiftFunction() {
  fruits.unshift("Lemon");
  document.getElementById("unshift-function").innerHTML = fruits;
}
