<script>
	import { moduleRegistry } from './../../modules/ModuleRegistry.ts';

	import { onMount } from 'svelte';

	// Choisissez le module à charger en fonction des préférences de l'utilisateur
	let ContactModule;
	const preferredModule = { name: 'moveInBlue' }; // Exemple de préférence de module
	onMount(async () => {
		let moduleName =
			preferredModule?.name && moduleRegistry.contact[preferredModule.name]
				? preferredModule.name
				: 'default';

		ContactModule = (await moduleRegistry.contact[moduleName]()).default;
	});
</script>

{#await ContactModule}
	<p>Loading...</p>
{:then module}
	<svelte:component this={module} />
	<slot />
{/await}
