<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { Content, Title } from '@smui/paper';
	import Paper from '@smui/paper/src/Paper.svelte';
	import Textfield from '@smui/textfield';
	import CharacterCounter from '@smui/textfield/character-counter';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import Fa from 'svelte-fa';
	import { faClock, faHeadset, faCogs, faHandshake } from '@fortawesome/free-solid-svg-icons';

	let name = '';
	let email = '';
	let objet: string;
	let message = '';
</script>

<LayoutGrid class="paper-container">
	<Cell span={12}>
		<Paper color="primary" variant="unelevated" class="paper">
			<Title tag="h2">Me contacter</Title>
			<Content>
				<div>
					<img src="/chien.png" alt="chien content" style="float: left;" width="100" />
					Bienvenue sur ma page de contact ! <br /><br />

					Je suis ravi de vous offrir un moyen simple et pratique de me contacter pour toutes vos
					questions, demandes de renseignements ou collaborations potentielles. <br />
					Cette page est spécialement conçue pour vous permettre de rester en contact avec moi et d'obtenir
					rapidement une réponse personnalisée à vos besoins.
				</div>
				<div>
					<p>
						N'hésitez pas à utiliser le formulaire de contact ci-dessous ou à m'envoyer un e-mail
						directement. Je suis impatient de vous aider et de répondre à toutes vos demandes.
					</p>

					Merci de votre intérêt et à bientôt !
					<br />
					[Julien ILARI] - Freelance
				</div>
			</Content>
		</Paper>
	</Cell>

	<Cell spanDevices={{ desktop: 4, tablet: 12, phone: 12 }}>
		<Paper variant="unelevated" class="paper">
			<Title tag="h2">Formulaire de contact</Title>
			<div class="test">
				<Textfield
					class="shaped-outlined full-width"
					variant="outlined"
					bind:value={email}
					label="e-mail"
				>
					<Icon class="material-icons" slot="leadingIcon">mail</Icon>
					<HelperText slot="helper">Votre adresse e-mail pro/personnel</HelperText>
				</Textfield>
				<Textfield
					class="shaped-outlined full-width"
					variant="outlined"
					bind:value={name}
					label="téléphone"
				>
					<Icon class="material-icons" slot="leadingIcon">phone</Icon>
					<HelperText slot="helper">Votre numéro de téléphone pro/personnel</HelperText>
				</Textfield>
				<Textfield
					class="shaped-outlined full-width"
					variant="outlined"
					bind:value={name}
					label="objet"
				>
					<Icon class="material-icons" slot="leadingIcon">data_object</Icon>
					<HelperText slot="helper">Objet du message</HelperText>
				</Textfield>
				<Textfield
					class="shaped-outlined full-width"
					textarea
					input$maxlength={100}
					bind:value={message}
					label="message"
				>
					<CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
					<HelperText slot="helper">Votre message</HelperText>
				</Textfield>
			</div>
		</Paper>
	</Cell>
	<Cell spanDevices={{ desktop: 8, tablet: 12, phone: 12 }}>
		<Paper color="secondary" variant="unelevated" class="paper">
			<Title tag="h2">
				<b>Voici quelques raisons pour lesquelles vous devriez utiliser ma page de contact :</b>
			</Title>
			<Content>
				<ul>
					<li>
						<h3>
							<Fa icon={faClock} />
							<b>Réponses rapides :</b>
						</h3>
						<p>
							Je comprends que votre temps est précieux, c'est pourquoi je m'engage à vous répondre
							dans les plus brefs délais. <br />
							Que vous ayez besoin d'informations sur mes services, de discuter de votre projet ou de
							demander des conseils, je suis là pour vous aider.
						</p>
					</li>
					<li>
						<h3>
							<Fa icon={faHeadset} />
							<b>Service client personnalisé :</b>
						</h3>
						<p>
							Votre satisfaction est ma priorité absolue. <br />
							En tant que freelance, je suis dévoué à fournir un service client de haute qualité.
							<br />
							N'hésitez pas à me contacter pour toute question, demande spécifique ou suggestion.
							<br />
							Je suis là pour vous accompagner tout au long de notre collaboration.
						</p>
					</li>
					<li>
						<h3>
							<Fa icon={faCogs} />
							<b>Projets sur mesure :</b>
						</h3>
						<p>
							Si vous avez des demandes particulières, des besoins spécifiques ou des projets
							personnalisés, ma page de contact est l'endroit idéal pour commencer.
							<br />Fournissez-moi tous les détails nécessaires et nous travaillerons ensemble pour
							trouver la meilleure solution qui réponde à vos attentes.
						</p>
					</li>

					<li>
						<h3><Fa icon={faHandshake} /><b>Opportunités de collaboration :</b></h3>
						<p>
							Si vous êtes intéressé par une collaboration ou un partenariat, je suis ouvert aux
							nouvelles idées et aux possibilités de travail ensemble. <br />Contactez-moi via ma
							page de contact et je serai ravi de discuter de vos propositions.
						</p>
					</li>
				</ul>
			</Content>
		</Paper>
	</Cell>
</LayoutGrid>

<style>
	ul {
		margin: 0;
		padding: 0;
		padding-left: 1rem;
	}

	li {
		display: block;
		margin: 0;
		padding: 0;
	}

	b {
		color: rgb(7, 38, 80);
	}
</style>
