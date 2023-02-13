<script lang="ts">
	import { getContext } from 'svelte';
	import { getFullLocation } from '$lib/utils/getFullLocation';

	export let open: boolean;

	let { color, bg } = getContext<App.ThemeInterface>('theme');

	let gpsData = getContext<SvelteStore<App.GpsDataObject[]>>('gpsData');

	const changeLocation = getContext<(index: number) => void>('changeLocation');

	function handleListItemClick(index: number) {
		open = false;
		changeLocation(index);
	}
</script>

<ul>
	{#if open && $gpsData && $gpsData.length}
		{#each $gpsData as location, i}
			<li
				on:keypress={function (e) {
					if (e.code === 'Enter') handleListItemClick(i);
				}}
				style:background-color={bg.list.main}
				style:color={color.font.list.main}
				style:border-color={bg.list.border}
				on:click={function () {
					handleListItemClick(i);
				}}
			>
				{getFullLocation(location)}
			</li>
		{/each}
	{/if}
</ul>

<style>
	ul {
		position: absolute;
		left: 0;
		top: 100%;
		width: inherit;
		max-height: 24rem;
		overflow: auto;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		font-size: 0.845rem;
		color: inherit;
		cursor: pointer;
		box-sizing: border-box;
		padding: 4px;
	}
</style>
