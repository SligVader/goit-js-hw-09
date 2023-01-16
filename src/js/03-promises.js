import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRefs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

formRefs.form.addEventListener('submit', promGen);

function promGen(evt) {
  evt.preventDefault();

  let delay = Number(formRefs.delay.value);
  const step = Number(formRefs.step.value);
  const amount = Number(formRefs.amount.value);

  for (let position = 0; position < amount; position += 1) {
    createPromise(position, delay)
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
    });
  });
}
