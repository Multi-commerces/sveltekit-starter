<script lang="ts">
	import Paper, { Content, Title } from '@smui/paper';
	import Fa from 'svelte-fa';
	import Cell from '@smui/layout-grid/src/Cell.svelte';
	import LayoutGrid from '@smui/layout-grid/src/LayoutGrid.svelte';
	export let faIcon: any | undefined = undefined;
	export let title: string;
	export let tag = 'h2';
</script>

<article>
	<Paper>
		<Title {tag}>
			{#if faIcon}
				<Fa icon={faIcon} color="#ff2f00" style="display:inline-block" />
			{/if}
			<span>{title}</span>
		</Title>
		<span class="line" />
		<Content>
			<LayoutGrid>
				<slot />
			</LayoutGrid>
		</Content>
	</Paper>
</article>

<style>
</style>
