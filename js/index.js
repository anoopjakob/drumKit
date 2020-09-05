var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    alert("i got clicked ");
  })
}


// higher order functions and passing functions as arguments

function add(num1,num2){
  return num1 + num2;
}
function multiply(num1, num2){
  return num1 * num2;
}
function subtract(num1,num2){
  return num1-num2;
}
function divide(num1, num2){
  return num1/num2;
}

function calculate(num1, num2, operator){
  return operator(num1, num2);
}
