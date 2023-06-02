export const contactModuleRegistry = {
	default: () => import('./components/Default.svelte'),
	moveInBlue: () => import('./components/MoveInBlue.svelte'),
	moduleA: () => import('./components/ModuleA.svelte'),
	moduleB: () => import('./components/ModuleB.svelte')
};
