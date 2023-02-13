<script lang="ts">
	import { getContext } from 'svelte';
	import TodayDetails from './TodayDetails.svelte';

	let { bg, borderRadius } = getContext<App.ThemeInterface>('theme');
</script>

<div style:background-color={bg.right} style:border-radius={borderRadius.element}>
	<TodayDetails />
</div>

<style>
	div {
		grid-column-start: 4;
		grid-column-end: 6;
		padding: 1rem;
	}
</style>
