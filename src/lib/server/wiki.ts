import { PrismaClient } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const actions: Actions = {
	create: async ({ cookies: any, request }) => {
		console.log('call create action');
		try {
			const data = await request.formData();
			const createData = {
				title: data.get('title'),
				content: data.get('content')
			};

			if (createData.title && createData.content) {
				await createPage(createData.title, createData.content);
			}
		} catch (error) {
			console.error('Error handling create action:', error);
			throw new Error('An error occurred while processing the request');
		}
	},
	//@ts-ignore
	read: async ({ request }) => {
		console.log('call read action');
		try {
			//@ts-ignore
			const data = await request.formData();
			const title = data.get('title');

			if (title) {
				const page = await getPage(title);
				return {
					status: 200,
					body: page
				};
			}
		} catch (error) {
			console.error('Error handling read action:', error);
			throw new Error('An error occurred while processing the request');
		}
	},
	update: async ({ cookies: any, request }) => {
		console.log('call update action');
		try {
			const data = await request.formData();
			const updateData = {
				title: data.get('title'),
				content: data.get('content')
			};

			if (updateData.title && updateData.content) {
				await updatePage(updateData.title, updateData.content);
			}
		} catch (error) {
			console.error('Error handling update action:', error);
			throw new Error('An error occurred while processing the request');
		}
	},
	delete: async ({ cookies: any, request }) => {
		console.log('call delete action');
		try {
			const data = await request.formData();
			const title = data.get('title');

			if (title) {
				await deletePage(title);
			}
		} catch (error) {
			console.error('Error handling delete action:', error);
			throw new Error('An error occurred while processing the request');
		}
	}
};

/**
 * Create a new page with the given title and content
 * @param {*} title The title of the page
 * @param {*} content The content of the page
 *
 * @returns
 */
export async function createPage(title: string, content: string) {
	console.log(`call createPage with title ${title}`);

	try {
		await prisma.wiki.create({
			data: {
				title,
				content
			}
		});
	} catch (error) {
		console.error('Error creating the page:', error);
		throw new Error('Unable to create the page');
	}
}

export async function getPages() {
	console.log('call getPages');
	return await prisma.wiki.findMany();
}

/**
 * Get the page with the given title
 * @param {*} title The title of the page
 *
 * @returns The page object
 */
export async function getPage(title: string) {
	console.log(`call getPage with title ${title}`);

	try {
		const page = await prisma.wiki.findUnique({
			where: {
				title
			}
		});
		return page;
	} catch (error) {
		console.error(`Error retrieving page with title ${title}`, error);
		throw new Error('Unable to retrieve the page');
	}
}

/**
 * Update the page with the given title and content
 * @param {*} title The title of the page
 * @param {*} content The content of the page
 *
 * @returns
 */
export async function updatePage(title: string, content: string) {
	console.log(`call updatePage with title ${title}`);

	try {
		await prisma.wiki.update({
			where: {
				title
			},
			data: {
				content
			}
		});
	} catch (error) {
		console.error('Error updating the page:', error);
		throw new Error('Unable to update the page');
	}
}

/**
 * Delete the page with the given title
 * @param {*} title The title of the page
 *
 * @returns
 */
export async function deletePage(title: string) {
	console.log(`call deletePage with title ${title}`);

	try {
		await prisma.wiki.delete({
			where: {
				title
			}
		});
	} catch (error) {
		console.error(`Error deleting page with title ${title}`, error);
		throw new Error('Unable to delete the page');
	}
}
