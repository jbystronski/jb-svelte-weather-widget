<script lang="ts">
	import { getContext } from 'svelte';
	import { weatherData } from '$lib/stores/weatherDataStore';
	import SvgIcon from './SvgIcon.svelte';
	export let data: App.DailyWeather;

	let { bg, borderRadius, color } = getContext<App.ThemeInterface>('theme');

	const { description, icon, temp_max, temp_min, time } = data;
</script>

<div
	class="container flex"
	style:background-color={bg.bottom}
	style:border-radius={borderRadius.element}
>
	<div class="timeWrapper">
		<p style:color={color.font.bottom}>{time}</p>
	</div>

	<div class="iconWrapper">
		<SvgIcon props={{ path: icon, color: color.icon.bottom, size: '3.5rem' }} />
	</div>

	<div class="textWrapper flex">
		<p style:color={color.font.bottom}>
			{Math.round(temp_max)}{$weatherData.tempSymbol}/{Math.round(
				temp_min
			)}{$weatherData.tempSymbol}
		</p>

		<p style:color={color.font.bottom}>{description}</p>
	</div>
</div>

<style>
	.flex {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.container {
		text-align: center;
	}

	.timeWrapper {
		height: 2rem;

		text-align: center;

		margin-top: 8px;
	}

	p {
		padding: 0;
		margin: 0;
		font-size: 0.8rem;
	}

	.iconWrapper {
		height: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 8px;
	}

	.textWrapper {
		height: 4rem;
		display: flex;

		margin-top: 8px;
	}
</style>
