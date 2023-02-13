<script lang="ts">
	import { icons } from './icons';
	export let props: App.IconProps;

	const { title, path, size, viewBox, color, clickHandler, ...rest } = props;
</script>

<svg
	on:click={clickHandler}
	{...rest}
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	style:width={size}
	style:height={size}
	viewBox={viewBox || '0 0 24 24'}
	fill={color || '#FFF'}
>
	<title>{title}</title>
	<path d={icons[path]} />
</svg>
