<script lang="ts">
	import { getContext } from 'svelte';
	import BottomScreen from './BottomScreen.svelte';
	import MainScreen from './MainScreen.svelte';
	import RightScreen from './RightScreen.svelte';

	let { bg, borderRadius, spacing } = getContext<App.ThemeInterface>('theme');
</script>

<div
	style:display="grid"
	style:gap={spacing.inner}
	style:padding={spacing.outer}
	style:background-color={bg.main}
	style:border-radius={borderRadius.container}
>
	<MainScreen />
	<RightScreen />
	<BottomScreen />
</div>
