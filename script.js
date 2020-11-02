const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempMonth = tempDate.getMonth();
let tempYear = tempDate.getFullYear();
let tempDay = tempDate.getDate();

console.log(tempDate);
console.log(tempYear);
console.log(tempMonth);
console.log(tempDay);
const futureDate = new Date(tempYear, tempMonth, tempDay + 6, 8, 30, 0);
console.log(futureDate);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

console.log(minutes);
new Date(2020);

let month = futureDate.getMonth();
month = months[month];
console.log(month);
const weekday = weekdays[futureDate.getDay()];
console.log(weekday);
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
// const present = futureDate.getDay();
// console.log(present);

const futureTime = futureDate.getTime();
console.log(futureTime);
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(oneDay);
  const oneHour = 60 * 60 * 1000;
  console.log(oneHour);
  const oneMinute = 60 * 1000;
  console.log(oneMinute);
  // calculate all values
  let days = t / oneDay;
  console.log(days);
  days = Math.floor(days);
  console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  console.log(minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log(seconds);
  // set values array
  const values = [days, hours, minutes, seconds];
  console.log(values);
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
// set initial values
getRemaindingTime();
