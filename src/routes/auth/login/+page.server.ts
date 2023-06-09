import { fail, redirect } from '@sveltejs/kit';
import { loginUser } from '$lib/server/users';
import { setAuthToken } from '../helper';

/** @type {import('./$types').Actions} */
export const actions = {
	//@ts-ignore
	default: async ({ cookies, request }) => {
		console.log('## AUTHENTICATION ##');
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		console.warn(' |=> Email : ' + email);

		if (email != null && password != null) {
			const response: any = await loginUser(email, password);
			const { error, token } = response;
			if (error) {
				console.warn(' |=> Email : ' + email);
				console.warn(' |=> Authentification failed : ' + error);
				return fail(401, { error });
				// throw redirect(302, '/auth/login');
			}

			console.log('Authentification successful for user ' + email + ' token ' + token);
			setAuthToken({ cookies, token });
			throw redirect(302, '/auth');
		} else {
			console.error(' |=> Email is null or password is null');
		}
	}
};
