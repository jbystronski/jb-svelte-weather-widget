<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import { weatherData } from '$lib/stores/weatherDataStore';
	import { pad, getTimezoneCurrentTime } from '$lib/utils/formatTime';

	let { color } = getContext<App.ThemeInterface>('theme');

	let innerText = '00 : 00 : 00';

	let timer: NodeJS.Timer;
	onDestroy(() => clearInterval(timer));

	function startTimer() {
		if (timer) {
			clearInterval(timer);
		}

		timer = setInterval(() => {
			const time = getTimezoneCurrentTime($weatherData.utc_offset_seconds);

			innerText = `${pad(time.getHours())} : ${pad(time.getMinutes())} : ${pad(
				time.getSeconds() + 1
			)}`;
		}, 1000);
	}

	startTimer();
</script>

<p style:color={color.font.timer}>{innerText}</p>

<style>
	p {
		padding: 0;
		margin: 0;
		font-size: 0.8rem;
	}
</style>
