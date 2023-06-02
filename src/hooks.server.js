import db from '../prisma/db';
import verifyJwt from './lib/server/validate-jwt';

const unProtectedRoutes = ['/', '/login', '/auth/sign_in', '/auth/sign_up'];

// custom redirect from joy of code `https://github.com/JoysOfCode/sveltekit-auth-cookies/blob/migration/src/hooks.ts`
function redirect(location, body) {
	return new Response(body, {
		status: 303,
		headers: { location }
	});
}

function superLog(event) {
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

async function getUserByIdFromToken(token) {
	console.log('calling getUserByIdFromToken');
	try {
		const decodedToken = await verifyJwt(token);
		console.log(' |-> decodedToken ' + decodedToken);
		const userId = decodedToken.payload.id;
		console.log(' |-> userId ' + userId);

		const user = await db.user.findUnique({
			where: {
				id: userId
			},
			select: {
				id: true,
				email: true
			}
		});

		return user;
	} catch (error) {
		console.error(error);
	}
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	superLog(event);

	// pass to `event.locals` as before
	event.locals.locale = 'fr';

	const authCookie = event.cookies.get('AuthorizationToken');
	if (authCookie) {
		console.log(' |-> authCookie ' + authCookie);

		const token = authCookie.split(' ')[1];
		const user = await getUserByIdFromToken(token);
		if (user) {
			event.locals.user = user;
		}
	}

	// Replace the `lang` attribute
	return await resolve(event, {
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

	return {
		message: 'Whoops!',
		code: error?.code ?? 'UNKNOWN'
	};
}
