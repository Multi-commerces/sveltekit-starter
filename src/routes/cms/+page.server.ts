import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	const { user }: any = locals;

	const authorized = ['admin'];
	const isAuthorized = user?.roles
		? authorized.some((element) => user.roles.includes(element))
		: false;

	// if (!isAuthorized) {
	// 	throw error(401, 'Contenu réservé aux administrateurs du serveur');
	// }
}
