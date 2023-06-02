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
		<input {name} aria-label={label} type="text" {placeholder} bind:value />
	{:else}
		<span><label for="name">{label}</label></span>
		<input type="text" id={name} {name} title={label} {placeholder} bind:value />
	{/if}

	{#if withTrailingIcon}
		<span><Fa icon={withTrailingIcon} /></span>
	{/if}
</div>

<style lang="scss">
	:root {
		--input-color: #484a4e;
		--input-border: #cdd9ed;
		--input-background: #fff;
		--input-placeholder: #b8bdc5;
		--input-border-focus: #fe2727;
		--group-color: var(--input-color);
		--group-border: var(--input-border);
		--group-background: #eef4ff;
		--group-color-focus: #fff;
		--group-border-focus: var(--input-border-focus);
		--group-background-focus: rgba(197, 14, 14, 0.623);
	}

	input {
		display: block;
		width: 100%;
		padding: 8px 16px;
		line-height: 25px;
		font-size: 14px;
		font-weight: 500;
		border-radius: 6px;
		appearance: none;
		-webkit-appearance: none;
		color: var(--input-color);
		border: 1px solid var(--input-border);
		background: var(--input-background);
		transition: border 0.3s ease;
		&::placeholder {
			color: var(--input-placeholder);
		}
		&:focus {
			outline: none;
			border-color: var(--input-border-focus);
		}
	}

	.form-group {
		position: relative;
		display: flex;
		width: 100%;
		& > span,
		input {
			white-space: nowrap;
			display: block;
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
			&:first-child {
				border-radius: 6px 0 0 6px;
			}
			&:last-child {
				border-radius: 0 6px 6px 0;
			}
			&:not(:first-child) {
				margin-left: -1px;
			}
		}
		input {
			position: relative;
			z-index: 1;
			flex: 1 1 auto;
			width: 1%;
			margin-top: 0;
			margin-bottom: 0;
		}
		& > span {
			text-align: center;
			padding: 8px 12px;
			font-size: 14px;
			line-height: 25px;
			color: var(--group-color);
			background: var(--group-background);
			border: 1px solid var(--group-border);
			transition: 0.3s ease, border 0.3s ease, color 0.3s ease;
		}
		&:focus-within {
			& > span {
				color: var(--group-color-focus);
				background: var(--group-background-focus);
				border-color: var(--group-border-focus);
			}
		}
	}

	:gloabl(html) {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	:gloabl(*) {
		box-sizing: inherit;
		&:before,
		&:after {
			box-sizing: inherit;
		}
	}

	.form-group {
		&:not(:last-child) {
			margin-bottom: 12px;
		}
	}
</style>
