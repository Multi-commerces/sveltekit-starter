<script>
	import Article from '../../../components/Article.svelte';
	import { onMount } from 'svelte';
	import Field from '../../../components/common/TextField.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;

	/** @type {import('./$types').Data} */
	export let data;

	let tel = '(+33) 6 00 01 02';
	let email = 'julien.ilari@gmail.com';
	let subject = 'premier contact';
	let message = 'Bonjour, est-il possible de me contacter (préférence mardi 10h00)';

	onMount(async () => {});
</script>

<Article title="Me contacter">
	<p>Bienvenue sur ma page de contact !</p>
	<p>
		Je suis ravi de vous offrir un moyen simple et pratique de me contacter pour toutes vos
		questions, demandes de renseignements ou collaborations potentielles.
	</p>

	{#if form?.success}
		<p>Nous avons bien reçu votre message, merci !</p>
		<p>{form?.message} ou {data?.message} email : {form?.email}</p>
	{/if}
	{#if form?.missing}<p class="error">The email field is required</p>{/if}
	{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}

	<form method="POST" action="?/send">
		<fieldset>
			<legend>Vos coordonnées</legend>

			<Field label="Mail" bind:value={email} />
			<Field label="Tel" bind:value={tel} />
		</fieldset>
		<fieldset>
			<legend>Votre message</legend>
			<Field name="subject" label="Objet" bind:value={subject} />
			<Field label="Message" bind:value={message} />
		</fieldset>

		<div>
			<input type="submit" value="Submit" />
		</div>
	</form>

	<div>
		<p>
			Cette page est spécialement conçue pour vous permettre de rester en contact avec moi et
			d'obtenir rapidement une réponse à vos question.
		</p>
		<p>
			N'hésitez pas à utiliser le formulaire de contact ci-dessous ou à m'envoyer un e-mail
			directement. Je suis impatient de vous aider et de répondre à toutes vos demandes.
		</p>
		<br />
		<div>
			Merci de votre intérêt et à bientôt !<br />
			[Julien ILARI] - Freelance
		</div>
	</div>
</Article>

<style>
	:global(label) {
		margin-top: 1rem;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}

	input[type='submit'] {
		background: rgb(255, 255, 255);
		background-color: #04aa6d;
		color: white;
		padding: 0.5rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		float: right;
	}
</style>
