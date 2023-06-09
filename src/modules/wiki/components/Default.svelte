<script>
	import { onDestroy, onMount } from 'svelte';

	export let title = 'Hello world';
	export let content = '<h1>Hello world</h1><p>Hello world content</p>';

	let textarea;
	let editor;

	function tinymceLoaded() {
		editor = tinymce.init({
			selector: 'textarea#default-editor',
			plugins:
				'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
			toolbar:
				'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat'
		});
	}

	onDestroy(() => {
		if (editor) {
			tinymce.remove('#default-editor');
		}
	});
</script>

<svelte:head>
	<script
		src="https://cdn.tiny.cloud/1/qnotpupm64la52hirjvef5vvbrq8tghewejdnfk625nu8xkm/tinymce/6/tinymce.min.js"
		on:load={tinymceLoaded}
	>
	</script>
</svelte:head>

{#if content && title}
	<form method="POST" action="?/send">
		<label>
			Title:
			<input name="title" type="text" bind:value={title} />
		</label>
		<br />
		<textarea id="default-editor" name="content" bind:this={textarea} bind:value={content} />
		<br />
		<input type="submit" value="Enregistrer" />
	</form>
{/if}
