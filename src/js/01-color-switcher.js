const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;
const CHANGE_DELAY = 1000;
let timerId = null;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    changeBgColor()
    timerId = setInterval(changeBgColor, CHANGE_DELAY)
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeBgColor() {
    document.body.style.background = getRandomHexColor();
  };


  