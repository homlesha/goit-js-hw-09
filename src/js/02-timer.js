import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"

const startBtn = document.querySelector('button[data-start]');
const dateTime = document.querySelector('#datetime-picker');

const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");

startBtn.disabled = true;
let timer = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            alert('Please choose a date in the future')
        } else startBtn.disabled = false;
    },
};

flatpickr(dateTime, options)

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    startTimer();
    timer = setInterval(startTimer, 1000);
});

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
};

function startTimer() {
    let countdown = new Date(dateTime.value) - new Date();
    if (countdown >= 0) {
        let time = convertMs(countdown);
        days.textContent = addLeadingZero(time.days);
        hours.textContent = addLeadingZero(time.hours);
        minutes.textContent = addLeadingZero(time.minutes);
        seconds.textContent = addLeadingZero(time.seconds);
        startBtn.disabled = true;
    } else clearInterval(timer)
};