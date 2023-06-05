<!-- Component.svelte -->
<script lang="ts">
	export let direction = 'column';
	export let alignContent = 'center';
	export let justifyContent = 'center';
	export let alignItems = 'stretch';
	export let size: string | undefined;

	// Fonction pour générer les classes dynamiques
	function getClassNames() {
		return `container ${direction} ${alignContent} ${justifyContent} ${alignItems}`;
	}
	function getStyle() {
		let value = '';
		if (size) {
			value = value.concat('width :', size, '% !important');
		} else {
			// value = value.concat('flex-basis :100%');
		}

		return value;
	}
</script>

<div class={getClassNames()} style={getStyle()}>
	<!-- Your content goes here -->
	<slot />
</div>

<style>
	.container {
		display: flex;
	}

	.row {
		flex-direction: row;
	}

	.column {
		flex-direction: column;
	}

	

	

	/* Ajoutez les autres classes et styles nécessaires */
</style>
