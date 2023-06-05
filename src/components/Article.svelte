<script lang="ts">
	import Fa from 'svelte-fa';
	export let faIcon: any | undefined = undefined;
	export let title: string;
</script>

<article style="padding:1rem">
	{#if faIcon}
		<Fa icon={faIcon} color="#ff2f00" style="display:inline-block" />
	{/if}
	<header>
		<h1>{title}</h1>
	</header>
	<span class="line" />
	<slot />
</article>
