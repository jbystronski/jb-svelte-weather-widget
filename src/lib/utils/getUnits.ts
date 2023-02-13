export const getTempUnit = (unit: string) =>
	['celsius', 'fahrenheit'].includes(unit) ? unit : 'celsius';

export const getSpeedUnit = (unit: string) =>
	['kmh', 'ms', 'mph', 'kn'].includes(unit) ? unit : 'kmh';
