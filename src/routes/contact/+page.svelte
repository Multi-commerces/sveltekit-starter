<script>
	import Article from './../../components/Article.svelte';
	import { onMount } from 'svelte';
	import TextField from '../../components/common/TextField.svelte';

	export let form;
	export let data;

	let tel = '(+33) 6 00 01 02';
	let email = 'julien.ilari@gmail.com';
	let subject = 'premier contact';
	let message = 'Bonjour, est-il possible de me contacter (préférence mardi 10h00)';

	onMount(async () => {});
</script>

<Article title="Me contacter">
	<p>
		Bienvenue sur ma page de contact ! <br />
		Je suis ravi de vous offrir un moyen simple et pratique de me contacter pour toutes vos questions,
		demandes de renseignements ou collaborations potentielles.
	</p>

	<section>
		{#if form?.success}
			<p>Nous avons bien reçu votre message, merci !</p>
			<p>{form?.message} ou {data?.message} email : {form?.email}</p>
		{/if}
		{#if form?.missing}<p class="error">The email field is required</p>{/if}
		{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
	</section>

	<section>
		<header>
			<h2>Formulaire de contact</h2>
		</header>
		<form method="POST" action="?/send">
			<fieldset>
				<legend>Vos coordonnées</legend>

				<TextField label="Mail" bind:value={email} />
				<TextField label="Tel" bind:value={tel} />
			</fieldset>
			<fieldset>
				<legend>Votre message</legend>
				<TextField name="subject" label="Objet" bind:value={subject} />
				<TextField label="Message" bind:value={message} />
			</fieldset>

			<div style="margin-top:1rem">
				<input type="submit" value="Envoyer" />
			</div>
		</form>
	</section>

	<div>
		<p>
			Cette page est spécialement conçue pour vous permettre de rester en contact avec moi et
			d'obtenir rapidement une réponse à vos question.
		</p>
		<p>
			N'hésitez pas à utiliser le formulaire de contact ci-dessus ou à m'envoyer un e-mail
			directement. Je suis impatient de vous aider et de répondre à toutes vos demandes.
		</p>
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
</style>
