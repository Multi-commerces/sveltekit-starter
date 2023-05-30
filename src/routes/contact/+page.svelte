<script>
	import Textfield from '@smui/textfield';
	import CharacterCounter from '@smui/textfield/character-counter';
	import HelperText from '@smui/textfield/helper-text';
	import Icon from '@smui/textfield/icon';
	import Flex from 'svelte-flex';
	import Button from '@smui/button';
	import Article from '../../components/Article.svelte';
	import LayoutGrid from '@smui/layout-grid/src/LayoutGrid.svelte';
	import Cell from '@smui/layout-grid/src/Cell.svelte';
	import { onMount } from 'svelte';
	// import { enhance } from '$app/forms';

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

<Article title="Me contacter" span={12}>
	<Cell spanDevices={{ desktop: 12, tablet: 12, phone: 12 }}>
		<div style="height:100%;float: left;">
			<img src="/chien.png" alt="chien content" width="50" />
		</div>
		<div>
			<p>Bienvenue sur ma page de contact !</p>
			<p>
				Je suis ravi de vous offrir un moyen simple et pratique de me contacter pour toutes vos
				questions, demandes de renseignements ou collaborations potentielles.
			</p>
		</div>
	</Cell>
	<Cell spanDevices={{ desktop: 12, tablet: 12, phone: 12 }}>
		{#if form?.success}
			<p>Nous avons bien reçu votre message, merci !</p>
			<p>{form?.message} ou {data?.message} email : {form?.email}</p>
		{/if}
		{#if form?.missing}<p class="error">The email field is required</p>{/if}
		{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
		<form method="POST" action="?/send">
			<Textfield
				style="width: 100%"
				class="shaped-outlined"
				variant="outlined"
				bind:value={email}
				label="email"
				required
			>
				<Icon class="material-icons" slot="leadingIcon">mail</Icon>
				<HelperText slot="helper">Votre mail</HelperText>
			</Textfield>
			<Textfield
				style="width: 100%"
				class="shaped-outlined"
				variant="outlined"
				bind:value={tel}
				label="téléphone"
			>
				<Icon class="material-icons" slot="leadingIcon">phone</Icon>
				<HelperText slot="helper">Votre numéro de téléphone</HelperText>
			</Textfield>
			<Textfield
				style="width: 100%"
				class="shaped-outlined"
				variant="outlined"
				bind:value={subject}
				label="subject"
				required
			>
				<Icon class="material-icons" slot="leadingIcon">data_object</Icon>
				<HelperText slot="helper">Objet du message</HelperText>
			</Textfield>
			<Textfield
				style="width: 100%"
				class="shaped-outlined"
				variant="outlined"
				textarea
				input$maxlength={200}
				input$rows={4}
				helperLine$style="width: 100%;"
				bind:value={message}
				label="message"
				required
			>
				<CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
				<HelperText slot="helper">Votre message</HelperText>
			</Textfield>
			<input type="hidden" name="email" bind:value={email} />
			<input type="hidden" name="tel" bind:value={tel} />
			<input type="hidden" name="subject" bind:value={subject} />
			<input type="hidden" name="message" bind:value={message} />
			<div>
				<Button>Annuler</Button>
				<Button touch variant="raised">Envoyer</Button>
			</div>
		</form>
	</Cell>
	<Cell spanDevices={{ desktop: 12, tablet: 12, phone: 12 }}>
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
	</Cell>
</Article>

<style>
	:global(label) {
		margin-top: 1rem;
	}


</style>
