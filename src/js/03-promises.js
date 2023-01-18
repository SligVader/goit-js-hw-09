import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', promGen);

// const formRefs = {
//   form: document.querySelector('.form'),
//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),
// };

// formRefs.form.addEventListener('submit', promGen);

function promGen(evt) {
  evt.preventDefault();

  let delay = Number(evt.target.elements.delay.value);
  const step = Number(evt.target.elements.step.value);
  const amount = Number(evt.target.elements.amount.value);
  console.dir(evt.target.elements.amount.value);

  for (let position = 0; position < amount; position += 1) {
    createPromise(position + 1, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }, delay)
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay);
    delay += step;
  }
  evt.target.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = { position, delay };

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res(promise);
      } else {
        rej(promise);
      }
    }, delay);
  });
}
