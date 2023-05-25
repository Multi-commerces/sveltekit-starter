<script>
	import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


	import IconButton from "@smui/icon-button/src/IconButton.svelte";
	import Fa from "svelte-fa";

</script>
<header id="header">
	<nav id="header-nav">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="">Accueil</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="">Actualité</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="">Boutique</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="">Panier</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="">Qui sommes nous ?</a>
	</nav>
	<div>
		<IconButton aria-label="Demo Site" href="https://fr.linkedin.com/in/julien-ilari-908ba7a1">
			<Fa icon={faLinkedinIn} />
		</IconButton>

		<IconButton aria-label="Demo Site" href="https://github.com/Multi-commerces">
			<Fa icon={faGithub} />
		</IconButton>
	</div>
	<slot name="header" />
</header>

<main id="container">
	<!-- Votre contenu ici -->
	Template ZERO framework CSS !
	<slot />
</main>
<footer id="footer">
	<slot name="footer" />
</footer>

<style globale>
	* {
		margin: 0;
		padding: 0;
	}

	:global(body) {
		background-color: #336699;
	}

	/* Styles spécifiques pour le header */
	#header {
		/* Vos styles pour le header ici */
		position: fixed;
	}

	/* Styles spécifiques pour le nav dans le header */
	#header-nav {
		/* Vos styles pour le nav ici */
		display: table;
		table-layout: fixed;
		height: 42px;
		gap: 0.5rem;
		min-width: 100%;
		width: 100vw;
		background: #000000;
		flex-wrap: wrap;
		flex-direction: row;
		align-content: center;
		justify-content: space-around;
	}

	#header-nav a {
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

	#header-nav a::after {
		content: '';
		width: 100%;
	}
	#header-nav a:hover:first-child {
		background: #336699;
	}
	#header-nav a:hover {
		/* tous liens lors du survol dans la balise nav */
		background: #f43c80; /* couleur de fond */
	}

	/* Styles spécifiques pour le contenu principal */
	#container {
		/* Vos styles pour le contenu principal ici */
		padding: 0.5rem;
	}

	/* Styles spécifiques pour le footer */
	#footer {
		/* Vos styles pour le footer ici */
		padding: 0.5rem;
	}
</style>
