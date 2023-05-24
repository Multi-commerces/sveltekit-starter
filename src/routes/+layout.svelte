<script lang="ts">
	import Button from '@smui/button';
	import BottomAppBar from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { Label } from '@smui/common';
	import Fa from 'svelte-fa';
	import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faSun, faGhost } from '@fortawesome/free-solid-svg-icons';
	import Tab, { Icon } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

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

	let tabs = [
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
	];
	let active = tabs[0];
</script>

<div class="flexy">
	<div class="flexor">
		<TopAppBar bind:this={topAppBar} variant="static">
			<Row>
				<Section>
					<img src="/super-chien.png" alt="logo chien" width="64" />
					<Title>FlexTech</Title>
				</Section>

				<Section align="end" toolbar>
					<Fa icon={lightTheme ? faSun : faGhost} />
					<Button on:click={switchTheme}>
						<Label>{lightTheme ? 'Lights off' : 'Lights on'}</Label>
					</Button>

					<IconButton
						aria-label="Demo Site"
						href="https://fr.linkedin.com/in/julien-ilari-908ba7a1"
					>
						<Fa icon={faLinkedinIn} />
					</IconButton>

					<IconButton aria-label="Demo Site" href="https://github.com/Multi-commerces">
						<Fa icon={faGithub} />
					</IconButton>
				</Section>
			</Row>
			<nav>
				<TabBar {tabs} let:tab bind:active>
					<a href={tab.url} data-sveltekit-preload-data="tap">
						<Tab {tab} minWidth>
							<Button>
								<Icon class="material-icons">{tab.icon}</Icon>
								<Label>{tab.label}</Label>
							</Button>
						</Tab>
					</a>
				</TabBar>
			</nav>
		</TopAppBar>

		<div class="flexor-content">
			<AutoAdjust {topAppBar}>
				<div class="container"><slot /></div>
			</AutoAdjust>
		</div>

		<div id="bottom-bar">
			<BottomAppBar variant="static">
				<Section>
					<div class="flexy">
						<IconButton class="material-icons" aria-label="Archive">archive</IconButton>
						<IconButton class="material-icons" aria-label="Mark unread">mail</IconButton>
						<IconButton class="material-icons" aria-label="Label">label</IconButton>
						<IconButton class="material-icons" aria-label="Trash">delete</IconButton>
					</div>
				</Section>
			</BottomAppBar>
		</div>
	</div>
</div>

<style global>
	header {
		position: fixed !important;
		width: 100%;
		top: 0;
		z-index: 10;
	}

	main {
		zoom: 100% !important;
		margin-top: 112px;
	}

	hr {
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 800px) {
		#bottom-bar {
			display: block;
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
	@media screen and (min-width: 801px) {
		#bottom-bar {
			display: none;
		}
		.container {
			padding: 0 30px;
		}

		.paper {
			margin-top: 0.5rem;
		}
	}
	nav a {
		text-decoration: none;
	}

	.flexy {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		flex-direction: row;
		align-items: stretch;
		width: -moz-available;
		width: -webkit-fill-available;
	}

	.flexor {
		overflow: hidden;
		display: inline-flex;
		flex-direction: column;
		width: 100%;
		/* margin: 0; */
		overflow: auto;
	}

	.flexor-content {
		flex-grow: 1;
		overflow: auto;
	}
</style>
