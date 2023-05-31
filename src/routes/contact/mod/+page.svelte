<script lang="ts">
	import { moduleRegistry } from '$modules/ModuleRegistry';
	import { onMount } from 'svelte';

	// Obtenez les préférences du module de contact pour l'utilisateur
	const preferredModule = { name: 'moduleA' }; // Exemple de préférence de module

	// Choisissez le module à charger en fonction des préférences de l'utilisateur
	let ContactModule;

	onMount(async () => {
		const preferredModule = { name: 'movInBlue' }; // Exemple de préférence de module

		if (preferredModule && moduleRegistry.contact[preferredModule.name]) {
			ContactModule = (await moduleRegistry.contact[preferredModule.name]()).default;
		} else {
			ContactModule = (await moduleRegistry.contact.default()).default;
		}
	});
</script>

{#await ContactModule}
	<p>Loading...</p>
{:then module}
	<svelte:component this={module} />
{/await}
