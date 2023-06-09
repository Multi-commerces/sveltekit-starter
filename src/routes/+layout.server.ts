import {
	faCogs,
	faEnvelope,
	faFile,
	faFileArchive,
	faHome
} from '@fortawesome/free-solid-svg-icons';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ url, locals }) => {
	const { user }: any = locals;

	const pathname = url.pathname ?? '/';
	const menus = [
		{
			icon: faHome,
			label: 'Accueil',
			url: '/'
		},
		{
			icon: faFile,
			label: 'CV',
			url: '/cv'
		},
		{
			icon: faEnvelope,
			label: 'Contact',
			url: '/contact'
		},
		{
			icon: faFile,
			label: 'wiki',
			url: '/wiki'
		},
		{
			icon: faCogs,
			label: 'CMS',
			url: '/cms'
		}
	];

	// Recherche de l'élément de menu correspondant à la `pathname`
	const active = menus.find((menu) => menu.url === pathname) || menus[0];
	console.log('############ LAYOUT.SERVER.TS ###############');
	console.log(' |-> json => data.user : ' + JSON.stringify({ user }));
	return {
		pathname,
		context: locals,
		user,
		menus,
		active
	};
};
