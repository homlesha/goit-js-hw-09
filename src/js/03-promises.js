const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const createPromiseBtn = document.querySelector('button[type="submit"]');


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
};
createPromiseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let firstDelay = +delay.value
  let delayStep = +step.value
  console.log(delay.value)
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, (firstDelay + (i * delayStep)))
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }  
});






