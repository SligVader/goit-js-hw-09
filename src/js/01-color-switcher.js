function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let colorTimer = null;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
  colorTimer = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);

  startBtn.setAttribute('disabled', true);
  stopBtn.disabled = false;
}

function onStop() {
  clearInterval(colorTimer);
  stopBtn.setAttribute('disabled', true);
  startBtn.disabled = false;
}
