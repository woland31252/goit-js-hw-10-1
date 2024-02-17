const form = document.querySelector('.form');

form.addEventListener('submit', handleSnackOn);

function handleSnackOn(event) {
    event.preventDefault();
  const elem = event.target.elements;
  console.log(elem);
    const state = elem.state.value;
    console.log(state)
    makePromise({state: state, delay: `${elem.delay.value}`})
      .then(value =>
        console.log(`✅ Fulfilled promise in ${elem.delay.value}ms`)
      )
      .catch(error =>
        console.log(`❌ Rejected promise in ${elem.delay.value}ms`)
      );
};

const makePromise = ({value, delay}) => {
  return new Promise((resolve, reject) => {
	   setTimeout(() => {
				if(value === "fulfilled") {
					resolve(value)
				} else {
					reject(value)
				}
			}, delay);
  });
};

