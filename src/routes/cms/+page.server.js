import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const { user } = locals;

	const authorized = ['admin'];
	const isAuthorized = user?.roles
		? authorized.some((element) => user.roles.includes(element))
		: false;

	// if (!isAuthorized) {
	// 	throw redirect(302, '/auth/sign_in?referrer=/admin');
	// }

	return {
		message: 'Contenu réservé aux administrateurs du serveur.'
	};
}
