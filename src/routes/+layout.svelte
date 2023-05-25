<script lang="ts">
	import { page } from '$app/stores';
	import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faGhost, faSun } from '@fortawesome/free-solid-svg-icons';
	import Button from '@smui/button';
	import { Label } from '@smui/common';
	import IconButton from '@smui/icon-button';
	import { fade, fly } from 'svelte/transition';
	import { Row, Section, default as TopAppBar } from '@smui/top-app-bar';
	import Fa from 'svelte-fa';
	import NavBar from '../components/NavBar.svelte';
	import TerminalText from '../components/TerminalText.svelte';
	import { onMount } from 'svelte';

	let topAppBar: any;

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

	export let data;
	onMount(() => {
		switchTheme();
	});
</script>

<div id="topBar" bind:this={topAppBar}>
	<TopAppBar style="display : table-row;">
		<Row>
			<Section align="start" toolbar>
				<TerminalText className="hidden-mobile" />
			</Section>
			<Section align="end" toolbar>
				<Fa icon={lightTheme ? faSun : faGhost} />
				<Button on:click={switchTheme}>
					<Label>{lightTheme ? 'Lights off' : 'Lights on'}</Label>
				</Button>

				<IconButton aria-label="Demo Site" href="https://fr.linkedin.com/in/julien-ilari-908ba7a1">
					<Fa icon={faLinkedinIn} />
				</IconButton>

				<IconButton aria-label="Demo Site" href="https://github.com/Multi-commerces">
					<Fa icon={faGithub} />
				</IconButton>
			</Section>
		</Row>
		<NavBar tabs={$page.data.menus} active={$page.data.active}  />
	</TopAppBar>
</div>

<main>
	{#key data?.pathname}
		{#if data?.pathname !== '/'}
			<div class="main-container" in:fly={{ y: 300, duration: 2000 }} out:fly={{ duration: 200 }}>
				<slot />
			</div>
		{:else}
			<div class="main-container" in:fade={{ duration: 2000 }}>
				<slot />
			</div>
		{/if}
	{/key}
</main>
