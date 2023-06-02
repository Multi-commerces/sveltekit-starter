<script>
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Paper, { Content, Title } from '@smui/paper';
	import Flex from 'svelte-flex';
</script>

<div>
	<!-- Page Container -->
	<div class="w3-content" style="max-width:1400px;">
		<!-- The Grid -->
		<Flex align="start" direction="row">
			<!-- Left Column -->
			<div class="w3-third-test">
				<div class="w3-white w3-text-grey w3-card-4">
					<div class="w3-display-container">
						<img src="/IMG-1375.JPG" style="width:100%;" alt="Avatar" />
						<div class="w3-display-bottomleft w3-container w3-text-black">
							<h2>Julien ILARI</h2>
						</div>
					</div>
					<div class="w3-container">
						<br />
						<p>
							<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Dév.
							Full-Stack/Java
						</p>
						<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Aubagne, FR</p>
						<p>
							<i
								class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"
							/>julien.ilari@gmail.com
						</p>
						<p>
							<i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />06.73.20.06.25
						</p>
						<hr />

						<p class="w3-large">
							<b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Compétences</b>
						</p>
						<ul class="skills svelte-11398s7">
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" />
								HTML5 | CSS3 | Javascript
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> SVELTE
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> REACT
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> GWT | Spring Web MVC
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> JAVA EE (JSF,CDI,EJB,JPA ...)
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> SPRING
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> QUARKUS (MicroProfile)
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> LOMBOOK
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> MAPSTRUCT
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle" /> API RESTful
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle text-darkblue svelte-11398s7" /> Hateoas | Json:API
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle text-darkblue svelte-11398s7" /> Git | Github
							</li>
							<li class="svelte-11398s7">
								<i class="icon fas fa-check-circle text-darkblue svelte-11398s7" /> SONAR CLOUD
							</li>
						</ul>
						<br />
					</div>
				</div>
				<br />

				<!-- End Left Column -->
			</div>

			<!-- Right Column -->
			<div class="w3-twothird">
				<div class="w3-container w3-card w3-white">
					<h2 class="w3-text-grey w3-padding-16">
						<i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
						<div style="display:inline-block">
							EXPÉRIENCE PROFESSIONELLE
							<div class="line" />
						</div>
					</h2>
					<div class="w3-container">
						<h5 class="w3-opacity"><b>Développeur Fullstack Java / OCEAN (Orange BS)</b></h5>
						<h6 class="w3-text-teal">
							<i class="fa fa-calendar fa-fw w3-margin-right" />Juil. 2020 -
							<span class="w3-tag w3-teal w3-round">Current</span>
						</h6>
						<p>
							OceanV3, logiciel de Gestion de Flotte Projets en équipe, utilisation quotidienne de
							JIRA, JETKINS et Git.<br />
							Développement GWT (SPRING web mvc, java 11). <br />
							Développement du nouveau front en REACT. <br />
							<br />
							Environnement :<br />
							JIRA, SWAGGER, POSTMAN, DOCKER, JETKINS, GWT, Spring, Java 11, Postgres, Git
						</p>
						<hr />
					</div>
					<div class="w3-container">
						<h5 class="w3-opacity"><b>Développeur Java / Inetum (GFI Informatique)</b></h5>
						<h6 class="w3-text-teal">
							<i class="fa fa-calendar fa-fw w3-margin-right" />juil. 2018 - juil. 2020 | CPR SNCF
						</h6>
						<p>
							Correction et évolution des applications Java EE<br />
							Réécriture d'une application JSF 1 en JSF 2.x<br />
							Rédiger la documentation technique et le rapport de tests<br />
						</p>
						<hr />
					</div>
					<div class="w3-container">
						<h5 class="w3-opacity"><b>Concepteur développeur / Atos (BULL)</b></h5>
						<h6 class="w3-text-teal">
							<i class="fa fa-calendar fa-fw w3-margin-right" />aoùt. 2010 juil. 2018
						</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						<br />
					</div>
				</div>

				<div class="w3-container w3-card w3-white">
					<h2 class="w3-text-grey w3-padding-16">
						<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
						<div style="display:inline-block">
							Éducation
							<div class="line" />
						</div>
					</h2>
					<div class="w3-container">
						<h5 class="w3-opacity"><b>W3Schools.com</b></h5>
						<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right" />Forever</h6>
						<p>Web Development! All I need to know in one place</p>
						<hr />
					</div>
					<div class="w3-container">
						<h5 class="w3-opacity"><b>London Business School</b></h5>
						<h6 class="w3-text-teal">
							<i class="fa fa-calendar fa-fw w3-margin-right" />2013 - 2015
						</h6>
						<p>Master Degree</p>
						<hr />
					</div>
					<div class="w3-container">
						<h5 class="w3-opacity"><b>School of Coding</b></h5>
						<h6 class="w3-text-teal">
							<i class="fa fa-calendar fa-fw w3-margin-right" />2010 - 2013
						</h6>
						<p>Bachelor Degree</p>
						<br />
					</div>
				</div>

				<!-- End Right Column -->
			</div>

			<!-- End Grid -->
		</Flex>

		<!-- End Page Container -->
	</div>
</div>

<style>
	@import url('https://www.w3schools.com/w3css/4/w3.css');
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

	li {
		list-style-type: none;
	}
	.w3-third-test {
		float: left;
	}

	@media screen and (max-width: 800px) {
		.w3-third-test {
			width: 100%;
		}
	}

	@media screen and (min-width: 801px) {
		.w3-third-test {
			width: 33.33333%;
		}
	}
</style>
