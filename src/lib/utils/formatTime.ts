export const pad = (v: string | number) => (v + '').padStart(2, '0');

export const getWeekdayMonthYear = (time: Date) =>
	['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][time.getDay()] +
	', ' +
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
		time.getMonth()
	] +
	' ' +
	pad(time.getDate()) +
	', ' +
	time.getFullYear();

export const getHoursMinutes = (time: Date) => pad(time.getHours()) + ':' + pad(time.getMinutes());

export const getTimezoneCurrentTime = (offsetSeconds: number) => {
	const d = new Date();

	return new Date(d.getTime() + offsetSeconds * 1000 + d.getTimezoneOffset() * 60 * 1000);
};
