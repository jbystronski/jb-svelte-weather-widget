<script lang="ts">
	import { setContext, onMount, onDestroy } from 'svelte';
	import { gpsData } from '$lib/stores/gpsDataStore';
	import { weatherData } from '$lib/stores/weatherDataStore';
	import { getSpeedUnit, getTempUnit } from '$lib/utils/getUnits';
	import { getGpsData } from '$lib/utils/getGpsData';
	import { randomLocations } from '$lib/constants/randomLocations';
	import { getWeatherData } from '$lib/utils/getWeatherData';
	import { Storage } from '$lib/utils/Storage';
	import { localStorageKey } from '$lib/constants/localStorageKey';
	import Main from './Main.svelte';
	import { defaultTheme } from '$lib/utils/defaultTheme';

	export let defaultLocation = randomLocations[Math.floor(Math.random() * randomLocations.length)],
		theme,
		units,
		remember = false,
		refresh = 60;

	const windspeed_unit = getSpeedUnit(units?.speed);
	const temperature_unit = getTempUnit(units?.temperature);

	let refreshInterval: NodeJS.Timer;
	onDestroy(() => clearInterval(refreshInterval));

	setContext('theme', { ...defaultTheme, ...theme });

	setContext('gpsData', gpsData);

	setContext('handleSearch', (value: string) =>
		getGpsData({ name: value }).then((data) => {
			gpsData.set(data);
		})
	);

	onMount(async () => {
		const data =
			remember && Storage.has(localStorageKey)
				? Storage.get(localStorageKey)
				: await getGpsData({ count: 1, name: defaultLocation });

		gpsData.set(data);

		await fetchData(data);
	});

	async function fetchData(input: any) {
		if (Array.isArray(input) && input.length) {
			input = input[0];
		}

		if (remember) Storage.set(input);

		if (refreshInterval) {
			clearInterval(refreshInterval);
		}

		const getData = () =>
			getWeatherData({ ...input, ...getUnits() }).then((data) => {
				weatherData.update((current) => ({
					...current,
					currentLocation: input,
					windspeed_unit,
					...data
				}));
			});

		getData();

		refreshInterval = setInterval(getData, refresh * 100 * 1000);
	}

	setContext('changeLocation', async function (index: number) {
		if (!$gpsData) return;

		fetchData($gpsData[index]);
	});

	function getUnits() {
		return {
			windspeed_unit,
			temperature_unit
		};
	}
</script>

<Main />
