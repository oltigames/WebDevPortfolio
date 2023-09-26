let date = new Date();
let clock = document.getElementById("clock");
let update = () => {
  let date = new Date();
  clock.innerHTML = date;
};
update();
setInterval(update, 1000);
