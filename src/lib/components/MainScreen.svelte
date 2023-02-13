<script lang="ts">
	import Location from './Location.svelte';
	import Geolocation from './Geolocation.svelte';
	import Timer from './Timer.svelte';
	import Today from './Today.svelte';
</script>

<div>
	<Location />
	<Timer />
	<Today />
	<Geolocation />
</div>

<style>
	div {
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0;
	}
</style>
