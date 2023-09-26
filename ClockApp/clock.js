let date = new Date();
let clock = document.getElementById("clock");
let update = () => {
  console.log("update");
  let date = new Date();
};
update();
setInterval(update(), 1000);
