<script lang="ts">
	import { userPreferences } from '$lib/userPreferences';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import ExternalLink from '../components/ExternalLink.svelte';

	export let data: any;

	let navbar: HTMLElement;
	function hideNavbar() {
		navbar.classList.add('hidden');
	}
	function showNavbar() {
		navbar.classList.remove('hidden');
	}

	import { setContext } from 'svelte';
	onMount(() => {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			// Partie navbar
			var currentScrollPos = window.pageYOffset;

			if (prevScrollpos > currentScrollPos) {
				showNavbar();
			} else {
				hideNavbar();
			}
			prevScrollpos = currentScrollPos;
		};
	});
</script>

<svelte:head>
	<!-- Balises Open Graph pour le portofolio -->
	<meta property="og:title" content="Mon Portfolio" />
	<meta property="og:description" content="Découvrez mon portfolio, mes réalisations et mon cv." />
	<meta property="og:image" content="URL_de_l'image_de_couverture_du_portfolio" />
	<meta property="og:url" content="URL_du_portfolio" />
	<meta property="og:type" content="website" />
</svelte:head>

<header>
	<aside style="background-color: white;">
		<span style="font-size: x-small;">
			<img src="/logo.webp" alt="logo" width="300" />
		</span>
		<span>
			<ExternalLink
				url="https://fr.linkedin.com/in/julien-ilari-908ba7a1"
				ariaLabel="Profil LinkedIn"
				fa={{ icon: faLinkedin, color: '#567', size: '3x' }}
			/>
			<ExternalLink
				url="https://github.com/Multi-commerces"
				ariaLabel="Profil GitHub"
				fa={{ icon: faGithub, color: '#567', size: '3x' }}
			/>
		</span>
	</aside>
	<nav id="header-nav" bind:this={navbar}>
		{#each data?.menus as menu}
			<a href={menu.url} aria-label={menu.label}>
				<span class="menu">
					<Fa icon={faGithub} size="2x" />
					{menu.label}
				</span>
			</a>
		{/each}
	</nav>
</header>

<!-- Votre contenu ici -->
<main
	id="container-{$userPreferences.layout.name}"
	style="background-color: {$userPreferences?.layout.bgColor};"
>
	<slot />
</main>

<footer>
	<div class="footer-container">
		<div>footer 1</div>
		<div>footer 2</div>
		<div>footer 3</div>
		<div>footer 4</div>
		<div>footer 5</div>
		<div>footer 6</div>
		<div>footer 7</div>
		<div>footer 8</div>
		<div>footer 9</div>
	</div>
	<small>Copyright © 2023 julien.ilari@gmail.com.</small>
</footer>

<style lang="scss">
	:global(html) {
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}

	:global(body::before) {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		background-color: #2e2a2ab0;
		opacity: 20%;
	}

	:global(a) {
		text-decoration: none;
	}

	:global(.hidden) {
		opacity: 0 !important;
	}

	/* Styles spécifiques pour le header */
	header {
		z-index: 10;
		position: sticky;
		top: 0;
		right: 0;
		left: 0;

		aside {
			background-color: #000000b2;
			opacity: 90%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 0.5rem;
			color: white;
		}

		/* Styles spécifiques pour le nav dans le header */
		nav {
			display: table;
			table-layout: fixed;
			height: 42px;
			gap: 0.5rem;
			min-width: 100%;
			width: 100%;
			background: #000000;
			flex-wrap: wrap;
			flex-direction: row;
			align-content: center;
			justify-content: space-around;

			opacity: 1;
			transition: opacity 0.5s ease-in-out;

			.menu {
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 0.5rem;
				align-items: center;
			}

			a {
				text-decoration: none;
				color: #ffffff;
				font-family: sans-serif;
				font-size: 13px;
				transition: 0.5s;
				display: table-cell;
				min-width: 100px;
				width: 100%;
				vertical-align: middle;
				text-align: center;
			}

			a::after {
				content: '';
				width: 100%;
			}

			a:hover:first-child {
				background: #336699;
			}

			a:hover {
				background: #c50e0eb0;
			}
		}
	}

	/* Styles spécifiques pour le contenu principal */
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	main::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		background-color: #ff0000b0;
		opacity: 10%;
	}

	/* Styles spécifiques pour le footer */
	footer {
		position: relative;
		.footer-container {
			min-height: 5rem;
			height: 5rem;
			background-color: #000000;
			color: aliceblue;
			column-count: 3;
			column-gap: 1rem;
			text-align: center;
		}
	}
</style>
