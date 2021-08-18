const date = new Date();
const monthContent = document.querySelector('.month');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const month = months[date.getMonth()];
const currentDay = date.getDate();

monthContent.textContent = `${month} ${currentDay}`;
