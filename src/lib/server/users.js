// ts-node script.ts
import { PrismaClient } from '@prisma/client';
import generateToken from '$lib/server/generate-jwt';
import verifyJwt from '$lib/server/validate-jwt';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 12;

export async function createUserWithEmailAndPassword(email, password) {
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

export async function loginUser(email, password) {
	console.log('Login for user email :' + email);
	try {
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		});

		if (!user) {
			console.log(' |=> User not found (BDD)');
			return { error: 'User not found' };
		}
		console.log('User : ' + JSON.stringify(user));

		const isEquals = await bcrypt.compare(password, user.password);
		if (!isEquals) {
			return { error: 'Invalid password' };
		}

		const token = await generateToken(user);
		console.log('Création du nouveau token ' + JSON.stringify(token));

		return { token };
	} catch (error) {
		return error;
	}
}

export async function searchUsers() {
	return await prisma.user.findMany();
}

export async function findUserByEmail(email) {
	return await prisma.user.findUnique({
		where: {
			email
		}
	});
}
