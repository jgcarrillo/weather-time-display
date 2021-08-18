const contentHours = document.querySelector('.clock__hours');
const contentMinutes = document.querySelector('.clock__minutes');
const contentSeconds = document.querySelector('.clock__seconds');

const displayClock = () => {
	const date = new Date();

	const dateFormat = {
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds(),
		month: date.getMonth(),
	};

	contentHours.textContent = dateFormat.hours;
	contentMinutes.textContent = dateFormat.minutes;
	contentSeconds.textContent = dateFormat.seconds;

	setTimeout(displayClock, 1000);
};

displayClock();
