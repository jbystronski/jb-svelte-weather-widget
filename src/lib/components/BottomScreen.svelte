<script lang="ts">
	import { weatherData } from '$lib/stores/weatherDataStore';
	import Forecast from './Forecast.svelte';
</script>

{#if $weatherData.daily && $weatherData.daily.length}
	{#each $weatherData.daily.slice(1, 6) as data, i}
		<Forecast {data} />
	{/each}
{/if}
