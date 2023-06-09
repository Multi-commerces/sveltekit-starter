<script>
	import {
		faAsterisk,
		faBriefcase,
		faCertificate,
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

		<section style="padding:1rem;flex-basis :30%;background-color: #465;color:white;height: 100%;">
			<section id="contact" style="display: flex;">
				<div>
					<img src="/IMG-1375.JPG" alt="Avatar" />
				</div>
				<div>
					<h2>Julien ILARI</h2>
					<ul>
						<li>
							<Fa icon={faBriefcase} /> Dév. Full-Stack/Java
						</li>
						<li><Fa icon={faHome} /> Aubagne, FR</li>
						<li>
							<Fa icon={faEnvelope} /> julien.ilari@gmail.com
						</li>
						<li>
							<Fa icon={faPhone} /> 06.73.20.06.25
						</li>
					</ul>
				</div>
			</section>
			<p>
				Le développement Back-End est une de mes passions : concevoir, développer et maintenir des
				services métiers et des API REST. <br /> <br />Sérieux, adaptable, autonome et passionné,
				j’aime apprendre de nouvelles technologies, passer du temps à résoudre des problèmes et
				réaliser du code de qualité.
			</p>
			<hr />
			<section id="competences">
				<h2>
					<b><Fa color="#8a0808" icon={faAsterisk} /> Compétences</b>
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
							<Fa icon={faCheckCircle} /> SPRING
						</li>
						<li>
							<Fa icon={faCheckCircle} /> QUARKUS (MicroProfile)
						</li>
						<li>
							<Fa icon={faCheckCircle} /> LOMBOOK
						</li>
						<li>
							<Fa icon={faCheckCircle} /> MAPSTRUCT
						</li>
						<li>
							<Fa icon={faCheckCircle} />
							API RESTful
						</li>
						<li><Fa icon={faCheckCircle} /> Hateoas | Json:API</li>
						<li><Fa icon={faCheckCircle} /> Git | Github</li>
						<li><Fa icon={faCheckCircle} /> SONAR CLOUD</li>
					</ul>
				</div>
				<br />
			</section>
		</section>
		<!-- End Left Column -->

		<!-- Right Column -->
		<section style="flex-basis :70%">
			<article style="padding:1rem">
				<h2>
					<Fa color="#181717e1" icon={faSuitcase} /> EXPÉRIENCE PROFESSIONELLE
				</h2>

				<section>
					<header>
						<h3>
							<b><Fa icon={faCertificate} /> Développeur Fullstack Java / OCEAN (Orange BS)</b>
						</h3>
						<time datetime="2020-07">Juil. 2020</time> -
						<time datetime="2023" aria-label="actuellement">Current</time>
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
					<section>
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
					</section>
					<hr />
				</section>
				<section>
					<h3><b><Fa icon={faCertificate} /> Développeur Java / Inetum (GFI Informatique)</b></h3>

					<section>
						<h4>
							<i class="fa fa-calendar fa-fw w3-margin-right" />juil. 2018 - juil. 2020 | CPR SNCF
						</h4>
						<p>
							Correction et évolution des applications Java EE<br />
							Réécriture d'une application JSF 1 en JSF 2.x<br />
							Rédiger la documentation technique et le rapport de tests<br />
						</p>
					</section>
				</section>

				<hr style="width: 100%;" />

				<section>
					<h3><b><Fa icon={faCertificate} /> Concepteur développeur / Atos (BULL)</b></h3>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								CPR SNCF, Maintenance des applications OMNIS7 et Java
							</h4>
							<span class="mission-datetime">
								<time datetime="2020-07">janv. 2016</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2023">Juil. 2018</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">3ans 7mois</span>
							</span>
						</header>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>Correction et évolution des applications OMNIS7 et Java EE</li>
								<li>Rédiger la documentation technique et le rapport de tests</li>
							</ul>
						</section>
						<section class="mission-env">
							<h5>Environnement technique :</h5>
							<ul>
								<li>Tests d'API : POSTMAN</li>
								<li>Conteneurisation : DOCKER</li>
								<li>
									Technologies de développement : JSF (PrimeFaces, Omnifaces, CDI), Spring, Java EE
									5, Java EE 7, SOAPUI
								</li>
								<li>Base de données : Oracle</li>
								<li>Contrôle de version : SVN</li>
							</ul>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								ACCOSS, Intégrateur technique
							</h4>
							<span class="mission-datetime">
								<time datetime="2015-03">mars. 2015</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2015-12">déc. 2015</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">10mois</span>
							</span>
						</header>
						<p>
							Installation des livrables de la MOE, tests techniques, réalisation de campagne ALM.
						</p>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>Réalisation de la documentation</li>
								<li>Formation de back up</li>
							</ul>
						</section>
						<section class="mission-env">
							<h5>Environnement technique :</h5>
							<p>Outils ALTAIR (Redmine, ALM), Supervision Nagios, Linux, Windows</p>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								MNCA, Assistance et support des logiciels métiers
							</h4>
							<span class="mission-datetime">
								<time datetime="2020-07">janv. 2015</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2023">mars. 2015</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">3mois</span>
							</span>
						</header>
						<p>
							Missions d’assistance et de support pour l’administration des logiciels métiers de la
							collectivité
						</p>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>Support et suivi des demandes client</li>
								<li>Manipulation de données (SQL)</li>
								<li>Création de packages d’installation MSI</li>
								<li>Alertes et reporting au chef de projet</li>
							</ul>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								CPR SNCF, <strong>Maintenance des applications OMNIS7 et PL/SQL</strong>
							</h4>
							<span class="mission-datetime">
								<time datetime="2014-03">mars. 2014</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2015-01">janv. 2015 </time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">11 mois</span>
							</span>
						</header>
						<p>Correction et évolution des applications</p>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>Traitement des demandes de corrections et/ou d’évolutions</li>
								<li>Rédiger la documentation technique et le rapport de tests</li>
								<li>Formation d’un backup OMNIS7</li>
							</ul>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								Ministère de l’intérieur, SIV (Système Immatriculation des véhicules)
							</h4>
							<span class="mission-datetime">
								<time datetime="2020-07">févr 2014</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2023">mars. 2014</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">2mois</span>
							</span>
						</header>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>Qualification/Test</li>
								<li>Rédaction des cas de test</li>
							</ul>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								DSNA, Gestionnaire de stock (renar ip et x25) à Toulouse
							</h4>

							<span class="mission-datetime">
								<time datetime="2013-08">aoùt. 2013</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2014-02">févr. 2014</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">7mois</span>
							</span>
						</header>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>Gestion du stock d’équipement réseau</li>
								<li>Respect des délais de prise en charge et de traitement des interventions</li>
								<li>Reporting mensuel au chef de projet</li>
								<li>Réalisation de documentation</li>
								<li>Formation de backups</li>
							</ul>
						</section>
						<section class="mission-env">
							<h5>Environnement technique :</h5>
							<ul>
								<li>Tests d'API : POSTMAN</li>
								<li>Conteneurisation : DOCKER</li>
								<li>
									Technologies de développement : JSF (PrimeFaces, Omnifaces, CDI), Spring, Java EE
									5, Java EE 7, SOAPUI
								</li>
								<li>Base de données : Oracle</li>
								<li>Contrôle de version : SVN</li>
							</ul>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								MEDDE, Le ministère de l'Ecologie
							</h4>
							<span class="mission-datetime">
								<time datetime="2013-01">janv. 2013</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2012">juil. 2013</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">7mois</span>
							</span>
						</header>
						<p>Développement/Test Java</p>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>développement Java EE</li>
								<li>Réalisation des tests JUnit</li>
							</ul>
						</section>
						<section class="mission-env">
							<h5>Environnement technique :</h5>
							<p>Postgres, Java EE, HTML, CSS, Spring, Hibernate, Struts 1, Eclipse, JUnit, SVN.</p>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								DCNS, TRA et Gestion de configuration (clear case)
							</h4>
							<span class="mission-datetime">
								<time datetime="2012-03">mars. 2012</time>
								<span aria-hidden="true"> - </span>
								<time datetime="2012-12">déc. 2012</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">10mois</span>
							</span>
						</header>
						<p>TRA et Gestion de configuration Projet GEMO</p>
						<section class="mission-details">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>Utilisation de Clearcase</li>
								<li>Vérification des FV</li>
								<li>Lancement des tests auto et manuels</li>
								<li>Estimation des charges et le reste à faire par tâche unitaire</li>
								<li>Création de scripts shell pour améliorer les temps de traitement</li>
							</ul>
						</section>
						<section class="mission-env">
							<h5>Environnement technique :</h5>
							<p>ClearCase, Quality Center, Linux.</p>
						</section>
					</section>
					<section class="mission">
						<header class="mission-header">
							<h4>
								<Fa icon={faAsterisk} />
								DCNS, Centre de service, Front Office et back office
							</h4>
							<span class="mission-datetime">
								<time datetime="2010-10">nov. 2010 </time>
								<span aria-hidden="true"> - </span>
								<time datetime="2023">mars. 2012</time>
								<span aria-hidden="true"> - </span>
								<span aria-hidden="true">1an 5mois</span>
							</span>
						</header>
						<p>
							Projets DSNS dans le périmètre du centre de service (GEMO, FREMM, INDE, …).<br />
							Les utilisateurs passent par le centre de services pour toute « demande de service » ou
							« incident ».
						</p>
						<section class="mission-details" open="true">
							<h5>Détails de la mission :</h5>
							<ul>
								<li>- Relation client</li>
								<li>- Prise en compte et traitement des demandes de service</li>
								<li>
									- Gestion des comptes utilisateurs : Sforge, SforgeProject, ClearQuest, ClearCase,
									Quality Center, DOORS, …
								</li>
								<li>- Modification (évolution) des scripts perl</li>
							</ul>
						</section>
						<section class="mission-env">
							<h5>Environnement technique :</h5>
							<p>
								Sforge, SforgeProject, ClearQuest, ClearCase, Quality Center, DOORS, Linux (env.
								production)/Windows.
							</p>
						</section>
					</section>
				</section>
			</article>

			<section style="padding:1rem">
				<h2>
					<Fa color="#181717e1" icon={faCertificate} /> EXPÉRIENCE Personnel
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

	#contact,
	#competences {
		ul {
			list-style: none;
			margin-top: 0.5rem;
			padding: 0;
			color: #ffffff8f;
			font-weight: bold;
		}
	}

	.mission:nth-child(even) {
		background-color: #dfdfdf9d;
	}
	.mission {
		position: relative;
		margin-top: 2rem;
		border-style: ridge;
		border-radius: 15px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
		padding: 1rem;

		header {
			width: 100%;
			margin-bottom: 1rem;
			justify-content: space-between;
			* {
				margin: 0;
			}
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
			padding: 0.5rem 1rem;
			margin: -1rem;
			color: white;
			background-color: #8a0808;
			margin-bottom: 0.5rem;
		}

		.mission-env {
			margin-top: 1rem;
		}

		ul {
			list-style-type: circle !important;
			padding-left: 1.5rem !important;
			margin: 0;
			li {
				display: list-item;
			}
		}
	}
	.mission-env ul {
		padding: 0;
	}

	article.container {
		max-width: 1400px;
		width: 100%;
		margin: auto;
		// color: #000 !important;
		background-color: #fff !important;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	}

	div {
		margin-left: 1rem;
	}

	h2 {
		color: #181717e1 !important;
		margin: 0;
	}

	// aside {
	// 	h4 {
	// 		opacity: 0.6;
	// 		color: #0000b0 !important;
	// 	}
	// }

	h3 {
		font-family: 'Segoe UI', Arial, sans-serif;
		font-weight: 400;
		margin: 10px 0;
		opacity: 0.8;
		color: #0000b0 !important;
	}

	section header h4 {
		font-family: 'Segoe UI', Arial, sans-serif;
		margin: 10px 0;
		color: rgb(223, 223, 223) !important;
		font-size: larger;
	}

	h5 {
		margin: 0;
		font-size: medium;
	}

	li {
		// display: flex;
		// gap: 0.5rem;
		padding: 1pt;
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
			max-width: 140px;
			width: 100%;
			height: 170px;
		}
	}
</style>
