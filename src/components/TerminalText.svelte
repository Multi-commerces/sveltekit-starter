<script>
	import { onMount } from 'svelte';

	const morphTime = 1;
	const cooldownTime = 1.5;
	let texts = ['Bienvenue sur mon site', 'Julien ILARI', 'Développeur Full Stack'];
	let textIndex = texts.length - 1;
	let time = new Date();
	let morph = 0;
	let cooldown = cooldownTime;
	export let className;

	let elts = {
		text1: {},
		text2: {}
	};

	function doMorph() {
		morph -= cooldown;
		cooldown = 0;

		let fraction = morph / morphTime;

		if (fraction > 1) {
			cooldown = cooldownTime;
			fraction = 1;
		}

		setMorph(fraction);
	}

	function setMorph(fraction) {
		elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

		fraction = 1 - fraction;
		elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

		elts.text1.textContent = texts[textIndex % texts.length];
		elts.text2.textContent = texts[(textIndex + 1) % texts.length];
	}

	function doCooldown() {
		morph = 0;

		elts.text2.style.filter = '';
		elts.text2.style.opacity = '100%';

		elts.text1.style.filter = '';
		elts.text1.style.opacity = '0%';
	}

	function animate() {
		requestAnimationFrame(animate);

		let newTime = new Date();
		let shouldIncrementIndex = cooldown > 0;
		let dt = (newTime - time) / 1000;
		time = newTime;

		cooldown -= dt;

		if (cooldown <= 0) {
			if (shouldIncrementIndex) {
				textIndex++;
			}

			doMorph();
		} else {
			doCooldown();
		}
	}

	onMount(() => {
		elts.text1.textContent = texts[textIndex % texts.length];
		elts.text2.textContent = texts[(textIndex + 1) % texts.length];
		animate();
	});
</script>

<div id="container-text" class={className}>
	<span id="text1" bind:this={elts.text1} />
	<span id="text2" bind:this={elts.text2} />
</div>

<style>
	/* @import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap'); */

	#container-text {
		padding-left: 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		height: 60pt;
		/* background-color: #f2f2f2; */
	}

	#text1,
	#text2 {
		position: absolute;
		width: 100%;
		display: inline-block;
		/* font-family: 'Raleway', sans-serif important; */
		font-size: 40pt;
		user-select: none;
		/* color: black; */
	}
</style>
