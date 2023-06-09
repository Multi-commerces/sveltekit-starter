import { getPage, updatePage } from '../../../lib/server/wiki';
import type { LayoutServerLoad } from '../../$types';
import { redirect } from '@sveltejs/kit';
export const load: LayoutServerLoad = async ({ params }) => {
	const title = params.title;
	const page: any = getPage(title ?? '');

	return { page };
};

// /** @type {import('./$types').Actions} */
export const actions = {
	send: async ({ cookies: any, request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');

		const result: any = updatePage(title, content);

		throw redirect(303, `/wiki/${title}`);
	}
};
