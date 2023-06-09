<script>
	import { onMount } from 'svelte';

	export let data;
</script>

<h2>Pages</h2>
<div>
	<ul>
		{#each data.pages as page}
			<li><a href="/wiki/{page.title}" alt={page.title}>{page.title}</a></li>
		{/each}
	</ul>
</div>
<div style="padding:2rem">
	<slot />
</div>

<style>
	:global(pre) {
		padding: 1rem;
		white-space: pre-wrap;
		background-color: rgba(0, 0, 0, 0.089); 
	}

	:global(code) {
		border-radius: 5px;
		display: block;
		color: rgb(14, 47, 90);
		font-size: medium;
	}
</style>
