<script lang="ts">
	import { userPreferences } from '$lib/userPreferences';
	import type { ComponentType } from 'svelte';

	// /** @type {import('./$types').LayoutData} */
	// export let data: { title: string; content: string };

	// Mettez à jour la valeur de Layout en fonction des préférences utilisateur
	let showLayout: ComponentType;
	userPreferences.subscribe((preferences) => {
		showLayout = preferences.layout.component;
	});
</script>

<div id="container-{$userPreferences.layout.name}" style="background-color: {$userPreferences?.layout.bgColor};">
	{#if showLayout}
		<svelte:component this={showLayout}>
			<slot />
		</svelte:component>
	{:else}
		<!-- Contenu spécifique à cette page sans la mise en page -->
		Aucun layout prédéfinit
	{/if}
</div>

<style>
	div 
	{
		height:100%;
	}
</style>