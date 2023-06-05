<script lang="ts">
	export let title = '';
    export let html = '';
</script>

<details>
	<summary>{title}</summary>
    {@html html}
	<p><slot /></p>
</details>
