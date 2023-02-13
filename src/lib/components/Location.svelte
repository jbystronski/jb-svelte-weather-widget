<script lang="ts">
	import { getContext } from 'svelte';
	import { weatherData } from '$lib/stores/weatherDataStore';
	import { getFullLocation } from '$lib/utils/getFullLocation';
	let {
		color: { font }
	} = getContext<App.ThemeInterface>('theme');

	$: ({ daily, currentLocation } = $weatherData);
</script>

<div>
	{#if daily && currentLocation}
		<p class="primary" style:color={font.main}>
			{currentLocation ? getFullLocation(currentLocation).split(', ').slice(0, 2).join(', ') : ''}
		</p>

		<p class="secondary" style:color={font.main}>{daily[0].time}</p>
	{/if}
</div>

<style>
	.primary {
		padding: 0;
		margin: 0;
		font-size: 1rem;
		margin-bottom: 0.3rem;
	}

	.secondary {
		padding: 0;
		margin: 0;
		font-size: 0.8rem;
	}
</style>
