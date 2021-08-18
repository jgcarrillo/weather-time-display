const date = new Date();

const dateFormat = {
	hours: date.getHours(),
	minutes: date.getMinutes(),
	month: date.getMonth(),
};

console.log(dateFormat.month);
