import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		preserve: ['ld+json']
		// ...
	}),

	// https://kit.svelte.dev/docs/configuration
	kit: {
		inlineStyleThreshold: Infinity,
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		},
		alias: {
			$modules: path.resolve('./src/modules'),
			$components: path.resolve('./src/components'),
			'@/components': path.resolve('./src/components')
		}
	},
	// https://kit.svelte.dev/docs/configuration#csrf
	csrf: false,
	// Configuration de la politique de sécurité du contenu .
	// CSP aide à protéger vos utilisateurs contre les attaques de script intersite (XSS),
	// en limitant les endroits à partir desquels les ressources peuvent être chargées.
	csp: {
		directives: {
			'script-src': ['self']
		},
		reportOnly: {
			'script-src': ['self']
		}
	}
};

export default config;
