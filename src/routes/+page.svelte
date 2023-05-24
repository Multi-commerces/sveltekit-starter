<script lang="ts">
	import Paper, { Content, Title } from '@smui/paper';
	import Fa from 'svelte-fa';
	import {
		faLightbulb,
		faServer,
		faHandshake,
		faLaptopCode,
		faCode,
		faExchangeAlt,
		faWrench,
		faQuestion,
		faUser
	} from '@fortawesome/free-solid-svg-icons';
	import Cell from '@smui/layout-grid/src/Cell.svelte';
	import LayoutGrid from '@smui/layout-grid/src/LayoutGrid.svelte';
	import Button, { Label, Icon } from '@smui/button';
	import { fade, fly } from 'svelte/transition';
	import CellPaper from '../components/CellPaper.svelte';
	import { PrimaryText, SecondaryText } from '@smui/list';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Card from '@smui/card';

	let visible = false;
	let visibleOffrir = false;

	let carousel = [
		{
			icon: faLaptopCode,
			title: 'Développement Web Fullstack',
			description:
				'En tant que développeur freelance Fullstack Java expérimenté, je propose des services de développement web complets. De la conception à la réalisation, je suis en mesure de créer des applications web dynamiques et performantes en utilisant les dernières technologies et frameworks Java.'
		},
		{
			icon: faServer,
			title: 'Développement Backend',
			description:
				"Besoin d''un backend solide pour votre application ? Je suis expérimenté dans le développement backend Java, avec une expertise dans les frameworks tels que Quarkus, Spring et Hibernate. Je peux concevoir et implémenter des API REST efficaces, gérer les bases de données et garantir la sécurité des données. Mon approche est axée sur la qualité du code et la robustesse de votre infrastructure backend."
		},
		{
			icon: faCode,
			title: 'Développement Frontend',
			description:
				"L''expérience utilisateur est un aspect essentiel du développement web moderne. Je suis spécialisé dans la création d''interfaces utilisateur interactives et esthétiques en utilisant les technologies frontales telles que HTML, CSS et JavaScript. Je suis constamment à jour avec les dernières tendances et les bonnes pratiques pour fournir une expérience utilisateur agréable et une interface conviviale pour vos utilisateurs."
		},
		{
			icon: faExchangeAlt,
			title: 'Intégration de systèmes',
			description:
				"Si vous avez besoin d''intégrer différents systèmes ou applications existantes, je peux vous aider à les connecter de manière fluide. Je possède une expertise dans l''utilisation d''API, de services web et de technologies d''intégration pour assurer une communication efficace entre vos systèmes. Mon objectif est de simplifier et d''optimiser vos processus métier grâce à une intégration transparente."
		},
		{
			icon: faWrench,
			title: 'Maintenance et améliorations',
			description:
				"Je comprends l''importance de la maintenance continue des applications web. Je suis disponible pour assurer la maintenance de votre application, effectuer des mises à jour et des améliorations, ainsi que pour résoudre les problèmes éventuels qui pourraient survenir. Mon objectif est de garantir le bon fonctionnement et la fiabilité de votre application à long terme."
		}
	];
</script>

<LayoutGrid class="paper-container">
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
	<Cell span={12}>
		{#if browser}
			<Carousel
				autoplay
				autoplayDuration={4000}
				arrows={false}
				let:currentPageIndex
				let:pagesCount
				let:showPage
			>
				<div slot="dots" class="custom-dots" style="">
					{#each Array(pagesCount) as _, pageIndex (pageIndex)}
						<Button
							style="margin : 0.5rem 0.2rem;height:20px"
							active={currentPageIndex === pageIndex}
							on:click={() => showPage(pageIndex)}
							variant={currentPageIndex === pageIndex ? 'outlined' : 'raised'}
							class="button-shaped-round"
						>
							<Label>{pageIndex + 1}</Label>
						</Button>
					{/each}
				</div>
				{#each carousel as c}
					<Card style="height:150px;padding:0.5rem;">
						<h3>
							<span>{c.title}</span>
							<Fa icon={c.icon} />
							<span class="line" />
						</h3>
						<p>{c.description}</p>
					</Card>
				{/each}
			</Carousel>
		{/if}
	</Cell>
</LayoutGrid>

<hr />

<style>
	ul {
		padding: 0;
	}
	li {
		display: block;
	}
</style>
