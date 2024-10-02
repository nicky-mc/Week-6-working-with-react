// event in Vanilla JS

//write and event that counts the number of times a button is clicked

//event handler
//get element by id --> button
let counter = 0;
function handleCount() {
  counter = counter + 1;
}

//event listener
const button = document.getElementById("button");
button.addEventListener("click", handleCount);
