<script lang="ts">
	// Importer les dépendances nécessaires
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	// Définir les variables pour les champs de formulaire
	let email = '';
	let password = '';

	function signup() {
		dispatch('signup', {
			username : '',
			email,
			password
		});
	}
</script>

<main>
	<h1>Inscription</h1>

	<form method="POST">
		<label>
			Email:
			<input name="email" type="email" bind:value={email} required />
		</label>

		<label>
			Mot de passe:
			<input name="password" type="password" bind:value={password} required />
		</label>

		<button type="submit">S'inscrire</button>
	</form>
</main>
