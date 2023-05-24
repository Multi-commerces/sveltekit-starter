<script lang="ts">
	import Paper, { Content, Title } from '@smui/paper';
	import Fa from 'svelte-fa';
	import Cell from '@smui/layout-grid/src/Cell.svelte';

	export let faIcon: any;
	export let title: string;
	export let tag = 'h2';
	export let spanDevices = { desktop: 4, tablet: 12, phone: 12 };
</script>

<Cell {spanDevices} class="flexy">
	<Paper class="paper flexor" style="opacity: 80%">
		<Title {tag}>
			{#if faIcon}
				<Fa icon={faIcon} color="#ff2f00" />
			{/if}
			<span>{title}</span>
		</Title>
		<span class="line" />
		<Content>
			<slot />
		</Content>
	</Paper>
</Cell>

<style>
	:global(main .flexy .paper.flexor:hover) {
		opacity: 100% !important;
	}

	:global(.line) {
		display: block;
		width: 45px;
		height: 1.5px;
		background-color: #f85c70;
	}
</style>
