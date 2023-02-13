<script lang="ts">
	import App from '$lib/components/App.svelte';
	import { WeatherWidget } from '../lib';
</script>

<div class="wrapper">
	<WeatherWidget />
</div>

<style>
	.wrapper {
		height: 500px;
		width: 700px;
	}

	.container {
		background-color: grey;
		height: 1500px;
		width: 100%;
	}
</style>
