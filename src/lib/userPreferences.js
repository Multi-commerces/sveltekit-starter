import { writable } from 'svelte/store';

import DefaultLayout from '../components/layout/Layout.svelte';

// Créez un store pour les préférences utilisateur avec des valeurs par défaut
export const userPreferences = writable({
	// Définissez la valeur par défaut pour la mise en page
	layout: { name: 'default', component: DefaultLayout }
});
