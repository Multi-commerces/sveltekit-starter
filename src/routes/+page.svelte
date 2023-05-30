<script>
	import { onMount } from 'svelte';
	import SocialCardHover from '../components/SocialCardHover.svelte';
	import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faPerson, faUser, faUserAlt, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

	let canvas;
	const imagePaths = [
		'/logo/browser-chrome-icon.svg',
		'/logo/browser-edge-icon.svg',
		'/logo/browser-firefox-icon.svg',
		'/logo/coding-icon.svg',
		'/logo/crime-hacker-icon.svg',
		'/logo/css3-alt-icon-original.svg',
		'/logo/docker-icon-icon-original.svg',
		'/logo/file-type-svelte-icon-original.svg',
		'/logo/file-type-vscode-icon-original.svg',
		'/logo/html5-icon-icon-original.svg',
		'/logo/java-icon-original.svg',
		'/logo/javascript-icon-original.svg',
		'/logo/programmer-computer-icon.svg',
		'/logo/rest-api-icon.svg',
		'/logo/spring-icon-icon-original.svg'
	];
	const numBalls = imagePaths.length;
	const balls = [];

	function onResize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	onMount(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const ctx = canvas.getContext('2d');

		// Charger les images SVG
		function loadImages() {
			let imagesLoaded = 0;

			// Fonction de rappel appelée lorsque chaque image est chargée
			function imageLoaded() {
				imagesLoaded++;

				if (imagesLoaded === numBalls) {
					// Toutes les images sont chargées, vous pouvez démarrer l'animation
					animateBalls();
				}
			}

			// Charger chaque image SVG
			imagePaths.forEach((path, index) => {
				const img = new Image();
				img.onload = imageLoaded;
				img.src = path;
				balls[index].image = img;
			});
		}

		// Création des boules
		for (let i = 0; i < numBalls; i++) {
			const ball = {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: 25,
				xSpeed: (Math.random() - 0.5) * 4,
				ySpeed: (Math.random() - 0.5) * 4,
				image: null // L'image sera attribuée lors du chargement
			};

			balls.push(ball);
		}

		// Animation des boules
		function animateBalls() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			balls.forEach((ball) => {
				// Mise à jour de la position
				ball.x += ball.xSpeed;
				ball.y += ball.ySpeed;

				// Détection des collisions avec les bords
				if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
					ball.xSpeed = -ball.xSpeed;
				}

				if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
					ball.ySpeed = -ball.ySpeed;
				}

				// Dessin de la boule avec l'image
				ctx.drawImage(
					ball.image,
					ball.x - ball.radius,
					ball.y - ball.radius,
					ball.radius * 2,
					ball.radius * 2
				);
			});

			requestAnimationFrame(animateBalls);
		}

		// Démarrage du chargement des images SVG
		loadImages();
	});
</script>

<!-- Reste du contenu du composant Svelte -->
<canvas bind:this={canvas} id="canvas" width="800" height="600" style="position:absolute" />

<article>
	<header><h1>Bienvenue sur mon <strong>site web</strong></h1></header>
	<div id="social-card">
		<SocialCardHover icon={faLinkedin} title="LinkedIn" />
		<SocialCardHover icon={faUserAstronaut} title="Moi" />
		<SocialCardHover icon={faGithub} title="GitHub" />
	</div>
	<slot />
</article>

<style global>
	#social-card {
		display: flex;
		justify-content: space-around;
	}
	#canvas {
		/* border-radius: 50%; */
		display: block;

		margin: auto;
		left: 0;
		top: 0;
		max-width: 100%;
	}

	.ball {
		height: 50px;
		width: 50px;
		display: block;
		position: absolute;
		z-index: 2;
		background-color: brown;
		border-radius: 50%;
	}
</style>
