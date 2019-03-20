const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('hour-hand');
function setDate(){
const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees =(( seconds / 60) * 360);
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const mins = now.getMinutes();
const minsDegrees = ((mins / 60) * 360) + 90;
minsHand.style.transform = `rotate(${secondsDegrees}deg)`;

const hour = now.getMinutes();
const hourDegrees = ((mins / 12) * 360) + 90;
hourHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(setDate, 1000);
