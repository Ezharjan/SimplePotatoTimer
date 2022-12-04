// Setup the enviroment
var hours = 0;
var minutes = 0;
var seconds = 0;
var rawSeconds = 0;
var paused = true;
var aggression = 25;
var step = 1; //1=Stopwatch, -1=Timer

const SLIDE_SET = 250;
const SLIDE_MIN = 10;
const SLIDE_MAX = 500;
const SLIDE_STEP = 50;

renderTimer(hours, minutes, seconds);
initTimerFields();

function initTimerFields() {
  document.getElementById("newHour").value = hours;
  document.getElementById("newMin").value = minutes;
  document.getElementById("newSec").value = seconds;
  document.getElementById("newAggression").max = SLIDE_MAX;
  document.getElementById("newAggression").min = SLIDE_MIN;
  document.getElementById("newAggression").step = SLIDE_STEP;
  document.getElementById("newAggression").value = SLIDE_SET;
}

// Start the timer function to fire every second
var timer = setInterval(function () {
  if (paused == false) {
    seconds += step;
    rawSeconds += 1;
  }
  if (seconds < 0) {
    seconds = 59;
    minutes -= 1;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }

  renderTimer(hours, minutes, seconds);
  rollForPotato(35);
}, 1000);

// Function to update the timer readout on the document
function renderTimer(h, m, s) {
  document.getElementById("hours").innerHTML = h;
  if (minutes >= 10) {
    document.getElementById("minutes").innerHTML = m;
  } else {
    document.getElementById("minutes").innerHTML = "0" + m;
  }

  if (seconds >= 10) {
    document.getElementById("seconds").innerHTML = s;
  } else {
    document.getElementById("seconds").innerHTML = "0" + s;
  }
}

// Set the timer to a new value
function setTimer(h, m, s) {
  hours = h;
  minutes = m;
  seconds = s;
  renderTimer(hours, minutes, seconds);
  // new Audio(url).play();
}

// Check if potato 🥔
function rollForPotato() {}

function updateTimerValues() {
  if (
    document.getElementById("newHour").value == "" ||
    document.getElementById("newMin").value == "" ||
    document.getElementById("newSec").value == ""
  ) {
    document.getElementById("setTimerBtn").classList.add("disabled");
  } else {
    document.getElementById("setTimerBtn").classList.remove("disabled");
  }
}

function toggleTimer() {
  paused = !paused;
}

function setTimerBtn() {
  if (
    document.getElementById("newHour").value !== "" &&
    document.getElementById("newMin").value !== "" &&
    document.getElementById("newSec").value !== ""
  ) {
    let h = document.getElementById("newHour").value;
    let m = document.getElementById("newMin").value;
    let s = document.getElementById("newSec").value;
    setTimer(h, m, s);
  }
}

function updateAggression() {
  let newValue = document.getElementById("newAggression").value;
  if (newValue <= 100 && newValue >= 0) aggression = newValue;
}
