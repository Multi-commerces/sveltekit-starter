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

		<div style="position: absolute;right:2rem;">
			{#if data?.user}
				<form method="POST" action="?/logout">
					<button type="submit">Log Out</button>
				</form>
			{:else}
				<a href="/auth/login">Login</a>
				<!-- <a href="/auth/register">Register</a> -->
			{/if}
		</div>
		<section id="footer-external-links" style="position: absolute;top:2rem;right:1rem;">
			<ExternalLink
				url="https://fr.linkedin.com/in/julien-ilari-908ba7a1"
				ariaLabel="Profil LinkedIn"
				fa={{ icon: faLinkedin, color: '#444', size: '3x' }}
			/>
			<ExternalLink
				url="https://github.com/Multi-commerces"
				ariaLabel="Profil GitHub"
				fa={{ icon: faGithub, color: '#444', size: '3x' }}
			/>
		</section>
	</aside>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<nav bind:this={navbar} role="navigation">
		<ul id="header-nav">
			{#each data?.menus as menu}
				<li>
					<a href={menu.url} aria-label={menu.label}>
						<span class="menu">
							<Fa icon={menu.icon} size="2x" />
							{menu.label}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<!-- Votre contenu ici -->
<main style="">
	<slot />
</main>

<footer>
	
	<section id="footer-internal-links">
		<ul>
			<li>footer 1</li>
			<li>footer 2</li>
			<li>footer 3</li>
		</ul>
	</section>
	<small id="copyright">
		<strong aria-label="copyright" aria-describedby="copyright-desc">Copyright</strong>
		<span id="copyright-desc">© 2023 julien.ilari@gmail.com</span>
	</small>
</footer>

<style lang="scss" global>
	html {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}

	* {
		box-sizing: inherit;
		&:before,
		&:after {
			box-sizing: inherit;
		}
	}

	body {
		position: absolute;
	}

	a {
		text-decoration: none;
	}

	/* Styles spécifiques pour le header */
	.container > header {
		z-index: 10;
		position: sticky;
		top: 0;
		right: 0;
		left: 0;

		aside {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 0.5rem;
		}

		/* Styles spécifiques pour le nav dans le header */
		nav {
			ul {
				width: 100%;
				height: 42px;
				margin-block: 0;
				padding-inline-start: 0;
				padding-inline-end: 0;
				display: table;
				table-layout: fixed;
				gap: 0.5rem;
				flex-wrap: wrap;
				flex-direction: row;
				align-content: center;
				justify-content: space-around;
				background: #000000;
				opacity: 1;
				transition: opacity 0.5s ease-in-out;

				.menu {
					display: flex;
					flex-direction: row;
					justify-content: center;
					gap: 0.5rem;
					align-items: center;
				}

				li {
					a {
						text-decoration: none;
						color: #ddd;
						font-family: sans-serif;
						font-size: 13px;
					}

					transition: 0.5s;
					display: table-cell;
					vertical-align: middle;
					text-align: center;
				}

				li:hover:first-child {
					background: #336699;
				}

				li:hover {
					background: #c50e0eb0;
				}
			}
		}
	}

	/* Styles spécifiques pour le contenu principal */
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: rgb(236, 236, 236);
		opacity: 90%;
	}

	/* Styles spécifiques pour le footer */
	footer {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: #444444; /* Couleur intermédiaire */
		color: #ffffff; /* Couleur intermédiaire */

		#footer-external-links {
			padding: 1rem;
		}

		#footer-internal-links {
			flex: 1;
			ul {
				column-count: 3;
				li {
					list-style: none;
				}
			}

			background-color: #000000;

			text-align: center;
		}

		#copyright {
			height: 1.5rem;
			vertical-align: middle;
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
		}
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
