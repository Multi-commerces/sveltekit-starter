<h1>ALPHA</h1>
<div id="alpha-container">
	<div>Bloc 1</div>
	<div>Bloc 2</div>
	<div>Bloc 3</div>
</div>
<slot />

<style lang="scss" gloabal>
	#alpha-container {
		display: flex;
		div {
			height: 60px;
			width: 60px;
		}
	}
</style>
