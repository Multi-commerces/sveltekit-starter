import { PrismaClient } from '@prisma/client';
import generateToken from '$lib/server/generate-jwt';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 12;

/**
 * Demande de création d'un nouveau utilisateur avec email et password
 * @param {*} email The email
 * @param {*} password The password
 * @returns
 */
export async function createUserWithEmailAndPassword(email: string, password: string) {
	console.log('call createUserWithEmailAndPassword');
	try {
		const has = await bcrypt.hash(password, saltRounds);
		console.log('has : ' + has);
		const user = await prisma.user.create({
			data: {
				name: 'undefined',
				email,
				password: has
			}
		});

		const token = await generateToken(user);

		return { token };
	} catch (error) {
		return error;
	}
}

/**
 * Login de utilisateur avec la pair email apssword
 * @param {*} email
 * @param {*} password
 * @returns token
 */
export async function loginUser(email: string, password: string) {
	console.log('Login for user email :' + email);
	try {
		// user @type {object}
		const user: any = await prisma.user.findUnique({
			where: {
				email
			}
		});

		console.log('User : ' + JSON.stringify(user));
		const isEquals = user ? await bcrypt.compare(password, user.password) : false;
		if (!isEquals) {
			return { error: 'login user fail' };
		}

		const token = await generateToken(user);
		console.log('Création du nouveau token ' + JSON.stringify(token));

		return { token };
	} catch (error) {
		return error;
	}
}

export async function searchUsers() {
	console.log('call searchUsers');
	return await prisma.user.findMany();
}

export async function findUserByEmail(email: string) {
	return await prisma.user.findUnique({
		where: {
			email
		}
	});
}
