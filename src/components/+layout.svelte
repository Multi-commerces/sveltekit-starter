<script context="module" lang="ts">
	/** @type {import('./$types').LayoutLoad} */
	export async function load({ params }: any) {
		if (params) {
		}
		return {
			// @ts-ignore
			menus: [
				{
					icon: 'home',
					label: 'Accueil',
					url: '/'
				},
				{
					icon: 'science',
					label: 'Mon CV',
					url: '/cv'
				},
				{
					icon: 'question_answer',
					label: 'Faq',
					url: '/faq'
				},
				{
					icon: 'contact_support',
					label: 'Contact',
					url: '/contact'
				}
			]
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import {
		faClock,
		faCogs,
		faGhost,
		faHandshake,
		faHeadset,
		faSun
	} from '@fortawesome/free-solid-svg-icons';
	import Button from '@smui/button';
	import { Label } from '@smui/common';
	import IconButton from '@smui/icon-button';
	import {
		AutoAdjust,
		default as BottomAppBar,
		Row,
		Section,
		default as TopAppBar
	} from '@smui/top-app-bar';
	import Fa from 'svelte-fa';
	//@ts-ignore
	import Flex from 'svelte-flex';
	import NavBar from '../components/NavBar.svelte';
	import TerminalText from '../components/TerminalText.svelte';
	import { onMount } from 'svelte';

	let topAppBar;

	let lightTheme =
		typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}

	onMount(() =>{
		switchTheme();
	})
</script>

<TopAppBar bind:this={topAppBar} style="display : table-row;">
	<Row>
		<Section align="start" toolbar>
			<TerminalText />
		</Section>
		<Section align="end" toolbar>
			<Fa icon={lightTheme ? faSun : faGhost} />
			<Button on:click={switchTheme}>
				<Label>{lightTheme ? 'Lights off' : 'Lights on'}</Label>
			</Button>

			<IconButton aria-label="Demo Site" href="https://fr.linkedin.com/in/julien-ilari-908ba7a1">
				<Fa icon={faLinkedinIn} />
			</IconButton>

			<IconButton aria-label="Demo Site" href="https://github.com/Multi-commerces">
				<Fa icon={faGithub} />
			</IconButton>
		</Section>
	</Row>
	<NavBar tabs={$page.data.menus} />
</TopAppBar>

<div class="cover" style="overflow-y: scroll;height: 100%; width: 100%;">
	<AutoAdjust {topAppBar}>
		<div class="container">
			<slot />
			<footer
				style=""
				title="Voici quelques raisons pour lesquelles vous devriez utiliser ma page de contact"
				role="list"
			>
				<Flex align="stretch" justify="evenly" style="column-gap: 1em;" class="flex-container">
					<div role="listitem">
						<h3><Fa icon={faClock} />Réponses rapides</h3>
						<p>
							Je comprends que votre temps est précieux, c'est pourquoi je m'engage à vous répondre
							dans les plus brefs délais. Que vous ayez besoin d'informations sur mes services, de
							discuter de votre projet ou de demander des conseils, je suis là pour vous aider.
						</p>
						<hr />
					</div>
					<div role="listitem">
						<h3><Fa icon={faHeadset} />Service client personnalisé</h3>
						<p>
							Votre satisfaction est ma priorité absolue. En tant que freelance, je suis dévoué à
							fournir un service client de haute qualité. N'hésitez pas à me contacter pour toute
							question, demande spécifique ou suggestion. Je suis là pour vous accompagner tout au
							long de notre collaboration.
						</p>
						<hr aria-hidden="true" />
					</div>

					<div role="listitem">
						<h3><Fa icon={faCogs} />Projets sur mesure</h3>
						<p>
							Si vous avez des demandes particulières, des besoins spécifiques ou des projets
							personnalisés, ma page de contact est l'endroit idéal pour commencer. Fournissez-moi
							tous les détails nécessaires et nous travaillerons ensemble pour trouver la meilleure
							solution qui réponde à vos attentes.
						</p>
						<hr aria-hidden="true" />
					</div>

					<div role="listitem">
						<h3><Fa icon={faHandshake} />Opportunités de collaboration</h3>
						<p>
							Si vous êtes intéressé par une collaboration ou un partenariat, je suis ouvert aux
							nouvelles idées et aux possibilités de travail ensemble. Contactez-moi via le
							formulaire de contact et je serai ravi de discuter de vos propositions.
						</p>
						<hr aria-hidden="true" />
					</div>
				</Flex>
			</footer>
		</div>
	</AutoAdjust>
</div>

<style global>
	html {
		height: 100%;
	}

	body {
		position: relative;
		min-height: 100%;
		margin: 0;
		padding: 0;
		display: table;
		width: 100%;
	}

	/* https://www.alsacreations.com/astuce/lire/22-Commentfixerunpiedaubasdelapage.html */
	* {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	header {
		position: fixed;
		width: 100%;
		top: 0;
	}

	.container {
		position: relative;
		min-height: calc(100vh - 230px);
		height: 100%;
	}
	main {
		border-radius: 2rem;
		margin-top: 32vH !important;
		/* background-color: rgba(185, 185, 185, 0.8); */
		margin: auto;
		min-height: calc(100vh - 170px);
		overflow: visible;
	}

	footer {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	hr {
		margin: 1rem 0;
		border-top: 2px solid rgba(0, 253, 95, 0.3);
	}

	div[role='listitem'] {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	div[role='listitem'] p {
		font-size: small;
		margin: 0;
		line-height: normal;
		background-color: steelblue;
		border-radius: 1rem;
		padding: 0.5rem;
	}
	h3 {
		font-size: small;
		margin-block-start: 0em;
		margin-block-end: 0em;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5rem;
	}
	.cover {
		position: fixed;
		min-height: 100%;
		min-width: 100vw;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: url(/static_assets.svg) no-repeat fixed;
		-webkit-background-size: 100vw 100vh;
		-moz-background-size: 100vw 100vh;
		-o-background-size: 100vw 100vh;
		background-size: 100vw 100vh;
		background-position-y: 112px;
	}

	@media screen and (max-width: 1200px) {
		.container {
			margin: 0;
			padding-bottom: 0;
		}

		.flex-container {
			flex-direction: column !important;
		}

		.flex-container section {
			width: 100% !important;
		}

		main {
			max-width: 100% !important;
			/* width: 100% !important; */
			padding: 0 0;

			margin-top: 48px !important;
		}

		footer {
			position: relative;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
		}

		footer > .flex-container {
			flex-direction: column !important;
		}
	}

	@media screen and (min-width: 1201px) {
		.container {
			padding-bottom: 200px;
		}
		main {
			max-width: 80%;
			width: 80%;
			padding: 0 2rem;
		}

		footer {
			position: absolute;
			bottom: 0;
			width: 100%;
			color : rgba(255, 255, 255, 0.7) !important
		}

		footer > .flex-container {
			flex-direction: row;
		}
	}
</style>
