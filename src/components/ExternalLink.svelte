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
		<span class="sr-only">{ariaLabel}</span>
	{/if}
	<slot />
</a>

<style>
	a {
		transition: all 0.2s ease-in-out;
		display: inline-block;
	}
	a:hover {
		-ms-transform: scale(1.2); /* IE 9 */
		-webkit-transform: scale(1.2); /* Safari 3-8 */
		transform: scale(1.2);
	}

	.sr-only {
		position: absolute;
		width: 1px !important;
		height: 1px !important;
		padding: 0 !important;
		margin: -1px !important;
		overflow: hidden !important;
		clip: rect(0, 0, 0, 0) !important;
		white-space: nowrap !important;
		border: 0 !important;
	}
</style>
