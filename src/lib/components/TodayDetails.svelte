<script lang="ts">
	import SvgIcon from './SvgIcon.svelte';
	import { getContext } from 'svelte';
	import { weatherData } from '$lib/stores/weatherDataStore';

	let { color } = getContext<App.ThemeInterface>('theme');

	const getList = ({ daily, ...data }: App.WeatherDataObject) => [
		{
			icon: 'sunrise',
			val: `${daily[0]?.sunrise} (sunrise)`
		},
		{
			icon: 'sunset',
			val: `${daily[0]?.sunset} (sunset)`
		},
		{
			icon: 'temp_max',
			val: `max temperature ${daily[0]?.temp_max}${data.tempSymbol}`
		},
		{
			icon: 'temp_min',
			val: `min temperature ${daily[0]?.temp_min}${data.tempSymbol}`
		},
		{
			icon: 'wind',
			val: `wind speed ${data.current_weather?.windspeed} ${data.windspeed_unit}`
		}
	];
</script>

<div>
	{#each getList($weatherData) as { icon, val }, i}
		<div class="row">
			<SvgIcon props={{ path: icon, size: '1.5rem', color: color.icon.right }} />
			<p style:color={color.font.right} class="margin text">{val}</p>
		</div>
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	p {
		padding: 0;
		margin: 0;
		font-size: 0.8rem;
	}
	.margin {
		margin-left: 0.7rem;
	}
</style>
