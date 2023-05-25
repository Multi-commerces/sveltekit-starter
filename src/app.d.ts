/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}

declare module '/node_modules/svelte-carousel/src/main.js' {
	export * from 'svelte-carousel';
}

declare module '/node_modules/svelte-flex/lib/index.js' {
	export * from 'svelte-flex';
}
