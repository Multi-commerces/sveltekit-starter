<script lang="ts">
	import Fa from 'svelte-fa';
	export let faIcon: any | undefined = undefined;
	export let title: string;
</script>

<article style="padding:1rem;color:white">
	{#if faIcon}
		<Fa icon={faIcon} color="#ff2f00" style="display:inline-block" />
	{/if}
	<span>{title}</span>
	<span class="line" />
	<slot />
</article>
