// let hr = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let msec = document.getElementById("milliseconds");

let stt = document.getElementById("start");
let stp = document.getElementById("stop");
let rst = document.getElementById("reset");

let mins = 0,
  secs = 0,
  msecs = 0,
  result = false;

stt.addEventListener("click", () => (result = true));

stp.addEventListener("click", () => (result = false));

rst.addEventListener("click", () => {
  result = false;
  mins = 0;
  secs = 0;
  msecs = 0;
  min.innerHTML = "00";
  sec.innerHTML = "00";
  msec.innerHTML = "00";
});

function calZero(num) {
  return num < 10 ? "0" + num : num;
}

function timeGenerator() {
  if (result) {
    msecs++;
    msec.innerHTML = calZero(msecs);
    if (msecs > 99) {
      msec.innerHTML = "00";
      msecs = 0;
      secs++;
      sec.innerHTML = calZero(secs);
    }
    if (secs > 59) {
      sec.innerHTML = "00";
      secs = 0;
      mins++;
      min.innerHTML = calZero(mins);
    }
  }
}

setInterval(timeGenerator, 10);
