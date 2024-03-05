const day = document.querySelector('#day');
const dayTOD = document.querySelector('#dayTOD');
const hour = document.querySelector('#hour');
const hourTOD = document.querySelector('#hourTOD');
const min = document.querySelector('#min');
const minTOD = document.querySelector('#minTOD');
const sec = document.querySelector('#sec');
const secTOD = document.querySelector('#secTOD');
let targetDay = new Date(2024, 11, 25, 12, 0);

function CountDown() {
  let currentDay = new Date();
  const distance = targetDay - currentDay;
  let day = `${Math.floor(distance / 1000 / 60 / 60 / 24)}`.padStart(2, '0');
  let hours = `${Math.floor((distance / (1000 * 60)) % 24)}`.padStart(2, 0);
  let minutes = `${Math.floor((distance / (1000 * 60)) % 60)}`.padStart(2, 0);
  let seconds = `${Math.floor((distance / 1000) % 60)}`.padStart(2, 0);

  updateUI(day, hours, minutes, seconds);

  if (distance < 0) {
    clearInterval(countInterval);
    init();
  }
}
const countInterval = setInterval(CountDown, 1000);
function updateUI(d, h, m, s) {
  day.textContent = d;
  hour.textContent = h;
  min.textContent = m;
  sec.textContent = s;
}
function init() {
  day.textContent = '00';
  hour.textContent = '00';
  min.textContent = '00';
  sec.textContent = '00';
}

init();
