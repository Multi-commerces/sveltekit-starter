<script>
	import { wikiModuleRegistry } from '../../../../src/modules/wiki/ModuleRegistry';

	export let data;

	let MODE = { UPDATE: 2, READ: 0, CREATE: 1 };
	export let mode = MODE.READ;

	let ContactModule;
	const handlerUpdate = async () => {
		ContactModule = (await wikiModuleRegistry['default']()).default;
		mode = MODE.UPDATE;
	};
</script>

<h2>Actions</h2>
<div>
	<button type="button" on:click={handlerUpdate}>Modifier</button>
	<button type="button" on:click={() => (mode = MODE.UPDATE)}>Supprimer</button>
</div>

{#if mode === MODE.READ}
	{@html data.page.content}
{:else if mode === MODE.UPDATE}
	<svelte:component this={ContactModule} title={data.page.title} content={data.page.content} />
{/if}
