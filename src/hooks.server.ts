import db from './lib/server/db';
import verifyJwt from './lib/server/validate-jwt';

const unProtectedRoutes = ['/', '/login', '/auth/sign_in', '/auth/sign_up'];

function superLog(event: any) {
	let route = event.route;
	let start = performance.now();
	let end = performance.now();

	let responseTime = end - start;

	if (responseTime > 2000) {
		console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
	}

	if (responseTime < 1000) {
		console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`);
	}
}

/**
 *
 * @param token
 * @returns
 */
async function getUserByIdFromToken(token: any): Promise<any> {
	console.info('calling getUserByIdFromToken');
	try {
		const decodedToken = await verifyJwt(token);
		if (!decodedToken) {
			console.warn(' |-> token invalided');
			return null;
		}

		const userId: any = decodedToken.payload.id ?? 0;
		const user = await db.user.findUnique({
			where: {
				id: userId
			},
			select: {
				id: true,
				email: true
			}
		});

		console.debug(' |-> decodedToken ' + decodedToken);
		console.debug(' |-> user.id (bdd) ' + user?.id);

		return user;
	} catch (error) {
		console.error(error);
	}
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	superLog(event);

	// pass to `event.locals` as before
	//@ts-ignore
	event.locals.locale = 'fr';

	const authCookie = event.cookies.get('AuthorizationToken');
	if (authCookie) {
		const token = authCookie.split(' ')[1];
		const user = await getUserByIdFromToken(token);
		if (user) {
			//@ts-ignore
			event.locals.user = user;
		}
	}

	// Replace the `lang` attribute
	return await resolve(event, {
		//@ts-ignore
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.locale)
	});
}

import * as Sentry from '@sentry/node';
Sentry.init({
	/*...*/
});

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {
	// you can capture the `error` and `event` from the server
	console.log(error);

	// example integration with https://sentry.io/
	Sentry.captureException(error, { extra: { event } });

	//@ts-ignore
	return {
		message: 'Whoops!',
		//@ts-ignore
		code: error?.code ?? 'UNKNOWN'
	};
}
