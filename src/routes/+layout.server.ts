import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ url, locals }) => {
	const { user }: any = locals;

	const pathname = url.pathname ?? '/';
	const menus = [
		{
			icon: 'home',
			label: 'Accueil',
			url: '/'
		},
		{
			icon: 'science',
			label: 'Mon CV',
			url: '/cv'
		},
		{
			icon: 'contact_support',
			label: 'Contact',
			url: '/contact'
		},
		{
			icon: 'sdf',
			label: 'CMS config.',
			url: '/cms'
		}
	];

	// Recherche de l'élément de menu correspondant à la `pathname`
	const active = menus.find((menu) => menu.url === pathname) || menus[0];
	console.log('############ LAYOUT.SERVER.TS ###############');
	console.log(
		JSON.stringify({
			pathname,
			user,
			active
		})
	);
	// console.log('############# END LAYOUT.SERVER.TS ################');
	return {
		pathname,
		context: locals,
		user,
		menus,
		active
	};
};
