import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function doubleDigit(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = doubleDigit(Math.floor(ms / day));
  // Remaining hours
  const hours = doubleDigit(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = doubleDigit(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = doubleDigit(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const timerField = {
  daysField: document.querySelector('span[data-days]'),
  timeHours: document.querySelector('span[data-hours]'),
  timeMinutes: document.querySelector('span[data-minutes]'),
  timeSeconds: document.querySelector('span[data-seconds]'),
};

const currentTime = new Date();

startBtn.setAttribute('disabled', false);

let chosenDate = 0;
let interval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0];
    const timeDifference = chosenDate - currentTime;
    if (timeDifference <= 0) {
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else startBtn.disabled = false;
  },
};

// flatpickr(input, options);

startBtn.addEventListener('click', start);

const fp = flatpickr(input, options);

function start() {
  startBtn.disabled = true;
  interval = setInterval(() => {
    const timeFrame = fp.selectedDates[0] - new Date();

    const convertedTime = convertMs(timeFrame);
    console.log(convertedTime);

    timeUpdate(convertedTime);
  }, 1000);

  function timeUpdate({ days, hours, minutes, seconds }) {
    timerField.daysField.textContent = days;
    timerField.timeHours.textContent = hours;
    timerField.timeMinutes.textContent = minutes;
    timerField.timeSeconds.textContent = seconds;
  }
}
