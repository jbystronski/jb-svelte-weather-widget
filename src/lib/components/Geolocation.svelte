<script lang="ts">
	import { getContext } from 'svelte';
	import SvgIcon from './SvgIcon.svelte';
	import DropdownList from './DropdownList.svelte';

	let {
		color: {
			font: { main: color }
		}
	} = getContext<App.ThemeInterface>('theme');

	const handleSearch = getContext<(v: string) => void>('handleSearch');

	function onSearch(v: string) {
		if (v !== '') {
			open = true;
			handleSearch(v.trim().charAt(0).toUpperCase() + v.trim().slice(1));
		}
	}

	let searchValue: string;
	let open = false;
</script>

<div class="container">
	<div id="inputWrapper" style:color>
		<input
			bind:value={searchValue}
			on:keydown={(e) => {
				if (e.key.toLowerCase() === 'enter') {
					onSearch(searchValue);
				}
			}}
			style:color
		/>

		<div class="iconWrapper">
			<SvgIcon
				props={{
					size: '0.5rem',
					path: 'arrow_down',
					color,
					clickHandler: () => {
						open = !open;
					}
				}}
			/>

			<span class="searchWrapper">
				<SvgIcon
					props={{
						color,
						size: '1rem',
						path: 'search',
						clickHandler: function () {
							onSearch(searchValue);
						}
					}}
				/>
			</span>
		</div>
	</div>
	<DropdownList bind:open />
</div>

<style>
	.container {
		position: relative;
		width: 16rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		position: relative;
	}

	.searchWrapper {
		position: absolute;
		right: -1.5rem;
		top: 50%;
		transform: translateY(-40%);
	}

	input {
		border: none;
		background: transparent;
		width: auto;
		outline: none;
	}

	#inputWrapper {
		background: rgba(0, 0, 0, 0.08);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: inherit;
		box-sizing: border-box;
		padding: 4px;
		padding-left: 6px;
		padding-right: 6px;
		width: 100%;
		border-radius: 6px;
	}

	.iconWrapper {
		cursor: pointer;
		margin-left: 8px;
	}
</style>
