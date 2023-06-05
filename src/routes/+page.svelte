<script>
	import { onMount } from 'svelte';
	import SocialCardHover from '../components/SocialCardHover.svelte';
	// @ts-ignore
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	// @ts-ignore
	import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
	import Article from '@/components/Article.svelte';
	import SocialCard from '@/components/SocialCard.svelte';

	/**
	 * @type {HTMLCanvasElement}
	 */
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
	// @ts-ignore
	const balls = [];

	// @ts-ignore
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
				// @ts-ignore
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
			// @ts-ignore
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// @ts-ignore
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
				// @ts-ignore
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

<article>
	<div id="social-card" style="z-index:10">
		<SocialCard />
	</div>

	<!-- Reste du contenu du composant Svelte -->
	<canvas bind:this={canvas} id="canvas"  style="position:absolute" />
</article>

<style global>
	@media (max-width: 1250px) {
		#social-card {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
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
