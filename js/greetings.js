const today = new Date();
const hours = today.getHours();

const greetingContent = document.querySelector('.greetings__text');

const userName = CONFIG.name;

const gree1 = CONFIG.greetingNight;
const gree2 = CONFIG.greetingMorning;
const gree3 = CONFIG.greetingAfternoon;
const gree4 = CONFIG.greetingEvening;

if (hours > 23 && hours < 5) {
	greetingContent.textContent = `${gree1}, ${userName}`;
} else if (hours >= 6 && hours < 12) {
	greetingContent.textContent = `${gree2}, ${userName}`;
} else if (hours >= 12 && hours < 17) {
	greetingContent.textContent = `${gree3}, ${userName}`;
} else {
	greetingContent.textContent = `${gree3}, ${userName}`;
}
