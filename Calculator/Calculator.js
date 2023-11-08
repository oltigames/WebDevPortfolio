// DECLARING VARIABLES
let value = "";
let char;
let answer;
let firstValue;
let opertaor;

const add = (p) => {
  value += p;
  answer += p;
  console.log(value);
  document.getElementById("value").innerHTML = value;
};

const deleteThis = () => {
  value = value.slice(0, value.length - 1);
  document.getElementById("value").innerHTML = value;
};
const deleteAll = () => {
  value = "";
  document.getElementById("value").innerHTML = value;
};

const update = () => {
  value;
};

// function calculate(expression) {
//   var index = expression.indexOf('+');
//   var leftExpression = expression.substr(0, index);
//   var rightExpression = expression.substr(index, expression.length);

//   var leftValue = calculate(leftExpression);
//   var rightValue = calculate(rightExpression);
//   return leftValue + rightValue;
// }
// const evaluateExpression = () => {
//   //find first + or - and split
// };

const operation = (i) => {
  if (i != "=") {
    firstValue = Number(value);
    answer = "";
    operator = i; //string value
    console.log(firstValue);
  } else {
    console.log(answer);
    let secondValue = Number(answer.substring(1));
    switch (operator) {
      case "+":
        answer = firstValue + secondValue;
        value = answer;
        document.getElementById("value").innerHTML = value;
        answer = "";
        break;
      case "-":
        answer = firstValue - secondValue;
        value = answer;
        console.log(answer);
        document.getElementById("value").innerHTML = value;
        answer = "";
        break;
      case "*":
        answer = firstValue * secondValue;
        value = answer;
        document.getElementById("value").innerHTML = value;
        answer = "";
        break;
      case "÷":
        answer = firstValue / secondValue;
        value = answer;
        document.getElementById("value").innerHTML = value;
        answer = "";
        break;
      default:
        console.log("nothing");
    }
  }
};

// only addition works
