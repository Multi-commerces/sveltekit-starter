<script lang="ts">
	import { onMount } from 'svelte';

	var scrollButton: any;

	function scrollToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	onMount(() => {
		window.onscroll = function () {
			// Partie scrollButton
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				scrollButton.classList.remove('hidden');
			} else {
				scrollButton.classList.add('hidden');
			}
		};
	});
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a
	bind:this={scrollButton}
	href="#"
	id="scrollButton"
	class="hidden"
	on:click={scrollToTop}
	role="button"
	aria-label="Remonter en haut de la page"
>
	Remonter
</a>

<style>
	a {
		position: fixed;
		bottom: 20px;
		left: 20px;
		opacity: 1;
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 40px;
		background-color: #333;
		color: #fff;
		text-decoration: none;
		font-weight: bold;
		border-radius: 4px;
	}

	a.hidden {
		opacity: 0;
		pointer-events: none;
		transform: translateY(100px);
	}
</style>
