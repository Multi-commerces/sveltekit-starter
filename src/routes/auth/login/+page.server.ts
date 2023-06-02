import { fail, redirect } from '@sveltejs/kit';
import { loginUser } from '../../../lib/server/users';
import { setAuthToken } from '../helper';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		console.log('## AUTHENTICATION ##');
		const formData = Object.fromEntries(await request.formData());
		const { email, password } = formData;

		// Signed in
		// console.log(JSON.stringify(await searchUsers()));
		//@ts-ignore
		const { error, token } = await loginUser(email, password);
		if (error) {
			console.warn(' |=> Email : ' + email);
			console.warn(' |=> Authentification failed : ' + error);
			return fail(401, { error });
			// throw redirect(302, '/auth/login');
		}

		console.log('Authentification successful for user ' + email + ' token ' + token);
		setAuthToken({ cookies, token });
		throw redirect(302, '/auth');
	}
};
