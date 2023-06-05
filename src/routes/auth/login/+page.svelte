<script>
	import TextField from '@/components/common/TextField.svelte';

	// Importer les dépendances nécessaires
	import { onMount } from 'svelte';
	// Définir les variables pour les champs de formulaire
	let email = '';
	let password = '';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<article style="padding:1rem">
	<h1>Formulaire de connexion</h1>
	{#if form && !form.success}
		<div style="width:400px;height70px;color:orange">
			Echec de la tentative de connexion : {form.message}
		</div>
	{/if}

	<form method="POST">
		<fieldset>
			<legend>données connexion</legend>

			<TextField label="Mail" name="email" bind:value={email} />
			<TextField label="Mot de passe" name="password" type="password" bind:value={password} />
		</fieldset>
		<div style="margin-top:1rem">
			<input type="submit" value="Se connecter" />
		</div>
	</form>
</article>
