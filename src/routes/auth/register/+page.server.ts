import { createUserWithEmailAndPassword } from '../../../lib/server/users';
import { fail, redirect } from '@sveltejs/kit';
import { setAuthToken } from '../helper';

// /** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const { email, password } = formData;

		console.log('Tentative de création d un nouvel utilisateur : ' + email);
		const result: { error?: any; token?: any } = await createUserWithEmailAndPassword(
			email,
			password
		);
		const { error, token } = result;

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
	}
};
