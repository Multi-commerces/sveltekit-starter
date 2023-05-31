<script lang="ts">
	import Cell from '@smui/layout-grid/src/Cell.svelte';
	import Article from '../../components/Article.svelte';
	import { userPreferences } from '$lib/userPreferences';
	import { onMount } from 'svelte';

	let component: any;
	let color: string;

	// for update preferences.layout = selected;
	const options = [
		{ layout: 'default' },
		{ layout: 'mega' },
		{ layout: 'alpha' },
		{ layout: 'gamma' }
	];

	let selected: any = options[0];
	onMount(() => {
		selected = { layout: $userPreferences.layout.name };
	});

	$: if (userPreferences) {
	}

	let select = async () => {
		switch (selected.layout) {
			case 'mega':
				console.log('template mega.');
				component = (await import('../../components/layout/mega/Layout.svelte')).default;
				color = '#911c1c';
				break;
			case 'alpha':
				console.log('template alpha.');
				component = (await import('../../components/layout/alpha/Layout.svelte')).default;
				color = '#1b971b';
				break;
			case 'gamma':
				console.log('template gamma.');
				component = (await import('../../components/layout/gamma/Layout.svelte')).default;
				color = '#339299';
				break;
			default:
				console.log('template default.');
				component = (await import('../../components/layout/Layout.svelte')).default;
				color = '#336699';
		}

		userPreferences.set({ layout: { name: selected.layout, component, bgColor: color } });
	};
</script>

<Article title="CMS configurator">
	<Cell span={12}>
		<div>
			<p>
				Configuration du CMS (version de test)<br />
				Cette partie du site vous permet de tester et de personnaliser la mise en page et le thème.
				<br />
				Aucune modification n'est enregistrée et tout sera réinitialisé lors du rechargement du navigateur.<br
				/><br />
				Profitez-en pour expérimenter sans risque !
			</p>
		</div>
	</Cell>
	<Cell>
		<select bind:value={selected} on:change={select}>
			{#each options as option}
				<option value={option}>{option.layout}</option>
			{/each}
		</select>
		<a href="/contact/mod" title="page de test">Tester le layout ici</a>
	</Cell>
</Article>
