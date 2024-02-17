const form = document.querySelector('.form');

form.addEventListener('submit', handleSnackOn);

function handleSnackOn(event) {
    event.preventDefault();
    const elem = event.target.elements;
    const state = elem.state.value;
    console.log(state)
    makePromise({ delay: `${elem.delay.value}`, state: state})
      .then(value =>
        console.log(`✅ Fulfilled promise in ${elem.delay.value}ms`)
      )
      .catch(error =>
        console.log(`❌ Rejected promise in ${elem.delay.value}ms`)
      );
};

const makePromise = ({delay, shouldResolve}) => {
  return new Promise((resolve, reject) => {
	   setTimeout(() => {
				if(shouldResolve === 'fulfilled') {
					resolve(delay)
				} else {
					reject(delay)
				}
			}, delay);
  });
};

