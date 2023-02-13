// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface ThemeInterface {
			color: {
				font: {
					main: string;
					timer: string;
					bottom: string;
					right: string;
					list: {
						main: string;
						hover: string;
					};
				};
				icon: {
					main: string;
					right: string;
					bottom: string;
				};
			};
			bg: {
				main: string;
				right: string;
				bottom: string;
				list: {
					main: string;
					hover: string;
					border: string;
				};
			};
			spacing: {
				inner: string;
				outer: string;
			};
			borderRadius: {
				container: string;
				element: string;
			};
		}

		interface ForecastProps {
			description: string;
			icon: string;
			temp_max: number;
			temp_min: number;
			time: string;
		}

		interface IconProps {
			title?: string;
			path: string;
			size: string;
			viewBox?: string;
			color: string;
			clickHandler?: () => any;
		}

		interface DailyWeather {
			sunrise: string;
			sunset: string;
			temp_max: number;
			temp_min: number;
			icon: string;
			description: string;
			time: string;
			[key: string]: any;
		}

		interface CurrentWeather {
			windspeed: string | number;
			temperature: number;
			description: string;
			weathercode: number;
			time: Date | string;
		}

		type TempUnits = 'C' | 'F';

		type SpeedUnits = 'kmh' | 'mph' | 'kn' | 'ms';

		interface OpenMeteoResponseData {
			current_weather: CurrentWeather;
			daily_units?: any;
			utc_offset_seconds: number;
			daily: {
				sunrise: string[];
				sunset: string[];
				time: string[];
				weathercode: number[];
				temperature_2m_max: number[];
				temperature_2m_min: number[];
			};
		}

		interface WeatherDataObject extends OpenMeteoResponseData {
			daily: DailyWeather[];
			current_weather?: CurrentWeather;

			currentLocation?: Location;
			tempSymbol: TempUnits;
			windspeed_unit: string;
		}

		interface WeatherAppProps {
			theme?: ThemeInterface | undefined;
			refresh?: number | undefined;
			defaultLocation?: string | undefined;
			units?: {
				speed?: SpeedUnits;
				temperature?: TempUnits;
			};
			remember?: boolean;
		}

		type GpsDataObject = {
			timezone: string;
			longitude: number;
			latitude: number;
			temperature_unit: TempUnits;
			windspeed_unit: SpeedUnits;
		};

		type iconType = {
			[key: string]: string;
		};

		interface Location {
			[name?: string]: string;
			[country?: string]: string;
			[admin1?: string]: string;
			[admin2?: string]: string;
		}

		interface GpsInput {
			name: string;
			count?: number;
			format?: string;
			language?: string;
		}
	}
}

export {};
