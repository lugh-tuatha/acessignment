/*------------------- web.dev js -------------------*/
const up = document.getElementById("plus-one");
const down = document.getElementById("minus-one");
const counter = document.getElementById("counter");

let count = 0;

function plusOne() {
  count =  count + 1;
  counter.innerText = count;
  console.log('click')
}

function minusOne() {
  count =  count - 1;
  counter.innerText = count;
  console.log('click')
}