<script lang="ts">
	import { faHandshake, faLightbulb, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
	import Button from '@smui/button';
	import LayoutGrid from '@smui/layout-grid/src/LayoutGrid.svelte';
	import { PrimaryText, SecondaryText } from '@smui/list';
	import Fa from 'svelte-fa';
	import { fade, fly } from 'svelte/transition';
	import CellPaper from './Article.svelte';

	let visible = false;
	let visibleOffrir = false;
</script>

<LayoutGrid class="paper-container" style="opacity: 95%;">
	<CellPaper faIcon={faQuestion} title="Qui je suis">
		<p>
			Je suis un freelance Fullstack Java spécialisé dans le développement web. Avec plusieurs
			années d'expérience dans le domaine.
		</p>
		<div>
			<p>Découvrez mon parcours professionnel et mes projets passés en consultant mon CV</p>
			<Button touch variant="raised">Télécharger mon CV</Button>
		</div>

		<Button on:click={() => (visibleOffrir = !visibleOffrir)}
			>Voir ({visibleOffrir ? '-' : '+'})</Button
		>
		{#if visibleOffrir}
			<ul in:fly={{ y: 200, duration: 2000 }} out:fade>
				<li>
					<PrimaryText>Compétences techniques</PrimaryText>
					<SecondaryText>
						Maîtrise approfondie de Java, JavaScript, HTML, CSS et des frameworks associés.
					</SecondaryText>
				</li>
				<hr />
				<li>
					<PrimaryText>Expérience pratique</PrimaryText>
					<SecondaryText>
						J'ai travaillé sur une variété de projets, allant du développement d'applications web
						complexes à l'intégration de systèmes et à la maintenance continue.
					</SecondaryText>
				</li>
				<hr />
				<li>
					<PrimaryText>Approche collaborative</PrimaryText>
					<SecondaryText>
						Je suis un fervent défenseur de la collaboration et de la communication ouverte. J'aime
						travailler en équipe pour atteindre les objectifs communs.
					</SecondaryText>
				</li>
				<hr />
				<li>
					<PrimaryText>Résolution de problèmes</PrimaryText>
					<SecondaryText>
						Je suis passionné par la résolution de problèmes techniques et je suis capable de
						trouver des solutions efficaces et innovantes.
					</SecondaryText>
				</li>
				<hr />
				<li>
					<PrimaryText>Formation continue</PrimaryText>
					<SecondaryText>
						Je reste constamment à jour avec les dernières tendances et les nouvelles technologies
						du développement web afin d'offrir des solutions à la pointe de l'industrie.
					</SecondaryText>
				</li>
			</ul>
		{/if}
	</CellPaper>

	<CellPaper faIcon={faUser} title="Infos personnelles">
		<ul>
			<li style="margin-bottom:1rem">
				<strong>Date de naissance</strong> : 28/09/1987
			</li>

			<li style="margin-bottom:1rem">
				<strong>Email</strong> : julien.ilari@gmail.com
			</li>
			<li style="margin-bottom:1rem">
				<strong>Tél.</strong> : + (33) 673200625
			</li>
			<li>
				<strong>Adresse</strong> : 29 rue Frédic Mistral, 13400 Aubagne
			</li>
		</ul>

		<h3><Fa icon={faHandshake} style="margin-right:0.5rem" />Travaillons ensemble</h3>
		<p>
			N'hésitez pas à me contacter pour discuter de vos besoins et de la manière dont je peux
			contribuer à la réalisation de votre projet.
		</p>

		<Button>Formulaire de contact</Button>
	</CellPaper>
	<CellPaper faIcon={faLightbulb} title="Ma proposition de valeur">
		<div>
			<p>
				En tant que développeur Fullstack Java, j'apporte une proposition de valeur unique à vos
				projets :
			</p>
			<ul>
				<li>
					<strong>Adaptabilité</strong>
					{#if visible}
						<span in:fly={{ y: 200, duration: 2000 }} out:fade>
							Je suis capable de m'adapter rapidement aux nouvelles technologies, aux exigences
							changeantes et aux environnements de développement variés.
						</span>
						<hr />
					{/if}
				</li>
				<li>
					<strong>Passion</strong>
					{#if visible}
						<span in:fly={{ y: 200, duration: 2000 }} out:fade>
							Je suis passionné par le développement web et je m'engage pleinement dans chaque
							projet, en apportant créativité et expertise technique.
						</span>
						<hr />
					{/if}
				</li>
				<li>
					<strong>Sérieux</strong>
					{#if visible}
						<span in:fly={{ y: 200, duration: 2000 }} out:fade>
							J'aborde chaque projet avec professionnalisme et rigueur, respectant les délais, les
							normes de qualité et les exigences spécifiques.
						</span>
						<hr />
					{/if}
				</li>

				<li>
					<strong>Intégration rapide dans une équipe</strong>
					{#if visible}
						<span in:fly={{ y: 200, duration: 2000 }} out:fade>
							Je suis capable de m'intégrer rapidement dans une équipe de développement existante,
							collaborant efficacement pour atteindre les objectifs communs.
						</span>
						<hr />
					{/if}
				</li>
			</ul>
			<Button on:click={() => (visible = !visible)}>
				{visible ? 'détaillé (-)' : 'détaillé (+)'}
			</Button>
		</div>
	</CellPaper>
</LayoutGrid>

<hr />

<style>
	ul {
		margin: 0;
		padding: 0;
	}

	li {
		display: block;
	}
</style>
