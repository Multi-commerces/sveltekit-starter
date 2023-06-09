import { getPages } from '../../lib/server/wiki';
import type { LayoutServerLoad } from '../$types';
export const load: LayoutServerLoad = async ({ url, locals }) => {
	const pages: any = getPages();
	return { pages };
};
