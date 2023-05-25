<script>
	import { MDCIconButtonToggleFoundation } from '@material/icon-button';
	import Flex from 'svelte-flex';
	import CellPaper from '../components/Article.svelte';
	import { onMount } from 'svelte';
	import Layout from './+layout.svelte';
	import { fade } from 'svelte/transition';

	// export let topBar;

	let btnToggle;
	let scrollTarget;

	let imgAce;

	let loaded = false;
	let src = '/ice.png';
	function loadImage() {
		const image = new Image();
		image.src = src;
		image.onload = () => {
			loaded = true;
		};
	}

	onMount(async () => {
		try {
			await loadImage();
			loaded = true;
		} catch (error) {
			console.error('Failed to load image:', error);
		}
	});
</script>

<div class="bb">
	<div style="position: relative;z-index:2;margin:auto;display: inline-block;width:100%">
		<h1>
			Je suis <br />
			Julien ILARI <br />
			Dév. Full-Stack / Java
		</h1>
	</div>
</div>
<div class="java" style="position:absolute;top:15vw;left:62vw">
	<img src="/java.png" alt="java" width="200px" />
</div>

<!-- 
<div class="ice" style="position:absolute;bottom: 0px;right:0;z-index:1">
	{#if loaded}
		<img
			src="/ice.png"
			class="progressive-img"
			aria-hidden="true"
			alt="ice"
			width="700px"
			transition:fade={{ duration: 2000 }}
		/>
	{/if}
</div> -->

<style global>
	#scrollTarget {
		display: none;
		position: absolute;
		/* margin-top: 100vh; */
		transition: margin-top 0.5s ease;
		background-color: #201c1c;
	}
	#btnToggle {
		position: relative;
		display: block;
		z-index: 2;
		float: right;
	}
	.bb::before,
	.bb::after,
	.bb {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.bb {
		width: 40vw;
		height: 40vh;
		margin: auto;
		color: #69ca62;
		box-shadow: inset 0 0 0 3px rgba(105, 202, 98, 0.5);
	}

	.bb:hover {
		cursor: not-allowed;
	}

	.bb::before,
	.bb::after {
		content: '';
		/* z-index: 1; */
		margin: -10vh -20vw;
		box-shadow: inset 0 0 0 3px;
		animation-name: clipMe;
		animation-duration: 8s; /* Durée de l'animation en secondes */
		animation-timing-function: linear; /* Fonction de temporisation de l'animation */
		animation-iteration-count: 1; /* Répétition infinie de l'animation */
		transform-origin: center;
	}

	.bb:hover::before {
		animation-delay: -1s;
	}

	.bb:hover::after {
		animation-direction: normal; /* Ajout de la direction inverse */
	}

	.bb::after {
		background-color: rgba(163, 62, 62, 0.329);
	}

	@keyframes clipMe {
		0% {
			clip-path: circle(0%);
		}
		25% {
			clip-path: circle(25%);
		}
		50% {
			clip-path: circle(50%);
		}
		75% {
			clip-path: circle(75%);
		}
		100% {
			clip-path: circle(100%);
		}
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	.bb div {
		padding: 2rem;
		position: relative;
		top: 0;
		font-weight: 900;
		font-size: xx-large;
		visibility: visible;
		color: #201c1c;
		text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px rgb(156, 20, 20),
			0 0 82px #0fa, 0 0 92px rgb(156, 20, 20), 0 0 102px rgb(156, 20, 20),
			0 0 151px rgb(156, 20, 20);
		opacity: 1;
	}

	.button {
		position: relative;
		padding: 16px 30px;
		font-size: 1.5rem;
		color: var(--color);
		border: 2px solid rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		text-shadow: 0 0 15px var(--color);
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		transition: 0.5s;
		z-index: 1;
	}

	.button:hover {
		color: #fff;
		border: 2px solid rgba(0, 0, 0, 0);
		box-shadow: 0 0 0px var(--color);
	}

	.button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color);
		z-index: -1;
		transform: scale(0);
		transition: 0.5s;
	}

	.button:hover::before {
		transform: scale(1);
		transition-delay: 0.5s;
		box-shadow: 0 0 10px var(--color), 0 0 30px var(--color), 0 0 60px var(--color);
	}

	.button span {
		position: absolute;
		background: var(--color);
		pointer-events: none;
		border-radius: 2px;
		box-shadow: 0 0 10px var(--color), 0 0 20px var(--color), 0 0 30px var(--color),
			0 0 50px var(--color), 0 0 100px var(--color);
		transition: 0.5s ease-in-out;
		transition-delay: 0.25s;
	}

	.button:hover span {
		opacity: 0;
		transition-delay: 0s;
	}

	.button span:nth-child(1),
	.button span:nth-child(3) {
		width: 40px;
		height: 4px;
	}

	.button:hover span:nth-child(1),
	.button:hover span:nth-child(3) {
		transform: translateX(0);
	}

	.button span:nth-child(2),
	.button span:nth-child(4) {
		width: 4px;
		height: 40px;
	}

	.button:hover span:nth-child(1),
	.button:hover span:nth-child(3) {
		transform: translateY(0);
	}

	.button span:nth-child(1) {
		top: calc(50% - 2px);
		left: -50px;
		transform-origin: left;
	}

	.button:hover span:nth-child(1) {
		left: 50%;
	}

	.button span:nth-child(3) {
		top: calc(50% - 2px);
		right: -50px;
		transform-origin: right;
	}

	.button:hover span:nth-child(3) {
		right: 50%;
	}

	.button span:nth-child(2) {
		left: calc(50% - 2px);
		top: -50px;
		transform-origin: top;
	}

	.button:hover span:nth-child(2) {
		top: 50%;
	}

	.button span:nth-child(4) {
		left: calc(50% - 2px);
		bottom: -50px;
		transform-origin: bottom;
	}

	.button:hover span:nth-child(4) {
		bottom: 50%;
	}
</style>
