import { createUserWithEmailAndPassword } from '$lib/server/users';
import { fail, redirect } from '@sveltejs/kit';
import { setAuthToken } from '../helper';

// /** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies: any, request }) => {
		console.log('## ACTION REGISTER#');
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		console.warn(' |=> Email : ' + email);

		if (!email) {
			return { success: false };
		}

		const result: any = await createUserWithEmailAndPassword(email, password);
		const { error, token } = result;

		if (error) {
			console.log({ error });
			return fail(500, { error });
		}

		if (token) {
			setAuthToken({ cookies: any, token });
		} else {
			console.log('!!!!!!!! AUCUN TOKEN !!!!!!!!');
		}

		throw redirect(303, '/auth/');
	}
};
