import { createUserWithEmailAndPassword } from '$lib/server/users.js';
import { fail, redirect } from '@sveltejs/kit';
import { setAuthToken } from '../helper';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const { email, password } = formData;

		console.log('Tentative de création d un nouvel utilisateur : ' + email);
		const { error, token } = await createUserWithEmailAndPassword(email, password);
		if (error) {
			console.log({ error });
			return fail(500, { error });
		}

		if (token) {
			setAuthToken({ cookies, token });
		} else {
			console.log('!!!!!!!! AUCUN TOKEN !!!!!!!!');
		}

		throw redirect(303, '/auth/');

		// return {
		// 	success: true,
		// 	message: 'SignUp successful',
		// 	accessToken: accessToken
		// };
	}
};
