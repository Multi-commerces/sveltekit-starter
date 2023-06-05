<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { writable } from 'svelte/store';

	export let name = '';
	export let label = '';
	export let value = writable('');

	export let placeholder;

	export let withLeadingIcon;
	export let withTrailingIcon;
	export let required = false;

	onMount(() => {
		if (label) {
			name = name ?? label.toLowerCase();
		}
	});
</script>

<div class="form-group">
	{#if withLeadingIcon}
		<span><Fa icon={withLeadingIcon} /></span>
	{/if}

	{#if withLeadingIcon || withTrailingIcon}
		<input type="text" {name} aria-label={label} {placeholder} bind:value />
	{:else}
		<span>
			<label for="name">
				{label} 
				{#if required}<abbr title="required">*</abbr>{/if}
			</label>
		</span>
		<input type="text" id={name} {name} title={label} {placeholder} bind:value />
	{/if}

	{#if withTrailingIcon}
		<span><Fa icon={withTrailingIcon} /></span>
	{/if}
</div>

<style>
	input[type='text'] {
		width: 100%;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		margin-top: 6px;
		margin-bottom: 16px;
		margin-right: 0px;
		margin-left: 0px;
		resize: vertical;
	}
	label {
		margin-right: 0px;
		margin-left: 0px;
		width: 100%;
	}

	
</style>
