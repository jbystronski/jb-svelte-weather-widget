import { writable } from 'svelte/store';

export const weatherData = writable<App.WeatherDataObject>({
	windspeed_unit: 'kmh',
	tempSymbol: 'C',
	daily: [
		{
			sunrise: '',
			sunset: '',
			temp_max: 10,
			temp_min: 0,
			icon: '',
			description: '',
			time: ''
		}
	],
	current_weather: undefined,
	utc_offset_seconds: 0,
	currentLocation: {}
});
