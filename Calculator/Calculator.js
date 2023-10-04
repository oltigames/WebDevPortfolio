var value = "";
const add = (i) => {
  value += i;
  console.log(value);
  document.getElementById("value").innerHTML = value;
};
const update = () => {
  document.getElementById("value").innerHTML = value;
};
const deleteThis = () => {
  let value = value.slice(0, value.length - 1);
  document.getElementById("value").innerHTML = value;
  console.log(value.slice(0, value.length - 1));
};
const deleteAll = () => {
  var value = "0";
  document.getElementById("value").innerHTML = value;
  console.log(value);
};
