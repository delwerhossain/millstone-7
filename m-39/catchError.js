const btn = document.getElementById("btn").addEventListener("click", () => {
    const valueInput = document.getElementById("default-search").value;
    document.getElementById("out-put").innerHTML = valueInput;
    console.log(valueInput);
});
 


// let timer = null;
// let milisec = 0;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let days = 0;

// const stopwatch = document.getElementById("stopwatch");
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const resetBtn = document.getElementById("reset");

// const start = () => {
//   timer = setInterval(() => {
//     milisec++;
//     if (milisec === 1000) {
//       milisec = 0;
//       seconds++;
//     } else if (seconds === 60) {
//       seconds = 00;
//       minutes++;
//     } else if (minutes === 60) {
//       minutes = 00;
//       hours++;
//     } else if (hours === 24) {
//       hours = 00;
//       days++;
//     }
//     stopwatch.innerText = `${hours < 10 ? "0" + hours : hours}:${
//       minutes < 10 ? "0" + minutes : minutes
//     }:${seconds < 10 ? "0" + seconds : seconds}:${
//       milisec < 100 ? "0" + milisec : milisec
//     }`;
//   },1);
// };

// const stop = () => {
//   clearInterval(timer);
// };
// const reset = () => {
//   clearInterval(timer);
//   milisec = 0;
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   days = 0;
//   stopwatch.innerText = `00:00:000`;
// };

// startBtn.addEventListener("click", start);
// stopBtn.addEventListener("click", stop);
// resetBtn.addEventListener("click", reset);


let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const millisecondsDisplay = document.getElementById("milliseconds");
const secondsDisplay = document.getElementById("seconds");
const minutesDisplay = document.getElementById("minutes");
const hoursDisplay = document.getElementById("hours");

function startStopwatch() {
  interval = setInterval(() => {
    milliseconds += 10;

    if (milliseconds == 1000) {
      seconds++;
      milliseconds = 0;
    }

    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes == 60) {
      hours++;
      minutes = 0;
    }

    millisecondsDisplay.innerText = milliseconds.toString().padStart(3, '0');
    secondsDisplay.innerText = seconds.toString().padStart(2, '0');
    minutesDisplay.innerText = minutes.toString().padStart(2, '0');
    hoursDisplay.innerText = hours.toString().padStart(2, '0');
  }, 10);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  millisecondsDisplay.innerText = '000';
  secondsDisplay.innerText = '00';
  minutesDisplay.innerText = '00';
  hoursDisplay.innerText = '00';
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);