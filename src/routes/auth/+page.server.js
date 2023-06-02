import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const user = event.locals?.user;
	if (!user) return { user: null };
	delete user.token;
	return { user };
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('AuthorizationToken');
		throw redirect(302, '/user-auth');
	}
};
