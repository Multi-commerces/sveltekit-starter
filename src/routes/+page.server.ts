import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	logout: async ({ cookies }: { cookies: any }) => {
		cookies.delete('AuthorizationToken');
		throw redirect(302, '/login');
	}
};
