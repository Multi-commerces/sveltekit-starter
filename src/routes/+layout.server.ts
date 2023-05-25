import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
	const { pathname } = url;
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
			icon: 'question_answer',
			label: 'Faq',
			url: '/faq'
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

	return {
		pathname: pathname,
		menus,
		active
	};
}) satisfies LayoutServerLoad;
