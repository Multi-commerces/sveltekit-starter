<script>
	// Importer les dépendances nécessaires
	import { onMount } from 'svelte';
	// Définir les variables pour les champs de formulaire
	let email = '';
	let password = '';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<article style="padding:1rem">
	<h1>Connexion</h1>
	{#if form && !form.success}
		<div style="width:400px;height70px;color:orange">
			Echec de la tentative de connexion : {form.message}
		</div>
	{/if}

	<form method="POST">
		<label>
			Email:
			<input name="email" type="email" bind:value={email} required />
		</label>

		<label>
			Mot de passe:
			<input name="password" type="password" bind:value={password} required />
		</label>

		<button type="submit">Se connecter</button>
	</form>
	<pre>{JSON.stringify(data, null, 2)}</pre>
</article>
