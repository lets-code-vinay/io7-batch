const ele = document.getElementById("timing");
const surprise = document.getElementById("surprise");
const stopSurprise = document.querySelector("#stop-surprise");

const stopDial = document.querySelector("#stop-dial");

const seconds = document.querySelector("#clock-hand");
let counts = 0;
window.onload = () => {
  console.log("on laoding");
};

const showNewProduct = setTimeout(() => {
  console.log("showNewProduct--", showNewProduct);
  ele.style.display = "block";
}, 6000);

const surpriseTiming = setTimeout(() => {
  surprise.innerHTML = "";
  surprise.innerHTML = `<h2 style='color:red; background-color:#ff9800'>Pika boooo</h2>`;
}, 5000);

stopSurprise.addEventListener("click", () => {
  console.log("clearing timeout--", surpriseTiming);
  clearTimeout(surpriseTiming);
  clearTimeout(showNewProduct);
  clearInterval(countInterval);
});

const countInterval = setInterval(() => {
  counts += 1;
  //   if (counts > 6) return;

  surprise.innerHTML = `<h2 style='background-color:#ff9800'>Some surprise is on the way after ${counts} sec</h2>`;

  console.log("checking");
}, 1000);

// ---------- clock ---------
let secondCount = 0;
let minCount = 0;
const clockHandMin = document.querySelector("#clock-hand-min");

const clockTiming = setInterval(() => {
  if (secondCount < 360) {
    secondCount += 1;
    seconds.style.transform = `rotate(${secondCount}deg)`;
  } else {
    secondCount = 0;
    minCount += 1;
    clockHandMin.style.transform = `rotate(${minCount}deg)`;
  }
}, 1000);

const handleStopDial = () => {
  clearInterval(clockTiming);
};
