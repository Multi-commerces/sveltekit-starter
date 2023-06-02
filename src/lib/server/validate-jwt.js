// Importing required modules and dependencies
import { jwtVerify } from 'jose';
import dotenv from 'dotenv';

dotenv.config();

// Defining the custom claims to be used in the JWT
const issuer = process.env.JWT_ISSUER;
const audience = process.env.JWT_AUDIANCE;
const secretKey = process.env.SECRET_KEY;

const encoder = new TextEncoder();

// Async function to verify JWT
const verifyJwt = async (jwt) => {
	try {
		console.log(jwt);
		const secret = encoder.encode(secretKey);
		const { payload, protectedHeader } = await jwtVerify(jwt, secret, { issuer, audience });
		return { protectedHeader, payload };
	} catch (error) {
		console.error(`Something went wrong: ${error}`);
	}
};

export default verifyJwt;
