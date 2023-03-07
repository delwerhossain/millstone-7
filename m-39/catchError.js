const btn = document.getElementById("btn").addEventListener("click", () => {
    const valueInput = document.getElementById("default-search").value;
    document.getElementById("out-put").innerHTML = valueInput;
    console.log(valueInput);
});
 


let timer = null;
let milisec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

const stopwatch = document.getElementById("stopwatch");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const start = () => {
  timer = setInterval(() => {
    milisec++;
    if (milisec === 200) {
      milisec = 0;
      seconds++;
    } else if (seconds === 60) {
      seconds = 00;
      minutes++;
    } else if (minutes === 60) {
      minutes = 00;
      hours++;
    } else if (hours === 24) {
      hours = 00;
      days++;
    }
    stopwatch.innerText = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}:${
      milisec < 100 ? "0" + milisec : milisec
    }`;
  });
};

const stop = () => {
  clearInterval(timer);
};
const reset = () => {
  clearInterval(timer);
  milisec = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;
  stopwatch.innerText = `00:00:000`;
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
