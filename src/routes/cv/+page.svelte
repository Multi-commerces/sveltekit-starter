<script>
	import Stack from '@/components/common/Stack.svelte';
	import {
		faAsterisk,
		faBridge,
		faBriefcase,
		faCertificate,
		faCheck,
		faCheckCircle,
		faEnvelope,
		faHome,
		faPhone,
		faSuitcase
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	// @ts-ignore
	import Flex from 'svelte-flex';
</script>

<article class="container">
	<!-- Page Container -->

	<!-- The Grid -->
	<Flex direction="row" align="start" class="responsive">
		<!-- Left Column -->

		<section style="padding:1rem;flex-basis :40%">
			<section id="contact">
				<div>
					<img src="/IMG-1375.JPG" alt="Avatar" />
				</div>
				<div>
					<h2>Julien ILARI</h2>
					<ul>
						<li>
							<Fa icon={faBriefcase} />Dév. Full-Stack/Java
						</li>
						<li><Fa icon={faHome} />Aubagne, FR</li>
						<li>
							<Fa icon={faEnvelope} /> julien.ilari@gmail.com
						</li>
						<li>
							<Fa icon={faPhone} /> 06.73.20.06.25
						</li>
					</ul>
				</div>
			</section>
			<hr />
			<section>
				<h2>
					<b><Fa color="#009688" icon={faAsterisk} /> Compétences</b>
				</h2>
				<div>
					<ul>
						<li>
							<Fa icon={faCheckCircle} />
							<span>HTML5 | CSS3 | Javascript</span>
						</li>
						<li>
							<Fa icon={faCheckCircle} />
							SVELTE
						</li>
						<li>
							<Fa icon={faCheckCircle} />
							REACT
						</li>
						<li>
							<Fa icon={faCheckCircle} />
							GWT | Spring Web MVC
						</li>
						<li>
							<Fa icon={faCheckCircle} />
							JAVA EE (JSF,CDI,EJB,JPA ...)
						</li>
						<li>
							<Fa icon={faCheckCircle} />SPRING
						</li>
						<li>
							<Fa icon={faCheckCircle} /> QUARKUS (MicroProfile)
						</li>
						<li>
							<Fa icon={faCheckCircle} />LOMBOOK
						</li>
						<li>
							<Fa icon={faCheckCircle} />MAPSTRUCT
						</li>
						<li>
							<Fa icon={faCheckCircle} />
							API RESTful
						</li>
						<li><Fa icon={faCheckCircle} />Hateoas | Json:API</li>
						<li><Fa icon={faCheckCircle} />Git | Github</li>
						<li><Fa icon={faCheckCircle} />SONAR CLOUD</li>
					</ul>
				</div>
				<br />
			</section>
		</section>
		<!-- End Left Column -->

		<!-- Right Column -->
		<section>
			<section style="padding:1rem">
				<h2>
					<Fa color="#009688" icon={faSuitcase} /> EXPÉRIENCE PROFESSIONELLE
				</h2>

				<section>
					<header>
						<h3><b>Développeur Fullstack Java / OCEAN (Orange BS)</b></h3>
						<aside>
							# <i class="fa fa-calendar fa-fw w3-margin-right" />Juil. 2020 -
							<span class="w3-tag w3-teal w3-round">Current</span>
						</aside>
					</header>
					<p>OceanV3 - Logiciel de Gestion de Flotte Projets (Développeur Fullstack)</p>
					<ul>
						<li>
							Contribué au développement d'une plateforme de gestion de flotte de projets en équipe.
						</li>
						<li>Utilisation quotidienne des outils suivants : JIRA, JETKINS et Git.</li>
						<li>
							Travaillé sur le développement du front-end en utilisant les technologies GWT (SPRING
							web MVC, Java 11) et REACT.
						</li>
					</ul>
					<aside>
						<h4>Environnement technique :</h4>
						<ul>
							<li>Outils de gestion de projet : JIRA</li>
							<li>Documentation d'API : SWAGGER</li>
							<li>Tests d'API : POSTMAN</li>
							<li>Conteneurisation : DOCKER</li>
							<li>Intégration continue : JETKINS</li>
							<li>Technologies de développement : GWT, Spring, Java 11</li>
							<li>Base de données : Postgres</li>
							<li>Contrôle de version : Git</li>
						</ul>
					</aside>
					<hr />
				</section>
				<section>
					<h3><b>Développeur Java / Inetum (GFI Informatique)</b></h3>
					<h4>
						<i class="fa fa-calendar fa-fw w3-margin-right" />juil. 2018 - juil. 2020 | CPR SNCF
					</h4>
					<p>
						Correction et évolution des applications Java EE<br />
						Réécriture d'une application JSF 1 en JSF 2.x<br />
						Rédiger la documentation technique et le rapport de tests<br />
					</p>
					<hr />
				</section>
				<section>
					<h3><b>Concepteur développeur / Atos (BULL)</b></h3>
					<h4>
						<i class="fa fa-calendar fa-fw w3-margin-right" />aoùt. 2010 juil. 2018
					</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					<br />
				</section>
			</section>

			<section style="padding:1rem">
				<h2>
					<Fa color="#009688" icon={faCertificate} /> EXPÉRIENCE Personnel
				</h2>
			</section>

			<!-- End Right Column -->
		</section>

		<!-- End Grid -->
	</Flex>

	<!-- End Page Container -->
</article>

<style lang="scss">
	/* @import url('https://www.w3schools.com/w3css/4/w3.css'); */
	/* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'); */

	article.container {
		max-width: 1400px;
		width: 100%;
		margin: auto;
		// color: #000 !important;
		background-color: #fff !important;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	}

	section
	{
		width: 100%;
	}

	div {
		margin-left: 1rem;
	}

	h2 {
		color: #757575 !important;
		margin: 0;
	}

	aside {
		h4 {
			opacity: 0.6;
			color: #0000b0 !important;
		}

		ul {
			list-style-type: disc !important;
		}
	}

	h3 {
		font-family: 'Segoe UI', Arial, sans-serif;
		font-weight: 400;
		margin: 10px 0;
		opacity: 0.8;
		color: #0000b0 !important;
	}
	/* h4 {
		font-family: 'Segoe UI', Arial, sans-serif;
		margin: 10px 0;
		color: #009688 !important;
	} */

	ul {
		padding-left: 0rem;
		margin: 0;
	}
	li {
		display: flex;
		gap: 0.5rem;
		list-style-type: none;
	}

	img {
		border-radius: 15px;
		display: block;
		margin: auto;
	}
	@media (max-width: 1023px) {
		img {
			width: 100px;
			height: 150px;
		}

		#contact {
			display: flex;
		}

		:global(.responsive) {
			flex-direction: column !important;
			/* flex-basis: 100%; */
		}
	}

	@media (min-width: 1024px) {
		img {
			// width: 200px;
			max-width: 280px;
			width: 100%;
			height: 430px;
		}
	}
</style>
