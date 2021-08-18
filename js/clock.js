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

	if (dateFormat.hours == 0) {
		dateFormat.hours = 12;
	}

	dateFormat.hours = dateFormat.hours < 10 ? '0' + dateFormat.hours : dateFormat.hours;
	dateFormat.minutes = dateFormat.minutes < 10 ? '0' + dateFormat.minutes : dateFormat.minutes;
	dateFormat.seconds = dateFormat.seconds < 10 ? '0' + dateFormat.seconds : dateFormat.seconds;

	contentHours.textContent = dateFormat.hours;
	contentMinutes.textContent = dateFormat.minutes;
	contentSeconds.textContent = dateFormat.seconds;

	setTimeout(displayClock, 1000);
};

displayClock();
