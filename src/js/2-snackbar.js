import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSnackOn);

function handleSnackOn(event) {
  event.preventDefault();
  const elem = event.target.elements;
  console.log(elem);
  const state = elem.state.value;
  const delay = elem.delay.value;
  console.log(state);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state == 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      iziToast.info({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
      });
    })
    .catch(delay => {
      iziToast.warning({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
      });
    });
}
