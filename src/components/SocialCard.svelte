<script>
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faPortrait } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<div class="cards">
	<h1>Connectez-vous et restez en contact</h1>
	<div class="services">
		<div class="content content-1">
			<div class="fab">
				<Fa icon={faGithub} size="1x" />
			</div>
			<h2>GitHub</h2>
			<p>Pour accéder à mon travail et à mes codes sources, veuillez visiter mon profil GitHub.</p>

			<a href="https://github.com/Multi-commerces" rel="noopener nofollow" target="_blank">
				Mes projets
			</a>
		</div>
		<div class="content content-2">
			<div class="fab">
				<Fa icon={faPortrait} size="1x" />
			</div>
			<h2>Contact</h2>
			<p>Restons en contact</p>
			<a href="/contact">Me contacter</a>
		</div>
		<div class="content content-3">
			<div class="fab">
				<Fa icon={faLinkedin} size="1x" />
			</div>
			<h2>LinkedIn</h2>
			<p>Explorez mon parcours professionnel et mes compétences sur LinkedIn.</p>

			<a
				href="https://fr.linkedin.com/in/julien-ilari-908ba7a1"
				rel="noopener nofollow"
				target="_blank">En savoir plus</a
			>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800|Poppins&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}
	.cards {
		/* max-width: 1100px; */
		margin: 0 auto;
		text-align: center;
		padding: 30px;
		z-index: 2;
	}
	.cards h1 {
		font-size: 40px;
		margin: 0 0 30px 0;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	.services {
		display: flex;
		align-items: center;
		align-items: stretch;
	}
	.content {
		display: flex;
		align-content: space-between;
		flex-wrap: wrap;
		flex: 1;
		margin: 20px;
		padding: 20px;
		border: 2px solid black;
		border-radius: 4px;
		transition: all 0.3s ease;
	}
	.content .fab {
		font-size: 70px;
		margin: 16px 0;
	}
	.content > * {
		flex: 1 1 100%;
	}
	.content:hover {
		color: white;
	}
	.content:hover a {
		border-color: white;
		background: white;
	}
	.content-1:hover {
		border-color: #4267b2;
		background: #4267b2;
	}
	.content-1:hover a {
		color: #4267b2;
	}
	.content-2:hover {
		border-color: #075e54;
		background: #075e54;
	}
	.content-2:hover a {
		color: #075e54;
	}
	.content-3:hover {
		border-color: #ff0000;
		background: #ff0000;
	}
	.content-3:hover a {
		color: #ff0000;
	}
	.content h2 {
		font-size: 30px;
		margin: 16px 0;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	.content p {
		font-size: 17px;
		font-family: 'Poppins', sans-serif;
	}
	.content a {
		margin: 22px 0;
		background: black;
		color: white;
		text-decoration: none;
		text-transform: uppercase;
		border: 1px solid black;
		padding: 15px 0;
		border-radius: 25px;
		transition: 0.3s ease;
	}
	.content a:hover {
		border-radius: 4px;
	}
	@media (max-width: 900px) {
		.services {
			display: flex;
			flex-direction: column;
		}
	}
</style>
