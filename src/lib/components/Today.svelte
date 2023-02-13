<script lang="ts">
	import SvgIcon from './SvgIcon.svelte';
	import { getContext } from 'svelte';
	import { weatherData } from '$lib/stores/weatherDataStore';

	let { color } = getContext<App.ThemeInterface>('theme');

	$: ({ daily, current_weather, tempSymbol } = $weatherData);
</script>

{#if daily && current_weather && tempSymbol}
	<div id="wrapper">
		<div id="innerWrapper">
			<div id="iconWrapper">
				<SvgIcon props={{ size: '7.5rem', path: daily[0]['icon'], color: color.icon.main }} />
			</div>
			<div>
				<div id="temperatureWrapper">
					<h4 style:color={color.font.main}>{current_weather.temperature}{tempSymbol}</h4>
					<p style:color={color.font.main}>{daily[0]['description']}</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	#wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: relative;
		height: 100%;
	}

	#innerWrapper {
		display: flex;
		align-items: center;
	}

	#iconWrapper {
		margin-right: 1rem;
		height: 9rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#temperatureWrapper {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
	}

	h4,
	p {
		text-align: center;
	}

	h4 {
		font-size: 3rem;
		margin: 0;
		line-height: 100%;
		font-weight: 400;
	}

	p {
		padding: 0;
		margin: 0;
		font-size: 1rem;
		margin-bottom: 0.3rem;
	}
</style>
