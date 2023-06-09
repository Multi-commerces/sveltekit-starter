export const setAuthToken = ({ cookies, token }: any) => {
	if (!token) {
		console.warn('No token !!!');
		return;
	}

	cookies.set('AuthorizationToken', `Bearer ${token}`, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24,
		path: '/'
	});
};
