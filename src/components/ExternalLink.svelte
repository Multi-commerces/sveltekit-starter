<script>
	import Fa from 'svelte-fa';

	export let ariaLabel;
	export let url;
	export let fa;
</script>

<a href={url} rel="noopener nofollow" target="_blank" aria-label={ariaLabel}>
	{#if fa}
		<Fa
			icon={fa.icon}
			size={fa.size ?? 'lg'}
			color={fa.color ?? '#ffffff'}
			spin={false}
			pulse={false}
			fw={true}
		/>
	{/if}
	<slot />
</a>

<style>
	a {
		transition: all .2s ease-in-out;
        display: inline-block;
	}
	a:hover {
		-ms-transform: scale(1.2); /* IE 9 */
		-webkit-transform: scale(1.2); /* Safari 3-8 */
		transform: scale(1.2);
	}
</style>
