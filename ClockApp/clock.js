const date = new Date();
var clock = document.getElementById("clock");
const update = () => {
  clock.innerHTML = date;
};

function updateClock() {
  if (!creier) {
    creier = setInterval(update, 1000);
  }
}
updateClock();
