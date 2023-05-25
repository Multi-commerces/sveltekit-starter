<script lang="ts">
	import { page } from '$app/stores';
	import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faGhost, faSun } from '@fortawesome/free-solid-svg-icons';
	import Button from '@smui/button';
	import { Label } from '@smui/common';
	import IconButton from '@smui/icon-button';
	import { fade } from 'svelte/transition';
	import { Row, Section, default as TopAppBar } from '@smui/top-app-bar';
	import Fa from 'svelte-fa';
	import AutoAdjust from '@smui/top-app-bar/src/AutoAdjust.svelte';
	import NavBar from '../components/NavBar.svelte';

	let lightTheme =
		typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: dark)').matches;
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

	let header;
	let prominent = false;
	let dense = true;
	let secondaryColor = true;

	let data: any;
</script>

<svelte:head>
	<!-- elements go here -->
	<!-- SMUI Styles -->
	<link rel="stylesheet" href="/smui-dark.css" />
</svelte:head>

<div class="top-app-bar-container">
	<TopAppBar
		{prominent}
		{dense}
		color={secondaryColor ? 'secondary' : 'primary'}
		variant="fixed"
		bind:this={header}
	>
		<Row>
			<Section align="start" toolbar>
				<IconButton class="material-icons">menu</IconButton>

				<!-- <TerminalText className="hidden-mobile" /> -->
				<NavBar tabs={$page.data.menus} active={$page.data.active} />
			</Section>
			<Section align="end" toolbar>
				<div>
					<Fa icon={lightTheme ? faSun : faGhost} />
					<Button on:click={switchTheme}>
						<Label>{lightTheme ? 'Lights off' : 'Lights on'}</Label>
					</Button>
				</div>
				<div>
					<IconButton
						aria-label="Demo Site"
						href="https://fr.linkedin.com/in/julien-ilari-908ba7a1"
					>
						<Fa icon={faLinkedinIn} />
					</IconButton>

					<IconButton aria-label="Demo Site" href="https://github.com/Multi-commerces">
						<Fa icon={faGithub} />
					</IconButton>
				</div>
			</Section>
		</Row>
	</TopAppBar>
</div>
<AutoAdjust topAppBar={header} style="display:flex" >
	{#key data?.pathname}
		{#if data?.pathname !== '/'}
			<style>
				body::before {
					backdrop-filter: blur(45px px);
					-webkit-filter: blur(8px);
				}
			</style>
			<div id="main-container" in:fade={{ duration: 1000 }}>
				<slot />
			</div>
		{:else}
			<div id="main-container" in:fade={{ duration: 500 }}>
				<slot />
			</div>
		{/if}
	{/key}
</AutoAdjust>
