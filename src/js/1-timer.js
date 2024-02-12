import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  input: document.getElementById('datetime-picker'),
  button: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};

let selectedDate;
let timerID = null;

const iziWarning = {
  title: 'Warning',
  titleColor: 'red',
  titleSize: '24px',
  message: 'Please choose a date in the future',
  messageSize: '16px',
  displayMode: 'replace',
  position: 'topCenter',
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      refs.button.disabled = true;
      refs.input.disabled = true;
      iziToast.show(iziWarning);
    } else {
      refs.button.disabled = false;
      refs.input.disabled = false;
    }
  },
};




refs.button.addEventListener('click', handleTimerClick);

flatpickr(refs.input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  addContent({ days, hours, minutes, seconds }); 
  timerOff();
   
};

function handleTimerClick() {
  timerID = setInterval(() => {
    const difrDate = selectedDate - new Date().getTime();
    convertMs(difrDate);
  }, 1000)
  refs.button.disabled = true;
};

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function addContent(obj) {
  refs.day.textContent = `${addLeadingZero(obj.days)}`;
  refs.hour.textContent = `${addLeadingZero(obj.hours)}`;
  refs.minute.textContent = `${addLeadingZero(obj.minutes)}`;
  refs.second.textContent = `${addLeadingZero(obj.seconds)}`;
}

function timerOff() {
  if (refs.day.textContent === "00" &&
    refs.hour.textContent === "00" &&
    refs.minute.textContent === "00" &&
    refs.second.textContent === "00"
  ) {
    clearInterval(timerID);
    iziToast.info({
      message: 'The countdown is over !',
      position: 'topCenter',
    });
    }
}
