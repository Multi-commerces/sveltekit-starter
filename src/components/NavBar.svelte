<script lang="ts">
	import Button from '@smui/button';
	import { Label } from '@smui/common';
	import Tab, { Icon } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	export let tabs: any;
	export let active: any;
</script>

<nav>
	<TabBar {tabs} let:tab bind:active>
		<a href={tab.url} data-sveltekit-preload-data="tap">
			<Tab {tab} minWidth aria-selected="true">
				<Button>
					<Icon class="material-icons">{tab.icon}</Icon>
					<Label>{tab.label}</Label>
				</Button>
			</Tab>
		</a>
	</TabBar>
</nav>

<style>
	nav {
		height: 48px;
	}
	nav a {
		text-decoration: none;
	}
</style>
