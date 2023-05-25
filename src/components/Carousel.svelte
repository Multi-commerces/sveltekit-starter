<script lang="ts">
	import Fa from 'svelte-fa';
	import Button, { Label, Icon } from '@smui/button';
	//@ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Card from '@smui/card';
	import {
		faServer,
		faLaptopCode,
		faCode,
		faExchangeAlt,
		faWrench
	} from '@fortawesome/free-solid-svg-icons';

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
				"L'expérience utilisateur est un aspect essentiel du développement web moderne. Je suis spécialisé dans la création d''interfaces utilisateur interactives et esthétiques en utilisant les technologies frontales telles que HTML, CSS et JavaScript. Je suis constamment à jour avec les dernières tendances et les bonnes pratiques pour fournir une expérience utilisateur agréable et une interface conviviale pour vos utilisateurs."
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
			<Card style="height:300px;padding:0.5rem;">
				<h3>
					<span>{c.title}</span>
					<Fa icon={c.icon} />
					<span class="line" />
				</h3>
				<p style="margin:0">{c.description}</p>
			</Card>
		{/each}
	</Carousel>
{/if}
